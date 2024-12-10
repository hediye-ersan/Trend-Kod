import React from 'react';

const Card = ({ imageSrc, title, buttonText }) => {
    return (
        <div className="relative overflow-hidden ">
            <img src={imageSrc} alt={title} />
            <div className="bg-[#2D8BC0BF] bg-opacity-70 flex flex-col items-start justify-center text-white  p-4 absolute bottom-0 left-0  h-2/5 ">
                <h3 className="text-h3 font-bold mb-2 text-left">{title}</h3>
                <div>
                    <button className="px-4 py-2 bg-transparent rounded border-white border-1 hover:text-white transition duration-300">
                        {buttonText}
                    </button>
                </div>
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

    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center sm:grid-cols-2 sm:grid-rows-2 ">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    buttonText={card.buttonText}
                />
            ))}
        </section>
    );
}
export default CardList;

