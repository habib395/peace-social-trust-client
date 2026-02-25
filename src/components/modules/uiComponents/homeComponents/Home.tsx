import Project from "@/pages/Project";
import HeroSection from "../heroSection/HeroSection";
import Donation from "./Donation";
import Subscribe from "./Subscribe";
import Fund from "@/pages/Fund";

const Home = () => {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <Donation />
            <Project />
            <Fund />
            <Subscribe />
        </div>
    );
};

export default Home;