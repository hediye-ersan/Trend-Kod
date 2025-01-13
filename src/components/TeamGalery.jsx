import React from "react";

const TeamGallery = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 p-12 md:flex-row md:items-start">
          {/* Sol Büyük Resim */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/teamGallery-1.svg"
              alt="Main Gallery Image"
              className="w-full h-auto rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
      
          {/* Sağ 2x2 Küçük Resimler */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
            <img
              src="/images/teamGallery-2.svg"
              alt="Gallery Image 1"
              className="w-full h-auto rounded-lg shadow-md object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/images/teamGallery-3.svg"
              alt="Gallery Image 2"
              className="w-full h-auto rounded-lg shadow-md object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/images/teamGallery-4.svg"
              alt="Gallery Image 3"
              className="w-full h-auto rounded-lg shadow-md object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/images/teamGallery-5.svg"
              alt="Gallery Image 4"
              className="w-full h-auto rounded-lg shadow-md object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      );
      
};

export default TeamGallery;
