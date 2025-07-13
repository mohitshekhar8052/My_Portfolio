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

          {/* Revolutionary Profile Image with advanced effects */}
          <ScrollReveal direction="right" delay={0.4}>
            <div className="flex justify-center lg:justify-end">
              <motion.div 
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Multiple layered background glows */}
                <motion.div 
                  className="absolute -inset-16 bg-gradient-primary rounded-full opacity-10 blur-3xl -z-20"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <motion.div 
                  className="absolute -inset-12 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-full blur-2xl -z-10"
                  animate={{ 
                    scale: [1.1, 1.3, 1.1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Outer rotating ring */}
                <motion.div 
                  className="absolute -inset-6 border-2 border-dashed border-primary/30 rounded-full -z-5"
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Inner rotating ring */}
                <motion.div 
                  className="absolute -inset-3 border border-accent/40 rounded-full -z-5"
                  animate={{ rotate: -360 }}
                  transition={{ 
                    duration: 15, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Main premium container with glass effect */}
                <div className="relative overflow-hidden backdrop-blur-sm" style={{
                  width: '340px',
                  height: '420px',
                  borderRadius: '50%',
                  border: '3px solid',
                  borderImage: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary))) 1',
                  background: 'linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--accent) / 0.15), hsl(var(--primary) / 0.1))',
                  boxShadow: `
                    0 0 60px hsl(var(--primary) / 0.4),
                    inset 0 0 60px hsl(var(--accent) / 0.1),
                    0 20px 40px hsl(var(--primary) / 0.2)
                  `
                }}>
                  {/* Shimmer effect overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
                    animate={{ 
                      x: ['-100%', '100%'],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                  />
                  
                  <motion.img 
                    src="/lovable-uploads/8521a317-363c-4489-a602-54a76c79ee8a.png"
                    alt="Mohit Shekhar - Android Developer & Video Editor"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1, filter: "brightness(1)" }}
                    whileHover={{ 
                      scale: 1.15, 
                      filter: "brightness(1.1) contrast(1.1) saturate(1.1)"
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Premium overlay effects */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/0 to-primary/20 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Geometric pattern overlay */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20"
                    style={{
                      backgroundImage: `
                        radial-gradient(circle at 20% 20%, hsl(var(--primary)) 2px, transparent 2px),
                        radial-gradient(circle at 80% 80%, hsl(var(--accent)) 2px, transparent 2px)
                      `,
                      backgroundSize: '40px 40px'
                    }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                {/* Enhanced floating skill icons with 3D effect */}
                <motion.div 
                  className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-primary/40 shadow-lg"
                  animate={{ 
                    y: [-8, 8, -8],
                    rotate: [0, 15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                >
                  <span className="text-2xl">📱</span>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-accent/40 shadow-lg"
                  animate={{ 
                    y: [8, -8, 8],
                    rotate: [0, -15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3.5, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  whileHover={{ scale: 1.2, rotate: -360 }}
                >
                  <span className="text-2xl">🎬</span>
                </motion.div>
                
                <motion.div 
                  className="absolute top-12 -left-10 w-14 h-14 bg-gradient-to-br from-primary/25 to-primary/5 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-primary/30 shadow-lg"
                  animate={{ 
                    x: [-6, 6, -6],
                    y: [-4, 4, -4],
                    rotate: [0, 20, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  whileHover={{ scale: 1.3, rotate: 180 }}
                >
                  <span className="text-xl">⚡</span>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-16 -right-10 w-14 h-14 bg-gradient-to-br from-accent/25 to-accent/5 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-accent/30 shadow-lg"
                  animate={{ 
                    x: [6, -6, 6],
                    y: [4, -4, 4],
                    rotate: [0, -20, 0]
                  }}
                  transition={{ 
                    duration: 4.5, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                  whileHover={{ scale: 1.3, rotate: -180 }}
                >
                  <span className="text-xl">🧠</span>
                </motion.div>

                {/* Particle effects */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary/60 rounded-full"
                    style={{
                      top: `${20 + i * 15}%`,
                      right: `${-5 + (i % 2) * 10}%`,
                    }}
                    animate={{
                      y: [-20, 20, -20],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
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