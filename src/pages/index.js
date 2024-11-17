import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/homepage/AboutSection";
import ClientSection from "@/components/homepage/ClientSection";
import KeyFactSection from "@/components/homepage/KeyFactSection";
import OtherBusiness from "@/components/homepage/OtherBusiness";
import OurPolicy from "@/components/homepage/OurPolicy";
import SupportSection from "@/components/homepage/SupportSection";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
        <title>GBL - Glow Batel Limited</title>
        <meta
          name="description"
          content="Meet the administration team of GBL, an GBL vendor code registration holding company."
        />
      </Head>
      <Navbar />

      <HeroSlider />
      <main className="w-full min-h-screen">
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
