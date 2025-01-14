import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BestsellerProducts() {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    // API'den veri çekme
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://workintech-fe-ecommerce.onrender.com/products"); // API URL'nizi buraya yazın
        const allProducts = response.data.products;

        // Rating'e göre sıralama ve en iyi 4 ürünü alma
        const topProducts = allProducts
          .sort((a, b) => b.rating - a.rating) // Büyükten küçüğe sıralama
          .slice(0, 4); // İlk 4 ürünü alma

        setProducts(topProducts);
      } catch (error) {
        console.error("Ürünler alınırken hata oluştu:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-6">BESTSELLER PRODUCTS</h2>
      <div className="space-y-6">
      
        {products.map((product) => (
          
          <div
            key={product.id}
            className="group bg-white rounded-lg overflow-hidden transition-shadow hover:shadow-md"
          >
            <Link to={`/products/${product.id}`} className="group">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={product.images[0]?.url}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-green-600 font-medium">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-gray-500">Rating: {product.rating}</p>
            </div>
            </Link>
          </div>
        ))}
        
      </div>
    </div>
  );
}

