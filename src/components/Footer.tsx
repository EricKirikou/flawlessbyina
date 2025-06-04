
import { Instagram, Twitter, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-customblack text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/003f47a8-ea1d-4fc5-b76b-c7a5d682e840.png" 
                alt="FlawlessByIna Logo" 
                className="h-16 w-auto mr-2"
              />
              <span className="text-2xl font-bold italic text-white">
                FlawlessByIna
              </span>
            </Link>
            <p className="mt-4 text-gray-400">
              Sharing beauty tips, makeup tutorials, and skincare routines to help you embrace your natural beauty.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com/flawless_by_Ina" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blushpink transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@flawless.by.ina" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blushpink transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/><path d="M13.5 6c0-1.4.5-2 2-3"/><path d="M12.5 6h4v4"/><path d="M17 8.5v7.5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5v-1a5 5 0 0 1 5-5z"/></svg>
              </a>
              <a href="https://youtube.com/LifestyleByIna" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blushpink transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://wa.me/+447909009155" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blushpink transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1z"/><path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1z"/><path d="M9 14a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5z"/></svg>
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-dustygold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/wigs" className="text-gray-400 hover:text-blushpink transition-colors">Wigs</Link></li>
              <li><Link to="/hair-extensions" className="text-gray-400 hover:text-blushpink transition-colors">Hair Extensions</Link></li>
              <li><Link to="/hair-care" className="text-gray-400 hover:text-blushpink transition-colors">Hair Care</Link></li>
              <li><Link to="/tools" className="text-gray-400 hover:text-blushpink transition-colors">Tools & Accessories</Link></li>
              <li><Link to="/makeup" className="text-gray-400 hover:text-blushpink transition-colors">Makeup</Link></li>
              <li><Link to="/skincare" className="text-gray-400 hover:text-blushpink transition-colors">Skincare</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-dustygold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><Link to="/beauty-services" className="text-gray-400 hover:text-blushpink transition-colors">Beauty Services</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-blushpink transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-blushpink transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-blushpink transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-blushpink transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-blushpink transition-colors">Returns & Exchanges</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-dustygold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-blushpink" />
                <span>(+44) 7909 009155</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-blushpink" />
                <span>Chippenham, Wiltshire<br />United Kingdom</span>
              </li>
              <li>info@flawlessbyina.com</li>
              <li className="mt-4">
                <strong className="text-dustygold">Hours:</strong><br />
                Mon-Fri: 9am - 6pm<br />
                Sat: 8am - 8pm<br />
                Sun: Closed
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} FlawlessByIna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
