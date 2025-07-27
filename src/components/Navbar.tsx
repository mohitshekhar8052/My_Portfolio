import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHireClicked, setIsHireClicked] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" }, 
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleHireMe = () => {
    setIsHireClicked(true);
    
    // Add animation delay before navigating to hire page
    setTimeout(() => {
      navigate('/hire');
      setIsHireClicked(false);
      setIsOpen(false); // Close mobile menu if open
    }, 800);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Code className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <span className="text-lg sm:text-xl font-bold text-foreground">Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
            <Button 
              size="sm" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => navigate('/payment')}
            >
              Payment
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
            >
              <Button 
                size="sm" 
                onClick={handleHireMe}
                disabled={isHireClicked}
                className={`bg-gradient-primary hover:shadow-glow transition-all duration-300 group relative overflow-hidden ${
                  isHireClicked ? 'cursor-wait' : ''
                }`}
              >
                <motion.span 
                  className="flex items-center gap-2"
                  animate={isHireClicked ? { x: [0, 2, 0] } : {}}
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
                    <ExternalLink className="h-3 w-3 group-hover:animate-pulse" />
                  </motion.div>
                </motion.span>
                
                {/* Loading overlay */}
                <motion.div
                  className="absolute inset-0 bg-primary/15 backdrop-blur-sm rounded"
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                size="sm" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-fit"
                onClick={() => navigate('/payment')}
              >
                Payment
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
                className="w-fit"
              >
                <Button 
                  size="sm" 
                  onClick={handleHireMe}
                  disabled={isHireClicked}
                  className={`bg-gradient-primary hover:shadow-glow transition-all duration-300 group relative overflow-hidden ${
                    isHireClicked ? 'cursor-wait' : ''
                  }`}
                >
                  <motion.span 
                    className="flex items-center gap-2"
                    animate={isHireClicked ? { x: [0, 2, 0] } : {}}
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
                      <ExternalLink className="h-3 w-3 group-hover:animate-pulse" />
                    </motion.div>
                  </motion.span>
                  
                  {/* Loading overlay */}
                  <motion.div
                    className="absolute inset-0 bg-primary/15 backdrop-blur-sm rounded"
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;