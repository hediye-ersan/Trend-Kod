import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    increaseProductQuantity,
    decreaseProductQuantity,
    removeFromCart,
} from "../actions/shopCardAction";

const ShoppingCartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.shopCard.cartItems);
    const [selectedItems, setSelectedItems] = useState([]);
    const history = useHistory();
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        setSelectedItems(cartItems.map((item) => item.id));
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
            // Kullanıcı giriş yapmamışsa login sayfasına yönlendir
            history.push('/login');
        } else {
            console.log("Sipariş Oluşturulan Ürünler:", orderedItems);
            alert("Sipariş oluşturuldu!");
        }
    };

    return (
        <div className="p-4">
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
            <div className="mt-8">

                <h2 className="text-xl font-semibold text-right mt-4">
                    Seçili Ürünlerin Toplamı: {totalSelectedPrice.toFixed(2)} TL
                </h2>
            </div>
            <div className="border-t mt-4 pt-4">
                <h2 className="text-lg font-bold">Alışveriş Özeti</h2>
                <p>Ürünlerin Toplamı: {totalSelectedPrice.toFixed(2)} TL</p>
                <p>Kargo Ücreti: 30 TL</p>
                <p>İndirim: {totalSelectedPrice >= 150 ? '-30 TL (150 TL ve Üzerinde Kargo Ücretsiz)' : '0 TL'}</p>
                <p className="font-bold">Toplam: {(totalSelectedPrice >= 150 ? totalSelectedPrice : totalSelectedPrice + 30).toFixed(2)} TL</p>
                <button
                    onClick={handleOrder}
                    disabled={selectedItems.length === 0}
                    className={`px-4 py-2 rounded ${selectedItems.length > 0
                            ? "bg-blue-500 text-white hover:bg-blue-600"
                            : "bg-gray-300 text-gray-600 cursor-not-allowed"
                        }`}
                >
                    Sepeti Onayla
                </button>
            </div>
        </div>
    );
};

export default ShoppingCartPage;
