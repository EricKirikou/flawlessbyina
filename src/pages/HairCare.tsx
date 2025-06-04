
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HairCareContent from "@/components/HairCareContent";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";

const HairCare = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <HairCareContent />
        <NewsletterSubscribe />
      </main>
      <Footer />
    </div>
  );
};

export default HairCare;
