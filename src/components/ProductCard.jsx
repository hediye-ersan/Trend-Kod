import React, { useState } from 'react';


const ProductCard = ({ title, subtitle, price, image }) => {
  return (
    <section>
      <div className='flex flex-col flex-wrap'>
        <img src={image} alt="ProductCard" />
        <div className="p-4 text-center">
          <h5 className="text-h5 font-bold">{title}</h5>
          <h6 className="text-h6 text-secondText">{subtitle}</h6>
          <p className="text-h6">
            {price}
          </p>
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
    price: `$16.48 $6.48`,
    image: images[index % images.length],
  }));


  const [visibleCards, setVisibleCards] = useState(5);


  const loadMore = () => {
    setVisibleCards(visibleCards + 6);
  };

  return (
    <div>
      <div className='text-center px-24 py-16'>
        <h3 className='text-h3  font-bold'>BESTSELLER PRODUCTS</h3>
        <h6 className='text-h6 text-secondText'>Problems trying to resolve the conflict between </h6>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center sm:grid-cols-2 sm:grid-rows-2 ">
        {allCards.slice(0, visibleCards).map((card) => (
          <ProductCard
            key={card.id}
            title={card.title}
            subtitle={card.subtitle}
            price={card.price}
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

