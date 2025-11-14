import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AIBuilder from "./pages/AIBuilder";
import BoltConfig from "./pages/BoltConfig";
import Building from "./pages/Building";
import Success from "./pages/Success";
import Templates from "./pages/Templates";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ai-builder" element={<AIBuilder />} />
          <Route path="/bolt-config" element={<BoltConfig />} />
          <Route path="/lovable-config" element={<BoltConfig />} />
          <Route path="/replit-config" element={<BoltConfig />} />
          <Route path="/v0-config" element={<BoltConfig />} />
          <Route path="/building" element={<Building />} />
          <Route path="/success" element={<Success />} />
          <Route path="/templates" element={<Templates />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
