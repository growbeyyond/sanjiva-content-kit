import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin, ArrowLeft, MessageCircle, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && (p.category === post.category || p.location === post.location))
    .slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://drprasannaboddupally.in${post.image}`,
    "datePublished": post.date,
    "author": { "@type": "Person", "name": "Dr. Prasanna Boddupally" },
    "publisher": {
      "@type": "Organization",
      "name": "PCOS & ThyroCure Homeopathy",
      "logo": { "@type": "ImageObject", "url": "https://drprasannaboddupally.in/favicon.png" },
    },
    "mainEntityOfPage": `https://drprasannaboddupally.in/blog/${post.slug}`,
    "keywords": post.keywords,
    "areaServed": ["Karmanghat", "LB Nagar", "Champapet", "Hyderabad"],
  };

  const whatsappLink = `https://wa.me/916304633491?text=${encodeURIComponent(
    `Hi Dr. Prasanna, I read your article "${post.title}" and would like to book a consultation.`
  )}`;

  return (
    <>
      <TopBanner />
      <SEO
        title={`${post.title} | Dr. Prasanna Boddupally`}
        description={post.excerpt}
        keywords={post.keywords}
        canonicalUrl={`https://drprasannaboddupally.in/blog/${post.slug}`}
        ogType="article"
        ogImage={`https://drprasannaboddupally.in${post.image}`}
        structuredData={structuredData}
      />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative">
          <div className="aspect-[21/9] md:aspect-[21/7] w-full overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
          <div className="container mx-auto px-4 -mt-24 md:-mt-32 relative z-10">
            <div className="max-w-3xl mx-auto">
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary mb-4">
                <ArrowLeft className="w-4 h-4" /> Back to all articles
              </Link>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs font-semibold text-accent-foreground bg-accent/20 px-3 py-1 rounded-full flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {post.location}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{post.title}</h1>
              <div className="flex items-center gap-4 text-sm text-foreground/70">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> <time dateTime={post.date}>{post.date}</time></span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <article className="max-w-3xl mx-auto prose-content">
              <p className="text-lg text-foreground/80 leading-relaxed mb-8 italic border-l-4 border-primary pl-4">
                {post.excerpt}
              </p>
              {post.content.map((section, i) => (
                <div key={i} className="mb-6">
                  {section.heading && (
                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-3">{section.heading}</h2>
                  )}
                  <p className="text-foreground/85 leading-relaxed text-base md:text-lg">{section.body}</p>
                </div>
              ))}

              {/* CTA Box */}
              <Card className="p-6 md:p-8 mt-10 bg-gradient-subtle border-primary/20">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  Ready to start your healing journey?
                </h3>
                <p className="text-foreground/80 mb-5">
                  Consult Dr. Prasanna Boddupally at our Champapet clinic — easy access from Karmanghat, LB Nagar & Saroornagar.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="bg-gradient-hero shadow-soft">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Now
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contact">Book Consultation</Link>
                  </Button>
                </div>
              </Card>
            </article>

            {/* Related */}
            {related.length > 0 && (
              <div className="max-w-6xl mx-auto mt-16">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {related.map((r) => (
                    <Link key={r.slug} to={`/blog/${r.slug}`} className="group">
                      <Card className="overflow-hidden hover:shadow-soft transition-all hover:-translate-y-1 h-full flex flex-col">
                        <div className="aspect-[16/9] overflow-hidden">
                          <img src={r.image} alt={r.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-5 flex-grow">
                          <span className="text-xs font-semibold text-primary bg-primary-light px-2 py-1 rounded-full">
                            {r.category}
                          </span>
                          <h3 className="text-lg font-bold text-foreground mt-3 group-hover:text-primary">
                            {r.title}
                          </h3>
                        </div>
                        <div className="px-5 pb-5 text-sm text-primary inline-flex items-center gap-1">
                          Read more <ArrowRight className="w-3 h-3" />
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
