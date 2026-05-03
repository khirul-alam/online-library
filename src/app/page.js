import Banner from "@/components/home/Banner";
import NewsMarquee from "@/components/Home/Marquee";
import FeaturedBooks from "@/components/Home/FeaturedBooks";

export default function Home() {
  return (
    <>
      <main>
        <NewsMarquee />
        <Banner />
        <FeaturedBooks></FeaturedBooks>
        
      </main>
    </>
  );
}
