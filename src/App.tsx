import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider, QueryCache, MutationCache } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { getErrorMessage, logError } from "./lib/errors";
import { toast } from "sonner";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { HelmetProvider } from "react-helmet-async";

// Lazy-loaded routes (code-split for faster initial load)
const About = lazy(() => import("./pages/About"));
const Treatments = lazy(() => import("./pages/Treatments"));
const Protocol = lazy(() => import("./pages/Protocol"));
const PCOSProgram = lazy(() => import("./pages/PCOSProgram"));
const ThyroCureProgram = lazy(() => import("./pages/ThyroCureProgram"));
const WellnessHub = lazy(() => import("./pages/WellnessHub"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const SymptomChecker = lazy(() => import("./pages/SymptomChecker"));
const Gallery = lazy(() => import("./pages/Gallery"));
const BookingPage = lazy(() => import("./pages/BookingPage"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const OAuthConsent = lazy(() => import("./pages/OAuthConsent"));
const Admin = lazy(() => import("./pages/Admin"));
const AdminEnhanced = lazy(() => import("./pages/AdminEnhanced"));

// Deferred floating widgets — not needed for LCP
const WhatsAppWidget = lazy(() => import("./components/WhatsAppWidget"));
const MiraChat = lazy(() => import("./components/MiraChat"));

const RouteFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-10 h-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin" aria-label="Loading" />
  </div>
);

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
              <Suspense fallback={<RouteFallback />}>
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
              </Suspense>
            </ErrorBoundary>
            <GoogleAnalytics />
          </BrowserRouter>
          <ErrorBoundary fallback={() => null}>
            <Suspense fallback={null}>
              <WhatsAppWidget />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary fallback={() => null}>
            <Suspense fallback={null}>
              <MiraChat />
            </Suspense>
          </ErrorBoundary>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
