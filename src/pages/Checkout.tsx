
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CheckoutContent from "@/components/CheckoutContent";
import { useEffect } from "react";

const Checkout = () => {
  useEffect(() => {
    document.title = "Checkout | Flawless by Ina Studios";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <CheckoutContent />
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
