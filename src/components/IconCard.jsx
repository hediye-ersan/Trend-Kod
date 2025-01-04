import React from 'react';

const IconCard = ({ imageSrc, link, altText }) => {
  return (
    <a href={link} >
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
      imageSrc: './images/logo1.svg',
      link: '#',
      altText: 'Icon 1',
    },
    {
      imageSrc: './images/logo2.svg',
      link: '#',
      altText: 'Icon 2',
    },
    {
      imageSrc: './images/logo3.svg',
      link: '#',
      altText: 'Icon 3',
    },
    {
      imageSrc: './images/logo4.svg',
      link: '#',
      altText: 'Icon 4',
    },
    {
      imageSrc: './images/logo5.svg',
      link: '#',
      altText: 'Icon 5',
    },
    {
      imageSrc: './images/logo6.svg',
      link: '#',
      altText: 'Icon 6',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-16 items-center py-20 md:px-24">
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
