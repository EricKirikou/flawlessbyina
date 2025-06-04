
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MakeupContent from "@/components/MakeupContent";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";

const Makeup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <MakeupContent />
        <NewsletterSubscribe />
      </main>
      <Footer />
    </div>
  );
};

export default Makeup;
