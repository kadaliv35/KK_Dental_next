"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award } from "lucide-react";
import AppointmentModal from "./AppointmentModal";
import Image from "next/image";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Your Smile is Our
                <span className="block text-primary-glow">Priority</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Experience exceptional dental care at KK Multispeciality Clinic. We provide 
                comprehensive dental services with cutting-edge technology and 
                personalized patient care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg group"
                onClick={() => {
                  console.log('Book appointment button clicked');
                  setIsModalOpen(true);
                }}
              >
                Book Appointment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg border-white text-black hover:bg-primary hover:text-white hover:border-primary"
                onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary-glow" />
                <span className="text-sm">Licensed Professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-primary-glow" />
                <span className="text-sm">Award-Winning Care</span>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Modern dental clinic interior"
                width={600}
                height={600}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-6 shadow-card">
              <div className="text-3xl font-bold text-primary">5000+</div>
              <div className="text-sm text-muted-foreground">Happy Patients</div>
            </div>
          </div>
        </div>
      </div>
      
      <AppointmentModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
    </section>
  );
};

export default Hero;