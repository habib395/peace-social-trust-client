import Fund from "@/pages/Fund";
import HeroSection from "../heroSection/HeroSection";
import Donation from "./Donation";
import Project from "./Project";
import Subscribe from "./Subscribe";

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