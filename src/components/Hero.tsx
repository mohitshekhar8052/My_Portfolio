import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import TypewriterText from "./TypewriterText";
import FloatingElements from "./FloatingElements";
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

  const handleHireMe = () => {
    setIsHireClicked(true);
    
    // Add animation delay before navigating to hire page
    setTimeout(() => {
      navigate('/hire');
      setIsHireClicked(false);
    }, 800);
  };

  return (
    <motion.section 
      ref={ref}
      style={{ y, opacity }}
      className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* 3D Background */}
      <HeroSplineScene />
      
      <FloatingElements />
      
      {/* Enhanced background accent elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-primary/5 rounded-full blur-2xl animate-bounce delay-2000"></div>
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
                   <span className="group-hover:animate-pulse">View My Work</span>
                 </Button>
                 <motion.div
                   animate={isHireClicked ? { 
                     scale: [1, 1.05, 1.02, 1],
                     rotate: [0, 2, -1, 0]
                   } : {}}
                   transition={{ 
                     duration: 0.8, 
                     ease: [0.25, 0.46, 0.45, 0.94],
                     times: [0, 0.3, 0.7, 1]
                   }}
                   className="w-full sm:w-auto"
                 >
                   <Button 
                     variant="secondary" 
                     size="lg" 
                     onClick={handleHireMe}
                     disabled={isHireClicked}
                     className={`hover:scale-105 transition-all duration-300 group relative overflow-hidden w-full ${
                       isHireClicked ? 'cursor-wait' : ''
                     }`}
                   >
                     <motion.span 
                       className="flex items-center gap-2"
                       animate={isHireClicked ? { x: [0, 4, 0] } : {}}
                       transition={{ 
                         duration: 0.4, 
                         ease: "easeInOut",
                         times: [0, 0.5, 1]
                       }}
                     >
                       Hire Me
                       <motion.div
                         animate={isHireClicked ? { 
                           scale: [1, 1.2, 1],
                           rotate: [0, 180, 360] 
                         } : {}}
                         transition={{ 
                           duration: 0.8, 
                           ease: "easeInOut",
                           times: [0, 0.4, 1]
                         }}
                       >
                         <ExternalLink className="h-4 w-4 group-hover:animate-pulse" />
                       </motion.div>
                     </motion.span>
                     
                     {/* Loading overlay */}
                     <motion.div
                       className="absolute inset-0 bg-primary/15 backdrop-blur-sm rounded-lg"
                       initial={{ opacity: 0, scale: 0.8 }}
                       animate={isHireClicked ? { 
                         opacity: [0, 0.8, 0],
                         scale: [0.8, 1.1, 1]
                       } : {}}
                       transition={{ 
                         duration: 0.8, 
                         ease: "easeOut",
                         times: [0, 0.3, 1]
                       }}
                     />
                   </Button>
                 </motion.div>
               </div>

               <div className="flex gap-4 sm:gap-6 justify-center lg:justify-start animate-fade-in delay-1200">
                 <Button 
                   variant="ghost" 
                   size="icon" 
                   className="hover:text-primary hover:scale-110 transition-all duration-300 hover:rotate-12"
                   asChild
                 >
                   <a href="https://github.com/mohitshekhar8052" target="_blank" rel="noopener noreferrer">
                     <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                   </a>
                 </Button>
                 <Button 
                   variant="ghost" 
                   size="icon" 
                   className="hover:text-primary hover:scale-110 transition-all duration-300 hover:rotate-12"
                 >
                   <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                 </Button>
                 <Button 
                   variant="ghost" 
                   size="icon" 
                   className="hover:text-primary hover:scale-110 transition-all duration-300 hover:rotate-12"
                 >
                   <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
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
                
                {/* Main premium container with glass effect - Mobile responsive */}
                <div 
                  className="relative overflow-hidden backdrop-blur-sm"
                  style={{
                    width: 'min(280px, 80vw)',
                    height: 'min(340px, 80vw)',
                    borderRadius: '50%',
                    border: '3px solid',
                    borderImage: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary))) 1',
                    background: 'linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--accent) / 0.15), hsl(var(--primary) / 0.1))',
                    boxShadow: `
                      0 0 60px hsl(var(--primary) / 0.4),
                      inset 0 0 60px hsl(var(--accent) / 0.1),
                      0 20px 40px hsl(var(--primary) / 0.2)
                    `
                  }}
                >
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
                    src="/mohit-profile.png"
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
                
                {/* Enhanced floating skill icons with 3D effect - Mobile responsive */}
                <motion.div 
                  className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-primary/40 shadow-lg"
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
                  <span className="text-lg sm:text-2xl">📱</span>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-accent/40 shadow-lg"
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
                  <span className="text-lg sm:text-2xl">🎬</span>
                </motion.div>
                
                <motion.div 
                  className="absolute top-8 sm:top-12 -left-6 sm:-left-10 w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/25 to-primary/5 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-primary/30 shadow-lg"
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
                  <span className="text-base sm:text-xl">⚡</span>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-12 sm:bottom-16 -right-6 sm:-right-10 w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-accent/25 to-accent/5 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-accent/30 shadow-lg"
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
                  <span className="text-base sm:text-xl">🧠</span>
                </motion.div>

                {/* Particle effects - Mobile responsive */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary/60 rounded-full"
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