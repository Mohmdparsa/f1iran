import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpg";

const ImageGallery = () => {
  // Array of image sources
  const images = [image1, image2, image3, image4, image5];

  return (
    <div className="flex flex-wrap justify-center items-start p-4">
      {/* Top row for larger images */}
      <div className="flex flex-col md:flex-row justify-center items-start w-full mb-8">
        {images.slice(0, 3).map((image, index) => (
          <img
            src={image}
            alt={`Image ${index + 1}`}
            key={index}
            className="w-full  w-[28rem] sm:w-[28rem] md:w-[16rem] lg:w-[22rem] object-cover mr-1 sm:mr-4 mb-4 h-[15rem] rounded-lg"
          />
        ))}
      </div>

      {/* Bottom row for smaller images */}
      <div className="flex flex-wrap justify-center items-start w-full">
        {images.slice(3).map((image, index) => (
          <img
            src={image}
            alt={`Image ${index + 4}`}
            key={index + 3}
            className="w-full w-[28rem] sm:w-[28rem] md:w-[16rem] lg:w-[22rem] object-cover mr-4 mb-4 h-[15rem] rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

