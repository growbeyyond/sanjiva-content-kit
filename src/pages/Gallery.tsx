import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

const Gallery = () => {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      const { data, error } = await supabase
        .from("gallery_images")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });

      if (error) throw error;
      setImages(data || []);
    } catch (error) {
      console.error("Error fetching gallery images:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TopBanner />
      <Helmet>
        <title>Clinic Gallery - Dr. Prasanna Boddupally | Our Facilities</title>
        <meta name="description" content="View photos of Dr. Prasanna's homeopathy clinic in Hyderabad. See our consultation rooms, treatment facilities, and welcoming environment." />
        <link rel="canonical" href="https://drprasannaboddupally.in/gallery" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-subtle">
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
                Clinic Gallery
              </h1>
              <p className="text-lg text-muted-foreground">
                Take a virtual tour of our welcoming homeopathy clinic
              </p>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i}>
                    <CardContent className="p-0">
                      <Skeleton className="w-full h-64" />
                      <div className="p-4">
                        <Skeleton className="h-6 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : images.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image) => (
                  <Card key={image.id} className="overflow-hidden hover-scale">
                    <CardContent className="p-0">
                      <img
                        src={image.image_url}
                        alt={image.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                        {image.description && (
                          <p className="text-sm text-muted-foreground">{image.description}</p>
                        )}
                        {image.category && (
                          <span className="inline-block mt-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {image.category}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <p className="text-muted-foreground">
                    Gallery images will be available soon. Please check back later.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Gallery;
