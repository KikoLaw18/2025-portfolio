import Footer from "../component/Footer";
import Header from "../component/Header";
import Introduce from "../component/introduce";
import Aboutme from "../component/Aboutme";

function About() {
    return(
        <>
            <Header/>
            <main>
            <Introduce />
            <Aboutme />
            </main>
            
            <Footer />
        </>
    )
}

export default About;