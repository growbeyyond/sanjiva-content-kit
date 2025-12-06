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
    { to: "/treatments", label: "Treatments" },
    { to: "/protocol", label: "Thyroid" },
    { to: "/pcos-program", label: "PCOS" },
  ];

  const mainLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
  ];

  const secondaryLinks = [
    { to: "/testimonials", label: "Stories" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = serviceLinks.some(link => location.pathname === link.to);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img 
              src={logo} 
              alt="Dr. Prasanna Boddupally" 
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          {/* Navigation Links - Always Visible */}
          <div className="flex items-center space-x-1 md:space-x-2">
            {/* Main Links */}
            {mainLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-2 md:px-3 py-1.5 rounded-md text-xs md:text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`px-2 md:px-3 py-1.5 rounded-md text-xs md:text-sm font-medium transition-colors flex items-center gap-0.5 ${
                    isServicesActive
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  Services
                  <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-40 bg-background border border-border shadow-lg z-50">
                {serviceLinks.map((link) => (
                  <DropdownMenuItem key={link.to} asChild>
                    <Link
                      to={link.to}
                      className={`w-full cursor-pointer text-sm ${
                        isActive(link.to) ? "text-primary font-medium" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Secondary Links */}
            {secondaryLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-2 md:px-3 py-1.5 rounded-md text-xs md:text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Button asChild size="sm" className="bg-gradient-hero shadow-soft text-xs md:text-sm px-3 md:px-4 h-8 md:h-9 flex-shrink-0">
            <Link to="/book">Book</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;