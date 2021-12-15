import SectionIntro from "../components/SectionIntro";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Help from "../components/Help";
import Digits from "../components/Digits";
import Comments from "../components/Comments";
import CTA from "../components/CTA";
import Test from "../components/Test";

export default function Home() {
    return (
        <>
            <Header/>
            <main>
                <SectionIntro/>
                <Help/>
                <Digits/>
                <Comments/>
                <CTA/>
            </main>
            <Footer/>
        </>
    )
}
