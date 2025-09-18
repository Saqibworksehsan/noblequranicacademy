import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone, Globe, Instagram, Linkedin, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const courses = [
    "Beginner Kids",
    "Noorani Qaida", 
    "Hifz",
    "Tajweed",
    "Nazirah"
  ];

  const socialLinks = [
    {
      platform: "WhatsApp",
      link: "https://api.whatsapp.com/send?phone=919342514618&text=Salam%2C%20I%20want%20to%20join%20Noble%20Quranic%20Academy",
      icon: MessageCircle,
      color: "text-green-600"
    },
    {
      platform: "Email",
      link: "mailto:noblequranicacademy@gmail.com",
      icon: Mail,
      color: "text-blue-600"
    },
    {
      platform: "Instagram",
      link: "https://instagram.com/noblequranicacademy",
      icon: Instagram,
      color: "text-pink-600"
    },
    {
      platform: "LinkedIn",
      link: "https://linkedin.com/company/noblequranicacademy",
      icon: Linkedin,
      color: "text-blue-700"
    },
    {
      platform: "Facebook",
      link: "https://facebook.com/noblequranicacademy",
      icon: Facebook,
      color: "text-blue-600"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Assalamu Alaikum! A new registration has been submitted:

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Course Interested In: ${formData.course}
Message: ${formData.message}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=919342514618&text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success toast
    toast({
      title: "Message Sent!",
      description: "Your inquiry has been sent via WhatsApp. We'll get back to you soon!",
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      course: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-0">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background via-accent/20 to-muted/30">
        <div className="geometric-pattern absolute inset-0"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to start your Quranic journey? Get in touch with us today and let's discuss how we can help you achieve your Islamic education goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-border bg-card shadow-card">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-card-foreground mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className="border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="course">Course Interested In *</Label>
                      <Select required onValueChange={(value) => handleInputChange("course", value)}>
                        <SelectTrigger className="border-border">
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent>
                          {courses.map((course) => (
                            <SelectItem key={course} value={course}>
                              {course}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="border-border"
                        placeholder="Tell us about your learning goals..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
                    >
                      Send Message via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="border-border bg-card shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-card-foreground mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="text-primary" size={20} />
                      <div>
                        <p className="font-medium text-card-foreground">Phone</p>
                        <p className="text-muted-foreground">+91-8015621121, +91-9342514618</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="text-primary" size={20} />
                      <div>
                        <p className="font-medium text-card-foreground">Email</p>
                        <p className="text-muted-foreground">noblequranicacademy@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="text-primary" size={20} />
                      <div>
                        <p className="font-medium text-card-foreground">Availability</p>
                        <p className="text-muted-foreground">Online Worldwide</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-border bg-card shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-card-foreground mb-6">Quick Contact</h3>
                  <div className="space-y-4">
                    <Button 
                      asChild
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <a 
                        href="https://api.whatsapp.com/send?phone=919342514618&text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <MessageCircle size={20} />
                        Chat on WhatsApp
                      </a>
                    </Button>
                    <Button 
                      asChild
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary/5"
                    >
                      <a 
                        href="mailto:noblequranicacademy@gmail.com"
                        className="flex items-center gap-2"
                      >
                        <Mail size={20} />
                        Send Email
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-border bg-card shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-card-foreground mb-6">Follow Us</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.platform}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors"
                        >
                          <Icon className={social.color} size={20} />
                          <span className="text-sm font-medium text-card-foreground">{social.platform}</span>
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-accent/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-card-foreground mb-2">How do I get started?</h3>
                <p className="text-muted-foreground text-sm">
                  Simply contact us via WhatsApp or fill out the form above. We'll schedule a free consultation to discuss your learning goals.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-card-foreground mb-2">Are classes really one-on-one?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! All our classes are personalized one-on-one sessions to ensure maximum learning efficiency and individual attention.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-card-foreground mb-2">What are the class timings?</h3>
                <p className="text-muted-foreground text-sm">
                  We offer flexible timings to accommodate students worldwide. Classes are scheduled based on your convenience and availability.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-card-foreground mb-2">Do you have female teachers?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we have both male and female qualified teachers to cater to the diverse needs and preferences of our students.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;