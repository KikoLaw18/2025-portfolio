import Footer from "../component/Footer";
import Header from "../component/Header.jsx";
import Cover from "../component/Cover.jsx";
import Skill from "../component/Skill.jsx";
import Showcase from "../component/Showcase.jsx";
import Toolbox from "../component/Toolbox.jsx";

function Home() {
    return(
        <>
            <Header/>
            <main>
                <Cover />
                <Skill />
                <Showcase />
                <Toolbox />
                
            </main>
            
            <Footer />
        </>
    )
}

export default Home;