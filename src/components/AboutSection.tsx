
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Youtube as YouTubeIcon, Facebook } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-pink-100 absolute top-0 left-0 w-full h-full -translate-x-4 -translate-y-4 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
              alt="Bettina - Beauty Artist" 
              className="w-full h-auto rounded shadow-lg relative z-10"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Hi there, I'm Bettina!
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate hair and makeup artist with over three years of hands-on experience in helping 
              clients look and feel their most beautiful. What started as a love for making people feel pretty 
              has grown into a dedicated career built on skill, creativity, and continuous learning.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I specialize in both wig making and hairstyling as a self-taught hair specialist, and I received 
              professional training in makeup artistry. While I've mastered the art of bridal makeup, I work across 
              a range of styles—from soft, natural looks to full glam for any occasion.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My goal is always to enhance natural beauty while making my clients feel confident and radiant. 
              I believe in staying current and continually improving, so I'm always open to learning new 
              techniques and trends in the beauty industry.
            </p>
            
            <div className="flex items-center space-x-5 mb-6">
              <a href="https://instagram.com/flawless_by_Ina" target="_blank" rel="noopener noreferrer" 
                className="text-customblack hover:text-blushpink transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://tiktok.com/@flawless.by.ina" target="_blank" rel="noopener noreferrer" 
                className="text-customblack hover:text-blushpink transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="lucide lucide-tiktok">
                  <path d="M9 12a4 4 0 1 0 4 4V9.72A7.33 7.33 0 0 0 15 10c.71.06 1.39.06 2 0v-3c-.6.05-1.29.09-2-.05A4 4 0 0 1 13 6c-1.3.02-2.4-.87-3-2H7v13a4 4 0 0 1-4 4"></path>
                </svg>
              </a>
              <a href="https://youtube.com/LifestyleByIna" target="_blank" rel="noopener noreferrer" 
                className="text-customblack hover:text-blushpink transition-colors">
                <YouTubeIcon size={24} />
              </a>
              <a href="https://wa.me/+447909009155" target="_blank" rel="noopener noreferrer" 
                className="text-customblack hover:text-blushpink transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="lucide lucide-whatsapp">
                  <path d="M17.7 6.7A7.8 7.8 0 0 0 12 4.2a8 8 0 0 0-8 8 8.1 8.1 0 0 0 1.5 4.7l-1.5 4.3 4.4-1.4a8 8 0 0 0 3.6.9 8 8 0 0 0 8-8 7.8 7.8 0 0 0-2.3-6Z"></path>
                  <path d="M12 19.9a6.6 6.6 0 0 1-3.4-.9l-.2-.2-2.6.8.9-2.5-.2-.2a6.6 6.6 0 0 1-1-3.7 6.6 6.6 0 0 1 6.6-6.6 6.6 6.6 0 0 1 4.6 1.9 6.4 6.4 0 0 1 1.9 4.7 6.5 6.5 0 0 1-6.6 6.7Z"></path>
                  <path d="M15.9 14.8c-.2-.1-.9-.4-1-.5-.2-.1-.3-.1-.4.1-.1.2-.5.5-.6.6-.1.2-.2.2-.4.1a5.2 5.2 0 0 1-2.6-2.2c-.2-.4 0-.5.2-.6l.2-.4a.9.9 0 0 0 .1-.5v-.4c0-.2-.4-1-.5-1.3s-.3-.3-.4-.3h-.4c-.2 0-.5.2-.6.4a1.8 1.8 0 0 0-.6 1.4c0 .8.6 1.6.7 1.7s1.2 1.9 3 2.6a3.7 3.7 0 0 0 1.5.4c.6 0 1.7-.3 2-1.1a2 2 0 0 0 .1-1Zm1.4-9.2"></path>
                </svg>
              </a>
            </div>
            
            <Button asChild className="bg-pink-600 hover:bg-pink-700">
              <Link to="/about">
                Learn More About Flawless By Ina Studios
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
