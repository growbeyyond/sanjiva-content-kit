import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const Blog = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email, active: true }]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already Subscribed",
            description: "This email is already on our newsletter list.",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Successfully Subscribed!",
          description: "You'll receive our latest health insights via email.",
        });
        setEmail("");
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  const blogPosts = [
    {
      title: "Is Homeopathy Really Slow? The Truth You Should Know",
      excerpt: "Debunking the most common myth about homeopathic treatment and understanding realistic healing timelines.",
      date: "July 18, 2026",
      readTime: "5 min read",
      category: "Myths & Facts",
      slug: "is-homeopathy-slow-truth"
    },
    {
      title: "Foods That Help Balance Your Thyroid Naturally",
      excerpt: "Simple dietary changes that support thyroid function and complement homeopathic treatment.",
      date: "July 17, 2026",
      readTime: "7 min read",
      category: "Thyroid Health",
      slug: "foods-balance-thyroid-naturally"
    },
    {
      title: "Understanding PCOD — A Homeopath's Perspective",
      excerpt: "What causes PCOD and how homeopathy addresses the root hormonal imbalances effectively.",
      date: "July 16, 2026",
      readTime: "8 min read",
      category: "PCOS Care",
      slug: "understanding-pcod-homeopathy"
    },
    {
      title: "How to Manage Allergies Without Chemicals",
      excerpt: "Natural approaches to seasonal allergies that provide lasting relief without side effects.",
      date: "July 15, 2026",
      readTime: "6 min read",
      category: "Respiratory Health",
      slug: "manage-allergies-naturally"
    },
    {
      title: "The Connection Between Stress and Chronic Pain",
      excerpt: "Exploring how emotional well-being impacts physical symptoms and the role of holistic healing.",
      date: "July 14, 2026",
      readTime: "6 min read",
      category: "Pain Management",
      slug: "stress-chronic-pain-connection"
    },
    {
      title: "Preparing for Your First Homeopathy Consultation",
      excerpt: "What to expect during your visit and how to make the most of your appointment.",
      date: "July 13, 2026",
      readTime: "4 min read",
      category: "Getting Started",
      slug: "first-homeopathy-consultation"
    },
    {
      title: "Thyroid & Weight Gain: Breaking the Cycle Naturally",
      excerpt: "Why thyroid imbalance leads to stubborn weight gain and how homeopathy restores your metabolism gently.",
      date: "July 12, 2026",
      readTime: "7 min read",
      category: "Thyroid Health",
      slug: "thyroid-weight-gain-cycle"
    },
    {
      title: "PCOS & Fertility: Yes, You Can Conceive Naturally",
      excerpt: "Real success stories and the science behind reversing PCOS to restore natural fertility.",
      date: "July 11, 2026",
      readTime: "8 min read",
      category: "PCOS Care",
      slug: "pcos-fertility-natural-conception"
    },
    {
      title: "Irregular Periods? Here's What Your Body Is Telling You",
      excerpt: "Understand the hormonal signals behind irregular cycles and how to bring them back in rhythm.",
      date: "July 10, 2026",
      readTime: "6 min read",
      category: "Women's Health",
      slug: "irregular-periods-hormonal-signals"
    },
    {
      title: "Hypothyroidism in Women: Signs You Should Never Ignore",
      excerpt: "From fatigue to hair fall — spot the early warning signs of an underactive thyroid.",
      date: "July 9, 2026",
      readTime: "6 min read",
      category: "Thyroid Health",
      slug: "hypothyroidism-women-warning-signs"
    },
    {
      title: "Homeopathy for Skin & Hair: Beauty From Within",
      excerpt: "How balancing hormones and gut health transforms acne, pigmentation and hair fall naturally.",
      date: "July 8, 2026",
      readTime: "5 min read",
      category: "Skin & Hair",
      slug: "homeopathy-skin-hair-beauty"
    },
    {
      title: "Managing Diabetes with Homeopathy — What Works",
      excerpt: "Evidence-based homeopathic support for type 2 diabetes alongside lifestyle changes.",
      date: "July 7, 2026",
      readTime: "7 min read",
      category: "Chronic Care",
      slug: "managing-diabetes-homeopathy"
    },
    {
      title: "Migraine Relief: A Homeopathic Approach That Lasts",
      excerpt: "Move beyond painkillers — discover how homeopathy addresses migraine triggers at their root.",
      date: "July 6, 2026",
      readTime: "5 min read",
      category: "Pain Management",
      slug: "migraine-relief-homeopathy"
    },
    {
      title: "Arthritis & Joint Pain: Natural Care for Lasting Mobility",
      excerpt: "Ease stiffness and inflammation with a gentle, side-effect-free homeopathic protocol.",
      date: "July 5, 2026",
      readTime: "6 min read",
      category: "Joint Care",
      slug: "arthritis-joint-pain-natural-care"
    },
    {
      title: "Gut Health & Hormones: The Hidden Connection",
      excerpt: "Why healing your gut is the first step to balancing thyroid, PCOS and overall wellness.",
      date: "July 4, 2026",
      readTime: "6 min read",
      category: "Wellness",
      slug: "gut-health-hormones-connection"
    },
    {
      title: "Thyroid in Monsoon: Why Symptoms Flare & How to Stay Balanced",
      excerpt: "Humidity, infections and mood dips can worsen thyroid symptoms during the rainy season. Here's a gentle homeopathic plan.",
      date: "July 3, 2026",
      readTime: "6 min read",
      category: "Thyroid Health",
      slug: "thyroid-monsoon-symptoms"
    },
    {
      title: "PCOS & Insulin Resistance: Reversing the Root Cause",
      excerpt: "Why insulin resistance drives PCOS symptoms and the homeopathic + lifestyle protocol that truly reverses it.",
      date: "July 2, 2026",
      readTime: "7 min read",
      category: "PCOS Care",
      slug: "pcos-insulin-resistance-reversal"
    },
    {
      title: "Homeopathy for Anxiety & Sleep: Calm Your Nervous System Naturally",
      excerpt: "Learn how constitutional homeopathy quiets an overactive mind and restores deep, restorative sleep.",
      date: "July 1, 2026",
      readTime: "5 min read",
      category: "Mental Wellness",
      slug: "homeopathy-anxiety-sleep"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Dr. Prasanna Boddupally Health Blog",
    "description": "Expert articles on homeopathy, thyroid health, PCOS care, and natural healing.",
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": "Dr. Prasanna Boddupally"
      }
    }))
  };

  return (
    <>
      <TopBanner />
      <SEO
        title="Health Articles & Blog | Thyroid, PCOS, Homeopathy Tips - Dr. Prasanna"
        description="Expert health articles on thyroid disorders, PCOS management, hormonal balance, and natural healing. Get tips from Dr. Prasanna Boddupally, homeopathy specialist."
        keywords="homeopathy blog, thyroid articles, PCOS tips, hormonal health articles, natural healing blog, Dr Prasanna blog, women's health tips"
        canonicalUrl="https://drprasannaboddupally.in/blog"
        structuredData={structuredData}
      />
      <Navigation />
      <main className="min-h-screen">
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Health Insights & Articles
              </h1>
              <p className="text-xl text-foreground/90">
                Expert guidance on natural healing and holistic wellness
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {blogPosts.map((post, index) => (
                <article key={index}>
                  <Card className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-3">{post.title}</h2>
                    <p className="text-foreground/80 text-sm mb-4 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-foreground/60 border-t border-border pt-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <time dateTime={post.date}>{post.date}</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </Card>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="text-center mt-12 p-8 bg-secondary rounded-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Stay Updated
              </h2>
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
                <Button 
                  type="submit" 
                  className="bg-gradient-hero shadow-soft"
                  disabled={isSubscribing}
                >
                  {isSubscribing ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </div>

            {/* CTA */}
            <div className="max-w-3xl mx-auto mt-16 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Have a Question About Your Health?
              </h2>
              <p className="text-foreground/80 mb-6">
                Get personalized guidance from Dr. Prasanna Boddupally
              </p>
              <Button asChild size="lg" className="bg-gradient-hero shadow-soft">
                <Link to="/contact">
                  Book Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
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