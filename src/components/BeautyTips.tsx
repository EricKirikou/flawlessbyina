
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smile, Droplet, Brush } from "lucide-react";

const tips = [
  {
    title: "Primer Is Your Best Friend",
    content: "Always use a primer before foundation for smooth application and longer-lasting makeup.",
    icon: Brush,
  },
  {
    title: "Hydration Is Key",
    content: "Drink plenty of water daily. Well-hydrated skin creates the perfect canvas for makeup application.",
    icon: Droplet,
  },
  {
    title: "Blending Is Everything",
    content: "Invest in quality brushes and blend, blend, blend for a seamless, professional finish.",
    icon: Smile,
  },
];

const BeautyTips = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Beauty Tips</h2>
          <p className="text-gray-600 mt-2">Quick tips to enhance your beauty routine</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <tip.icon className="text-pink-600" size={24} />
                </div>
                <CardTitle>{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{tip.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeautyTips;
