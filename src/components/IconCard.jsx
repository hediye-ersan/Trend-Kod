import React from 'react';

const IconCard = ({ imageSrc, link, altText }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="flex justify-center items-center">
        <img
          src={imageSrc}
          alt={altText}
          className="filter grayscale"
        />
      </div>
    </a>
  );
};

const IconList = () => {
  const icons = [
    {
      imageSrc: './images/gry1.png',
      link: '#',
      altText: 'Icon 1',
    },
    {
      imageSrc: './images/gry2.png',
      link: '#',
      altText: 'Icon 2',
    },
    {
      imageSrc: './images/gry3.png',
      link: '#',
      altText: 'Icon 3',
    },
    {
      imageSrc: './images/gry4.png',
      link: '#',
      altText: 'Icon 4',
    },
    {
      imageSrc: './images/gry5.png',
      link: '#',
      altText: 'Icon 5',
    },
    {
      imageSrc: './images/gry6.png',
      link: '#',
      altText: 'Icon 6',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-16 py-32">
      {icons.map((icon, index) => (
        <IconCard
          key={index}
          imageSrc={icon.imageSrc}
          link={icon.link}
          altText={icon.altText}
        />
      ))}
    </div>
  );
};

export default IconList;
