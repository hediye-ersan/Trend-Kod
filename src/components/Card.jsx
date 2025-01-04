import React from 'react';

const Card = ({ imageSrc, title, buttonText }) => {
  return (
    <div className="relative overflow-hidden w-full h-full">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="bg-[#2D8BC0BF] bg-opacity-70 flex flex-col items-start justify-center text-white p-6 absolute bottom-0 left-0 h-2/5 w-full">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <button className="px-4 py-2 bg-transparent rounded border border-white hover:bg-white hover:text-[#2D8BC0] transition duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const CardList = () => {
  const cards = [
    {
      imageSrc: './images/card1.png',
      title: 'Top Product Of the Week',
      buttonText: 'Explore Items',
    },
    {
      imageSrc: './images/card2.png',
      title: 'Top Product Of the Week',
      buttonText: 'Explore Items',
    },
    {
      imageSrc: './images/card3.png',
      title: 'Top Product Of the Week',
      buttonText: 'Explore Items',
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 md:px-24">
      {/* Sol geniş kart */}
      <div className="md:row-span-2 md:col-span-2 aspect-w-16 aspect-h-9">
        <Card
          imageSrc={cards[0].imageSrc}
          title={cards[0].title}
          buttonText={cards[0].buttonText}
        />
      </div>

      {/* Sağdaki küçük kartlar */}
      <div className="aspect-w-16 aspect-h-9">
        <Card
          imageSrc={cards[1].imageSrc}
          title={cards[1].title}
          buttonText={cards[1].buttonText}
        />
      </div>
      <div className="aspect-w-16 aspect-h-9">
        <Card
          imageSrc={cards[2].imageSrc}
          title={cards[2].title}
          buttonText={cards[2].buttonText}
        />
      </div>
    </section>
  );
};

export default CardList;
