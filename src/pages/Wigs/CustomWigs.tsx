import { useState } from 'react';
import { Link } from "react-router-dom";
import { Check, ChevronRight, ShoppingCart, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const CustomWigs = () => {
  // Customization options
  const lengths = ["12”", "14”", "16”", "18”", "20”", "22”", "24”", "26”", "28”", "30”"];
  const textures = ["Straight", "Wavy", "Curly"];
  const laceTypes = ["2x6 Closure", "5x5 Closure", "6x6 Closure", "13x4 Frontal", "13x6 Frontal"];
  const capSizes = ["Small (21.5”)", "Medium (22.5”)", "Large (23.5”)"];
  const colorOptions = ["Natural Black", "#613 Blonde", "Honey Brown", "Burgundy", "Custom Color (+£30)"];

  // State for selected options
  const [selectedLength, setSelectedLength] = useState(lengths[2]);
  const [selectedTexture, setSelectedTexture] = useState(textures[0]);
  const [selectedLaceType, setSelectedLaceType] = useState(laceTypes[0]);
  const [selectedCapSize, setSelectedCapSize] = useState(capSizes[1]);
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const [includeElasticBand, setIncludeElasticBand] = useState(false);
  const [customNotes, setCustomNotes] = useState("");

  // Calculate base price
  const calculatePrice = () => {
    let basePrice = 250; // Starting price
    // Add for length
    basePrice += (parseInt(selectedLength.replace(/[^0-9]/g, '')) - 12) * 5;
    // Add for lace type
    if (selectedLaceType.includes("Frontal")) basePrice += 50;
    // Add for custom color
    if (selectedColor.includes("Custom Color")) basePrice += 30;
    return basePrice;
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
            Custom Wig Builder
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Customization Form */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Build Your Own Wig
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Want something unique? Let us create a wig just for you.
          </p>

          {/* Length Selection */}
          <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">1. Select Length</h2>
            <div className="flex flex-wrap gap-3">
              {lengths.map((length) => (
                <button
                  key={length}
                  type="button"
                  onClick={() => setSelectedLength(length)}
                  className={`px-5 py-3 border rounded-md transition-all duration-200 ${
                    selectedLength === length
                      ? 'bg-dustygold text-white border-dustygold shadow-sm'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-dustygold'
                  }`}
                >
                  {length}
                </button>
              ))}
            </div>
          </div>

          {/* Texture Selection */}
          <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">2. Select Texture</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {textures.map((texture) => (
                <button
                  key={texture}
                  type="button"
                  onClick={() => setSelectedTexture(texture)}
                  className={`p-4 border rounded-md transition-all duration-200 flex flex-col items-center ${
                    selectedTexture === texture
                      ? 'bg-dustygold/10 border-dustygold shadow-sm'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-dustygold'
                  }`}
                >
                  <div className="w-16 h-16 mb-2 bg-gray-100 rounded-full flex items-center justify-center">
                    {texture === "Straight" && (
                      <div className="w-12 h-1 bg-gray-600 rounded-full"></div>
                    )}
                    {texture === "Wavy" && (
                      <svg viewBox="0 0 100 20" className="w-12">
                        <path d="M10,10 C20,0 30,20 40,10 C50,0 60,20 70,10 C80,0 90,20 100,10" 
                        stroke="currentColor" fill="none" strokeWidth="2"/>
                      </svg>
                    )}
                    {texture === "Curly" && (
                      <svg viewBox="0 0 100 20" className="w-12">
                        <path d="M10,10 C15,5 20,15 25,10 C30,5 35,15 40,10 C45,5 50,15 55,10 C60,5 65,15 70,10 C75,5 80,15 85,10 C90,5 95,15 100,10" 
                        stroke="currentColor" fill="none" strokeWidth="2"/>
                      </svg>
                    )}
                  </div>
                  <span>{texture}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Lace Type Selection */}
          <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">3. Select Lace Type</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {laceTypes.map((laceType) => (
                <button
                  key={laceType}
                  type="button"
                  onClick={() => setSelectedLaceType(laceType)}
                  className={`p-4 border rounded-md transition-all duration-200 ${
                    selectedLaceType === laceType
                      ? 'bg-dustygold/10 border-dustygold shadow-sm'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-dustygold'
                  }`}
                >
                  <div className="flex items-center">
                    <div className="mr-3 w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                      {laceType.includes("Closure") ? (
                        <div className="w-6 h-6 border border-gray-400"></div>
                      ) : (
                        <div className="w-6 h-6 border-t border-l border-r border-gray-400"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">{laceType}</h3>
                      <p className="text-sm text-gray-500">
                        {laceType.includes("Closure") ? "4x4 parting space" : "Full hairline coverage"}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Cap Size Selection */}
          <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">4. Select Cap Size</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {capSizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedCapSize(size)}
                  className={`p-4 border rounded-md transition-all duration-200 ${
                    selectedCapSize === size
                      ? 'bg-dustygold/10 border-dustygold shadow-sm'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-dustygold'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <span className="font-medium">{size.split(" (")[0]}</span>
                    <span className="text-sm text-gray-500">{size.match(/\(([^)]+)\)/)?.[1]}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">5. Select Color</h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {colorOptions.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={`p-3 border rounded-md transition-all duration-200 flex flex-col items-center ${
                    selectedColor === color
                      ? 'bg-dustygold/10 border-dustygold shadow-sm'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-dustygold'
                  }`}
                >
                  {color.includes("#") || color === "Natural Black" ? (
                    <div 
                      className="w-8 h-8 rounded-full mb-2 border border-gray-200"
                      style={{ 
                        backgroundColor: color.includes("#") 
                          ? color.split(" ")[0] 
                          : "#000" 
                      }}
                    ></div>
                  ) : (
                    <div className="w-8 h-8 rounded-full mb-2 bg-gradient-to-r from-amber-200 to-amber-600 border border-gray-200"></div>
                  )}
                  <span className="text-sm text-center">{color.replace(" (+£30)", "")}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Additional Options */}
          <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">6. Additional Options</h2>
            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  className="form-checkbox h-5 w-5 text-dustygold rounded border-gray-300 focus:ring-dustygold"
                  checked={includeElasticBand}
                  onChange={() => setIncludeElasticBand(!includeElasticBand)}
                />
                <span className="text-gray-700">
                  Add Elastic Band (+£15) - For glueless wear
                </span>
              </label>
            </div>
          </div>

          {/* Custom Notes */}
          <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">7. Special Instructions</h2>
            <textarea
              placeholder="Any specific styling requests? Baby hairs? Layering? etc."
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-dustygold focus:border-dustygold"
              rows={4}
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
            ></textarea>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Custom Wig</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Length:</span>
                  <span className="font-medium">{selectedLength}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Texture:</span>
                  <span className="font-medium">{selectedTexture}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lace Type:</span>
                  <span className="font-medium">{selectedLaceType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cap Size:</span>
                  <span className="font-medium">{selectedCapSize.split(" (")[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Color:</span>
                  <span className="font-medium">{selectedColor.replace(" (+£30)", "")}</span>
                </div>
                {includeElasticBand && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Elastic Band:</span>
                    <span className="font-medium">Included (+£15)</span>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>£{calculatePrice() + (includeElasticBand ? 15 : 0)}</span>
                </div>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-800 flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Custom wigs take 7-10 business days to create. We'll contact you to confirm details before production.</span>
                </p>
              </div>

              <Button className="w-full bg-dustygold hover:bg-blushpink h-14 text-white shadow-md hover:shadow-lg transition-all text-lg mb-4">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart - £{calculatePrice() + (includeElasticBand ? 15 : 0)}
              </Button>

              <Button variant="outline" className="w-full h-14 border-gray-300 hover:border-dustygold">
                <Heart className="mr-2 h-5 w-5 text-gray-700" />
                Save for Later
              </Button>
            </div>

            <div className="mt-6 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Why Custom?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  <span>Perfect fit for your head shape</span>
                </li>
                <li className="flex items-start">
                  <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  <span>Exactly your desired look</span>
                </li>
                <li className="flex items-start">
                  <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  <span>Higher quality than pre-made wigs</span>
                </li>
                <li className="flex items-start">
                  <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  <span>Professional consultation included</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomWigs;