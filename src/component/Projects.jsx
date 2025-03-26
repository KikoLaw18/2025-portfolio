import Cafe from "../assets/cafe.png";
import Book from "../assets/book.png";
import Valentines from "../assets/valentines.png";
import Poster from "../assets/poster.png";

export default function Projects() {
    return(
        <div>
            <h2 className="font-black font-inter text-2xl text-center pt-16 pb-28 ">Creative Showcase</h2>
            {/* uxui */}
            <div className="flex text-center place-content-center pb-12 gap-[3vw] lg:gap-[10vw]"> 
                <img src={Cafe} alt="few screenshot of the coffee shop app" className="w-116 lg:w-132"></img>
                <div className="content-center w-116 lg:w-132">
                    <h3 className="text-lg">UX/UI</h3>
                    <h2 className="text-xl">Case Study & Redesign</h2>
                    <br />
                    <p>This project is redesigning an app called the Grounds for Coffee. In this project im going to make it ease to use by fixing navigation problems, redesigning layouts, and improving the user experience.</p>
                    <div className="pt-8">
                        <button className="bg-[#FFF6E3] w-32 h-8 rounded-2xl font-bold text-[#FFAA2B]">Read more</button>
                    </div>
                </div>
            </div>

            {/* book */}
            <div className="flex text-center place-content-center pt-12 pb-12 gap-[3vw] lg:gap-[10vw]"> 
                <div className="content-center w-116">
                    <h3 className="text-lg">Children</h3>
                    <h2 className="text-xl">Storybook</h2>
                    <br />
                    <p>This project focuses on designing the graphics for a children storybook by using illustrator to create the graphic design and i made a short story for this book with my friend’s birthday experience.</p>
                    <div className="pt-8">
                        <button className="bg-[#D7EDFA] w-32 h-8 rounded-2xl font-bold text-[#73B5D8]">Read more</button>
                    </div>
                </div>
                <img src={Book} alt="few screenshot of the coffee shop app" className="w-116"></img>
            </div>

            {/* valentines */}
            <div className="flex text-center place-content-center pt-12 pb-12 gap-[3vw] lg:gap-[10vw]"> 
                <img src={Valentines} alt="valentines email newsletter" className="w-116"></img>
                <div className="content-center w-116">
                    <h3 className="text-lg">Valentine's</h3>
                    <h2 className="text-xl">Email Newsletter</h2>
                    <br />
                    <p>This project focuses on designing and creating a gif on after effect to put it in an email newsletter by using Figma to build the email newsletter.</p>
                    <div className="pt-8">
                        <button className="bg-[#FFE7E3] w-32 h-8 rounded-2xl font-bold text-[#FF7262]">Read more</button>
                    </div>
                </div>
            </div>

            {/* poster */}
            <div className="flex text-center place-content-center pt-12 pb-24 gap-[3vw] lg:gap-[10vw]"> 
                <div className="content-center w-116">
                    <h3 className="text-lg">Chinese new year</h3>
                    <h2 className="text-xl">Motion Poster</h2>
                    <br />
                    <p>This motion graphic poster celebrates Chinese New Year by combining Ferrero Rocher chocolate with the Year of the Snake. Using Photoshop, Illustrator, and After Effects, I created a smooth animation featuring gold ingots, flowing gold coins, and red pockets, symbolizing luck, wealth, and good health.</p>
                    <div className="pt-8">
                        <button className="bg-[#C5CEF3] w-32 h-8 rounded-2xl font-bold text-[#7487D5]">Read more</button>
                    </div>
                </div>
                <img src={Poster} alt="few screenshot of the coffee shop app" className="w-116"></img>
            </div>

        </div>
    )
}
