import { useGetHeroQuery } from "@/redux/features/homeSection/hero/heroApiSlice";
import Loader from "../../logoutUI/Loader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const HeroSection = () => {
  const { data, isLoading, isError } = useGetHeroQuery();

  if (isLoading) return <Loader />;
  
  if (isError || !data?.success) {
    return <div className="text-center py-10">Failed to load banner.</div>;
  }

  const hero = data?.banners?.[0];

  if (!hero) return null;

  return (
    <section className="w-full">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <div className="relative w-full h-auto md:h-[500px] overflow-hidden">
            <img 
                src={hero.image} 
                alt={hero.title} 
                className="w-full h-full object-cover md:object-fill" 
              />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default HeroSection;