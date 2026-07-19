import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider, QueryCache, MutationCache } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { getErrorMessage, logError } from "./lib/errors";
import { toast } from "sonner";
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
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Disclaimer from "./pages/Disclaimer";
import SymptomChecker from "./pages/SymptomChecker";
import Gallery from "./pages/Gallery";

import BookingPage from "./pages/BookingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OAuthConsent from "./pages/OAuthConsent";
import Admin from "./pages/Admin";
import AdminEnhanced from "./pages/AdminEnhanced";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error: unknown) => {
        const msg = (error as Error)?.message ?? "";
        // Don't retry auth or 4xx errors
        if (/4\d{2}|unauthorized|forbidden|not found/i.test(msg)) return false;
        return failureCount < 2;
      },
      staleTime: 30_000,
      refetchOnWindowFocus: false,
    },
    mutations: { retry: 0 },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      logError("react-query", error, { queryKey: query.queryKey });
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      logError("react-query:mutation", error);
      toast.error(getErrorMessage(error));
    },
  }),
});

const App = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ErrorBoundary>
              <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/about-dr-prasanna-homeopathy-hyderabad" element={<About />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/homeopathy-treatments-hyderabad" element={<Treatments />} />
            <Route path="/protocol" element={<Protocol />} />
            <Route path="/thyroid-treatment-hyderabad" element={<Protocol />} />
            <Route path="/pcos-program" element={<PCOSProgram />} />
            <Route path="/pcos-pcod-treatment-hyderabad" element={<PCOSProgram />} />
            <Route path="/thyrocure-program" element={<ThyroCureProgram />} />
            <Route path="/wellness-hub" element={<WellnessHub />} />
            <Route path="/wellness-tools" element={<WellnessHub />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/success-stories" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/health-articles" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-appointment" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/symptom-checker" element={<SymptomChecker />} />
            <Route path="/hormone-health-test" element={<SymptomChecker />} />
            <Route path="/gallery" element={<Gallery />} />
            
            <Route path="/book" element={<BookingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/.lovable/oauth/consent" element={<OAuthConsent />} />
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
            </ErrorBoundary>
            <GoogleAnalytics />
          </BrowserRouter>
          <ErrorBoundary fallback={() => null}>
            <WhatsAppWidget />
          </ErrorBoundary>
          <ErrorBoundary fallback={() => null}>
            <MiraChat />
          </ErrorBoundary>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
