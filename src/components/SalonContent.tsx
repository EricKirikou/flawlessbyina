
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCurrency } from "@/contexts/CurrencyContext";

const hairServices = [
  {
    id: 1,
    title: "Wig Installation",
    description: "Professional installation of your wig",
    price: 70,
    icon: Scissors,
    details: "Get your wig professionally installed for a natural-looking and secure fit. Price includes customization to suit your face shape."
  },
  {
    id: 2,
    title: "Frontal Installation",
    description: "Secure and natural-looking frontal application",
    price: 100,
    icon: Scissors,
    details: "Expert application of your frontal for a flawless, natural-looking hairline. Includes plucking and customization."
  },
  {
    id: 3,
    title: "Closure Installation",
    description: "Professional closure application",
    price: 50,
    icon: Scissors,
    details: "Get your closure professionally applied for a seamless blend. Perfect for a natural look."
  },
  {
    id: 4,
    title: "Sew-In",
    description: "Full sew-in weave installation",
    price: 120,
    icon: Scissors,
    details: "Complete sew-in installation of your extensions for a secure and long-lasting style. Includes basic styling."
  },
  {
    id: 5,
    title: "Wash & Style",
    description: "Professional wash and styling service",
    price: 50,
    icon: Scissors,
    details: "Rejuvenate your wig or natural hair with our professional wash and styling service."
  },
  {
    id: 6,
    title: "Wig Maintenance",
    description: "Deep cleaning and restoration of your wig",
    price: 40,
    icon: Scissors,
    details: "Professional deep cleaning, conditioning, and restoration to keep your wig looking fresh."
  }
];

const SalonContent = () => {
  const { formatPrice } = useCurrency();
  
  return (
    <>
      <section className="pt-16 pb-8 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Wigs & Hairstyling Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience luxury treatment at our state-of-the-art salon. 
              Our experts specialize in professional wig installation and hairstyling services.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <a 
                  href="https://flawlessbyina.setmore.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-8 rounded-full inline-flex items-center mr-4"
                >
                  Book Hairstyling Appointment
                </a>
                <a 
                  href="/beauty-services" 
                  className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-full inline-flex items-center"
                >
                  View Beauty Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Our Hairstyling Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hairServices.map((service) => (
              <Card key={service.id} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                    <service.icon className="text-pink-600" size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <p className="text-pink-600 font-semibold">From {formatPrice(service.price)}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.details}</p>
                  <a 
                    href="https://flawlessbyina.setmore.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full border-pink-600 text-pink-600 hover:bg-pink-50">
                      Book Appointment
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Transform Your Look?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our hair experts are here to help you achieve the perfect style. From wig installations to professional styling, we've got you covered.
          </p>
          <div className="space-x-4">
            <a 
              href="https://flawlessbyina.setmore.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-8 rounded-full">
                Book Hairstyling Service
              </Button>
            </a>
            <a href="/beauty-services">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 py-3 px-8 rounded-full">
                View Beauty Services
              </Button>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            You can also reach us directly at WhatsApp: <a href="https://wa.me/+447909009155" className="text-pink-600 hover:underline">+44 7909 009155</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default SalonContent;
