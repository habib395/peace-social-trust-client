import HeroSection from "../heroSection/HeroSection";
import Projects from "../outerComponents/Projects";
import Donation from "./Donation";
import Subscribe from "./Subscribe";
import Fund from "@/pages/Fund";

const Home = () => {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <Donation />
            <Projects />
            <Fund />
            <Subscribe />
        </div>
    );
};

export default Home;