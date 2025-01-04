import React from 'react';

const PostCard = ({ imageSrc, tag, title, description, date, comments }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl md:flex ">
      {/* Görsel ve Etiket */}
      <div className="relative">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover "
        />
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold py-1 px-3 rounded-full shadow-md">
          {tag}
        </span>
      </div>

      {/* İçerik */}
      <div className="p-6">
        <div className="text-xs text-gray-500 mb-2 flex gap-4">
          <a href="#" className="hover:underline hover:text-blue-600">Google</a>
          <a href="#" className="hover:underline hover:text-blue-600">Trending</a>
          <a href="#" className="hover:underline hover:text-blue-600">New</a>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        {/* Tarih ve Yorumlar */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center">
            <img src="./icons/clock.svg" alt="Clock Icon" className="w-4 h-4 mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <img src="./icons/Vector.svg" alt="Comments Icon" className="w-4 h-4 mr-1" />
            {comments} comments
          </div>
        </div>

        {/* Learn More Butonu */}
        <div className="mt-4">
          <a
            href="./"
            className="text-blueText text-sm font-bold hover:underline flex items-center"
          >
            Learn More</a>
        </div>
      </div>
    </div>
  );
};

const PostCardList = () => {
  const posts = [
    {
      imageSrc: './images/post1.png',
      tag: 'NEW',
      title: 'Loudest à la Madison #1 (L\'integral)',
      description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
      date: '22 April 2021',
      comments: 10,
    },
    {
      imageSrc: './images/post2.png',
      tag: 'NEW',
      title: 'Loudest à la Madison #2 (L\'integral)',
      description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
      date: '22 April 2021',
      comments: 10,
    },
  ];

  return (
    <div className="px-12 py-12 md:p-24">
      <h6 className="text-blueText text-sm font-bold text-center mb-4">Practice Advice</h6>
      <h2 className="text-h2 font-bold text-center">Featured Posts</h2>
      <div className="grid grid-cols-1 pt-16 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:flex ">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default PostCardList;
