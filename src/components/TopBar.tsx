import { Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="tel:+584121234567" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">+58 412-123-4567</span>
          </a>
          <a href="mailto:info@iuttol.edu.ve" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">info@iuttol.edu.ve</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
