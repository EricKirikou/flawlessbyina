
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const OrderSuccess = () => {
  useEffect(() => {
    document.title = "Order Confirmed | Flawless by Ina Studios";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <CheckCircle className="mx-auto text-green-600 mb-6" size={80} />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Order Confirmed!</h1>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Thank you for your order! We've received your purchase and will be in touch shortly 
              to confirm details and arrange delivery or collection.
            </p>
            <div className="space-x-4">
              <Link to="/">
                <Button className="bg-pink-600 hover:bg-pink-700">
                  Continue Shopping
                </Button>
              </Link>
              <Link to="/booking">
                <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
                  Book an Appointment
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OrderSuccess;
