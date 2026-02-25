interface HeroProps {
  title: string;
  bgImage: string;
}
const AllHeroSection = ({ title, bgImage }: HeroProps) => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="hero-overlay bg-gray-900/80">
        <div className="hero-content text-neutral-content text-center">
          <div className="text-5xl font-bold text-white dark:text-emerald-600 bg-clip-text pt-20 sm:py-32">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllHeroSection;
