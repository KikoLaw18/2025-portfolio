import React from "react";
import Logo from "../assets/personal-logo.png"
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="font-inter flex justify-between h-30 place-items-center text-xl p-12">
            <img src={Logo} alt="personal logo" className="w-20 "></img>
            <nav className="content-center place-items-center font-black">
                <Link to="/" className="float-left">Home</Link>
                <Link to="/About" className="float-left ml-30">About</Link>
                <Link to="/Project" className="float-left ml-30 ">Project</Link>
            </nav>
        </header>
    )
}

export default Header;