import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Clock, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "5000+", label: "Happy Patients" },
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Award, value: "50+", label: "Awards Received" },
  { icon: CheckCircle, value: "99%", label: "Success Rate" }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                About KK Multispeciality Clinic
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over 15 years, KK Multispeciality Clinic has been providing exceptional 
                dental care to our community. We combine cutting-edge technology with 
                compassionate care to ensure every patient receives the best possible 
                treatment in a comfortable environment.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Why Choose Us?</h3>
              <div className="space-y-3">
                {[
                  "State-of-the-art dental technology",
                  "Experienced and certified dental professionals",
                  "Personalized treatment plans for every patient",
                  "Comfortable and modern clinic environment",
                  "Flexible scheduling and emergency care",
                  "Comprehensive dental services under one roof"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="bg-gradient-card border-0 shadow-card p-8">
              <CardContent className="space-y-6 p-0">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To provide exceptional dental care that promotes oral health, 
                    enhances smiles, and improves the overall well-being of our patients 
                    through innovative treatments and compassionate service.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 border-0 shadow-soft hover:shadow-card transition-shadow">
                  <CardContent className="space-y-2 p-0">
                    <stat.icon className="h-8 w-8 text-primary mx-auto" />
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;