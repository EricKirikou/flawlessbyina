
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brush, Sparkles, Palette, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCurrency } from "@/contexts/CurrencyContext";

const beautyServices = [
  {
    id: 1,
    title: "Bridal Makeup",
    description: "Complete bridal makeup with consultation",
    price: 180,
    icon: Sparkles,
    details: "Complete bridal makeup package including pre-wedding consultation and day-of application for a flawless look on your special day."
  },
  {
    id: 2,
    title: "Special Event Makeup",
    description: "Glamorous makeup for any special occasion",
    price: 100,
    icon: Palette,
    details: "Professional makeup application for parties, events, photoshoots, and any special occasion."
  },
  {
    id: 3,
    title: "Everyday Makeup",
    description: "Natural-looking makeup for daily wear",
    price: 80,
    icon: Brush,
    details: "Perfect for when you want a polished, professional look for work or daily activities."
  },
  {
    id: 4,
    title: "Makeup Lesson",
    description: "Learn professional techniques",
    price: 150,
    icon: Eye,
    details: "One-on-one session to learn professional makeup techniques tailored to your features and needs."
  },
  {
    id: 5,
    title: "Eyebrow Shaping",
    description: "Professional eyebrow threading and shaping",
    price: 25,
    icon: Eye,
    details: "Expert eyebrow threading and shaping to frame your face perfectly."
  },
  {
    id: 6,
    title: "Eyelash Extensions",
    description: "Individual lash extensions for fuller lashes",
    price: 120,
    icon: Eye,
    details: "Individual eyelash extensions applied professionally for natural-looking, fuller lashes."
  }
];

const BeautyServices = () => {
  const { formatPrice } = useCurrency();
  
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Beauty Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Enhance your natural beauty with our professional makeup and beauty services. 
          From everyday looks to special occasions, we've got you covered.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {beautyServices.map((service) => (
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
  );
};

export default BeautyServices;
