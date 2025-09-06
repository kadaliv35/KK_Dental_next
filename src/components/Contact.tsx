import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    info: "123 Medical Center Drive, Suite 200, Health City, HC 12345"
  },
  {
    icon: Phone,
    title: "Phone",
    info: "+1 (555) 123-4567"
  },
  {
    icon: Mail,
    title: "Email",
    info: "info@kkdentalclinic.com"
  },
  {
    icon: Clock,
    title: "Hours",
    info: "Mon-Fri: 8AM-6PM, Sat: 9AM-3PM"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-medical-light">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to take the next step towards a healthier smile? 
            Get in touch with us today to schedule your appointment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <Card key={index} className="bg-background border-0 shadow-soft">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.info}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-center text-foreground">
                Emergency Dental Care
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Dental emergencies can happen anytime. We offer 24/7 emergency 
                dental care for urgent situations.
              </p>
              <Button variant="destructive" size="lg" className="w-full max-w-md mx-auto">
                Emergency Hotline: (555) 999-HELP
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;