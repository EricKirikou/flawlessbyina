import { useState } from 'react';
import { Link } from "react-router-dom";
import { Check, ChevronRight, ShoppingCart, Heart, Share2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const ColoredWigs = () => {
  // Color options with hex codes for visual representation
  const colors = [
    { name: "#613 Blonde", hex: "#E5C8A6" },
    { name: "Honey Brown", hex: "#B78B5B" },
    { name: "Burgundy", hex: "#800020" }
  ];

  // Wig images by color
  const images = {
    "#613 Blonde": [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    "Honey Brown": [
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    "Burgundy": [
      "https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ]
  };

  const lengths = ["14”", "16”", "18”", "20”", "22”", "24”"];
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedLength, setSelectedLength] = useState(lengths[2]); // Default to 18"
  const [selectedImage, setSelectedImage] = useState(images[selectedColor.name][0]);
  const [customRequest, setCustomRequest] = useState("");

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
            <Link to="/wigs" className="text-gray-600 hover:text-dustygold transition-colors">
              Wigs
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink className="text-dustygold font-medium">
            Flawless Glow - Custom Colored
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
              alt={`${selectedColor.name} colored wig`}
              className="w-full h-full object-cover object-center transition-opacity duration-300"
            />
            <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
              CUSTOM MADE
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {images[selectedColor.name].map((image, index) => (
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
                  alt={`${selectedColor.name} wig view ${index + 1}`}
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
            <span className="ml-2 text-sm text-gray-600">(62 reviews)</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Flawless Glow - Custom Colored Unit
          </h1>
          <p className="text-xl text-dustygold font-medium mb-4">
            From £220 | Lengths: 14”-24”
          </p>

          <div className="prose max-w-none mb-6">
            <p className="text-gray-600 leading-relaxed">
              For the bold and beautiful. This unit features raw Vietnamese virgin hair, 
              hand-colored to your chosen shade. Still raw, still flawless — just with extra personality.
            </p>
          </div>

          {/* Color Selector */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 text-gray-800">Select Color</h2>
            <div className="flex flex-wrap gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => {
                    setSelectedColor(color);
                    setSelectedImage(images[color.name][0]);
                  }}
                  className={`px-4 py-2 border rounded-md transition-all duration-200 flex items-center gap-2 ${
                    selectedColor.name === color.name
                      ? 'bg-dustygold text-white border-dustygold shadow-sm'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-blushpink/10 hover:border-dustygold'
                  }`}
                >
                  <span 
                    className="w-5 h-5 rounded-full border border-gray-200" 
                    style={{ backgroundColor: color.hex }}
                  ></span>
                  {color.name}
                </button>
              ))}
            </div>
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

          {/* Custom Request Input */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 text-gray-800">Custom Requests</h2>
            <textarea
              placeholder="Add curls, layers, baby hairs, or other special requests"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-dustygold focus:border-dustygold"
              rows={3}
              value={customRequest}
              onChange={(e) => setCustomRequest(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 text-gray-800">Premium Features</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <span className="text-gray-700">Professionally custom dyed</span>
              </li>
              <li className="flex items-start">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <span className="text-gray-700">HD lace for realistic scalp appearance</span>
              </li>
              <li className="flex items-start">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <span className="text-gray-700">Styled & shipped ready to wear</span>
              </li>
              <li className="flex items-start">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <span className="text-gray-700">Add curls, layers, or baby hairs on request</span>
              </li>
            </ul>
          </div>

          {/* Processing Time Notice */}
          <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="font-medium">Custom wigs take 5–7 business days to ship</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="flex-1 bg-dustygold hover:bg-blushpink h-14 text-white shadow-md hover:shadow-lg transition-all text-lg">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Custom Order - £{220 + (parseInt(selectedLength.replace(/[^0-9]/g, '')) - 14) * 10}
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
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Wig Details</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">About This Wig</h3>
            <p className="text-gray-600 mb-4">
              Each Flawless Glow unit is handcrafted using premium raw Vietnamese hair that's been 
              carefully colored by our professional stylists. Unlike processed hair, our colored units 
              maintain their natural softness and longevity.
            </p>
            <p className="text-gray-600">
              The HD lace front creates an undetectable hairline, while the custom coloring ensures 
              your wig looks vibrant and dimensional, just like natural hair.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Care Instructions</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <span>Use sulfate-free, color-safe shampoo</span>
              </li>
              <li className="flex items-start">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <span>Wash in cool water to preserve color</span>
              </li>
              <li className="flex items-start">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <span>Use thermal protectant before heat styling</span>
              </li>
              <li className="flex items-start">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <span>Store on a wig stand when not in use</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">More Custom Options</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="group relative">
            <Link to="/wigs/lace-front" className="block">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-2 shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="HD Lace Front Wig"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-gray-800 group-hover:text-dustygold transition-colors">HD Lace Front</h3>
              <p className="text-gray-600">From £250</p>
            </Link>
          </div>
          <div className="group relative">
            <Link to="/wigs/360-lace" className="block">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-2 shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="360 Lace Wig"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-gray-800 group-hover:text-dustygold transition-colors">360 Lace Wig</h3>
              <p className="text-gray-600">From £280</p>
            </Link>
          </div>
          <div className="group relative">
            <Link to="/wigs/balayage" className="block">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-2 shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Balayage Custom Wig"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-gray-800 group-hover:text-dustygold transition-colors">Balayage Custom</h3>
              <p className="text-gray-600">From £300</p>
            </Link>
          </div>
          <div className="group relative">
            <Link to="/wigs/glueless" className="block">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-2 shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Glueless Wig"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-gray-800 group-hover:text-dustygold transition-colors">Glueless Wig</h3>
              <p className="text-gray-600">From £230</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ColoredWigs;