import Cartoon from "../assets/cute.png"

export default function Cover() {
    return(
        <>
        <div className="flex p-12 place-content-between justify-center font-inter " >
            <div className="flex content-center sm:mb-12 lg:mb-0 lg:gap-36 md:gap-24 sm:gap-0 lg:flex-row md:flex-row sm:flex-row-reverse">
                <img src={Cartoon} className="md:w-80 lg:w-100 sm:relative sm:ml-38 md:ml-0 lg:ml-0" alt="Cartoon" />
                    
                <div className="lg:content-center md:content-center float-left sm:-mt-0 md:mt-0 lg:mt-0 sm:w-1/2 sm:absolute lg:static md:static sm:mr-56 md:mr-0 lg:mr-0">
                    <h2 className="font-moon lg:text-8xl md:text-6xl sm:text-5xl">hello</h2>
                    <h1 className="lg:text-7xl md:text-5xl sm:text-4xl font-black ">My name is</h1>
                    <h1 className="lg:text-7xl md:text-5xl font-black sm:text-4xl">Kiko</h1>
                </div>
            </div>
        </div>
        </>
    )
}
