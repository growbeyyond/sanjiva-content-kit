import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppWidget from "./components/WhatsAppWidget";
import LiveChat from "./components/LiveChat";
import GoogleAnalytics from "./components/GoogleAnalytics";
import MiraChat from "./components/MiraChat";
import Index from "./pages/Index";
import About from "./pages/About";
import Treatments from "./pages/Treatments";
import Protocol from "./pages/Protocol";
import PCOSProgram from "./pages/PCOSProgram";
import ThyroCureProgram from "./pages/ThyroCureProgram";
import WellnessHub from "./pages/WellnessHub";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Disclaimer from "./pages/Disclaimer";
import SymptomChecker from "./pages/SymptomChecker";
import Gallery from "./pages/Gallery";
import PatientPortal from "./pages/PatientPortal";
import BookingPage from "./pages/BookingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import AdminEnhanced from "./pages/AdminEnhanced";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/protocol" element={<Protocol />} />
            <Route path="/pcos-program" element={<PCOSProgram />} />
            <Route path="/thyrocure-program" element={<ThyroCureProgram />} />
            <Route path="/wellness-hub" element={<WellnessHub />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/symptom-checker" element={<SymptomChecker />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/patient-portal" element={<PatientPortal />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            } />
            <Route path="/admin/enhanced" element={
              <ProtectedRoute>
                <AdminEnhanced />
              </ProtectedRoute>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <GoogleAnalytics />
        </BrowserRouter>
        <WhatsAppWidget />
        <MiraChat />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
