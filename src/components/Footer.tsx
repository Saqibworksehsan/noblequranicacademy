import {
  MessageCircle,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import logo from "@/assets/new.png";

const Footer = () => {
  const socialLinks = [
    {
      platform: "WhatsApp",
      link: "https://api.whatsapp.com/send?phone=919342514618&text=Salam%2C%20I%20want%20to%20join%20Noble%20Quranic%20Academy",
      icon: MessageCircle,
    },
    {
      platform: "Email",
      link: "mailto:noblequranicacademy@gmail.com",
      icon: Mail,
    },
    {
      platform: "Instagram",
      link: "https://instagram.com/noblequranicacademy",
      icon: Instagram,
    },
    {
      platform: "LinkedIn",
      link: "https://linkedin.com/company/noblequranicacademy",
      icon: Linkedin,
    },
    {
      platform: "Facebook",
      link: "https://facebook.com/noblequranicacademy",
      icon: Facebook,
    },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Noble Quranic Academy"
                className="h-10 w-10 rounded-lg object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary">
                  Noble Quranic
                </span>
                <span className="text-sm text-secondary-foreground/80">
                  Academy
                </span>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 max-w-sm">
              Learn Quran from qualified scholars worldwide. Authentic Islamic
              education from the comfort of your home.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/courses"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-sm text-secondary-foreground/80">
                Phone: +91-8015621121, +91-9342514618
              </p>
              <p className="text-sm text-secondary-foreground/80">
                Email: noblequranicacademy@gmail.com
              </p>
              <p className="text-sm text-secondary-foreground/80">
                <a
                  href="https://www.noblequranicacademy.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-secondary-foreground/80 hover:underline"
                >
                  www.noblequranicacademy.online
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-secondary-foreground/80">
              © {new Date().getFullYear()} Noble Quranic Academy. All Rights
              Reserved.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.platform}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-foreground/60 hover:text-primary transition-colors"
                    aria-label={social.platform}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
