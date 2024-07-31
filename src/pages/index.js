import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/homepage/AboutSection";
import ClientSection from "@/components/homepage/ClientSection";
import KeyFactSection from "@/components/homepage/KeyFactSection";
import OtherBusiness from "@/components/homepage/OtherBusiness";
import OurPolicy from "@/components/homepage/OurPolicy";
import SupportSection from "@/components/homepage/SupportSection";
import Nabvar from "@/components/Nabvar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Nabvar/ >

      <HeroSlider />
      <main className='w-full min-h-screen'>
        <div className="container">
          <AboutSection />

          <SupportSection />
        </div>

        <div className="w-full px-5">
          <OtherBusiness />
          <OurPolicy />
        </div>

        <div className="w-full">
          <ClientSection />
          <KeyFactSection />
        </div>

      </main>

      <Footer />

    </>
  );
}
