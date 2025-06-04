
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Star, Heart, Trophy } from "lucide-react";

const bestSellers = [
  {
    id: "best-1",
    title: "Signature Lace Front Wig",
    price: 299.99,
    originalPrice: 399.99,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 567,
    description: "Our #1 bestselling lace front wig",
    rank: 1
  },
  {
    id: "best-2",
    title: "Flawless Coverage Foundation",
    price: 45.99,
    originalPrice: 55.99,
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 892,
    description: "Customer favorite foundation",
    rank: 2
  },
  {
    id: "best-3",
    title: "Miracle Hair Growth Serum",
    price: 39.99,
    originalPrice: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 445,
    description: "Top-rated hair growth treatment",
    rank: 3
  },
  {
    id: "best-4",
    title: "Professional Makeup Brush Set",
    price: 89.99,
    originalPrice: 119.99,
    imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 334,
    description: "Most purchased brush collection",
    rank: 4
  },
  {
    id: "best-5",
    title: "Vietnamese Hair Bundle Deal",
    price: 189.99,
    originalPrice: 229.99,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 278,
    description: "Best-selling hair extension bundle",
    rank: 5
  },
  {
    id: "best-6",
    title: "Glow Highlighting Palette",
    price: 32.99,
    originalPrice: 42.99,
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 512,
    description: "Fan-favorite highlighting palette",
    rank: 6
  }
];

const BestSellersContent = () => {
  const { addItem } = useCart();
  const { formatPrice } = useCurrency();

  const handleAddToCart = (product: typeof bestSellers[0]) => {
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
            <Trophy className="text-pink-600 mr-3" size={40} />
            <h1 className="text-4xl font-bold text-gray-800">Best Sellers</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our most loved products chosen by thousands of satisfied customers. 
            These tried-and-true favorites are guaranteed to deliver amazing results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group relative">
              <div className="absolute top-2 left-2 z-10 bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                #{product.rank}
              </div>
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
                <div className="absolute top-12 left-4 bg-purple-600 text-white px-2 py-1 rounded text-sm font-semibold">
                  Bestseller
                </div>
                {product.originalPrice > product.price && (
                  <div className="absolute top-20 left-4 bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
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

export default BestSellersContent;
