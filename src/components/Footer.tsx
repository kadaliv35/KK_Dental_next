import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">KK Multispeciality Clinic</h3>
            <p className="text-primary-foreground/80">
              Your trusted partner for comprehensive dental care. 
              Creating healthy, beautiful smiles for over 15 years.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#home" className="hover:text-primary-glow transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary-glow transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary-glow transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-primary-glow transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Appointment</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-glow transition-colors">General Dentistry</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Preventive Care</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Emergency Care</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Pediatric Dentistry</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">123 Medical Center Drive, Suite 200, Health City, HC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">info@kkdentalclinic.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 KK Multispeciality Clinic. All rights reserved. | 
            <a href="#" className="hover:text-primary-glow transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-primary-glow transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;