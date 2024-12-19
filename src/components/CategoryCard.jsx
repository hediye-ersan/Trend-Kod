'use client';

import { User, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function FashionCategories() {
  const categories = [
    {
      title: "WOMEN'S CLOTHS",
      items: 5,
      gender: 'female',
      image: '/images/Category1.png'
    },
    {
      title: "MEN'S CLOTHS",
      items: 4,
      gender: 'male',
      image: '/images/Category2.png'
    },
    {
      title: "ACCESSORIES",
      items: 8,
      image: '/images/Category3.png'
    },
    {
      title: "FOOTWEAR",
      items: 6,
      image: '/images/Category4.png'
    }
  ];

  return (
    <div className="container mx-auto p-6">
    <div className="text-center mb-10">
      <h3 className="text-h3 font-bold mb-4">Shop</h3>
      <div className="flex items-center justify-center gap-2 text-sm text-h6 font-bold">
        <Link to="/" className=" hover:underline ">Home</Link>
        <span >/</span>
        <span className="text-secondText ">Shop</span>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative min-w-[331px] min-h-[300px] bg-contain bg-no-repeat bg-center cursor-pointer transition-all duration-300 hover:shadow-lg group mx-auto"
          style={{ backgroundImage: `url(${category.image})` }}
        >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
            <p className="text-lg font-semibold">{category.items} Items</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}
