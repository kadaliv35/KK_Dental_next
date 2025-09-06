import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smile, Shield, Zap, Heart, Star, Users } from "lucide-react";

const services = [
  {
    icon: Smile,
    title: "General Dentistry",
    description: "Comprehensive dental care including cleanings, fillings, and routine check-ups to maintain your oral health.",
    features: ["Regular Cleanings", "Cavity Fillings", "Oral Examinations"]
  },
  {
    icon: Star,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our advanced cosmetic procedures designed to enhance your confidence.",
    features: ["Teeth Whitening", "Veneers", "Smile Makeovers"]
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Proactive treatments to prevent dental issues before they become serious problems.",
    features: ["Fluoride Treatments", "Sealants", "Oral Cancer Screening"]
  },
  {
    icon: Zap,
    title: "Emergency Care",
    description: "Immediate dental care when you need it most, available for urgent dental situations.",
    features: ["24/7 Emergency Line", "Same-Day Appointments", "Pain Management"]
  },
  {
    icon: Heart,
    title: "Pediatric Dentistry",
    description: "Specialized dental care for children in a comfortable, kid-friendly environment.",
    features: ["Child-Friendly Approach", "Preventive Education", "Gentle Techniques"]
  },
  {
    icon: Users,
    title: "Family Dentistry",
    description: "Complete dental care for the whole family, from toddlers to grandparents.",
    features: ["All Ages Welcome", "Family Discounts", "Coordinated Care"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-medical-light">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive dental care tailored to meet your unique needs with 
            state-of-the-art technology and compassionate service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;