"use client"

import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import { useState } from "react";
import AppointmentModal from "./AppointmentModal";
import Image from "next/image";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-4">
            <a href="#home" className="flex items-center">
              <Image 
                src="/kk-dental-logo.png" 
                alt="KK Multispeciality Dental Clinic" 
                width={64}
                height={64}
                className="h-16 w-auto object-contain max-w-none"
              />
              <div className="ml-4">
                <h1 className="text-xl font-bold text-primary">KK Multispecialty</h1>
                <p className="text-xs text-muted-foreground">Dental Clinic & Implant Center</p>
              </div>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <Button 
              variant="default" 
              className="hidden sm:flex"
              onClick={() => setIsModalOpen(true)}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
      <AppointmentModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen}
      />
    </header>
  );
};

export default Header;