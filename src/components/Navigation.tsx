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
      {/* Single instance of HeaderBanner - removed duplicate */}
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
                  
                  {/* Wigs Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-blushpink/10 text-customblack hover:text-dustygold">Wigs</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        {[
                          { path: "/wigs", title: "All Wigs", desc: "Browse our entire collection of premium wigs" },
                          { path: "/wigs/lace-front", title: "Lace Front Wigs", desc: "Natural-looking hairline with HD/Transparent lace" },
                          { path: "/wigs/full-lace", title: "Full Lace Wigs", desc: "Premium wigs with lace all around the perimeter" },
                          { path: "/wigs/360-lace", title: "360 Lace Wigs", desc: "All-around natural hairline for versatile styling" },
                          { path: "/wigs/upart-vpart", title: "U-Part / V-Part Wigs", desc: "Leave out your own hair for a natural blend" },
                          { path: "/wigs/headband", title: "Headband Wigs", desc: "Beginner-friendly wigs with attached headband" },
                          { path: "/wigs/closure", title: "Closure Wigs", desc: "Wigs with a natural-looking top closure" },
                          { path: "/wigs/glueless", title: "Glueless Wigs", desc: "Beginner-friendly wigs that require no adhesives" },
                          { path: "/wigs/custom", title: "Custom Units", desc: "Personalized wigs made to your specifications" },
                          { path: "/wigs/colored", title: "Colored Wigs", desc: "Pre-colored wigs in various shades and styles" }
                        ].map((item) => (
                          <li key={item.path}>
                            <NavigationMenuLink asChild>
                              <Link to={item.path} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                                <div className="text-sm font-medium leading-none">{item.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                  {item.desc}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  {/* Hair Extensions Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-blushpink/10 text-customblack hover:text-dustygold">Hair Extensions</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        {[
                          { path: "/hair-extensions", title: "All Hair Extensions", desc: "Browse our collection of premium hair extensions" },
                          { path: "/hair-extensions/ponytails", title: "Ponytails", desc: "Easy to fix ponytails for everyday use" },
                          { path: "/hair-extensions/bundles", title: "Bundle Deals", desc: "Vietnamese raw hair, Virgin unprocessed hair" }
                        ].map((item) => (
                          <li key={item.path}>
                            <NavigationMenuLink asChild>
                              <Link to={item.path} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                                <div className="text-sm font-medium leading-none">{item.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                  {item.desc}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  {/* Textures Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-blushpink/10 text-customblack hover:text-dustygold">Textures</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        {[
                          { path: "/textures/luxury-virgin-straight", title: "Luxury Virgin Straight", desc: "Premium luxury virgin straight hair" },
                          { path: "/textures/luxury-virgin-bodywave", title: "Luxury Virgin Bodywave", desc: "Luxury virgin bodywave texture" },
                          { path: "/textures/virgin-deepwave", title: "Virgin Deepwave", desc: "Beautiful virgin deepwave pattern" },
                          { path: "/textures/vietnam-raw-hair", title: "Vietnam Raw Hair", desc: "Premium Vietnam raw hair from single donor" },
                          { path: "/textures/yaki-straight", title: "Yaki Straight", desc: "Natural yaki straight texture" },
                          { path: "/textures/raw-burmese-curls", title: "Raw Burmese Curls", desc: "Authentic raw Burmese curly hair" },
                          { path: "/textures/raw-cambodian-curls", title: "Raw Cambodian Curls", desc: "Premium raw Cambodian curly hair" }
                        ].map((item) => (
                          <li key={item.path}>
                            <NavigationMenuLink asChild>
                              <Link to={item.path} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                                <div className="text-sm font-medium leading-none">{item.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                  {item.desc}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link to="/new-arrivals" className="px-4 py-2 text-customblack hover:text-dustygold transition-colors">New Arrivals</Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link to="/best-sellers" className="px-4 py-2 text-customblack hover:text-dustygold transition-colors">Best Sellers</Link>
                  </NavigationMenuItem>
                  
                  {/* Services Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-blushpink/10 text-customblack hover:text-dustygold">Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        {[
                          { path: "/salon", title: "Wigs & Hairstyling Services", desc: "Wig installation, Sew-in, Frontal & Closure installations" },
                          { path: "/beauty-services", title: "Makeup Services", desc: "Bridal makeup, Special events, Everyday looks & more" }
                        ].map((item) => (
                          <li key={item.path}>
                            <NavigationMenuLink asChild>
                              <Link to={item.path} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blushpink/20 hover:text-dustygold">
                                <div className="text-sm font-medium leading-none">{item.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                  {item.desc}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-customblack hover:text-dustygold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            
            {/* Desktop right-side icons */}
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

                {/* Mobile submenus */}
                {[
                  {
                    key: 'wigs',
                    title: 'Wigs',
                    items: [
                      { path: "/wigs", title: "All Wigs" },
                      { path: "/wigs/lace-front", title: "Lace Front Wigs" },
                      { path: "/wigs/full-lace", title: "Full Lace Wigs" },
                      { path: "/wigs/360-lace", title: "360 Lace Wigs" },
                      { path: "/wigs/upart-vpart", title: "U-Part / V-Part Wigs" },
                      { path: "/wigs/headband", title: "Headband Wigs" },
                      { path: "/wigs/closure", title: "Closure Wigs" },
                      { path: "/wigs/glueless", title: "Glueless Wigs" },
                      { path: "/wigs/custom", title: "Custom Units" },
                      { path: "/wigs/colored", title: "Colored Wigs" }
                    ]
                  },
                  {
                    key: 'hairExt',
                    title: 'Hair Extensions',
                    items: [
                      { path: "/hair-extensions", title: "All Hair Extensions" },
                      { path: "/hair-extensions/ponytails", title: "Ponytails" },
                      { path: "/hair-extensions/bundles", title: "Bundle Deals" }
                    ]
                  },
                  {
                    key: 'textures',
                    title: 'Textures',
                    items: [
                      { path: "/textures/luxury-virgin-straight", title: "Luxury Virgin Straight" },
                      { path: "/textures/luxury-virgin-bodywave", title: "Luxury Virgin Bodywave" },
                      { path: "/textures/virgin-deepwave", title: "Virgin Deepwave" },
                      { path: "/textures/vietnam-raw-hair", title: "Vietnam Raw Hair" },
                      { path: "/textures/yaki-straight", title: "Yaki Straight" },
                      { path: "/textures/raw-burmese-curls", title: "Raw Burmese Curls" },
                      { path: "/textures/raw-cambodian-curls", title: "Raw Cambodian Curls" }
                    ]
                  }
                ].map((menu) => (
                  <div key={menu.key} className="border-b border-gray-100 pb-2">
                    <button 
                      onClick={() => toggleSubmenu(menu.key)} 
                      className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors"
                    >
                      <span>{menu.title}</span>
                      {expandedSubmenus[menu.key] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    {expandedSubmenus[menu.key] && (
                      <div className="pl-4 mt-1 space-y-1 bg-gray-50/50 rounded-md py-2">
                        {menu.items.map((item) => (
                          <Link 
                            key={item.path}
                            to={item.path} 
                            onClick={() => setIsMenuOpen(false)} 
                            className="block px-3 py-1.5 rounded-md text-sm hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <Link to="/new-arrivals" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                  New Arrivals
                </Link>
                
                <Link to="/best-sellers" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md hover:bg-blushpink/10 text-customblack hover:text-dustygold transition-colors">
                  Best Sellers
                </Link>

                {/* Services Mobile Submenu */}
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
                
                {/* Mobile contact info */}
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