import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TypewriterText from "./TypewriterText";
import FloatingElements from "./FloatingElements";
import ScrollReveal from "./ScrollReveal";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
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

  return (
    <motion.section 
      ref={ref}
      style={{ y, opacity }}
      className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden"
    >
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
          <ScrollReveal direction="left" delay={0.2}>
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
                   asChild
                 >
                   <a href="https://github.com/mohitshekhar8052" target="_blank" rel="noopener noreferrer">
                     <Github className="h-6 w-6" />
                   </a>
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
          </ScrollReveal>

          {/* Profile Image with oval shape and enhanced effects */}
          <ScrollReveal direction="right" delay={0.4}>
            <div className="flex justify-center lg:justify-end">
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Animated background glow */}
                <motion.div 
                  className="absolute -inset-8 bg-gradient-primary rounded-full opacity-20 blur-xl -z-10"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Main oval container */}
                <div className="relative overflow-hidden" style={{
                  width: '320px',
                  height: '400px',
                  borderRadius: '50%',
                  border: '4px solid hsl(var(--primary) / 0.3)',
                  background: 'linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.1))'
                }}>
                  <motion.img 
                    src="/lovable-uploads/8521a317-363c-4489-a602-54a76c79ee8a.png"
                    alt="Mohit Shekhar - Android Developer & Video Editor"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Overlay gradient on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-primary opacity-0"
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                {/* Floating animated icons */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30"
                  animate={{ 
                    y: [-5, 5, -5],
                    rotate: [0, 10, 0] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-lg">📱</span>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/30"
                  animate={{ 
                    y: [5, -5, 5],
                    rotate: [0, -10, 0] 
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <span className="text-lg">🎬</span>
                </motion.div>
                
                <motion.div 
                  className="absolute top-8 -left-8 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30"
                  animate={{ 
                    x: [-3, 3, -3],
                    y: [-2, 2, -2] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <span className="text-lg">⚡</span>
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>
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
    </motion.section>
  );
};

export default Hero;