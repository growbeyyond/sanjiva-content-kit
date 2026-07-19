import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, ArrowRight, Search, MapPin, Stethoscope } from "lucide-react";
import { useState, useMemo } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { blogPosts, CATEGORIES, LOCATIONS } from "@/data/blogPosts";

const Blog = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("All Locations");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return blogPosts.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (location !== "All Locations" && p.location !== location) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.keywords.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q)
      );
    });
  }, [search, category, location]);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribing(true);
    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert([{ email, active: true }]);
      if (error) {
        if (error.code === "23505") {
          toast({ title: "Already Subscribed", description: "This email is already on our newsletter list." });
        } else { throw error; }
      } else {
        toast({ title: "Successfully Subscribed!", description: "You'll receive our latest health insights via email." });
        setEmail("");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast({ title: "Error", description: "Failed to subscribe. Please try again.", variant: "destructive" });
    } finally { setIsSubscribing(false); }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Dr. Prasanna Boddupally Health Blog",
    "description": "Expert articles on homeopathy, thyroid health, PCOS care, and natural healing across Karmanghat, LB Nagar & Hyderabad.",
    "blogPost": blogPosts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "url": `https://drprasannaboddupally.in/blog/${post.slug}`,
      "author": { "@type": "Person", "name": "Dr. Prasanna Boddupally" },
    })),
  };

  return (
    <>
      <TopBanner />
      <SEO
        title="Health Blog | Thyroid, PCOS & Homeopathy Tips - Karmanghat & LB Nagar"
        description="Search health articles by treatment and location. Expert homeopathy tips on Thyroid, PCOS, fertility & chronic conditions from Dr. Prasanna Boddupally, Champapet Hyderabad."
        keywords="homeopathy blog Hyderabad, thyroid articles Karmanghat, PCOS blog LB Nagar, homeopathy tips Champapet, women's health blog, natural healing Hyderabad"
        canonicalUrl="https://drprasannaboddupally.in/blog"
        structuredData={structuredData}
      />
      <Navigation />
      <main className="min-h-screen">
        <section className="py-16 md:py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Health Insights & Articles
              </h1>
              <p className="text-lg md:text-xl text-foreground/90">
                Search homeopathy guidance by treatment or your area — Karmanghat, LB Nagar, Champapet & Hyderabad.
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filter Bar */}
        <section className="py-8 border-b border-border sticky top-0 bg-background/95 backdrop-blur z-30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-3">
              <div className="md:col-span-6 relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-foreground/50" />
                <Input
                  type="search"
                  placeholder="Search articles: thyroid, PCOS, fertility, migraine..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9"
                  aria-label="Search articles"
                />
              </div>
              <div className="md:col-span-3">
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger aria-label="Filter by treatment">
                    <Stethoscope className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Treatment" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-3">
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger aria-label="Filter by location">
                    <MapPin className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {LOCATIONS.map((l) => (
                      <SelectItem key={l} value={l}>{l}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <p className="text-sm text-foreground/60 text-center mt-3">
              Showing {filtered.length} of {blogPosts.length} articles
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-foreground/70 mb-4">No articles match your filters.</p>
                <Button variant="outline" onClick={() => { setSearch(""); setCategory("All"); setLocation("All Locations"); }}>
                  Reset filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {filtered.map((post) => (
                  <article key={post.slug}>
                    <Link to={`/blog/${post.slug}`} className="block h-full group">
                      <Card className="overflow-hidden hover:shadow-soft transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                        <div className="aspect-[16/9] overflow-hidden bg-secondary">
                          <img
                            src={post.image}
                            alt={post.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <div className="flex items-center gap-2 mb-3 flex-wrap">
                            <span className="text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full">
                              {post.category}
                            </span>
                            <span className="text-xs font-semibold text-accent-foreground bg-accent/20 px-3 py-1 rounded-full flex items-center gap-1">
                              <MapPin className="w-3 h-3" /> {post.location}
                            </span>
                          </div>
                          <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {post.title}
                          </h2>
                          <p className="text-foreground/80 text-sm mb-4 flex-grow">{post.excerpt}</p>
                          <div className="flex items-center justify-between text-xs text-foreground/60 border-t border-border pt-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <time dateTime={post.date}>{post.date}</time>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {post.readTime}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </article>
                ))}
              </div>
            )}

            {/* Newsletter */}
            <div className="text-center mt-12 p-8 bg-secondary rounded-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h2>
              <p className="text-foreground/80 mb-6">
                Subscribe to receive the latest health tips and insights directly to your inbox
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  maxLength={255}
                  className="px-4 py-2 rounded-md border border-border bg-background text-foreground flex-1 max-w-sm"
                />
                <Button type="submit" className="bg-gradient-hero shadow-soft" disabled={isSubscribing}>
                  {isSubscribing ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </div>

            <div className="max-w-3xl mx-auto mt-16 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Have a Question About Your Health?
              </h2>
              <p className="text-foreground/80 mb-6">
                Get personalized guidance from Dr. Prasanna Boddupally
              </p>
              <Button asChild size="lg" className="bg-gradient-hero shadow-soft">
                <Link to="/contact">Book Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
