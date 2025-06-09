import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield, Zap, Heart, Anchor, Truck } from "lucide-react";

const benefits = [
  {
    title: "100% Raw, Unprocessed Human Hair",
    content: "Authentic virgin hair with intact cuticles for the most natural look and feel.",
    icon: Check,
  },
  {
    title: "Long-Lasting (2–5 Years With Care)",
    content: "Premium quality that maintains its beauty for years with proper maintenance.",
    icon: Shield,
  },
  {
    title: "Naturally Thick from Root to Tip",
    content: "No thinning ends - consistent fullness throughout for voluminous styles.",
    icon: Zap,
  },
  {
    title: "Tangle-Free, Shed-Free Guarantee",
    content: "Our quality control ensures minimal shedding and easy maintenance.",
    icon: Heart,
  },
  {
    title: "Double Drawn Options Available",
    content: "For even more volume and density in every strand.",
    icon: Anchor,
  },
  {
    title: "Free Shipping in UK",
    content: "Enjoy complimentary delivery on all orders within the United Kingdom.",
    icon: Truck,
  },
];

const BeautyTips = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Flawless by Ina Hair Collections?</h2>
          <p className="text-gray-600 mt-2">Premium quality hair with unbeatable benefits</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <benefit.icon className="text-pink-600" size={24} />
                </div>
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{benefit.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeautyTips;