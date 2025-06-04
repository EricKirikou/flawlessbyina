
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CurrencyProvider } from "./contexts/CurrencyContext";
import { CartProvider } from "./contexts/CartContext";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CurrencyProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/wigs" element={<Wigs />} />
              <Route path="/salon" element={<Salon />} />
              <Route path="/makeup" element={<Makeup />} />
              <Route path="/skincare" element={<Skincare />} />
              <Route path="/hair-extensions" element={<HairExtensions />} />
              <Route path="/hair-care" element={<HairCare />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/new-arrivals" element={<NewArrivals />} />
              <Route path="/best-sellers" element={<BestSellers />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/beauty-services" element={<BeautyServices />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-success" element={<OrderSuccess />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </CurrencyProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
