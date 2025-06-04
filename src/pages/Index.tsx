
import Navigation from "@/components/Navigation";
import HeroBanner from "@/components/HeroBanner";
import FeaturedPosts from "@/components/FeaturedPosts";
import BeautyTips from "@/components/BeautyTips";
import AboutSection from "@/components/AboutSection";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Flawless by Ina Studios | Beauty & Hair Specialist";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <HeroBanner />
        
        {/* Booking CTA Section */}
        <section className="py-10 bg-pink-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Ready to Transform Your Look?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Book your appointment today for professional hair and makeup services.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/booking">
                <Button className="bg-pink-600 hover:bg-pink-700">
                  Book Online
                </Button>
              </Link>
              <Link to="/booking">
                <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
                  View Booking Options
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <FeaturedPosts />
        <BeautyTips />
        <AboutSection />
        <NewsletterSubscribe />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
