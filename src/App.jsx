import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Company from "./components/Company";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import WhatsAppButton from "./components/WhatsAppButton";

// Scroll restoration component
const ScrollToTop = () => {
  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo(0, 0);
  }, []);

  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <main className="relative min-h-screen overflow-x-hidden">
        <div className="absolute -top-20 -left-90 lg:-top-28 lg:-left-28 w-[500px] h-[500px] bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-50 blur-3xl"></div>
        <div className="overflow-hidden">
          <Navbar />
          <Hero />
          <Company />
          <Pricing />
          <Reviews />
          <Booking />
          <Footer />

          {/* Fixed position elements */}
          <ScrollToTopButton />
          <WhatsAppButton
            phoneNumber="+923360018100"
            message="Hello! I'm interested in your services."
          />
        </div>
      </main>
    </>
  );
}

export default App;
