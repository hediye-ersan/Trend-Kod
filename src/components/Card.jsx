import React from 'react';

const Card = ({ imageSrc, title, buttonText }) => {
  return (
    <div className="relative overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      <div className="bg-[#2D8BC0BF] bg-opacity-70 flex flex-col items-center justify-center text-white text-center p-4 absolute bottom-0 left-0 w-full h-2/5">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <button className="px-4 py-2 bg-transparent rounded border-white border-2 hover:text-white transition duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const CardList = () => {
    const cards = [
      {
        imageSrc: './images/Card1.png',
        title: 'Top Product Of the Week',
        buttonText: 'Explore Items',
      },
      {
        imageSrc: './images/Card2.png',
        title: 'Top Product Of the Week',
        buttonText: 'Explore Items',
      },
      {
        imageSrc: './images/Card3.png',
        title: 'Top Product Of the Week',
        buttonText: 'Explore Items',
      },
    ];
}
  
