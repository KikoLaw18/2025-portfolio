import { Link } from 'react-router-dom';
import Hero from './Hero';
import Book from "../assets/book.png";

export default function Showcase() {
    return(
        <>
        
        <div className='bg-[#FFFAF0]'>
            <h2 className='font-black font-inter text-center text-2xl py-12'>Creative Showcase</h2>
            <div>
               <Hero
                headerText="Creative Showcase"
                descriptionText={{
                title: "UX/UI",
                subtitle: "Case study & Redesign",
                body: `This project is redesigning an app called the Grounds for Coffee. In this project im going to make it ease to use by fixing navigation problems, redesigning layouts, and improving the user experience.`
                }}
                imageIndex={0}
                buttonText="Read more"
                buttonLink="/Project/Uxui"
                buttonColor="pink"
                reverseOrder={false}
                />  
            </div>
             
            
            <div className='pt-12 pb-16'>
                <Hero
            headerText="Creative Showcase"
            descriptionText={{
            title: "Children's Storybook",
            subtitle: "Graphic Design & Story Creation",
            body: `This project focuses on designing the graphics for a children's
                storybook using Illustrator. I also created a short story for the book
                based on a friend's birthday experience.`
            }}
            buttonText="Read more"
            buttonLink="/Project/Uxui"
            buttonColor="blue"
            reverseOrder={true}
            imageIndex={1}
            /> 
            </div>
              
        </div>
        </>
    )
}