
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCurrency } from "@/contexts/CurrencyContext";

const toolCategories = [
  {
    id: 1,
    title: "Hair Styling Tools",
    description: "Professional tools for styling at home",
    items: [
      { name: "Professional Hair Dryer", price: 89.99 },
      { name: "Ceramic Flat Iron", price: 69.99 },
      { name: "Curling Wand Set", price: 79.99 }
    ]
  },
  {
    id: 2,
    title: "Wig Care Tools",
    description: "Specialized tools for maintaining your wigs",
    items: [
      { name: "Wig Stand", price: 24.99 },
      { name: "Wig Brush", price: 15.99 },
      { name: "Wig Cap Set", price: 12.99 }
    ]
  },
  {
    id: 3,
    title: "Extension Tools",
    description: "Tools for installing and maintaining extensions",
    items: [
      { name: "Extension Pliers", price: 19.99 },
      { name: "Loop Brush", price: 14.99 },
      { name: "Extension Remover", price: 9.99 }
    ]
  }
];

const ToolsContent = () => {
  const { formatPrice } = useCurrency();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Hair Styling & Care Tools</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find professional-grade tools for styling, maintaining, and caring for your hair, 
            wigs, and extensions. Quality tools make all the difference in your beauty routine.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {toolCategories.map((category) => (
            <Card key={category.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-pink-50">
                <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="px-6 py-4">
                <ul className="space-y-4">
                  {category.items.map((item, index) => (
                    <li key={index} className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-800">{item.name}</span>
                      <span className="text-pink-600 font-semibold">{formatPrice(item.price)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-pink-600 hover:bg-pink-700">
                  View All Items
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsContent;
