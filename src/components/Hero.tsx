import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import TypewriterText from "./TypewriterText";
import FloatingElements from "./FloatingElements";

const Hero = () => {
  const typewriterTexts = [
    "Android Developer",
    "Video Editor", 
    "DSA Enthusiast",
    "Problem Solver",
    "Creative Coder"
  ];

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      <FloatingElements />
      
      {/* Enhanced background accent elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-bounce delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
                Hello, I'm a
              </h1>
              <div className="text-4xl lg:text-6xl font-bold text-foreground min-h-[1.2em]">
                <TypewriterText 
                  texts={typewriterTexts}
                  speed={150}
                  deleteSpeed={100}
                  delayBetween={2000}
                />
              </div>
              <p className="text-xl text-muted-foreground max-w-lg animate-fade-in delay-500">
                Crafting digital experiences through code and visual storytelling
              </p>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in delay-700">
                Passionate about mobile development, creative editing, and algorithmic problem solving
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in delay-1000">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 group"
              >
                <span className="group-hover:animate-pulse">View My Work</span>
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                onClick={scrollToAbout}
                className="hover:scale-105 transition-all duration-300"
              >
                About Me
              </Button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start animate-fade-in delay-1200">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary hover:scale-110 transition-all duration-300 hover:rotate-12"
              >
                <Github className="h-6 w-6" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary hover:scale-110 transition-all duration-300 hover:rotate-12"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary hover:scale-110 transition-all duration-300 hover:rotate-12"
              >
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Profile Image with enhanced effects */}
          <div className="flex justify-center lg:justify-end animate-fade-in delay-300">
            <div className="relative group">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-card border-4 border-primary/20 relative transition-all duration-500 group-hover:scale-105 group-hover:border-primary/40">
                <img 
                  src="/lovable-uploads/ebc39b67-b73f-45e0-8291-2e2d9c2fa0fa.png"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {/* Floating tech icons around the image */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce">
                  <span className="text-xs">📱</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce delay-200">
                  <span className="text-xs">🎬</span>
                </div>
                <div className="absolute top-8 -left-8 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce delay-400">
                  <span className="text-xs">⚡</span>
                </div>
              </div>
              <div className="absolute -inset-8 bg-gradient-primary rounded-full opacity-20 blur-xl -z-10 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={scrollToAbout}
            className="animate-bounce hover:text-primary transition-colors hover:scale-110 group"
          >
            <ArrowDown className="h-5 w-5 group-hover:animate-pulse" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;