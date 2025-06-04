
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WigsContent from "@/components/WigsContent";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";

const Wigs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <WigsContent />
        <NewsletterSubscribe />
      </main>
      <Footer />
    </div>
  );
};

export default Wigs;
