
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Star, Heart, Sparkles } from "lucide-react";

const newArrivals = [
  {
    id: "new-1",
    title: "Glam Goddess Wig - Rose Gold",
    price: 399.99,
    originalPrice: 499.99,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
    rating: 5.0,
    reviews: 23,
    description: "Limited edition rose gold lace front wig",
    isNew: true
  },
  {
    id: "new-2",
    title: "Illuminating Serum Foundation",
    price: 52.99,
    originalPrice: 65.99,
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 67,
    description: "New formula with hyaluronic acid",
    isNew: true
  },
  {
    id: "new-3",
    title: "Vitamin E Hair Mask",
    price: 34.99,
    originalPrice: 42.99,
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 45,
    description: "Intensive vitamin E hair treatment",
    isNew: true
  },
  {
    id: "new-4",
    title: "Luxury Eyeshadow Palette - Galaxy",
    price: 48.99,
    originalPrice: 58.99,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 89,
    description: "18-shade galaxy-inspired eyeshadow palette",
    isNew: true
  },
  {
    id: "new-5",
    title: "Brazilian Straight Bundle Deal",
    price: 249.99,
    originalPrice: 299.99,
    imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 34,
    description: "3-bundle deal with closure included",
    isNew: true
  },
  {
    id: "new-6",
    title: "Pro Contouring Kit",
    price: 39.99,
    originalPrice: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 56,
    description: "Complete contouring kit with brushes",
    isNew: true
  }
];

const NewArrivalsContent = () => {
  const { addItem } = useCart();
  const { formatPrice } = useCurrency();

  const handleAddToCart = (product: typeof newArrivals[0]) => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl
    });
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="text-pink-600 mr-3" size={40} />
            <h1 className="text-4xl font-bold text-gray-800">New Arrivals</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the latest additions to our beauty collection. Be the first to try 
            our newest products and stay ahead of the beauty trends.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newArrivals.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
                    <Heart size={20} />
                  </Button>
                </div>
                <div className="absolute top-4 left-4 bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">
                  New
                </div>
                {product.originalPrice > product.price && (
                  <div className="absolute top-12 left-4 bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
                    Sale
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800">{product.title}</CardTitle>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-pink-600">{formatPrice(product.price)}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-lg text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                  )}
                </div>
              </CardHeader>
              <CardFooter>
                <Button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-pink-600 hover:bg-pink-700"
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsContent;
