
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Star, Heart } from "lucide-react";

const wigsProducts = [
  {
    id: "wig-1",
    title: "Natural Straight Lace Front Wig",
    price: 299.99,
    originalPrice: 399.99,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 124,
    description: "Premium quality human hair lace front wig"
  },
  {
    id: "wig-2", 
    title: "Curly Bob Wig - Medium Brown",
    price: 249.99,
    originalPrice: 329.99,
    imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 89,
    description: "Bouncy curly bob in beautiful medium brown"
  },
  {
    id: "wig-3",
    title: "Long Wavy Blonde Wig",
    price: 349.99,
    originalPrice: 449.99,
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 156,
    description: "Gorgeous long wavy blonde with highlights"
  },
  {
    id: "wig-4",
    title: "Pixie Cut Wig - Black",
    price: 179.99,
    originalPrice: 229.99,
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 78,
    description: "Chic and stylish pixie cut in jet black"
  },
  {
    id: "wig-5",
    title: "Afro Kinky Curly Wig",
    price: 279.99,
    originalPrice: 359.99,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 203,
    description: "Natural afro kinky curly texture"
  },
  {
    id: "wig-6",
    title: "Red Copper Straight Wig",
    price: 329.99,
    originalPrice: 429.99,
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 91,
    description: "Stunning red copper straight hair"
  }
];

const WigsContent = () => {
  const { addItem } = useCart();
  const { formatPrice } = useCurrency();

  const handleAddToCart = (product: typeof wigsProducts[0]) => {
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Premium Wigs Collection</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our stunning collection of premium wigs in various styles, textures, and colors. 
            Each piece is carefully crafted for natural look and comfort.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wigsProducts.map((product) => (
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

export default WigsContent;
