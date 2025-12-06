import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <img src={logo} alt="Dr. Prasanna Boddupally" className="h-16 w-auto mb-3" />
            <p className="text-sm text-foreground/70 mb-4">
              Natural healing for Thyroid & PCOS
            </p>
            {/* Social Media */}
            <div className="flex gap-2">
              <a 
                href="https://www.facebook.com/drprasannahomeopathy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/drprasannahomeopathy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.youtube.com/@drprasannahomeopathy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com/drprasannahomeo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/treatments" className="text-foreground/70 hover:text-primary transition-colors">Treatments</Link></li>
              <li><Link to="/protocol" className="text-foreground/70 hover:text-primary transition-colors">Thyroid Program</Link></li>
              <li><Link to="/pcos-program" className="text-foreground/70 hover:text-primary transition-colors">PCOS Program</Link></li>
              <li><Link to="/testimonials" className="text-foreground/70 hover:text-primary transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground text-sm">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/wellness-hub" className="text-foreground/70 hover:text-primary transition-colors">Wellness Hub</Link></li>
              <li><Link to="/blog" className="text-foreground/70 hover:text-primary transition-colors">Health Blog</Link></li>
              <li><Link to="/faq" className="text-foreground/70 hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">Book Appointment</Link></li>
              <li><Link to="/patient-portal" className="text-foreground/70 hover:text-primary transition-colors">Patient Portal</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground text-sm">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+918179942297" className="text-foreground/70 hover:text-primary transition-colors">
                  +91 81799 42297
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:prasannaboddu@gmail.com" className="text-foreground/70 hover:text-primary transition-colors text-xs">
                  prasannaboddu@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-foreground/70">Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/60">
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
              <span>•</span>
              <Link to="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
            </div>
            
            <p>© {new Date().getFullYear()} Dr. Prasanna Boddupally. All rights reserved.</p>
            
            <a 
              href="https://www.growbeyyond.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary transition-colors"
            >
              Developed by <span className="font-semibold">GrowBeyond</span>
            </a>
          </div>
        </div>
      </div>

      {/* Spacer for mobile quick actions */}
      <div className="h-16 md:hidden" />
    </footer>
  );
};

export default Footer;