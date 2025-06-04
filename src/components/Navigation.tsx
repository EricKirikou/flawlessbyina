import { Instagram, Facebook, Search, ShoppingCart, Phone, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import CurrencySelector from "./CurrencySelector";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const HeaderBanner = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate animation values based on scroll
  const translateY = Math.min(scrollY / 3, 20);
  const scale = 1 - Math.min(scrollY / 1000, 0.05);

  return (
    <div 
      className="w-full bg-pink-600 text-white text-center py-3 px-4 relative overflow-hidden shadow-md"
      style={{
        transform: `translateY(-${translateY}px) scaleX(${scale})`,
      }}
    >
      <div className="container mx-auto flex items-center justify-center">
        <div className="mr-3 animate-pulse">
          <span className="text-xl">🎀</span>
        </div>
        <p className="font-medium text-sm sm:text-base">
          Enjoy <span className="font-bold">10% Off</span> All Orders + <span className="font-bold">FREE Shipping</span> in UK • 
          Use code: <span className="font-bold bg-pink-700 px-2 py-1 rounded-md ml-1">FLAWLESS10</span>
        </p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-pink-500/30 rounded-full"
            style={{
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 8 + 8}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSubmenus, setExpandedSubmenus] = useState<{[key: string]: boolean}>({});

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (submenu: string) => {
    setExpandedSubmenus(prev => ({
      ...prev,
      [submenu]: !prev[submenu]
    }));
  };

  return (
    <>
      <HeaderBanner />
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-dustygold/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/003f47a8-ea1d-4fc5-b76b-c7a5d682e840.png" 
                alt="FlawlessByIna Logo" 
                className="h-12 w-auto mr-2"
              />
              <span className="text-2xl font-bold italic text-black">
                FlawlessByIna
              </span>
            </Link>
            
            <div className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="/" className="px-4 py-2 text-customblack hover:text-dustygold transition-colors">Home</Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link to="/shop" className="px-4 py-2 text-customblack hover:text-dustygold transition-colors">Shop</Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-blushpink/10 text-customblack hover:text-dustygold">Wigs</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/wigs" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                              <div className="text-sm font-medium leading-none">All Wigs</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Browse our entire collection of premium wigs
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/wigs/lace-front" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                              <div className="text-sm font-medium leading-none">Lace Front Wigs</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Natural-looking hairline with HD/Transparent lace
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/wigs/full-lace" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                              <div className="text-sm font-medium leading-none">Full Lace Wigs</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Premium wigs with lace all around the perimeter
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/wigs/360-lace" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                              <div className="text-sm font-medium leading-none">360 Lace Wigs</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                All-around natural hairline for versatile styling
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/wigs/upart-vpart" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                              <div className="text-sm font-medium leading-none">U-Part / V-Part Wigs</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Leave out your own hair for a natural blend
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/wigs/headband" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                              <div className="text-sm font-medium leading-none">Headband Wigs</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Beginner-friendly wigs with attached headband
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/wigs/closure" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                              <div className="text-sm font-medium leading-none">Closure Wigs</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Wigs with a natural-looking top closure
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/wigs/glueless" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                              <div className="text-sm font-medium leading-none">Glueless Wigs</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Beginner-friendly wigs that require no adhesives
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/wigs/custom" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                              <div className="text-sm font-medium leading-none">Custom Units</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Personalized wigs made to your specifications
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/wigs/colored" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                              <div className="text-sm font-medium leading-none">Colored Wigs</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Pre-colored wigs in various shades and styles
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-blushpink/10 text-customblack hover:text-dustygold">Hair Extensions</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/hair-extensions" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                              <div className="text-sm font-medium leading-none">All Hair Extensions</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Browse our collection of premium hair extensions
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/hair-extensions/ponytails" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                              <div className="text-sm font-medium leading-none">Ponytails</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Easy to fix ponytails for everyday use
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/hair-extensions/bundles" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                              <div className="text-sm font-medium leading-none">Bundle Deals</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Vietnamese raw hair, Virgin unprocessed hair
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-blushpink/10 text-customblack hover:text-dustygold">Textures</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/textures/luxury-virgin-straight" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                              <div className="text-sm font-medium leading-none">Luxury Virgin Straight</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Premium luxury virgin straight hair
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/textures/luxury-virgin-bodywave" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                              <div className="text-sm font-medium leading-none">Luxury Virgin Bodywave</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Luxury virgin bodywave texture
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/textures/virgin-deepwave" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                              <div className="text-sm font-medium leading-none">Virgin Deepwave</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Beautiful virgin deepwave pattern
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/textures/vietnam-raw-hair" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                              <div className="text-sm font-medium leading-none">Vietnam Raw Hair</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Premium Vietnam raw hair from single donor
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/textures/yaki-straight" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                              <div className="text-sm font-medium leading-none">Yaki Straight</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Natural yaki straight texture
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/textures/raw-burmese-curls" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                              <div className="text-sm font-medium leading-none">Raw Burmese Curls</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Authentic raw Burmese curly hair
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/textures/raw-cambodian-curls" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                              <div className="text-sm font-medium leading-none">Raw Cambodian Curls</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Premium raw Cambodian curly hair
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link to="/new-arrivals" className="px-4 py-2 text-customblack hover:text-dustygold transition-colors">New Arrivals</Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link to="/best-sellers" className="px-4 py-2 text-customblack hover:text-dustygold transition-colors">Best Sellers</Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-blushpink/10 text-customblack hover:text-dustygold">Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/salon" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                              <div className="text-sm font-medium leading-none">Wigs & Hairstyling Services</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Wig installation, Sew-in, Frontal & Closure installations
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/beauty-services" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                              <div className="text-sm font-medium leading-none">Makeup Services</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Bridal makeup, Special events, Everyday looks & more
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-customblack hover:text-dustygold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:+447909009155" className="flex items-center text-customblack hover:text-dustygold transition-colors">
                <Phone size={18} className="mr-2" />
                <span>(+44) 7909 009155</span>
              </a>
              <CurrencySelector />
              <button className="text-customblack hover:text-dustygold transition-colors">
                <Search size={20} />
              </button>
              <button className="text-customblack hover:text-dustygold transition-colors">
                <ShoppingCart size={20} />
              </button>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-customblack hover:text-dustygold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-customblack hover:text-dustygold transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-100 max-h-[80vh] overflow-y-auto">
              <div className="space-y-2">
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                  Home
                </Link>

                <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                  Shop
                </Link>

                {/* Wigs Submenu */}
                <div className="border-b border-gray-100 pb-2">
                  <button 
                    onClick={() => toggleSubmenu('wigs')} 
                    className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors"
                  >
                    <span>Wigs</span>
                    {expandedSubmenus.wigs ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {expandedSubmenus.wigs && (
                    <div className="pl-4 mt-1 space-y-1 bg-gray-50/50 rounded-md py-2">
                      <Link to="/wigs" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 rounded-md text-sm hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                        All Wigs
                      </Link>
                      <Link to="/wigs/lace-front" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 rounded-md text-sm hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                        Lace Front Wigs
                      </Link>
                      <Link to="/wigs/full-lace" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 rounded-md text-sm hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                        Full Lace Wigs
                      </Link>
                      <Link to="/wigs/360-lace" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 rounded-md text-sm hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                        360 Lace Wigs
                      </Link>
                      <Link to="/wigs/upart-vpart" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 rounded-md text-sm hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                        U-Part / V-Part Wigs
                      </Link>
                      <Link to="/wigs/headband" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 rounded-md text-sm hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                        Headband Wigs
                      </Link>
                      <Link to="/wigs/closure" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 rounded-md text-sm hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                        Closure Wigs
                      </Link>
                      <Link to="/wigs/glueless" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 rounded-md text-sm hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                        Glueless Wigs
                      </Link>
                      <Link to="/wigs/custom" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 rounded-md text-sm hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                        Custom Units
                      </Link>
                      <Link to="/wigs/colored" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 rounded-md text-sm hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                        Colored Wigs
                      </Link>
                    </div>
                  )}
                </div>

                {/* Hair Extensions Submenu */}
                <div className="border-b border-gray-100 pb-2">
                  <button 
                    onClick={() => toggleSubmenu('hairExt')} 
                    className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors"
                  >
                    <span>Hair Extensions</span>
                    {expandedSubmenus.hairExt ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {expandedSubmenus.hairExt && (
                    <div className="pl-4 mt-1 space-y-1 bg-gray-50/50 rounded-md py-2">
                      <Link to="/hair-extensions" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 rounded-md text-sm hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                        All Hair Extensions
                      </Link>
                      <Link to="/hair-extensions/ponytails" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 rounded-md text-sm hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                        Ponytails
                      </Link>
                      <Link to="/hair-extensions/bundles" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 rounded-md text-sm hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                        Bundle Deals
                      </Link>
                    </div>
                  )}
                </div>

                {/* Textures Submenu */}
                <div className="border-b border-gray-100 pb-2">
                  <button 
                    onClick={() => toggleSubmenu('textures')} 
                    className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors"
                  >
                    <span>Textures</span>
                    {expandedSubmenus.textures ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {expandedSubmenus.textures && (
                    <div className="pl-4 mt-1 space-y-1 bg-gray-50/50 rounded-md py-2">
                      <Link to="/textures/luxury-virgin-straight" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 rounded-md text-sm hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                        Luxury Virgin Straight
                      </Link>
                      <Link to="/textures/luxury-virgin-bodywave" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 rounded-md text-sm hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                        Luxury Virgin Bodywave
                      </Link>
                      <Link to="/textures/virgin-deepwave" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 rounded-md text-sm hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                        Virgin Deepwave
                      </Link>
                      <Link to="/textures/vietnam-raw-hair" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 rounded-md text-sm hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                        Vietnam Raw Hair
                      </Link>
                      <Link to="/textures/yaki-straight" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 rounded-md text-sm hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                        Yaki Straight
                      </Link>
                      <Link to="/textures/raw-burmese-curls" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 rounded-md text-sm hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                        Raw Burmese Curls
                      </Link>
                      <Link to="/textures/raw-cambodian-curls" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 rounded-md text-sm hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                        Raw Cambodian Curls
                      </Link>
                    </div>
                  )}
                </div>

                <Link to="/new-arrivals" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                  New Arrivals
                </Link>
                
                <Link to="/best-sellers" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                  Best Sellers
                </Link>

                {/* Services Submenu */}
                <div className="border-b border-gray-100 pb-2">
                  <button 
                    onClick={() => toggleSubmenu('services')} 
                    className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors"
                  >
                    <span>Services</span>
                    {expandedSubmenus.services ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {expandedSubmenus.services && (
                    <div className="pl-4 mt-1 space-y-1 bg-gray-50/50 rounded-md py-2">
                      <Link to="/salon" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 rounded-md text-sm hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                        Wigs & Hairstyling Services
                      </Link>
                      <Link to="/beauty-services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 rounded-md text-sm hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                        Makeup Services
                      </Link>
                    </div>
                  )}
                </div>
                
                {/* Contact info for mobile */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a href="tel:+447909009155" className="flex items-center px-3 py-2 text-customblack hover:text-dustygold transition-colors">
                    <Phone size={18} className="mr-2" />
                    <span>(+44) 7909 009155</span>
                  </a>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex space-x-4 px-3">
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-customblack hover:text-dustygold transition-colors">
                        <Instagram size={20} />
                      </a>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-customblack hover:text-dustygold transition-colors">
                        <Facebook size={20} />
                      </a>
                    </div>
                    
                    <div className="flex space-x-4 px-3">
                      <button className="text-customblack hover:text-dustygold transition-colors">
                        <Search size={20} />
                      </button>
                      <button className="text-customblack hover:text-dustygold transition-colors">
                        <ShoppingCart size={20} />
                      </button>
                      <CurrencySelector />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;