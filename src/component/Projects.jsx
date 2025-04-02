import React from "react";
import { Link } from "react-router-dom";

// component
import Hero from "../component/Hero";  
import Button from './Button';

// assets
import Book from "../assets/book.png";

export const Projects = () => {
  return (
    <div>
      <h2 className="font-moon text-6xl text-center pt-16">Design</h2>
      <h1 className="font-black font-inter text-2xl text-center pb-16 ">
        Creative Showcase
      </h1>
      <Hero
        headerText="Creative Showcase"
        descriptionText={{
          title: "Children's Storybook",
          subtitle: "Graphic Design & Story Creation",
          body: `This project focuses on designing the graphics for a children's
            storybook using Illustrator. I also created a short story for the book
            based on a friend's birthday experience.`
        }}
      />
      <Link to="/About">
        <Button size="small" color="yellow">
          Read more
        </Button>
      </Link>
    </div>
  );
};
