import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Users, MessageCircle } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      name: "Beginner Course for Kids",
      duration: "6 months – 2 years",
      includes: [
        "Complete Noorani Qaida with Tajweed",
        "Masnoon Duas – 48 important supplications",
        "40 Selected Hadiths",
        "7 Kalimas",
        "Islamic Upbringing",
        "How to perform Salah",
        "Asma-ul-Husna memorization",
        "Quran Memorization (Juz 30 to Surah Balad)"
      ]
    },
    {
      name: "Noorani Qaida Course (Men & Women)",
      duration: "4 – 6 months",
      includes: [
        "Noorani Qaida",
        "Tajweed Rules & Pronunciation",
        "Islamic Beliefs (Aqaid)",
        "99 Names of Allah",
        "40 Hadiths",
        "Islamic Issues & Seerah stories"
      ]
    },
    {
      name: "Hifz Surah (Men & Women)",
      duration: "Flexible",
      includes: [
        "Surah Fatiha",
        "Surah Yaseen",
        "Surah Mulk",
        "Surah Rahman",
        "Surah Waqiya"
      ]
    },
    {
      name: "Quran Recitation with Tajweed",
      duration: "Flexible",
      includes: [
        "Master Tajweed & Pronunciation",
        "Proper Makhraj of letters",
        "Fluent recitation with 100% Tajweed",
        "Memorization: Surah Fatiha + Juz 30"
      ]
    },
    {
      name: "Nazirah – Basic Quran Reading",
      duration: "Flexible",
      includes: [
        "Recognize Arabic Alphabets",
        "Apply Basic Tajweed Rules",
        "Step-by-step reading guidance",
        "Ideal for beginners"
      ]
    }
  ];

  return (
    <div className="space-y-0">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background via-accent/20 to-muted/30">
        <div className="geometric-pattern absolute inset-0"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              All Our <span className="text-primary">Courses</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our comprehensive list of online courses, designed for learners of all ages and proficiency levels. 
              Each course is taught by a certified scholar to ensure the highest quality of education.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="border-border bg-card shadow-card hover:shadow-elegant transition-all">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Course Info */}
                    <div className="md:col-span-1 space-y-4">
                      <div className="flex items-center gap-3">
                        <BookOpen className="text-primary" size={28} />
                        <h3 className="text-2xl font-bold text-card-foreground">{course.name}</h3>
                      </div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock size={16} />
                        <span className="text-sm">Duration: {course.duration}</span>
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users size={16} />
                        <span className="text-sm">One-on-One Classes</span>
                      </div>

                      <Button 
                        asChild
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
                      >
                        <a 
                          href={`https://api.whatsapp.com/send?phone=919342514618&text=Salam%2C%20I%20want%20to%20inquire%20about%20the%20course%3A%20${encodeURIComponent(course.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <MessageCircle size={16} />
                          Inquire Now
                        </a>
                      </Button>
                    </div>

                    {/* Course Content */}
                    <div className="md:col-span-2">
                      <h4 className="text-lg font-semibold text-card-foreground mb-4">Course Includes:</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {course.includes.map((item, itemIndex) => (
                          <Badge 
                            key={itemIndex} 
                            variant="secondary" 
                            className="text-left justify-start p-3 h-auto bg-accent/50 text-accent-foreground hover:bg-accent/70 transition-colors"
                          >
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Quranic Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students worldwide who are learning Quran with our qualified scholars.
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
                Join via WhatsApp
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

export default Courses;