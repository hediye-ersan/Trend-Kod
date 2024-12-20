'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, ShoppingCart, Eye } from 'lucide-react';

export default function ProductCard({
  images = [
    '/placeholder.svg?height=400&width=400',
    '/placeholder.svg?height=100&width=100',
    '/placeholder.svg?height=100&width=100',
  ],
  title = 'Floating Phone',
  rating = 4.5,
  reviews = 10,
  price = 1139.33,
  availability = 'In Stock',
  description = 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
  colors = ['#29B6F6', '#66BB6A', '#FF7043', '#26365F'],
}) {
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
          className={`text-2xl ${
            i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      ));
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg md:grid md:grid-cols-2 md:gap-8">
      {/* Image Gallery */}
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img
            src={images[currentImage]}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={previousImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Thumbnails */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-16 h-16 rounded-md overflow-hidden border-2 ${
                currentImage === index ? 'border-blue-500' : 'border-transparent'
              }`}
            >
              <img
                src={images[index]}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <h2 className="text-3xl font-semibold">{title}</h2>
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">{renderStars(rating)}</div>
          <span className="text-gray-600">{reviews} Reviews</span>
        </div>

        {/* Price and Availability */}
        <div className="space-y-1">
          <div className="text-4xl font-bold">${price.toFixed(2)}</div>
          <div className="text-sm">
            Availability:{' '}
            <span className="text-green-500 font-medium">{availability}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600">{description}</p>

        {/* Color Options */}
        <div className="flex gap-2">
          {colors.map((color, index) => (
            <button
              key={index}
              className="w-8 h-8 rounded-full border-2 border-gray-200"
              style={{ backgroundColor: color }}
              aria-label={`Select color ${index + 1}`}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
            Select Options
          </button>
          <button className="p-2 border border-gray-200 rounded-md hover:bg-gray-50">
            <Heart className="w-6 h-6" />
          </button>
          <button className="p-2 border border-gray-200 rounded-md hover:bg-gray-50">
            <ShoppingCart className="w-6 h-6" />
          </button>
          <button className="p-2 border border-gray-200 rounded-md hover:bg-gray-50">
            <Eye className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
