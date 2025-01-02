import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart} from '../actions/shopCardAction';
import { Link } from 'react-router-dom';

const ShoppingCartDropdown = () => {
  const cartItems = useSelector((state) => state.shopCard.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="absolute top-12 right-0 w-80 bg-white shadow-lg rounded-lg">
      <h3 className="text-lg font-semibold px-4 py-2 border-b">Sepetim ({cartItems.length} Ürün)</h3>
      <ul className="divide-y">
        {cartItems.map((item) => (
          <li key={item.id} className="flex items-center gap-4 p-4">
            <img src={item.images[0].url} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
            <div className="flex-1">
              <h4 className="text-sm font-semibold">{item.name}</h4>
              <p className="text-gray-600">Adet: {item.quantity}</p>
              <p className="text-gray-800 font-bold">{item.price} TL</p>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-500 hover:text-red-600"
            >
              Kaldır
            </button>
          </li>
        ))}
      </ul>
      <div className="p-4 border-t">
        <p className="text-lg font-semibold">Toplam: {totalPrice.toFixed(2)} TL</p>
      </div>
      <div className="flex justify-between items-center p-4">
        <Link to="/shopping-cart" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Sepete Git</Link>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">Siparişi Tamamla</button>
      </div>
    </div>
  );
};

export default ShoppingCartDropdown;
