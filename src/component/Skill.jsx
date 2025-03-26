// import React from "react";
// import { gsap } from "gsap";
// import Uxui from "../assets/uxui.png";
// import Branding from "../assets/branding.png";
// import WebDesign from "../assets/web_design.png";
// import MotionGraphic from "../assets/motion_graphic.png";
// import Illustation from "../assets/illustration.png";
// import GraphicDesign from "../assets/graphic_design.png";

// export default function AnimatedElements() {

//   return (
//       <div className="flex flex-wrap gap-4 justify-center mt-8">
//         <img className="w-40" src={Uxui} alt="uxui skill" />
//         <img className="w-40" src={Branding} alt="branding skill" />
//         <img className="w-40" src={WebDesign} alt="web design skill" />
//         <img className="w-70" src={MotionGraphic} alt="motion graphic skill" />
//         <img className="w-50" src={GraphicDesign} alt="graphic design skill" />
//         <img className="w-40" src={Illustation} alt="illustration skill" />
//       </div>
//   );
// }

import React, { useEffect } from "react";
import { gsap } from "gsap";
import AppDesign from "../assets/app_design.png"
import Uxui from "../assets/uxui.png";
import Branding from "../assets/branding.png";
import WebDesign from "../assets/web_design.png";
import MotionGraphic from "../assets/motion_graphic.png";
import Illustation from "../assets/illustration.png";
import GraphicDesign from "../assets/graphic_design.png";


export default function AnimatedElements() {
  useEffect(() => {
    const images = document.querySelectorAll('.falling-image');

    gsap.fromTo(images, {
      y: -100,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1, 
      stagger: 0.2,
      ease: "bounce.out", 
      duration: 1.5,
    });
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center p-12 relative h-80">
        <img className="absolute w-45 -ml-150 mt-11 -rotate-26 falling-image" src={AppDesign} alt="app design skill" /> 
  
        <img className="absolute w-45 -ml-110 -mt-8 rotate-20 falling-image" src={Branding} alt="branding skill"/>

        <img className="absolute w-70 mr-65 mt-19 rotate-0 falling-image" src={MotionGraphic}alt="motion graphic skill" />

        <img className="absolute mr-32 -mt-3 w-45 -rotate-30 falling-image" src={WebDesign} alt="web design skill" />

        <img className="absolute -mr-24 mt-12 w-45 rotate-24 falling-image" src={Uxui} alt="uxui skill" />

        <img className="absolute -mr-70 mt-4 w-40 rotate-8 falling-image" src={Illustation} alt="illustration skill" />

        <img className="absolute -mr-117 mt-19 w-50 falling-image" src={GraphicDesign} alt="graphic design skill" />
    </div>
  );
}



