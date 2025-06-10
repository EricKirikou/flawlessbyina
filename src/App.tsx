import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CurrencyProvider } from "./contexts/CurrencyContext";
import { CartProvider } from "./contexts/CartContext";
import Navigation from "./components/Navigation"; // Import your Navigation component

// Page Components
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";
import Wigs from "./pages/Wigs";
import Salon from "./pages/Salon";
import Makeup from "./pages/Makeup";
import Skincare from "./pages/Skincare";
import HairExtensions from "./pages/HairExtensions";
import HairCare from "./pages/HairCare";
import Tools from "./pages/Tools";
import NewArrivals from "./pages/NewArrivals";
import BestSellers from "./pages/BestSellers";
import Booking from "./pages/Booking";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import BeautyServices from "./pages/BeautyServices";

// Texture Pages
import VietnamRawHair from "./pages/Textures/VietnamRawHair";
// import LuxuryVirginStraight from "./pages/Textures/LuxuryVirginStraight";
// import LuxuryVirginBodywave from "./pages/Textures/LuxuryVirginBodywave";
// import VirginDeepwave from "./pages/Textures/VirginDeepwave";
// import YakiStraight from "./pages/Textures/YakiStraight";
// import RawBurmeseCurls from "./pages/Textures/RawBurmeseCurls";
// import RawCambodianCurls from "./pages/Textures/RawCambodianCurls";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CurrencyProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navigation /> {/* Navigation now appears on all pages */}
            <main className="min-h-[calc(100vh-160px)]"> {/* Adjust based on your header/footer height */}
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Index />} />
                <Route path="/shop" element={<Shop />} />
                
                {/* Wigs Routes */}
                <Route path="/wigs" element={<Wigs />} />
                <Route path="/wigs/lace-front" element={<Wigs />} />
                <Route path="/wigs/full-lace" element={<Wigs />} />
                <Route path="/wigs/360-lace" element={<Wigs />} />
                <Route path="/wigs/upart-vpart" element={<Wigs />} />
                <Route path="/wigs/headband" element={<Wigs />} />
                <Route path="/wigs/closure" element={<Wigs />} />
                <Route path="/wigs/glueless" element={<Wigs />} />
                <Route path="/wigs/custom" element={<Wigs />} />
                <Route path="/wigs/colored" element={<Wigs />} />
                
                {/* Hair Extensions */}
                <Route path="/hair-extensions" element={<HairExtensions />} />
                <Route path="/hair-extensions/ponytails" element={<HairExtensions />} />
                <Route path="/hair-extensions/bundles" element={<HairExtensions />} />
                
                {/* Texture Routes */}
                <Route path="/textures/vietnam-raw-hair" element={<VietnamRawHair />} />
                {/* <Route path="/textures/luxury-virgin-straight" element={<LuxuryVirginStraight />} />
                <Route path="/textures/luxury-virgin-bodywave" element={<LuxuryVirginBodywave />} />
                <Route path="/textures/virgin-deepwave" element={<VirginDeepwave />} />
                <Route path="/textures/yaki-straight" element={<YakiStraight />} />
                <Route path="/textures/raw-burmese-curls" element={<RawBurmeseCurls />} />
                <Route path="/textures/raw-cambodian-curls" element={<RawCambodianCurls />} /> */}
                
                {/* Other Routes */}
                <Route path="/salon" element={<Salon />} />
                <Route path="/makeup" element={<Makeup />} />
                <Route path="/skincare" element={<Skincare />} />
                <Route path="/hair-care" element={<HairCare />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/new-arrivals" element={<NewArrivals />} />
                <Route path="/best-sellers" element={<BestSellers />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/beauty-services" element={<BeautyServices />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-success" element={<OrderSuccess />} />
                
                {/* Catch-all 404 Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            {/* Add your Footer component here if you have one */}
          </BrowserRouter>
        </CartProvider>
      </CurrencyProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;