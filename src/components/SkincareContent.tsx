
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplet } from "lucide-react";

const routines = [
  {
    id: 1,
    title: "Morning Routine",
    description: "Start your day with glowing skin",
    steps: [
      { name: "Gentle Cleanser", description: "Start with a gentle cleanser to remove overnight build-up" },
      { name: "Vitamin C Serum", description: "Apply antioxidant serum to protect your skin during the day" },
      { name: "Moisturizer", description: "Lock in hydration with a lightweight moisturizer" },
      { name: "Sunscreen", description: "Always finish with SPF 30+ to protect from UV damage" }
    ]
  },
  {
    id: 2,
    title: "Evening Routine",
    description: "Pamper your skin while you sleep",
    steps: [
      { name: "Double Cleanse", description: "Remove makeup and sunscreen with oil cleanser, then follow with water-based cleanser" },
      { name: "Exfoliate (2-3x weekly)", description: "Use a chemical exfoliant to remove dead skin cells" },
      { name: "Treatment Serum", description: "Apply targeted treatments like retinol or niacinamide" },
      { name: "Rich Moisturizer", description: "Use a heavier cream to support overnight skin repair" }
    ]
  },
  {
    id: 3,
    title: "Weekly Treatments",
    description: "Extra care for extra glow",
    steps: [
      { name: "Face Mask", description: "Use a hydrating or clay mask depending on your skin's needs" },
      { name: "Face Massage", description: "Stimulate circulation and reduce puffiness" },
      { name: "Facial Oil", description: "Apply a nourishing oil for deep hydration" },
      { name: "Spot Treatment", description: "Target specific concerns like blemishes or dark spots" }
    ]
  }
];

const SkincareContent = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Skincare Routines & Tips</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover effective skincare routines, product recommendations, and expert tips
            to achieve healthy, glowing skin at any age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {routines.map((routine) => (
            <Card key={routine.id} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <Droplet className="text-pink-600" size={24} />
                </div>
                <CardTitle>{routine.title}</CardTitle>
                <p className="text-gray-600">{routine.description}</p>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4 mt-4">
                  {routine.steps.map((step, index) => (
                    <li key={index} className="flex">
                      <span className="bg-pink-100 text-pink-600 w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
                        {index + 1}
                      </span>
                      <div>
                        <h4 className="font-semibold">{step.name}</h4>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <Button variant="outline" className="w-full mt-6 border-pink-600 text-pink-600 hover:bg-pink-50">
                  Product Recommendations
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkincareContent;
