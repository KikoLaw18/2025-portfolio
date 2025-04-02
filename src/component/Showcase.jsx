import { Link } from 'react-router-dom';
import Hero from './Hero';
import Book from "../assets/book.png";

export default function Showcase() {
    return(
        <>
        
        <div className='bg-[#FFFAF0]'>
            <h2 className='font-black font-inter text-center text-2xl pt-12'>Creative Showcase</h2>
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
        </div>
        
        </>
    )
}