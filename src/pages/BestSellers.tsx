
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BestSellersContent from "@/components/BestSellersContent";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";

const BestSellers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <BestSellersContent />
        <NewsletterSubscribe />
      </main>
      <Footer />
    </div>
  );
};

export default BestSellers;
