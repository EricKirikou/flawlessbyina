
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SkincareContent from "@/components/SkincareContent";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";

const Skincare = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <SkincareContent />
        <NewsletterSubscribe />
      </main>
      <Footer />
    </div>
  );
};

export default Skincare;
