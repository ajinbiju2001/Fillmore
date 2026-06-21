import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnatomySection from "@/components/AnatomySection";
import SignatureItems from "@/components/SignatureItems";
import LoadedFriesShowcase from "@/components/LoadedFriesShowcase";
import FillmoreExperience from "@/components/FillmoreExperience";
import CustomerReviews from "@/components/CustomerReviews";
import InstagramSection from "@/components/InstagramSection";
import Locations from "@/components/Locations";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full">
        <Hero />
        <AnatomySection />
        <SignatureItems />
        <LoadedFriesShowcase />
        <FillmoreExperience />
        <CustomerReviews />
        <InstagramSection />
        <Locations />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
}

