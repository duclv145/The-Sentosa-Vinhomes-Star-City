import Header from "@/components/Header";
import IntroScreen from "@/components/IntroScreen";
import Hero from "@/components/Hero";
import Cinematic from "@/components/Cinematic";
import Inspiration from "@/components/Inspiration";
import Islands from "@/components/Islands";
import Values from "@/components/Values";
import Signatures from "@/components/Signatures";
import Amenities from "@/components/Amenities";
import Residences from "@/components/Residences";
import FloorPlans from "@/components/FloorPlans";
import Location from "@/components/Location";
import VideoSection from "@/components/VideoSection";
import Register from "@/components/Register";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <IntroScreen />
      <Header />
      <main>
        <Hero />
        <Inspiration />
        <Islands />
        <Cinematic
          src="/images/sk-oasis.jpg"
          alt="Ốc đảo nghỉ dưỡng giữa đại lộ thịnh vượng"
          caption="Ốc đảo nghỉ dưỡng"
        />
        <Values />
        <Signatures />
        <Amenities />
        <Residences />
        <FloorPlans />
        <Location />
        <VideoSection />
        <Register />
      </main>
      <Footer />
    </>
  );
}
