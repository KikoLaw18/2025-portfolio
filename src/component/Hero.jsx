import React from "react";

// Images
import Cafe from "../assets/cafe.png";
import Book from "../assets/book.png";
import Valentines from "../assets/valentines.png";
import Poster from "../assets/poster.png";

const Hero = ({
  headerText = 'Default Header',
  descriptionText = { title: '', subtitle: '', body: '' }
 }) => {
  
  const imageSources = [Cafe, Book, Valentines, Poster];

  return (
    <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center text-center py-16 px-8 lg:px-12">
      {/* Image section */}
      <div className="w-1/2 sm:w-100 flex justify-center pb-12">
        <img
          src={imageSources[0]}
          alt="Children storybook"
          className="lg:w-150 md:w-150 sm:w-200 rounded-lg"
        />
      </div>

      {/* Text content section */}
      <div className="w-1/2 sm:w-100 px-4">
        <h3 className="text-4xl text-gray-700 font-moon">{descriptionText.title}</h3>
        <h2 className="text-xl font-bold text-gray-900">{descriptionText.subtitle}</h2>
        <p className="text-gray-600 pt-4">{descriptionText.body}</p>
      </div>
    </div>
  );
};

export default Hero;

