import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/new.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { label: "Home", link: "/" },
    { label: "Courses", link: "/courses" },
    { label: "About Us", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95 sticky top-0 z-50 w-full border-b border-border">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 transition-transform hover:scale-105">
          <img 
            src={logo} 
            alt="Noble Quranic Academy" 
            className="h-12 w-12 rounded-lg object-contain"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary">Noble Quranic</span>
            <span className="text-sm text-muted-foreground">Academy</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.label}
              to={item.link}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.link) ? "text-primary" : "text-foreground/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="default" 
            size="sm"
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
          >
            <a 
              href="https://api.whatsapp.com/send?phone=919342514618&text=Salam%2C%20I%20want%20to%20join%20Noble%20Quranic%20Academy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle size={16} />
              Join via WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <nav className="container py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.label}
                to={item.link}
                className={`block text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.link) ? "text-primary" : "text-foreground/80"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              variant="default" 
              size="sm"
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a 
                href="https://api.whatsapp.com/send?phone=919342514618&text=Salam%2C%20I%20want%20to%20join%20Noble%20Quranic%20Academy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                Join via WhatsApp
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;