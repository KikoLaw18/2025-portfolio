import { Link } from "react-router-dom";

// assets
import Logo from "../assets/personal-logo.png";
import Email from '../assets/gmail.svg';
import Linkedin from '../assets/linkdein.svg';
import Instagram from '../assets/instagram.svg'

function Footer() {
    return(
        <footer className="bg-[#FFFAF0] p-12 flex place-content-around">
            <img src={Logo} alt="personal logo" className="w-20 h-8"></img>
            <div>
                <h3 className="font-black pb-4">Project</h3>
                <ul>
                    <li>UX/UI case study</li>
                    <li>Email newsletter</li>
                    <li>Storybook</li>
                    <li>Ad poster</li>
                </ul>
            </div>
            {/* <div>
                <h3 className="font-black pb-4">About</h3>
                <ul>
                    <li>Value</li>
                    <li>Mission</li>
                    <li>Skills</li>
                    <li>Resume</li>
                </ul>
            </div> */}
            <div className="">
                <h3 className="font-black text-center pb-4">Contact</h3>
                <div className="flex gap-8">
                    <img src={Email} alt="email link" className="w-8"></img>
                    <img src={Linkedin} alt="email link" className="w-8"></img>
                    <img src={Instagram} alt="email link" className="w-8"></img>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;