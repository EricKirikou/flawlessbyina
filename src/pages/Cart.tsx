
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CartContent from "@/components/CartContent";
import { useEffect } from "react";

const Cart = () => {
  useEffect(() => {
    document.title = "Shopping Cart | Flawless by Ina Studios";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <CartContent />
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
