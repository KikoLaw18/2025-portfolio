import MyResume from "../assets/resume.png";
import Resume2 from "../assets/resume2.jpeg";
import EarthIcon from "../assets/earth.svg";

export default function Resume() {
    return(
        <>
            <div className="bg-[#D7EDFA] absolute w-80 h-100
             place-items-center rounded-4xl">
                <img src={Resume2} alt="my resume" className="w-80 relative rounded-t-4xl border-6 border-[#D7EDFA]" />
                <div className="float-left">
                    <h4 className="font-bold ml-7.5">Resume</h4>
                    <div className="flex">
                        <img src={EarthIcon} alt="global icon" className="w-4 ml-7"/>
                        <p className="">doc.com</p>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}