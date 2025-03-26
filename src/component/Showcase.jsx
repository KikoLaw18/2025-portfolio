import Cafe from "../assets/cafe.png";
import Book from "../assets/book.png";

export default function Showcase() {
    return(
        <div className="p-12 bg-[#FFFAF0]">
            <h2 className="font-black font-inter text-2xl text-center pb-12 ">Creative Showcase</h2>
            
            <div className="flex text-center place-content-center gap-24"> 
                <img src={Cafe} alt="few screenshot of the coffee shop app" className="w-116"></img>
                <div className="content-center w-116">
                    <h3 className="text-lg">UX/UI</h3>
                    <h2 className="text-xl">Case Study & Redesign</h2>
                    <br />
                    <p>This project is redesigning an app called the Grounds for Coffee. In this project im going to make it ease to use by fixing navigation problems, redesigning layouts, and improving the user experience.</p>
                </div>
            </div>

            <div className="flex text-center place-content-center pt-12 pb-8 gap-24"> 
                <div className="content-center w-116">
                    <h3 className="text-lg">Children</h3>
                    <h2 className="text-xl">Storybook</h2>
                    <br />
                    <p>This project focuses on designing the graphics for a children storybook by using illustrator to create the graphic design and i made a short story for this book with my friend’s birthday experience.</p>
                </div>
                <img src={Book} alt="few screenshot of the coffee shop app" className="w-116"></img>
            </div>
        </div>
    )
}