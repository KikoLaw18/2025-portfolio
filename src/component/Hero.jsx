import React from "react";
import Button from "./Button"; // Import your Button component

const Hero = ({
  headerText,
  descriptionText,
  imageSources,
  buttonText = "Read more",  // Default button text
  buttonColor = "blue",     // Default button color
  buttonSize = "medium",    // Default button size
  linkTo
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center text-center py-16 px-6 md:px-8 lg:px-12 bg-gray-50">
      {/* Image section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={imageSources}
          alt="Project visual"
          className="w-116 lg:w-128 h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text content section */}
      <div className="w-full lg:w-1/2 px-4">
        <h3 className="text-lg text-gray-700">{descriptionText.title}</h3>
        <h2 className="text-xl font-bold text-gray-900">{descriptionText.subtitle}</h2>
        <p className="text-gray-600 pt-4">{descriptionText.body}</p>

        {/* Button section */}
        <div className="pt-8">
          <a href={linkTo}>
            <Button
              size={buttonSize}
              color={buttonColor}
              onClick={() => console.log('Button clicked!')}
            >
              {buttonText}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

