
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ShopContent from "@/components/ShopContent";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <section className="pt-16 pb-8 bg-gradient-to-b from-pink-50 to-white">
          <div className="container mx-auto px-4">
            <ShopContent />
          </div>
        </section>
        <NewsletterSubscribe />
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
