import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    increaseProductQuantity,
    decreaseProductQuantity,
    removeFromCart,
    addToCart
} from "../actions/shopCardAction";
import {
    fetchCreditCards,
    addUserCard,
    updateUserCard,
    deleteUserCard,
} from '../actions/paymentActions';
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
    const payment = useSelector((state) => state.payment.creditCards);
    const [selectedCard, setSelectedCard] = useState(null);
    const [showCardForm, setShowCardForm] = useState(false);
    const [cardFormData, setCardFormData] = useState({
        card_no: "",
        expire_month: "",
        expire_year: "",
        name_on_card: "",
    });

    // Kullanıcı kartlarını yükle
    useEffect(() => {
        dispatch(fetchCreditCards());
    }, [dispatch]);

    const handleCardFormChange = (e) => {
        setCardFormData({
            ...cardFormData,
            [e.target.name]: e.target.value,
        });
    };

    // Kullanıcı kartlarıyla ilgili işlemler

    const handleAddCard = async () => {
        try {
            await dispatch(addUserCard(cardFormData));
            setShowCardForm(false);
            setFormData({ card_no: "", expire_month: "", expire_year: "", name_on_card: "" });
            await dispatch(fetchCreditCards());
        } catch (error) {
            alert("Kart eklenirken hata: " + error.message);
        }
    };

    const handleUpdateCard = async (updatedCardData) => {
        await dispatch(updateUserCard(updatedCardData));
        await dispatch(fetchCreditCards());
    };

    const handleDeleteCard = async (cardId) => {
        await dispatch(deleteUserCard(cardId));
        await dispatch(fetchCreditCards());
    };

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
        setSelectedItems((prevSelected) =>
            prevSelected.includes(itemId)
                ? prevSelected.filter((id) => id !== itemId)
                : [...prevSelected, itemId]
        );
    };

    const handleOrder = () => {
        const orderedItems = cartItems.filter((item) => selectedItems.includes(item.id));
        if (!user) {
            alert("Lütfen sipariş vermek için giriş yapın.");
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
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Alışveriş Sepeti</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Shopping Cart */}
          <div className="lg:w-2/3">
            <div className="space-y-6">
              {Object.entries(groupedItems).map(([seller, items]) => (
                <div key={seller} className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    {seller}{" "}
                    <span className="text-green-600 font-bold">
                      {items[0].rating && `(${items[0].rating})`}
                    </span>
                  </h2>
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 items-start border-b border-gray-200 pb-4 mb-4 last:border-b-0 last:pb-0"
                    >
                      <input
                        type="checkbox"
                        className="mt-3 h-5 w-5 text-blue-600"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleCheckboxChange(item.id)}
                      />
                      <img
                        src={item.images[0]?.url}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{item.shipping}</p>
                        <p className="text-xl font-bold mt-2 text-gray-900">{item.price} TL</p>
                        <div className="mt-3 flex items-center gap-2">
                          <button 
                            onClick={() => dispatch(decreaseProductQuantity(item.id))} 
                            className="text-red-500 hover:text-red-600 transition-colors duration-200"
                          >
                            -
                          </button>
                          <span className="px-4 py-1 border rounded text-gray-700">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => dispatch(increaseProductQuantity(item.id))} 
                            className="text-green-500 hover:text-green-600 transition-colors duration-200"
                          >
                            +
                          </button>
                          <button 
                            onClick={() => dispatch(removeFromCart(item.id))} 
                            className="ml-4 text-red-500 hover:text-red-600 transition-colors duration-200"
                          >
                            Kaldır
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
  
          {/* Right Column: Order Summary and Forms */}
          <div className="lg:w-1/3 space-y-8">
            {/* Order Summary */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Alışveriş Özeti</h2>
              <div className="space-y-2 text-gray-700">
                <p>Ürünlerin Toplamı: <span className="font-semibold">{totalSelectedPrice.toFixed(2)} TL</span></p>
                <p>Kargo Ücreti: <span className="font-semibold">30 TL</span></p>
                <p>İndirim: <span className="font-semibold text-green-600">{totalSelectedPrice >= 150 ? '-30 TL (150 TL ve Üzerinde Kargo Ücretsiz)' : '0 TL'}</span></p>
                <p className="text-xl font-bold mt-4 text-gray-900">
                  Toplam: {(totalSelectedPrice >= 150 ? totalSelectedPrice : totalSelectedPrice + 30).toFixed(2)} TL
                </p>
              </div>
              <button
                onClick={handleOrder}
                disabled={selectedItems.length === 0}
                className={`mt-6 px-6 py-3 w-full rounded-md text-lg font-semibold transition-colors duration-200 ${
                  selectedItems.length > 0
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
                }`}
              >
                Sepeti Onayla
              </button>
            </div>
  
            {/* Delivery Address */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Teslimat Adresi</h2>
              {addresses && addresses.length > 0 ? (
                <ul className="space-y-4">
                  {addresses.map((address) => (
                    <li key={address.id} className="flex items-center justify-between">
                      <div className="flex items-start">
                        <input
                          type="radio"
                          name="selectedAddress"
                          value={address.id}
                          onChange={() => setSelectedAddress(address.id)}
                          className="mt-1 mr-3"
                        />
                        <span className="text-gray-700">{`${address.title}, ${address.city}, ${address.district}, ${address.neighborhood}`}</span>
                      </div>
                      <div>
                        <button
                          onClick={() => handleDeleteAddress(address.id)}
                          className="text-red-500 hover:text-red-600 mr-2 transition-colors duration-200"
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
                          className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
                        >
                          Güncelle
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">Kayıtlı adresiniz bulunmamaktadır.</p>
              )}
  
              <button
                onClick={() => setShowAddressForm((prev) => !prev)}
                className="mt-6 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200"
              >
                + Yeni Adres Ekle
              </button>
  
              {showAddressForm && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    selectedAddress ? handleUpdateAddress(selectedAddress) : handleAddressSubmit();
                  }}
                  className="mt-6 space-y-4"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Adres Bilgileri</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleFormChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                      placeholder="Adres Başlığı"
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                      placeholder="Ad"
                    />
                    <input
                      type="text"
                      name="surname"
                      value={formData.surname}
                      onChange={handleFormChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                      placeholder="Soyad"
                    />
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                      placeholder="Telefon"
                    />
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleFormChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                    >
                      <option value="">Şehir Seçin</option>
                      <option value="Istanbul">Istanbul</option>
                      <option value="Ankara">Ankara</option>
                      <option value="Izmir">Izmir</option>
                    </select>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleFormChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                      placeholder="İlçe"
                    />
                    <input
                      type="text"
                      name="neighborhood"
                      value={formData.neighborhood}
                      onChange={handleFormChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                      placeholder="Mahalle"
                    />
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleFormChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                      placeholder="Adres Detayı"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition-colors duration-200"
                    >
                      {selectedAddress ? "Güncelle" : "Kaydet"}
                    </button>
                  </div>
                </form>
              )}
            </div>
  
            {/* Payment Information */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Kart Bilgileri</h2>
              {payment && payment.length > 0 ? (
                <ul className="space-y-4">
                  {payment.map((card) => (
                    <li key={card.id} className="flex items-center justify-between">
                      <div className="flex items-start">
                        <input
                          type="radio"
                          name="selectedCard"
                          value={card.id}
                          onChange={() => setSelectedCard(card.id)}
                          className="mt-1 mr-3"
                        />
                        <span className="text-gray-700">{`${card.card_no.replace(/(\d{4})(?=\d)/g, "$1 ")}`}</span>
                      </div>
                      <div>
                        <button
                          onClick={() => handleDeleteCard(card.id)}
                          className="text-red-500 hover:text-red-600 mr-2 transition-colors duration-200"
                        >
                          Sil
                        </button>
                        <button
                          onClick={() => {
                            setCardFormData({
                              card_no: card.card_no,
                              expire_month: card.expire_month,
                              expire_year: card.expire_year,
                              name_on_card: card.name_on_card,
                            });
                            setShowCardForm(true);
                          }}
                          className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
                        >
                          Güncelle
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">Kayıtlı kartınız bulunmamaktadır.</p>
              )}
  
              <button
                onClick={() => setShowCardForm((prev) => !prev)}
                className="mt-6 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200"
              >
                + Yeni Kart Ekle
              </button>
  
              {showCardForm && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    selectedCard ? handleUpdateCard() : handleAddCard();
                  }}
                  className="mt-6 space-y-4"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Kart Bilgileri</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="card_no"
                      value={cardFormData.card_no}
                      onChange={handleCardFormChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                      placeholder="1234 1234 1234 1234"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="number"
                        name="expire_month"
                        value={cardFormData.expire_month}
                        onChange={handleCardFormChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                        placeholder="Son Kullanma Ay (MM)"
                      />
                      <input
                        type="number"
                        name="expire_year"
                        value={cardFormData.expire_year}
                        onChange={handleCardFormChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                        placeholder="Son Kullanma Yıl (YYYY)"
                      />
                    </div>
                    <input
                      type="text"
                      name="name_on_card"
                      value={cardFormData.name_on_card}
                      onChange={handleCardFormChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                      placeholder="Kart Üzerindeki İsim"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition-colors duration-200"
                    >
                      {selectedCard ? "Güncelle" : "Kaydet"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default ShoppingCartPage;
