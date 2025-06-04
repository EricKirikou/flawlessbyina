
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SalonContent from "@/components/SalonContent";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";

const Salon = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <SalonContent />
        <NewsletterSubscribe />
      </main>
      <Footer />
    </div>
  );
};

export default Salon;
