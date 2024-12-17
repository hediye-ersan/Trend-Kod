import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const ProductCard = ({ id, title, subtitle, price, discountedPrice, image }) => {
  return (
    <section>
      <div className='flex flex-col flex-wrap'>
      <Link to={`/productdetails/${id}`} className="group">
          <img src={image} alt="ProductCard" className="group-hover:opacity-80" />
        </Link>
        <div className="p-4 text-center font-bold">
          <h5 className="text-h5 ">{title}</h5>
          <h6 className="text-h6 text-secondText ">{subtitle}</h6>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <span className="text-secondText line-through text-h5">
              {price}
            </span>
            <span className="text-[#23856D] text-h5">
              {discountedPrice}
            </span>
          </div>
          <div className="flex gap-2 justify-center">
            {["bg-blue-500", "bg-orange-500", "bg-navy-900"].map((color, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full ${color} border border-gray-200`}
                aria-label={`Select color ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const ProductCardList = () => {
  const images = [
    './images/ProductCard1.png',
    './images/ProductCard2.png',
    './images/ProductCard3.png',
    './images/ProductCard4.png',
    './images/ProductCard5.png',

  ];

  const allCards = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `Graphic Design`,
    subtitle: `English Department`,
    price: `$16.48`,
    discountedPrice: `$6.48`,
    image: images[index % images.length],
  }));


  const [visibleCards, setVisibleCards] = useState(5);


  const loadMore = () => {
    setVisibleCards(visibleCards + 6);
  };

  return (
    <div>
      <div className='text-center px-24 py-16 font-bold leading-loose'>
        <h3 className='text-h3  '>BESTSELLER PRODUCTS</h3>
        <h6 className='text-h6 text-secondText'>Problems trying to resolve the conflict between </h6>
      </div>
      <div className="grid grid-cols-1  gap-4 justify-items-center sm:grid-cols-5 sm:grid-rows-2 ">
        {allCards.slice(0, visibleCards).map((card) => (
          <ProductCard
            key={card.id}
            title={card.title}
            subtitle={card.subtitle}
            price={card.price}
            discountedPrice={card.discountedPrice}
            image={card.image}
          />
        ))}
      </div>


      {visibleCards < allCards.length && (
        <div className="text-center mt-6">
          <button
            onClick={loadMore}
            className="py-5 px-12 bg-transparent rounded border-blueText border-2 text-blueText transition duration-300 font-bold text-sm"
          >
            LOAD MORE PRODUCTS
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCardList;

