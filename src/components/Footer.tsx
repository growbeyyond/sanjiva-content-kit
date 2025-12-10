import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <img src={logo} alt="Dr. Prasanna Boddupally Logo" className="h-16 w-auto" />
            <p className="text-sm text-foreground/80">
              Holistic healing for Thyroid & PCOS through homeopathy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">About Dr. Prasanna</Link></li>
              <li><Link to="/treatments" className="text-foreground/70 hover:text-primary transition-colors">Treatments</Link></li>
              <li><Link to="/protocol" className="text-foreground/70 hover:text-primary transition-colors">ThyroCure Program</Link></li>
              <li><Link to="/pcos-program" className="text-foreground/70 hover:text-primary transition-colors">PCOS Program</Link></li>
              <li><Link to="/testimonials" className="text-foreground/70 hover:text-primary transition-colors">Success Stories</Link></li>
              <li><Link to="/faq" className="text-foreground/70 hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground/70">17-1-382/P/4, Govt Press Colony, Champapet, Hyderabad - 500079</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:+916304633491" className="text-foreground/70 hover:text-accent transition-colors">
                  +91 63046 33491
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:pcosthyrocure@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
                  pcosthyrocure@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/70">Mon-Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm">
            <Link to="/privacy-policy" className="text-foreground/70 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="text-foreground/50">•</span>
            <Link to="/terms" className="text-foreground/70 hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-foreground/50">•</span>
            <Link to="/disclaimer" className="text-foreground/70 hover:text-primary transition-colors">
              Medical Disclaimer
            </Link>
          </div>

          <div className="text-center text-sm text-foreground/70">
            <p>© {new Date().getFullYear()} Dr. Prasanna Boddupally Homeopathy Clinic. All rights reserved.</p>
          </div>

          {/* Developer Credit */}
          <div className="text-center mt-4 pt-4 border-t border-border/50">
            <p className="text-xs text-foreground/50">
              Developed by{" "}
              <a 
                href="https://www.growbeyyond.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors font-medium"
              >
                GrowBeyyond
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
