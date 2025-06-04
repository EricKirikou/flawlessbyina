
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Star, Heart } from "lucide-react";

const makeupProducts = [
  {
    id: "makeup-1",
    title: "Flawless Foundation - Medium",
    price: 45.99,
    originalPrice: 55.99,
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 245,
    description: "Full coverage foundation for flawless skin"
  },
  {
    id: "makeup-2",
    title: "Contour & Highlight Palette",
    price: 32.99,
    originalPrice: 42.99,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 189,
    description: "Professional contour and highlight palette"
  },
  {
    id: "makeup-3",
    title: "Eyeshadow Palette - Sunset",
    price: 28.99,
    originalPrice: 35.99,
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 156,
    description: "12-shade eyeshadow palette in warm tones"
  },
  {
    id: "makeup-4",
    title: "Matte Lipstick Set",
    price: 24.99,
    originalPrice: 34.99,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 298,
    description: "Set of 6 long-lasting matte lipsticks"
  },
  {
    id: "makeup-5",
    title: "Professional Makeup Brushes",
    price: 89.99,
    originalPrice: 119.99,
    imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 134,
    description: "15-piece professional makeup brush set"
  },
  {
    id: "makeup-6",
    title: "Glam Highlighter Palette",
    price: 19.99,
    originalPrice: 25.99,
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 167,
    description: "6-shade highlighter palette for radiant glow"
  }
];

const MakeupContent = () => {
  const { addItem } = useCart();
  const { formatPrice } = useCurrency();

  const handleAddToCart = (product: typeof makeupProducts[0]) => {
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Professional Makeup Collection</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your look with our premium makeup collection. From foundations to eyeshadows, 
            discover products that enhance your natural beauty.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {makeupProducts.map((product) => (
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
                {product.originalPrice > product.price && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
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

export default MakeupContent;
