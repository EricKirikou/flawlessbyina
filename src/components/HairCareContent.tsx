
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Star, Heart } from "lucide-react";

const hairCareProducts = [
  {
    id: "care-1",
    title: "Moisturizing Shampoo",
    price: 24.99,
    originalPrice: 29.99,
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 234,
    description: "Sulfate-free moisturizing shampoo for all hair types"
  },
  {
    id: "care-2",
    title: "Deep Conditioning Treatment",
    price: 32.99,
    originalPrice: 39.99,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 189,
    description: "Intensive deep conditioning mask for damaged hair"
  },
  {
    id: "care-3",
    title: "Leave-In Conditioner",
    price: 18.99,
    originalPrice: 23.99,
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 156,
    description: "Lightweight leave-in conditioner for daily use"
  },
  {
    id: "care-4",
    title: "Hair Growth Oil",
    price: 29.99,
    originalPrice: 34.99,
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 298,
    description: "Natural hair growth oil with essential nutrients"
  },
  {
    id: "care-5",
    title: "Heat Protection Spray",
    price: 16.99,
    originalPrice: 21.99,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 167,
    description: "Thermal protection spray for styling tools"
  },
  {
    id: "care-6",
    title: "Curl Defining Cream",
    price: 22.99,
    originalPrice: 27.99,
    imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 134,
    description: "Define and enhance natural curls with this cream"
  }
];

const HairCareContent = () => {
  const { addItem } = useCart();
  const { formatPrice } = useCurrency();

  const handleAddToCart = (product: typeof hairCareProducts[0]) => {
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Hair Care Essentials</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nourish and protect your hair with our premium hair care collection. 
            From cleansing to styling, we have everything you need for healthy hair.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hairCareProducts.map((product) => (
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

export default HairCareContent;
