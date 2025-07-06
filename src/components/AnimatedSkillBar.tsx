import { useEffect, useState, useRef } from "react";

interface AnimatedSkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

const AnimatedSkillBar = ({ skill, percentage, delay = 0 }: AnimatedSkillBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        let start = 0;
        const duration = 1500;
        const startTime = Date.now();

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function
          const easeOutCubic = 1 - Math.pow(1 - progress, 3);
          const current = easeOutCubic * percentage;
          
          setAnimatedPercentage(current);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        animate();
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage, delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill}</span>
        <span className="text-sm text-muted-foreground">
          {Math.round(animatedPercentage)}%
        </span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out relative"
          style={{ width: `${animatedPercentage}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedSkillBar;