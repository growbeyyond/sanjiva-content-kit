import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Dr. Prasanna Boddupally</h3>
            <p className="text-sm text-foreground/80">
              🌺 Thyroid & PCOS Care — Rewriting Women's Health Stories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">About Dr. Prasanna</Link></li>
              <li><Link to="/treatments" className="text-foreground/70 hover:text-primary transition-colors">Treatments</Link></li>
              <li><Link to="/protocol" className="text-foreground/70 hover:text-accent transition-colors">Thyroid Program</Link></li>
              <li><Link to="/pcos-program" className="text-foreground/70 hover:text-primary transition-colors">PCOS Program</Link></li>
              <li><Link to="/wellness-hub" className="text-foreground/70 hover:text-primary transition-colors">Wellness Hub</Link></li>
              <li><Link to="/testimonials" className="text-foreground/70 hover:text-primary transition-colors">Success Stories</Link></li>
              <li><Link to="/blog" className="text-foreground/70 hover:text-primary transition-colors">Health Blog</Link></li>
              <li><Link to="/faq" className="text-foreground/70 hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Specializations</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="text-accent font-medium">Thyroid Disorders</li>
              <li className="text-primary font-medium">PCOS & Hormonal Imbalance</li>
              <li>Infertility Treatment</li>
              <li>Women's Wellness</li>
              <li>Skin & Hair Health</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground/70">Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:+918179942297" className="text-foreground/70 hover:text-accent transition-colors">
                  +91 81799 42297
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:prasannaboddu@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
                  prasannaboddu@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/70">Mon-Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          {/* Social Media Links */}
          <div className="flex justify-center gap-4 mb-6">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

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
            <p className="mt-2">Languages: English | Telugu | Hindi</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
