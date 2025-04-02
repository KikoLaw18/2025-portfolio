// import React from "react";
// import { Link } from "react-router-dom";

// // Images
// import Cafe from "../assets/cafe.png";
// import Book from "../assets/book.png";
// import Valentines from "../assets/valentines.png";
// import Poster from "../assets/poster.png";

// // component
// import Button from "./Button";

// const Hero = ({
//   headerText = 'Default Header',
//   descriptionText = { title: '', subtitle: '', body: '' },
//   imageIndex = 0,
//   buttonLink,
//   buttonText,
//   buttonColor =  'yellow',
//   reverseOrder = false,
//  }) => {
  
//   const imageSources = [Cafe, Book, Valentines, Poster];
//   // const buttonColors = ["yellow", "blue", "pink", "purple"];

//   return (
//     <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center text-center px-8 lg:px-12">
//       {/* Image section */}
//       <div className="w-1/2 sm:w-100 flex">
//         <img
//           src={imageSources[imageIndex]}
//           alt="Project Image"
//           className="lg:w-150 md:w-150 sm:w-200"
//         />
//       </div>

//       {/* Text content section */}
//       <div className="w-1/2 sm:w-100 px-4">
//         <h3 className="text-4xl font-moon">{descriptionText.title}</h3>
//         <h2 className="text-xl font-bold">{descriptionText.subtitle}</h2>
//         <p className=" pt-4">{descriptionText.body}</p>{/* button */}
//         <div className="mt-6 justify-center">
//               <Link to={buttonLink}>
//                 <Button size="small" color={buttonColor}>{buttonText}</Button>
//               </Link>
//         </div>
//       </div>

      
//     </div>
    
//   );
// };

// export default Hero;

import React from "react";
import { Link } from "react-router-dom";

// Images
import Cafe from "../assets/cafe.png";
import Book from "../assets/book.png";
import Valentines from "../assets/valentines.png";
import Poster from "../assets/poster.png";

// Component
import Button from "./Button";

const Hero = ({
  descriptionText = { title: "", subtitle: "", body: "" },
  imageIndex = 0,
  buttonLink,
  buttonText,
  buttonColor = "yellow", // Default color if none is provided
  reverseOrder = false, // This prop will decide the order
}) => {
  // Select an image
  const imageSources = [Cafe, Book, Valentines, Poster];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-center px-8 lg:px-12 gap-8">
      {/* order of text and image */}
      {reverseOrder ? (
        // If reverseOrder is true, the image comes after the text
        <>
          {/* Text content section */}
          <div className="w-full md:w-1/2 sm:w-100 px-4">
            <h3 className="text-4xl font-moon">{descriptionText.title}</h3>
            <h2 className="text-xl font-bold">{descriptionText.subtitle}</h2>
            <p className="pt-4">{descriptionText.body}</p>

            {/* Button inside text section */}
              <div className="mt-6 flex justify-center">
                <Link to={buttonLink}>
                  <Button size="small" color={buttonColor}>{buttonText}</Button>
                </Link>
              </div>
          </div>

          {/* Image section */}
          <div className="w-full md:w-1/2 sm:w-100 flex justify-center">
            <img
              src={imageSources[imageIndex]}
              alt="Project Image"
              className="lg:w-150 md:w-150 sm:w-200"
            />
          </div>
        </>
      ) : (
        // Default order (image first, text second)
        <>
          {/* Image section */}
          <div className="w-full md:w-1/2 sm:w-100 flex justify-center">
            <img
              src={imageSources[imageIndex]}
              alt="Project Image"
              className="lg:w-150 md:w-150 sm:w-200"
            />
          </div>

          {/* Text content section */}
          <div className="w-full md:w-1/2 sm:w-100 px-4">
            <h3 className="text-4xl font-moon">{descriptionText.title}</h3>
            <h2 className="text-xl font-bold">{descriptionText.subtitle}</h2>
            <p className="pt-4">{descriptionText.body}</p>

            {/* Button inside text section */}
              <div className="mt-6 flex justify-center">
                <Link to={buttonLink}>
                  <Button size="small" color={buttonColor}>{buttonText}</Button>
                </Link>
              </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
