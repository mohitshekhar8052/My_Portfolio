import { ReactNode, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "primary" | "accent";
}

const GlowingCard = ({ children, className = "", glowColor = "primary" }: GlowingCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowColorClass = glowColor === "primary" ? "shadow-primary/20" : "shadow-accent/20";

  return (
    <div className="relative group">
      <Card
        className={`relative overflow-hidden bg-gradient-card border-border transition-all duration-300 ${
          isHovered ? `shadow-glow ${glowColorClass}` : ""
        } ${className}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Spotlight effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, 
              ${glowColor === "primary" ? "hsl(var(--primary))" : "hsl(var(--accent))"}/0.1, 
              transparent 40%)`,
          }}
        />
        
        {/* Border glow */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        <CardContent className="relative z-10">
          {children}
        </CardContent>
      </Card>
    </div>
  );
};

export default GlowingCard;