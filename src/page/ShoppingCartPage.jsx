import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    increaseProductQuantity,
    decreaseProductQuantity,
    removeFromCart,
    addToCart
} from "../actions/shopCardAction";

import { fetchUserAddresses, addUserAddress, updateUserAddress, deleteUserAddress } from "../actions/userAction";

const ShoppingCartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.shopCard.cartItems);
    const [selectedItems, setSelectedItems] = useState([]);
    const history = useHistory();
    const user = useSelector((state) => state.user.user);
    const addresses = useSelector((state) => state.user.addressList);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        name: "",
        surname: "",
        phone: "",
        city: "",
        district: "",
        neighborhood: "",
        address: "",
    });


    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            const parsedItems = JSON.parse(storedCartItems);
            parsedItems.forEach(item => dispatch(addToCart(item)));
        }
    }, [dispatch]);

    useEffect(() => {
        setSelectedItems(cartItems.map((item) => item.id));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const groupedItems = cartItems.reduce((groups, item) => {
        const seller = item.seller || "Diğer";
        if (!groups[seller]) groups[seller] = [];
        groups[seller].push(item);
        return groups;
    }, {});

    const totalSelectedPrice = selectedItems.reduce((acc, itemId) => {
        const item = cartItems.find((item) => item.id === itemId);
        return acc + (item ? item.price * item.quantity : 0);
    }, 0);

    const handleCheckboxChange = (itemId) => {
        if (selectedItems.includes(itemId)) {
            setSelectedItems(selectedItems.filter((id) => id !== itemId));
        } else {
            setSelectedItems([...selectedItems, itemId]);
        }
    };

    const handleOrder = () => {
        const orderedItems = cartItems.filter((item) => selectedItems.includes(item.id));
        if (!user) {
            history.push('/login');
        } else {
            console.log("Sipariş Oluşturulan Ürünler:", orderedItems);
            alert("Sipariş oluşturuldu!");
        }
    };

    // Kullanıcı adreslerini yükleme
    useEffect(() => {
        dispatch(fetchUserAddresses());
    }, [dispatch]);

    // Form input değişikliği yönetimi
    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Yeni adres ekleme işlemi
    const handleAddressSubmit = async () => {
        try {
            await dispatch(addUserAddress(formData));
            alert("Adres başarıyla eklendi!");
            setShowAddressForm(false);
            setFormData({ title: "", name: "", phone: "", city: "", district: "", neighborhood: "" });
        } catch (error) {
            console.error("Adres eklenirken hata:", error);
        }
    };

    // Adres güncelleme işlemi
    const handleUpdateAddress = async (updatedAddress) => {
        await dispatch(updateUserAddress(updatedAddress.id, updatedAddress));
        await dispatch(fetchUserAddresses()); // Adres listesini güncelle
    };
    // Adres silme işlemi
    const handleDeleteAddress = async (addressId) => {
        if (window.confirm("Bu adresi silmek istediğinizden emin misiniz?")) {
            await dispatch(deleteUserAddress(addressId));
            await dispatch(fetchUserAddresses()); // Adres listesini güncelle
        }
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 p-4">
            {/* Sol Sütun: Alışveriş Sepeti */}
            <div className="flex-1">
                <h1 className="text-2xl font-bold mb-6">Alışveriş Sepeti</h1>
                <div className="space-y-6">
                    {Object.entries(groupedItems).map(([seller, items]) => (
                        <div key={seller} className="border p-4 rounded-lg">
                            <h2 className="text-lg font-semibold mb-4">
                                {seller}{" "}
                                <span className="text-green-600 font-bold">
                                    {items[0].rating && `(${items[0].rating})`}
                                </span>
                            </h2>
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex gap-4 items-start border-b pb-4 mb-4 last:border-b-0 last:pb-0"
                                >
                                    <input
                                        type="checkbox"
                                        className="mt-3"
                                        checked={selectedItems.includes(item.id)}
                                        onChange={() => handleCheckboxChange(item.id)}
                                    />
                                    <img
                                        src={item.images[0]?.url}
                                        alt={item.name}
                                        className="w-24 h-24 object-cover rounded-md"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-md font-medium">{item.name}</h3>
                                        <p className="text-sm text-gray-500 mt-1">{item.shipping}</p>
                                        <p className="text-lg font-bold mt-2">{item.price} TL</p>
                                        <div className="mt-3 flex gap-2">
                                            <button onClick={() => dispatch(decreaseProductQuantity(item.id))} className="text-red-500 hover:text-red-600">Azalt</button>
                                            <span className="px-4 py-1 border rounded">
                                                {item.quantity}
                                            </span>
                                            <button onClick={() => dispatch(increaseProductQuantity(item.id))} className="text-green-500 hover:text-green-600">Artır</button>
                                            <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-500 hover:text-red-600">Kaldır</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Sağ Sütun: Alışveriş Özeti */}
            <div className="w-full md:w-1/3">
                <div className="border p-4 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Alışveriş Özeti</h2>
                    <p>Ürünlerin Toplamı: {totalSelectedPrice.toFixed(2)} TL</p>
                    <p>Kargo Ücreti: 30 TL</p>
                    <p>İndirim: {totalSelectedPrice >= 150 ? '-30 TL (150 TL ve Üzerinde Kargo Ücretsiz)' : '0 TL'}</p>
                    <p className="font-bold">
                        Toplam: {(totalSelectedPrice >= 150 ? totalSelectedPrice : totalSelectedPrice + 30).toFixed(2)} TL
                    </p>
                    <button
                        onClick={handleOrder}
                        disabled={selectedItems.length === 0}
                        className={`mt-4 px-4 py-2 w-full rounded ${selectedItems.length > 0
                            ? "bg-blue-500 text-white hover:bg-blue-600"
                            : "bg-gray-300 text-gray-600 cursor-not-allowed"
                            }`}
                    >
                        Sepeti Onayla
                    </button>
                </div>
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-2">Teslimat Adresi</h2>
                    {addresses && addresses.length > 0 ? (
                        <ul className="list-disc pl-5">
                            {addresses.map((address) => (
                                <li key={address.id} className="mb-2">
                                    <input
                                        type="radio"
                                        name="selectedAddress"
                                        value={address.id}
                                        onChange={() => setSelectedAddress(address.id)}
                                        className="mr-2"
                                    />
                                    {`${address.title}, ${address.city}, ${address.district}, ${address.neighborhood}`}
                                    <button
                                        onClick={() => handleDeleteAddress(address.id)}
                                        className="ml-4 text-red-500 hover:underline"
                                    >
                                        Sil
                                    </button>
                                    <button
                                        onClick={() => {
                                            setFormData({
                                                title: address.title,
                                                name: address.name,
                                                phone: address.phone,
                                                city: address.city,
                                                district: address.district,
                                                neighborhood: address.neighborhood,
                                            });
                                            setShowAddressForm(true);
                                        }}
                                        className="ml-4 text-blue-500 hover:underline"
                                    >
                                        Güncelle
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Kayıtlı adresiniz bulunmamaktadır.</p>
                    )}

                    <button
                        onClick={() => setShowAddressForm((prev) => !prev)}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        + Yeni Adres Ekle
                    </button>

                    {showAddressForm && (
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                selectedAddress ? handleUpdateAddress(selectedAddress) : handleAddressSubmit();
                            }}
                            className="mt-4 border p-4 rounded-lg bg-white shadow-md"
                        >
                            <h2 className="text-lg font-semibold text-gray-700 mb-4">Adres Bilgileri</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">Adres Başlığı:</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleFormChange}
                                        className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-orange-500"
                                        placeholder="Ev Adresi"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">Ad:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleFormChange}
                                        className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-orange-500"
                                        placeholder="Alişan"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">Soyad:</label>
                                    <input
                                        type="text"
                                        name="surname"
                                        value={formData.surname}
                                        onChange={handleFormChange}
                                        className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-orange-500"
                                        placeholder="Karababa"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">Telefon:</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleFormChange}
                                        className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-orange-500"
                                        placeholder="0555 555 55 55"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">Şehir:</label>
                                    <select
                                        name="city"
                                        value={formData.city}
                                        onChange={handleFormChange}
                                        className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-orange-500"
                                    >
                                        <option value="Istanbul">Istanbul</option>
                                        <option value="Ankara">Ankara</option>
                                        <option value="Izmir">Izmir</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">İlçe:</label>
                                    <input
                                        type="text"
                                        name="district"
                                        value={formData.district}
                                        onChange={handleFormChange}
                                        className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-orange-500"
                                        placeholder="Esenler"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">Mahalle:</label>
                                    <input
                                        type="text"
                                        name="neighborhood"
                                        value={formData.neighborhood}
                                        onChange={handleFormChange}
                                        className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-orange-500"
                                        placeholder="Yeni Mahalle"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">Adres Detay:</label>
                                    <textarea
                                        name="address"
                                        value={formData.address}
                                        onChange={handleFormChange}
                                        className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-orange-500"
                                        placeholder="Apartman No, Daire No, Kat No"
                                        rows="3"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-end">
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-orange-500 text-white rounded-md shadow hover:bg-orange-600"
                                >
                                    {selectedAddress ? "Güncelle" : "Kaydet"}
                                </button>
                            </div>
                        </form>
                    )}

                </div>
            </div>
        </div>
    );
};

export default ShoppingCartPage;
