import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // User will need to replace with their actual GA4 ID

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Load GA script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}');
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  useEffect(() => {
    // Track page views on route change
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', GA_TRACKING_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;
