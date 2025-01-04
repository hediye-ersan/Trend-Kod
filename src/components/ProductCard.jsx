import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, description, price, discountedPrice, image }) => {
  return (
    <section className="p-4 pt-0">
      <div className="flex flex-col flex-wrap bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
        <Link to={`/products/${id}`} className="group">
          {/* Ürün Görseli */}
          <div className="relative">
            <img
              src={image}
              alt="ProductCard"
              className="w-full h-56 object-cover group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="absolute top-2 left-2 bg-blueText text-white px-2 py-1 text-sm rounded-lg shadow">
              New
            </div>
          </div>

          {/* Ürün Bilgileri */}
          <div className="p-4 text-center">
            <h5 className="text-lg font-bold text-gray-900 group-hover:text-blueText transition-colors duration-300">
              {name}
            </h5>
            <p className="text-sm text-gray-600 mt-1">{description}</p>

            {/* Fiyat Bilgisi */}
            <div className="flex items-center justify-center space-x-2 mt-3">
              <span className="text-gray-400 line-through text-base">
                ${price}
              </span>
              <span className="text-lg font-bold text-blueText">
                ${discountedPrice}
              </span>
            </div>

            {/* Renk Seçenekleri */}
            <div className="flex gap-2 justify-center mt-3">
              {["bg-blue-500", "bg-orange-500", "bg-navy-900"].map((color, index) => (
                <button
                  key={index}
                  className={`w-5 h-5 rounded-full ${color} border-2 border-white shadow`}
                  aria-label={`Select color ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ProductCard;
