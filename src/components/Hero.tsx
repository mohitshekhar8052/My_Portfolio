
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import TypewriterText from "./TypewriterText";
import ScrollReveal from "./ScrollReveal";
import { HeroSplineScene } from "@/components/ui/spline-scenes";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const [isHireClicked, setIsHireClicked] = useState(false);
  const navigate = useNavigate();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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

  const handleHireMe = () => {
    setIsHireClicked(true);
    setTimeout(() => {
      navigate('/hire');
      setIsHireClicked(false);
    }, 600);
  };

  return (
    <motion.section 
      ref={ref}
      style={{ y, opacity }}
      className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* 3D Background - Optimized */}
      <HeroSplineScene />
      
      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <ScrollReveal direction="left" delay={0.2}>
             <div className="text-center lg:text-left space-y-6 sm:space-y-8">
               <div className="space-y-4">
                 <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
                   Hello, I'm a
                 </h1>
                 <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold text-foreground min-h-[1.2em]">
                   <TypewriterText 
                     texts={typewriterTexts}
                     speed={150}
                     deleteSpeed={100}
                     delayBetween={2000}
                   />
                 </div>
                 <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 animate-fade-in delay-500">
                   Crafting digital experiences through code and visual storytelling
                 </p>
                 <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 animate-fade-in delay-700">
                   Passionate about mobile development, creative editing, and algorithmic problem solving
                 </p>
               </div>

               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in delay-1000">
                 <Button 
                   size="lg" 
                   className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
                   onClick={scrollToAbout}
                 >
                   <span>View My Work</span>
                 </Button>
                 <Button 
                   variant="secondary" 
                   size="lg" 
                   onClick={handleHireMe}
                   disabled={isHireClicked}
                   className="hover:scale-105 transition-all duration-300 group relative overflow-hidden w-full sm:w-auto"
                 >
                   <span className="flex items-center gap-2">
                     Hire Me
                     <ExternalLink className="h-4 w-4" />
                   </span>
                 </Button>
               </div>

               <div className="flex gap-4 sm:gap-6 justify-center lg:justify-start animate-fade-in delay-1200">
                 <Button 
                   variant="ghost" 
                   size="icon" 
                   className="hover:text-primary hover:scale-110 transition-all duration-300"
                   asChild
                 >
                   <a href="https://github.com/mohitshekhar8052" target="_blank" rel="noopener noreferrer">
                     <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                   </a>
                 </Button>
                 <Button 
                   variant="ghost" 
                   size="icon" 
                   className="hover:text-primary hover:scale-110 transition-all duration-300"
                 >
                   <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                 </Button>
                 <Button 
                   variant="ghost" 
                   size="icon" 
                   className="hover:text-primary hover:scale-110 transition-all duration-300"
                 >
                   <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                 </Button>
               </div>
             </div>
          </ScrollReveal>

          {/* Enhanced Profile Image */}
          <ScrollReveal direction="right" delay={0.4}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative group cursor-pointer">
                {/* Enhanced background glow with animation */}
                <div className="absolute -inset-16 bg-gradient-primary/20 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
                
                {/* Main container with enhanced glass effect */}
                <div 
                  className="relative overflow-hidden backdrop-blur-lg border-2 border-primary/40 rounded-full shadow-2xl group-hover:border-primary/60 transition-all duration-500"
                  style={{
                    width: 'min(320px, 85vw)',
                    height: 'min(320px, 85vw)',
                    background: 'linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--accent) / 0.15), hsl(var(--background) / 0.1))',
                    boxShadow: '0 0 60px hsl(var(--primary) / 0.3), inset 0 0 40px hsl(var(--background) / 0.1)'
                  }}
                >
                  <img 
                    src="/mohit-profile.png"
                    alt="Mohit Shekhar - Android Developer & Video Editor"
                    className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    style={{
                      filter: 'contrast(1.1) saturate(1.1)'
                    }}
                  />
                  
                  {/* Overlay gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Enhanced floating icons with better positioning */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center backdrop-blur-xl border-2 border-primary/40 shadow-lg hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📱</span>
                </div>
                
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-accent/30 rounded-full flex items-center justify-center backdrop-blur-xl border-2 border-accent/40 shadow-lg hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🎬</span>
                </div>
                
                {/* Additional decorative elements */}
                <div className="absolute top-1/4 -left-4 w-3 h-3 bg-primary/60 rounded-full animate-ping"></div>
                <div className="absolute bottom-1/3 -right-4 w-2 h-2 bg-accent/60 rounded-full animate-ping delay-1000"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={scrollToAbout}
            className="animate-bounce hover:text-primary transition-colors"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
