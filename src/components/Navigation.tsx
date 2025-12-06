import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const location = useLocation();

  const serviceLinks = [
    { to: "/treatments", label: "All Treatments" },
    { to: "/protocol", label: "Thyroid Care" },
    { to: "/pcos-program", label: "PCOS Care" },
    { to: "/wellness-hub", label: "Wellness Hub" },
  ];

  const moreLinks = [
    { to: "/blog", label: "Health Blog" },
    { to: "/faq", label: "FAQ" },
    { to: "/gallery", label: "Gallery" },
    { to: "/patient-portal", label: "Patient Portal" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = serviceLinks.some(link => location.pathname === link.to);
  const isMoreActive = moreLinks.some(link => location.pathname === link.to);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex items-center justify-between h-14 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img 
              src={logo} 
              alt="Dr. Prasanna Boddupally" 
              className="h-10 md:h-16 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-0.5 md:space-x-1">
            <Link
              to="/"
              className={`px-1.5 md:px-3 py-1 rounded-md text-[10px] md:text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-1.5 md:px-3 py-1 rounded-md text-[10px] md:text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`px-1.5 md:px-3 py-1 rounded-md text-[10px] md:text-sm font-medium transition-colors flex items-center gap-0.5 ${
                    isServicesActive
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  Services
                  <ChevronDown className="w-3 h-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-44 bg-background border border-border shadow-lg z-50">
                {serviceLinks.map((link) => (
                  <DropdownMenuItem key={link.to} asChild>
                    <Link
                      to={link.to}
                      className={`w-full cursor-pointer ${
                        isActive(link.to) ? "text-primary font-medium" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/testimonials"
              className={`px-1.5 md:px-3 py-1 rounded-md text-[10px] md:text-sm font-medium transition-colors hidden sm:block ${
                isActive("/testimonials")
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Stories
            </Link>

            <Link
              to="/contact"
              className={`px-1.5 md:px-3 py-1 rounded-md text-[10px] md:text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Contact
            </Link>

            {/* More Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`px-1.5 md:px-3 py-1 rounded-md text-[10px] md:text-sm font-medium transition-colors flex items-center gap-0.5 ${
                    isMoreActive
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  More
                  <ChevronDown className="w-3 h-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44 bg-background border border-border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <Link to="/testimonials" className="w-full cursor-pointer sm:hidden">
                    Success Stories
                  </Link>
                </DropdownMenuItem>
                {moreLinks.map((link) => (
                  <DropdownMenuItem key={link.to} asChild>
                    <Link
                      to={link.to}
                      className={`w-full cursor-pointer ${
                        isActive(link.to) ? "text-primary font-medium" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* CTA Button */}
          <Button asChild size="sm" className="bg-gradient-hero shadow-soft text-[10px] md:text-sm px-2 md:px-4 h-7 md:h-9 flex-shrink-0">
            <Link to="/book">Book</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;