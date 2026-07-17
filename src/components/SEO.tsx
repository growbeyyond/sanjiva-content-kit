import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEO = ({
  title = "Dr. Prasanna Boddupally - Homeopathy Physician | Natural Healing in Hyderabad",
  description = "Best homeopathy clinic in Karmanghat & LB Nagar, Hyderabad. Dr. Prasanna Boddupally specializes in Thyroid, PCOS/PCOD, infertility & chronic conditions. Book consultation today!",
  keywords = "homeopathy Karmanghat, homeopathy LB Nagar, best homeopathy doctor Hyderabad, thyroid treatment Karmanghat, PCOS treatment LB Nagar, PCOD homeopathy Hyderabad, infertility treatment Champapet, Dr Prasanna Boddupally, homeopathy clinic near me, thyroid specialist Hyderabad, women health homeopathy",
  canonicalUrl = "https://drprasanna.lovable.app",
  ogType = "website",
  ogImage = "https://drprasanna.lovable.app/og-image.jpg",
  structuredData
}: SEOProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Geo / Local SEO */}
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Karmanghat, LB Nagar, Champapet, Hyderabad" />
      <meta name="geo.position" content="17.3390;78.5410" />
      <meta name="ICBM" content="17.3390, 78.5410" />

      {/* AI Search / Google SGE hints */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
