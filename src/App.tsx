import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import DigitalProduct from "./pages/DigitalProduct";
import ServiceDesign from "./pages/ServiceDesign";
import Bags from "./pages/Bags";
import Sustainability from "./pages/Sustainability";
import Achievements from "./pages/Achievements";
import Academia from "./pages/Academia";
import Patents from "./pages/Patents";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/digital-product" element={<DigitalProduct />} />
          <Route path="/service-design" element={<ServiceDesign />} />
          <Route path="/bags" element={<Bags />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/academia" element={<Academia />} />
          <Route path="/patents" element={<Patents />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
