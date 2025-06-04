
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ToolsContent from "@/components/ToolsContent";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";

const Tools = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <ToolsContent />
        <NewsletterSubscribe />
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
