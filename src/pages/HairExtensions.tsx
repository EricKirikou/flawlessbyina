
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HairExtensionsContent from "@/components/HairExtensionsContent";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";

const HairExtensions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <HairExtensionsContent />
        <NewsletterSubscribe />
      </main>
      <Footer />
    </div>
  );
};

export default HairExtensions;
