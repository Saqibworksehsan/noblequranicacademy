import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, BookOpen, Users, Award, MessageCircle } from "lucide-react";

const About = () => {
  const countries = [
    { name: "India", flag: "🇮🇳" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "USA", flag: "🇺🇸" },
    { name: "Singapore", flag: "🇸🇬" },
    { name: "Qatar", flag: "🇶🇦" },
    { name: "Saudi Arabia", flag: "🇸🇦" }
  ];

  const qualifications = [
    "Certified Huffaz (Quran Memorizers)",
    "Aalims (Islamic Scholars)",
    "Muftis (Islamic Jurists)", 
    "Moulvis (Religious Teachers)",
    "Formal Islamic Degrees",
    "International Teaching Experience"
  ];

  return (
    <div className="space-y-0">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background via-accent/20 to-muted/30">
        <div className="geometric-pattern absolute inset-0"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Noble Quranic Academy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Noble Quranic Academy, we are dedicated to providing authentic and accessible Islamic education to people around the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <BookOpen className="text-primary" size={32} />
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to connect students with highly qualified and certified scholars, making it possible for anyone to learn the Quran from the comfort of their home.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded on the principles of spiritual and academic excellence, we believe that learning the Quran is not just about reading but also about understanding and internalizing its teachings. Our curriculum is designed to foster a deep connection with the Divine, focusing on both knowledge (<span className="font-arabic text-primary">علم</span>) and Islamic upbringing (<span className="font-arabic text-primary">تربیه</span>).
              </p>
            </div>
            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <Globe className="text-primary mx-auto" size={48} />
                  <h3 className="text-2xl font-semibold text-card-foreground">Global Reach</h3>
                  <p className="text-card-foreground/80">
                    Our online classes are structured to be one-on-one, ensuring a personalized and flexible learning experience for all age groups, from young children to adults.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-20 bg-accent/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Qualified Teachers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We have a team of dedicated scholars who bring a wealth of knowledge and international teaching experience to our students. Both male and female teachers are available to cater to the diverse needs of our students worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualifications.map((qualification, index) => (
              <Card key={index} className="border-border bg-card shadow-card hover:shadow-elegant transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <Award className="text-primary mx-auto mb-4" size={32} />
                  <h3 className="font-semibold text-card-foreground">{qualification}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Teaching Students Worldwide
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Whether you are anywhere in the world — we bring qualified Quran teachers directly to your home through online classes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {countries.map((country, index) => (
              <Card key={index} className="border-border bg-card shadow-card hover:shadow-elegant transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2">{country.flag}</div>
                  <h3 className="font-medium text-card-foreground text-sm">{country.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
          
      {/* New Founder Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Founder Image */}
            <div className="flex-shrink-0">
              <img
                src="./Photo.jpg" // Replace with the actual image path
                alt="MD ARQAM"
                className="rounded-lg shadow-lg w-48 h-48 object-cover"
              />
            </div>
            {/* Founder Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                MD ARQAM, PhD
              </h2>
              <h3 className="text-xl text-primary-600 font-semibold mb-4">
                Founder of Noble Quranic Academy
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Industrial & Islamic Economist, Economist, policy advisor, and
                transformation leader with 15+ years of experience across
                industry and academia. Dr. Arqam is passionate about combining
                Islamic principles with modern economic practices to create a
                positive impact on society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-accent/10">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-8 text-center">
                <BookOpen className="text-primary mx-auto mb-4" size={40} />
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Knowledge (علم)</h3>
                <p className="text-card-foreground/80">
                  We focus on providing authentic Islamic knowledge through proper understanding of the Quran and Sunnah.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-8 text-center">
                <Users className="text-primary mx-auto mb-4" size={40} />
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Tarbiyyah (تربیه)</h3>
                <p className="text-card-foreground/80">
                  Islamic upbringing and character development are integral parts of our educational approach.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-8 text-center">
                <Globe className="text-primary mx-auto mb-4" size={40} />
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Accessibility</h3>
                <p className="text-card-foreground/80">
                  Making quality Islamic education accessible to students worldwide through modern technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join Our Global Learning Community
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience authentic Islamic education with our qualified scholars from around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
            >
              <a 
                href="https://api.whatsapp.com/send?phone=919342514618&text=Salam%2C%20I%20want%20to%20join%20Noble%20Quranic%20Academy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle size={16} />
                Start Learning Today
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/5"
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;