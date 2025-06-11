
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="relative h-[500px] md:h-[600px] bg-gradient-to-r from-pink-100 to-purple-100">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Beauty Tips & Inspiration for <span className="text-pink-600">Everyone</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover luxury Raw/ Virgin hair from Vietnam and South India.
            Ethically sourced, both processed and unprocessed, for my
            flawless queens who expect nothing less than
            excellence and quality
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-pink-600 hover:bg-pink-700">
              Latest Posts
            </Button>
            <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
              Beauty Tips
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-full overflow-hidden">
        <img
          src="/lovable-uploads/ina.jpg"
          alt="Flawless By Ina beauty products"
          className="w-full h-full object-cover opacity-80 md:opacity-40"
        />
      </div>    </div>
  );
};

export default HeroBanner;
