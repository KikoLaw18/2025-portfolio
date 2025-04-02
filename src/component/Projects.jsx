import React from "react";
import { Link } from "react-router-dom";

// component
import Hero from "../component/Hero";  
import Button from './Button';


export const Projects = () => {
  return (
    <div>
      <h2 className="font-moon text-6xl text-center pt-12">Design</h2>
      <h1 className="font-black font-inter text-2xl text-center pb-16">
        Creative Showcase
      </h1>
      {/* UXUI */}
      <div className=""> 
        <Hero
          descriptionText={{
            title: "UX/UI",
            subtitle: "Case study & Redesign",
            body: `This project is redesigning an app called the Grounds for Coffee. In this project im going to make it ease to use by fixing navigation problems, redesigning layouts, and improving the user experience.`
          }}
          buttonText="Read more"
          buttonLink="/Project/Uxui"
          buttonColor="yellow"
          reverseOrder={false}
        />
      </div>

      {/* Storybook */}
      <div className="pt-20"> 
        <Hero
          descriptionText={{
            title: "Children's Storybook",
            subtitle: "Graphic Design & Story Creation",
            body: `This project focuses on designing the graphics for a children's
              storybook using Illustrator. I also created a short story for the book
              based on a friend's birthday experience.`
          }}
          buttonText="Read more"
          buttonLink="/Project/Storybook"
          buttonColor="blue"
          imageIndex={1}
          reverseOrder={true}
        />
      </div>
      
      {/* Newsletter */}
      <div className="pt-20"> 
        <Hero
          descriptionText={{
            title: "Valentine’s",
            subtitle: "Email Newsletter",
            body: `This project focuses on designing and creating a gif on after effect to put it in an email newsletter by using Figma to build the email newsletter.`
          }}
          buttonText="Read more"
          buttonLink="/Project/Newsletter"
          buttonColor="pink"
          imageIndex={2}
          reverseOrder={false}
        />
      </div>

      {/* Poster */}
      <div className="py-20"> 
        <Hero
          descriptionText={{
            title: "Chinese New Year",
            subtitle: "Motion Poster",
            body: `This motion graphic poster celebrates Chinese New Year by combining Ferrero Rocher chocolate with the Year of the Snake. Using Photoshop, Illustrator, and After Effects, I created a smooth animation featuring gold ingots, flowing gold coins, and red pockets, symbolizing luck, wealth, and good health.`
          }}
          buttonText="Read more"
          buttonLink="/Project/Poster"
          buttonColor="purple"
          imageIndex={3}
          reverseOrder={true}
        />
      </div>
    </div>
  );
};
