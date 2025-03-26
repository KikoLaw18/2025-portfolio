import Skills from "../assets/skills.png";
import BlueBar from "../assets/blue_bar.png";
import PinkBar from "../assets/pink_bar.png";
import PurpleBar from "../assets/purple_bar.png";
import Creativity from "../assets/creativity.png";
import Empathy from "../assets/empathy.png";
import Respect from "../assets/respect.png";
import Resume from "../component/Resume";

export default function Aboutme() {
    return(
        <>
        <div className="flex p-12 font-inter gap-20">
            {/* education */}
            <div className="w-1/2">
                <h3 className="font-bold">Education</h3>
                <br></br>
                <h4>BCIT - New Media & Web Development</h4>
                <p>May, 2024 - Now</p>
                <p>At BCIT I learnt how to design a website or an app to be more user centered.</p>
            </div>

            {/* Skiils */}
            <div className="w-1/2">
                <h3 className="font-bold">Skills</h3>
                <br></br>
                <img src={Skills} alt="my skills (creativity, empathy, multitasking and collaboration)" className="w-100"/>
            </div>
        </div>

        <div className="flex p-12 font-inter gap-20">
            {/* mission */}
            <div className="w-1/2">
                <h3 className="font-bold">Mission</h3>
                <br></br>
                <p>What drives me to New Media and Web Development is my passion for designing things that make people happy. I explored many career paths before discovering UX/UI design, where I can help users by creating better interfaces with enjoyable usability. Since childhood, I dreamed of being a fashion designer to create unique styles and later an interior designer to design homes that bring joy. While those paths felt uncertain, my goal has always been to help people through design. Now, as a UX/UI designer, I am dedicated to crafting meaningful digital experiences that improve users' lives.</p>
            </div>

            {/* Languages */}
            <div className="w-1/2">
                <h3 className="font-bold">Languages</h3>
                <br></br>
                {/* english */}
                <div className="flex gap-10 place-items-center pb-8">
                    <h4>English</h4>
                    <img src={BlueBar} alt="60% English language proficiency" className="w-70"/>
                </div>

                {/* Mandarin */}
                <div className="flex gap-6 place-items-center pb-8">
                    <h4>Mandarin</h4>
                    <img src={PinkBar} alt="100% Mandarin language proficiency" className="w-70"/>
                </div>
                {/* cantonese */}
                <div className="flex gap-4 place-items-center pb-8">
                    <h4>Cantonese</h4>
                    <img src={PurpleBar} alt="100% Cantonese language proficiency" className="w-70"/>
                </div>
            </div>
        </div>

        <div className="flex p-12 font-inter gap-20">
            {/* value */}
            <div className="w-1/2">
                <h3 className="font-bold">Value</h3>
                <br></br>
                <img src={Creativity} alt="creativity label" className="w-28 pb-4"/>
                <p className="pb-4">A lot of creative ideas jump into my mind, inspiring me to explore new concepts and make unique designs that stand out.</p>
                <img src={Empathy} alt="empathy label" className="w-28 pb-4"/>
                <p className="pb-4">Understanding people's needs helps me create meaningful and user-friendly experiences.</p>
                <img src={Respect} alt="respect label" className="w-28 pb-4"/>
                <p className="pb-4">I value different perspectives, listen to clients and teammates, and ensure a collaborative work environment.</p>
            </div>

            {/* resume */}
            <div className="w-1/2 h-120">
                <h3 className="font-bold">Resume</h3>
                <br></br>
                <Resume />
            </div>

        </div>
            
        </>
    )
}