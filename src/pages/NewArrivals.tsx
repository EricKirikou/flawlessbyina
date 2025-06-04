
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewArrivalsContent from "@/components/NewArrivalsContent";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";

const NewArrivals = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <NewArrivalsContent />
        <NewsletterSubscribe />
      </main>
      <Footer />
    </div>
  );
};

export default NewArrivals;
