import { useState } from 'react';
import { Link } from "react-router-dom";
import { Check, ChevronRight, ShoppingCart, Heart, Share2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const LuxuryVirginStraight = () => {
  // Using high-quality placeholder images
  const images = [
    "https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  ];

  const lengths = ["12”", "14”", "16”", "18”", "20”", "22”", "24”", "26”", "28”", "30”"];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedLength, setSelectedLength] = useState(lengths[2]); // Default to 16"
  const [quantity, setQuantity] = useState(1);

  // Calculate price based on length
  const calculatePrice = (length: string) => {
    const basePrice = 110;
    const lengthInches = parseInt(length.replace(/[^0-9]/g, '')); // Remove non-numeric characters
    return basePrice + (lengthInches - 12) * 5;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb Navigation */}
      <Breadcrumb className="mb-6">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" className="text-gray-600 hover:text-dustygold transition-colors">
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/textures" className="text-gray-600 hover:text-dustygold transition-colors">
              Textures
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink className="text-dustygold font-medium">
            Luxury Virgin Straight
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <div>
          <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 aspect-square shadow-lg relative">
            <img
              src={selectedImage}
              alt="Luxury Virgin Straight Hair Bundle"
              className="w-full h-full object-cover object-center transition-opacity duration-300"
            />
            {/* Premium badge */}
            <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
              PREMIUM
            </div>
          </div>
          <div className="grid grid-cols-5 gap-3">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`aspect-square rounded-md overflow-hidden border-2 transition-all duration-200 ${
                  selectedImage === image 
                    ? 'border-dustygold scale-105 shadow-sm' 
                    : 'border-transparent hover:border-gray-300'
                }`}
              >
                <img
                  src={image}
                  alt={`Luxury Virgin Straight View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <div className="flex items-center mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">(48 reviews)</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Luxury Virgin Straight Bundles
          </h1>
          <p className="text-xl text-dustygold font-medium mb-4">
            £{calculatePrice(selectedLength)} | Lengths: 12”-30”
          </p>

          <div className="prose max-w-none mb-6">
            <p className="text-gray-600 leading-relaxed">
              Our premium virgin straight hair is collected from select donors in Brazil, 
              maintaining its natural integrity with zero chemical processing. The hair boasts 
              unparalleled softness, shine, and longevity.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 text-gray-800">Premium Features</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <span className="text-gray-700">100% cuticle-aligned virgin hair</span>
              </li>
              <li className="flex items-start">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <span className="text-gray-700">Naturally shiny and tangle-free</span>
              </li>
              <li className="flex items-start">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <span className="text-gray-700">Thick and full from root to tip</span>
              </li>
              <li className="flex items-start">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <span className="text-gray-700">Can be colored or bleached</span>
              </li>
              <li className="flex items-start">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <span className="text-gray-700">Lasts 12+ months with proper care</span>
              </li>
            </ul>
          </div>

          {/* Length Selector */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 text-gray-800">Select Length</h2>
            <div className="flex flex-wrap gap-2">
              {lengths.map((length) => (
                <button
                  key={length}
                  type="button"
                  onClick={() => setSelectedLength(length)}
                  className={`px-4 py-2 border rounded-md transition-all duration-200 ${
                    selectedLength === length
                      ? 'bg-dustygold text-white border-dustygold shadow-sm'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-blushpink/10 hover:border-dustygold'
                  }`}
                >
                  {length}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3 text-gray-800">Quantity</h2>
            <div className="flex items-center gap-4">
              <div className="flex border border-gray-300 rounded-md">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x border-gray-300 text-center w-12">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
              <span className="text-gray-600">
                {quantity} bundle{quantity > 1 ? 's' : ''} (100g each)
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="flex-1 bg-dustygold hover:bg-yellow-600 h-14 text-white shadow-md hover:shadow-lg transition-all text-lg">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart - £{(calculatePrice(selectedLength) * quantity)}
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" className="h-14 border-gray-300 hover:border-dustygold">
                <Heart className="mr-2 h-5 w-5 text-gray-700" />
                <span className="text-gray-700">Wishlist</span>
              </Button>
              <Button variant="outline" className="h-14 border-gray-300 hover:border-dustygold">
                <Share2 className="mr-2 h-5 w-5 text-gray-700" />
                <span className="text-gray-700">Share</span>
              </Button>
            </div>
          </div>

          {/* Guarantee Badge */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 flex items-start">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <Check className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Quality Guarantee</h3>
              <p className="text-sm text-gray-600">
                30-day money back guarantee. Free returns on unused hair.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Product Details</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">About This Hair</h3>
            <p className="text-gray-600 mb-4">
              Our Luxury Virgin Straight hair is hand-selected from donors in Brazil who have never 
              chemically treated their hair. Each bundle is cuticle-aligned to ensure natural flow 
              and minimal tangling.
            </p>
            <p className="text-gray-600">
              The hair maintains its luxurious softness and shine because it's never been stripped 
              of its natural proteins. You'll notice the difference in quality from the first touch.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Hair Care Guide</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <span>Wash with sulfate-free shampoo no more than twice weekly</span>
              </li>
              <li className="flex items-start">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <span>Use a heat protectant before any thermal styling</span>
              </li>
              <li className="flex items-start">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <span>Store in silk/satin when not in use to preserve moisture</span>
              </li>
              <li className="flex items-start">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <span>For coloring, consult a professional stylist</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Complete Your Look</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="group relative">
            <Link to="/textures/silk-straight" className="block">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-2 shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Silk Straight Hair"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-gray-800 group-hover:text-dustygold transition-colors">Silk Straight</h3>
              <p className="text-gray-600">From £120</p>
            </Link>
          </div>
          <div className="group relative">
            <Link to="/textures/body-wave" className="block">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-2 shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Brazilian Body Wave"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-gray-800 group-hover:text-dustygold transition-colors">Brazilian Body Wave</h3>
              <p className="text-gray-600">From £115</p>
            </Link>
          </div>
          <div className="group relative">
            <Link to="/accessories/silk-scarf" className="block">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-2 shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Silk Hair Scarf"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-gray-800 group-hover:text-dustygold transition-colors">Silk Hair Scarf</h3>
              <p className="text-gray-600">£24.99</p>
            </Link>
          </div>
          <div className="group relative">
            <Link to="/care/repair-mask" className="block">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-2 shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Hydrating Hair Mask"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-gray-800 group-hover:text-dustygold transition-colors">Hydrating Hair Mask</h3>
              <p className="text-gray-600">£18.99</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LuxuryVirginStraight;