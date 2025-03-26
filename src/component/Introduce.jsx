import Me from "../assets/me.png";
import MeCafe from "../assets/me_cafe.png";


export default function Introduce() {
    return (
        <>
            <div className="flex p-12 justify-center gap-16">
                <div className="w-1/2 lg:w-120">
                    <h2 className="font-moon text-7xl">hello</h2>
                    <p className="font-bold w-90 pt-4 text-lg">I'm Kiko, a UX/UI designer who loves creating simple, fun, and user-friendly designs. I always strive to help people with my best efforts, ensuring my work makes a positive impact on users. I enjoy branding, website design, and digital storytelling. 
                    </p>
                    <p className="font-bold w-90 pt-4 text-lg"> My work reflects my personality — approachable, creative, and warm.
                    In my portfolio, I showcase my design skills using techniques I learned at BCIT. I'm not great at coding yet, but I'm learning as much as I can to improve.</p>
                </div>
            
                <div className="lg:w-120 w-1/2 flex flex-col place-items-center justify-center">
                    
                    <img src={Me} alt="im standing in the middle of the street" className=""></img>

                    <img src={MeCafe} alt="im chilling in the coffee shop" className="md:w-44 sm:w-36 lg:w-48 lg:mr-120 sm:mr-76 md:mr-96 md:-mt-24 lg:-mt-40 sm:-mt-24 -rotate-15 "></img>
                    
                </div>
            </div>
            
            <div className="bg-[#FFE7E3] w-36 h-12 text-center place-content-center rounded-sm font-bold rotate-8 float-right -mt-120  md:mr-2 xl:-mt-120 xl:mr-40 2xl:mr-40" >UX/UI Designer</div>
        </>
    )
}