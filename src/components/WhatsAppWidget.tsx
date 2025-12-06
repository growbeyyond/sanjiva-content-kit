import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const WhatsAppWidget = () => {
  const whatsappNumber = "918179942297";
  const message = "Hi! I'd like to book a consultation with Dr. Prasanna.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <Button
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 bg-[#25D366] hover:bg-[#20BA5A] hover:scale-110"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </Button>
      <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-background text-foreground px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm font-medium border border-border">
        Chat with us on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppWidget;
