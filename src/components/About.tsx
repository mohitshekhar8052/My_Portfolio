import GlowingCard from "./GlowingCard";
import { Code, Video, Brain, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Android Developer",
      description: "Creating intuitive mobile applications with modern technologies and best practices."
    },
    {
      icon: Video,
      title: "Video Editor", 
      description: "Crafting compelling visual stories through professional video editing and post-production."
    },
    {
      icon: Brain,
      title: "DSA Enthusiast",
      description: "Passionate about algorithmic problem solving and data structure optimization."
    },
    {
      icon: Award,
      title: "Problem Solver",
      description: "Always eager to tackle challenging problems and learn new technologies."
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 spacing-mobile relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="heading-mobile-1 mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="body-mobile text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer who combines technical expertise with creative vision. 
            My journey spans mobile development, video editing, and algorithmic problem solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="heading-mobile-2 text-foreground">My Journey</h3>
            <div className="space-y-3 sm:space-y-4 text-muted-foreground">
              <p className="hover:text-foreground transition-colors duration-300">
                Started my tech journey with a curiosity for how mobile apps work, which led me 
                to dive deep into Android development. Along the way, I discovered my passion 
                for visual storytelling through video editing.
              </p>
              <p className="hover:text-foreground transition-colors duration-300">
                My love for problem-solving naturally drew me to Data Structures and Algorithms, 
                where I enjoy the challenge of optimizing solutions and thinking algorithmically.
              </p>
              <p className="hover:text-foreground transition-colors duration-300">
                I believe in continuous learning and staying updated with the latest technologies 
                and industry trends. Every project is an opportunity to grow and create something meaningful.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {highlights.map((item, index) => (
              <GlowingCard key={index} className="hover:scale-105 transition-transform duration-300 touch-manipulation">
                <div className="card-mobile text-center">
                  <item.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4 hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-base sm:text-lg font-semibold mb-2 text-foreground">{item.title}</h4>
                  <p className="caption-mobile">{item.description}</p>
                </div>
              </GlowingCard>
            ))}
          </div>
        </div>

        <GlowingCard glowColor="accent" className="hover:scale-102 transition-transform duration-300 touch-manipulation">
          <div className="card-mobile">
            <h3 className="heading-mobile-2 text-center mb-4 sm:mb-6 text-foreground">What Drives Me</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="group hover:scale-105 transition-transform duration-300">
                <h4 className="text-lg font-semibold mb-2 text-primary group-hover:text-accent transition-colors duration-300">Innovation</h4>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Constantly exploring new technologies and creative approaches to solve problems.
                </p>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <h4 className="text-lg font-semibold mb-2 text-primary group-hover:text-accent transition-colors duration-300">Quality</h4>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Committed to delivering high-quality work that meets both user needs and technical standards.
                </p>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <h4 className="text-lg font-semibold mb-2 text-primary group-hover:text-accent transition-colors duration-300">Growth</h4>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Embracing challenges as opportunities to learn, grow, and expand my skill set.
                </p>
              </div>
            </div>
          </div>
        </GlowingCard>
      </div>
    </section>
  );
};

export default About;