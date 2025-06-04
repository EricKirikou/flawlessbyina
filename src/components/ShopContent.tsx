
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Store, Scissors, Palette, Sparkles, Brush, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const shopCategories = [
  {
    id: 1,
    title: "Wigs",
    description: "Premium quality wigs in various styles and textures",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    icon: Scissors,
    link: "/wigs",
    productCount: "50+ products"
  },
  {
    id: 2,
    title: "Hair Extensions",
    description: "Ponytails and bundle deals with Vietnamese raw hair",
    imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    icon: Scissors,
    link: "/hair-extensions",
    productCount: "30+ products"
  },
  {
    id: 3,
    title: "Hair Care",
    description: "Maintain your hair with our premium care products",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    icon: Brush,
    link: "/hair-care",
    productCount: "25+ products"
  },
  {
    id: 4,
    title: "Makeup",
    description: "Professional makeup products for every occasion",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    icon: Palette,
    link: "/makeup",
    productCount: "40+ products"
  },
  {
    id: 5,
    title: "Skincare",
    description: "Nourish your skin with our skincare collection",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    icon: Sparkles,
    link: "/skincare",
    productCount: "20+ products"
  },
  {
    id: 6,
    title: "Tools & Accessories",
    description: "Professional tools for hair styling and makeup",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    icon: Wrench,
    link: "/tools",
    productCount: "35+ products"
  }
];

const ShopContent = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Store className="text-pink-600 mr-3" size={40} />
            <h1 className="text-4xl font-bold text-gray-800">Shop All Products</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our complete collection of premium beauty products. From wigs and hair extensions 
            to makeup and skincare, we have everything you need to embrace your natural beauty.
          </p>
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopCategories.map((category) => (
            <Card key={category.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={category.imageUrl} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <category.icon className="text-pink-600" size={24} />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">{category.title}</CardTitle>
                <p className="text-gray-600">{category.description}</p>
                <p className="text-pink-600 font-semibold text-sm">{category.productCount}</p>
              </CardHeader>
              <CardFooter>
                <Button asChild className="w-full bg-pink-600 hover:bg-pink-700">
                  <Link to={category.link}>
                    Shop {category.title}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Featured Banner */}
        <div className="mt-16 bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">New to FlawlessByIna?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Get exclusive access to beauty tips, tutorials, and special offers. 
            Follow us on social media for the latest updates and styling inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
              <Link to="/beauty-services">Book a Service</Link>
            </Button>
            <Button asChild className="bg-pink-600 hover:bg-pink-700">
              <Link to="/new-arrivals">View New Arrivals</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopContent;
