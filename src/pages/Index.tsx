import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, BookOpen, Users, Globe, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const features = [
    "Qualified Scholars – Certified Huffaz, Aalims, Muftis, and Moulvis, both male and female, with formal Islamic degrees",
    "International Teaching Experience – Trusted by students across the globe",
    "Spiritual & Academic Excellence – Focus on both knowledge and tarbiyyah (Islamic upbringing)",
    "One-on-One Online Classes – Flexible timings and personalized learning for all age groups",
  ];

  const courses = [
    { name: "Beginner Course for Kids" },
    { name: "Noorani Qaida Course (Men & Women)" },
    { name: "Hifz Surah (Men & Women)" },
    { name: "Quran Recitation with Tajweed" },
  ];

  const testimonials = [
    {
      quote:
        "Noble Quranic Academy has helped my child learn Quran with proper Tajweed. The teacher is very patient and knowledgeable. Highly recommended!",
      author: "Fatima A., Canada",
    },
    {
      quote:
        "As an adult beginner, I was hesitant, but the one-on-one classes are fantastic. I've learned so much in just a few months.",
      author: "Ahmed M., USA",
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background via-accent/20 to-muted/30">
        <div className="geometric-pattern absolute inset-0"></div>
        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
                Learn Quran from the
                <span className="text-primary"> Comfort of Your Home!</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                With One of the World's Leading Online Islamic Academies — Noble
                Quranic Academy
              </p>
              <blockquote className="text-lg italic text-secondary font-arabic border-l-4 border-primary pl-4">
                "The best among you are those who learn the Qur'an and teach
                it."
                <footer className="text-sm text-muted-foreground mt-2">
                  — Prophet Muhammad ﷺ (Sahih al-Bukhari)
                </footer>
              </blockquote>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
              >
                <Link to="/contact">Register Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/5"
              >
                <Link to="/courses">View Courses</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-card">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[500px] object-cover"
                src="https://videos.pexels.com/video-files/8165475/8165475-uhd_1440_2560_25fps.mp4"
              >
                Your browser does not support the video tag.
              </video>

              {/* keep your existing gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Noble Quranic Academy?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border bg-card shadow-card hover:shadow-elegant transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle
                      className="text-primary mt-1 flex-shrink-0"
                      size={24}
                    />
                    <p className="text-card-foreground">{feature}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 bg-accent/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Most Popular Courses
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="border-border bg-card shadow-card hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <BookOpen className="text-primary mx-auto mb-4" size={32} />
                  <h3 className="font-semibold text-card-foreground">
                    {course.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
            >
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Vision & Mission
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="text-primary" size={32} />
                  <h3 className="text-2xl font-semibold text-primary">
                    Vision
                  </h3>
                </div>
                <p className="text-card-foreground leading-relaxed">
                  To become the leading online platform for authentic and
                  accessible Quranic education, fostering a global community of
                  learners dedicated to understanding and living by the
                  teachings of the Quran.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="text-primary" size={32} />
                  <h3 className="text-2xl font-semibold text-primary">
                    Mission
                  </h3>
                </div>
                <p className="text-card-foreground leading-relaxed">
                  Our mission is to provide high-quality, personalized Islamic
                  education taught by qualified scholars, making it convenient
                  for students of all ages and backgrounds to learn the Quran
                  from anywhere in the world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-accent/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Students Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border bg-card shadow-card">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Star
                      className="text-primary mt-1 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <blockquote className="text-card-foreground mb-4 italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <footer className="text-primary font-medium">
                        — {testimonial.author}
                      </footer>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
