import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Dr. Prasanna Boddupally</h3>
            <p className="text-sm text-muted-foreground">
              Healing through simplicity and compassion with the Sanjiva Protocol — natural, long-lasting homeopathic care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Dr. Prasanna</Link></li>
              <li><Link to="/treatments" className="text-muted-foreground hover:text-primary transition-colors">Treatments</Link></li>
              <li><Link to="/protocol" className="text-muted-foreground hover:text-primary transition-colors">Sanjiva Protocol</Link></li>
              <li><Link to="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">Success Stories</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Health Blog</Link></li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Specializations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Thyroid Disorders</li>
              <li>PCOD & Infertility</li>
              <li>Arthritis & Joint Pain</li>
              <li>Skin & Hair Issues</li>
              <li>Respiratory Allergies</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@drprasanna.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@drprasanna.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Mon-Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Dr. Prasanna Boddupally Homeopathy Clinic. All rights reserved.</p>
          <p className="mt-2">Languages: English | Telugu | Hindi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
