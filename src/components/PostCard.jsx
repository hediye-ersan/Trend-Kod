import React from 'react';

const PostCard = ({ imageSrc, tag, title, description, date, comments }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      
      <div className="relative">
        <img
          src={imageSrc}
          alt={title}
          
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-3 rounded-full">
          {tag}
        </span>
      </div>

     
      <div className="p-4 ">
        <div className="text-xs text-secondText mb-1 flex gap-6 ">
            <a href='#' className='hover:underline hover:text-blueText'>Google</a>
            <a href='#' className='hover:underline hover:text-blueText'>Trending</a>
            <a href='#' className='hover:underline hover:text-blueText'>New</a>
              
        </div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>

        
        <div className="flex items-center justify-between text-xs text-gray-500 mt-4">
          <div className="flex items-center">
            <span className="material-icons text-blue-500 mr-1"><img src='./icons/clock.svg'/></span>
            {date}
          </div>
          <div className="flex items-center">
            <span className="material-icons text-blue-500 mr-1"><img src='./icons/Vector.svg'/></span>
            {comments} comments
          </div>
        </div>

        
        <div className="mt-4">
          <a
            href="./"
            className="text-secondText text-h6 hover:underline hover:text-blueText flex items-center font-bold"
          >
            Learn More 
          </a>
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
    <div className="px-12 py-12">
        <h6 className='text-blueText text-h6 font-bold text-center mb-4'>Practice Advice</h6>
      <h2 className="text-h2 font-bold text-center mb-24">
        Featured Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default PostCardList;
