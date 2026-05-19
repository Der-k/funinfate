import { client } from "@/lib/sanity/client";
import { homepageQuery } from "@/lib/sanity/queries";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import DiscoverSection from "@/components/DiscoverSection";
import ShowcaseVideoSection from "@/components/ShowcaseVideoSection";
import OverviewSection from "@/components/OverviewSection";
import Footer from "@/components/Footer";
import DiscoverHighlightsSection from "@/components/DiscoverHighlightsSection";
import AccommodationSection from "@/components/AccommodationSection";
import FateNewsSection from "@/components/FateNewsSection";
import Restarauntssection from "@/components/Restaraunts_section";


export default async function HomePage() {
  const data = await client.fetch(homepageQuery);

  return (
    <main>
      <Navbar />

      <HeroSection />
       <OverviewSection />
       <DiscoverHighlightsSection />
    <Restarauntssection/>
     <ShowcaseVideoSection />
    <AccommodationSection />
      <FateNewsSection />
      <DiscoverSection data={data?.discoverSection} />

      <Footer />
    </main>
  );
}