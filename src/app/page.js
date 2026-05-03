import Banner from "@/components/home/Banner";
import NewsMarquee from "@/components/Home/Marquee";
import FeaturedBooks from "@/components/Home/FeaturedBooks";
import Stats from "@/components/Home/Stats";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <>
      <main>
        <NewsMarquee />
        <Banner />
        <FeaturedBooks></FeaturedBooks>
        <Stats></Stats>
        <Testimonials></Testimonials>

        
      </main>
    </>
  );
}
