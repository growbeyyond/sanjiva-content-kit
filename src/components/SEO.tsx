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
  description = "Expert homeopathy treatment by Dr. Prasanna Boddupally in Hyderabad. Specializing in chronic conditions, thyroid, PCOD, skin disorders. Book consultation today!",
  keywords = "homeopathy doctor Hyderabad, Dr. Prasanna Boddupally, homeopathic treatment, chronic disease treatment, natural healing, alternative medicine",
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
