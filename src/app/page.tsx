import HomeHero from "@/components/home/HomeHero";
import StatsBar from "@/components/home/StatsBar";
import ServicesPreview from "@/components/home/ServicesPreview";
import AboutPreview from "@/components/home/AboutPreview";
import InstaFeed from "@/components/home/InstaFeed";
import BookingCTA from "@/components/home/BookingCTA";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center flex-col overflow-x-hidden">
      <HomeHero />
      <StatsBar />
      <ServicesPreview />
      <AboutPreview />
      <InstaFeed />
      <BookingCTA />
    </div>
  );
}
