'use client';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, ShoppingCart, Eye } from 'lucide-react';
import { addToCart } from '../actions/shopCardAction'; // cartActions

export default function ProductCard({
  id,
  images,
  name,
  rating,
  price,
  stock,
  availability,
  description,
  colors = ['#29B6F6', '#66BB6A', '#FF7043', '#26365F'],
}) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const product = {
      id,
      name,
      price,
      images,
      stock,
    };
    dispatch(addToCart(product));
  };

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span
          key={i}
          className={`text-3xl transition-all duration-300 ease-in-out 
            ${i < Math.floor(rating) 
              ? 'text-yellow-400 transform scale-110' 
              : 'text-gray-300 hover:text-yellow-400 cursor-pointer'
            }`}
          style={{
            transition: "transform 0.3s ease, color 0.3s ease",
          }}
          aria-label={`Rating star ${i + 1}`}
        >
          ★
        </span>
      ));
  };
  

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden shadow-xl md:grid md:grid-cols-2 md:gap-12 p-6">
  {/* Image Gallery */}
  <div className="relative">
    <div className="aspect-square overflow-hidden rounded-xl shadow-md">
      <img
        src={images[currentImage].url}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
      />
    </div>

    {/* Navigation Arrows */}
    <button
      onClick={previousImage}
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-3 hover:bg-white shadow-lg"
      aria-label="Previous image"
    >
      <ChevronLeft className="w-6 h-6 text-gray-700 hover:text-blue-500 transition-all" />
    </button>
    <button
      onClick={nextImage}
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-3 hover:bg-white shadow-lg"
      aria-label="Next image"
    >
      <ChevronRight className="w-6 h-6 text-gray-700 hover:text-blue-500 transition-all" />
    </button>

    {/* Thumbnails */}
    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentImage(index)}
          className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${currentImage === index ? 'border-blue-500' : 'border-transparent'} hover:scale-105`}
        >
          <img
            src={images[index].url}
            alt={`Thumbnail ${index + 1}`}
            className="w-full h-full object-cover rounded-md"
          />
        </button>
      ))}
    </div>
  </div>

  {/* Product Info */}
  <div className="flex flex-col justify-between p-6 space-y-6 md:space-y-8">
    <h2 className="text-4xl font-semibold">{name}</h2>

    {/* Rating */}
    <div className="flex items-center gap-3 text-secondText">
      <div className="flex">{renderStars(rating)}</div>
      <span>{rating} Reviews</span>
    </div>

    {/* Price and Availability */}
    <div className="space-y-2">
      <div className="text-3xl font-bold ">${price.toFixed(2)}</div>
      <div className="text-sm text-gray-500">
        Availability: <span className="text-green-600">{stock} pcs</span>
      </div>
    </div>

    {/* Description */}
    <p className="text-gray-700">{description}</p>

    {/* Color Options */}
    <div className="flex gap-3">
      {colors.map((color, index) => (
        <button
          key={index}
          className="w-10 h-10 rounded-full border-2 border-gray-300 transition-all transform hover:scale-110"
          style={{ backgroundColor: color }}
          aria-label={`Select color ${index + 1}`}
        />
      ))}
    </div>

    {/* Action Buttons */}
    <div className="flex gap-6 mt-4">
      <button className="flex-1 bg-blueText text-white py-3 px-6 rounded-lg shadow-lg hover:bg-custom-gradient transition-colors">
        Select Options
      </button>
      <div className="flex gap-4">
        <button className="p-3 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
          <Heart className="w-6 h-6 text-gray-600 hover:text-red-500" />
        </button>
        <button
          onClick={handleAddToCart}
          className="p-3 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-all"
        >
          <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-green-500" />
        </button>
        <button className="p-3 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
          <Eye className="w-6 h-6 text-gray-600 hover:text-blueText" />
        </button>
      </div>
    </div>
  </div>
</div>

  );
}
