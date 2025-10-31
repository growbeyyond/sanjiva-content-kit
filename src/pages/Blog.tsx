import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Is Homeopathy Really Slow? The Truth You Should Know",
      excerpt: "Debunking the most common myth about homeopathic treatment and understanding realistic healing timelines.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Myths & Facts"
    },
    {
      title: "Foods That Help Balance Your Thyroid Naturally",
      excerpt: "Simple dietary changes that support thyroid function and complement homeopathic treatment.",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Nutrition"
    },
    {
      title: "Understanding PCOD — A Homeopath's Perspective",
      excerpt: "What causes PCOD and how homeopathy addresses the root hormonal imbalances effectively.",
      date: "March 5, 2024",
      readTime: "8 min read",
      category: "Women's Health"
    },
    {
      title: "How to Manage Allergies Without Chemicals",
      excerpt: "Natural approaches to seasonal allergies that provide lasting relief without side effects.",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Respiratory Health"
    },
    {
      title: "The Connection Between Stress and Chronic Pain",
      excerpt: "Exploring how emotional well-being impacts physical symptoms and the role of holistic healing.",
      date: "February 20, 2024",
      readTime: "6 min read",
      category: "Pain Management"
    },
    {
      title: "Preparing for Your First Homeopathy Consultation",
      excerpt: "What to expect during your visit and how to make the most of your appointment.",
      date: "February 15, 2024",
      readTime: "4 min read",
      category: "Getting Started"
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Health Insights & Articles
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert guidance on natural healing and holistic wellness
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {blogPosts.map((post, index) => (
                <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 p-8 bg-secondary rounded-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Stay Updated
              </h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to receive the latest health tips and insights directly to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md border border-border bg-background text-foreground flex-1 max-w-sm"
                />
                <Button className="bg-gradient-hero shadow-soft">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
