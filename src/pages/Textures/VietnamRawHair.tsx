import { useState } from 'react';
import { Link } from "react-router-dom";
import { Check, ChevronRight, ShoppingCart, Heart, Share2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const VietnamRawHair = () => {
  // Using placeholder images from Unsplash and Picsum
  const images = [
    "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  ];

  const lengths = ["10”", "12”", "14”", "16”", "18”", "20”", "22”", "24”", "26”", "28”", "30”"];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedLength, setSelectedLength] = useState(lengths[0]);

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
            Vietnam Raw Hair
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <div>
          <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 aspect-square shadow-md relative">
            <img
              src={selectedImage}
              alt="Raw Vietnamese Straight Hair Bundle"
              className="w-full h-full object-cover object-center transition-opacity duration-300"
            />
            {/* Authenticity Badge */}
            <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
              AUTHENTIC
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
                  alt={`Vietnamese Hair View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          {/* Star Rating */}
          <div className="flex items-center mb-2">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <Star className="w-5 h-5 text-yellow-400" />
            </div>
            <span className="ml-2 text-sm text-gray-600">(36 reviews)</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Raw Vietnamese Straight Bundles
          </h1>
          <p className="text-xl text-dustygold font-medium mb-4">
            From £95 | Lengths: 10”-30”
          </p>

          <div className="prose max-w-none mb-6">
            <p className="text-gray-600 leading-relaxed">
              Sleek, soft, and naturally straight – this hair is sourced directly from rural Vietnam and never chemically processed. 
              Its silky texture makes it perfect for elegant, polished looks.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 text-gray-800">Features</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <span className="text-gray-700">Silky and smooth finish</span>
              </li>
              <li className="flex items-start">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <span className="text-gray-700">Low-maintenance styling</span>
              </li>
              <li className="flex items-start">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <span className="text-gray-700">Double drawn available</span>
              </li>
              <li className="flex items-start">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <span className="text-gray-700">Can be dyed up to 613</span>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">Perfect For</h2>
            <p className="text-gray-600">
              Silk presses, bone-straight installs, or long-lasting wigs.
            </p>
          </div>

          {/* Length Selector */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3 text-gray-800">Select Length</h2>
            <div className="flex flex-wrap gap-2">
              {lengths.map((length) => (
                <button
                  key={length}
                  type="button"
                  onClick={() => setSelectedLength(length)}
                  className={`px-4 py-2 border rounded-md transition-colors duration-200 ${
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

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="flex-1 bg-dustygold hover:bg-blushpink h-12 text-white shadow-md hover:shadow-lg transition-all">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart - £{selectedLength === "30”" ? "120" : "95"}
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" className="h-12 border-gray-300 hover:border-dustygold">
                <Heart className="mr-2 h-4 w-4 text-gray-700" />
                <span className="text-gray-700">Wishlist</span>
              </Button>
              <Button variant="outline" className="h-12 border-gray-300 hover:border-dustygold">
                <Share2 className="mr-2 h-4 w-4 text-gray-700" />
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
        <h2 className="text-xl font-bold mb-6 text-gray-800">Product Details</h2>
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-gray-800">Quality Assurance</h3>
          <p className="text-gray-600">
            Our Vietnamese raw hair is 100% virgin hair, never chemically processed. 
            Each bundle is collected from a single donor to ensure consistency in texture and color.
          </p>

          <h3 className="text-lg font-semibold mt-6 text-gray-800">Hair Care Instructions</h3>
          <ul className="text-gray-600 space-y-1">
            <li>Wash with sulfate-free shampoo</li>
            <li>Use wide-tooth comb for detangling</li>
            <li>Air dry or use heat protectant when styling</li>
            <li>Store in a silk/satin bag when not in use</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 text-gray-800">Shipping & Returns</h3>
          <p className="text-gray-600">
            Free shipping within the UK. International shipping available. 
            14-day return policy on unused hair with original packaging.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="group relative">
            <Link to="/textures/luxury-virgin-straight" className="block">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-2 shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Luxury Virgin Straight Hair"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-gray-800 group-hover:text-dustygold transition-colors">Luxury Virgin Straight</h3>
              <p className="text-gray-600">From £110</p>
            </Link>
          </div>
          <div className="group relative">
            <Link to="/textures/yaki-straight" className="block">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-2 shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Yaki Straight Hair"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-gray-800 group-hover:text-dustygold transition-colors">Yaki Straight</h3>
              <p className="text-gray-600">From £100</p>
            </Link>
          </div>
          <div className="group relative">
            <Link to="/textures/raw-burmese-curls" className="block">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-2 shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Raw Burmese Curls"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-gray-800 group-hover:text-dustygold transition-colors">Raw Burmese Curls</h3>
              <p className="text-gray-600">From £130</p>
            </Link>
          </div>
          <div className="group relative">
            <Link to="/textures/brazilian-body-wave" className="block">
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
        </div>
      </section>
    </div>
  );
};

export default VietnamRawHair;