import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play, Star } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  type: string;
  featured?: boolean;
}

const ProjectCard = ({ title, category, description, technologies, type, featured = false }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'android': return '📱';
      case 'video': return '🎬';
      case 'dsa': return '⚡';
      default: return '💻';
    }
  };

  return (
    <div className="relative group">
      <Card 
        className={`relative overflow-hidden bg-gradient-card border-border transition-all duration-500 hover:scale-105 ${
          featured ? 'ring-2 ring-primary/20' : ''
        } ${isHovered ? 'shadow-glow' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 left-4 w-1 h-1 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-100" />
          <div className="absolute top-8 right-6 w-1 h-1 bg-accent/30 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-300" />
          <div className="absolute bottom-6 left-8 w-1 h-1 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-500" />
        </div>

        <CardHeader className="relative z-10">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3 group-hover:scale-105 transition-transform duration-300">
              <span className="text-2xl group-hover:animate-bounce">{getProjectIcon(type)}</span>
              <div>
                <CardTitle className="text-foreground group-hover:text-primary transition-colors duration-300">
                  {title}
                </CardTitle>
                <Badge variant="secondary" className="mt-1 group-hover:bg-primary/20 transition-colors duration-300">
                  {category}
                </Badge>
              </div>
            </div>
            {featured && (
              <Badge className="bg-gradient-primary text-primary-foreground animate-pulse">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4 relative z-10">
          <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, techIndex) => (
              <Badge 
                key={techIndex} 
                variant="outline" 
                className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2 pt-2">
            <Button 
              size="sm" 
              variant="secondary" 
              className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              {type === 'video' ? <Play className="h-4 w-4" /> : <Github className="h-4 w-4" />}
              {type === 'video' ? 'Watch' : 'Code'}
            </Button>
            <Button 
              size="sm" 
              variant="ghost" 
              className="flex items-center gap-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Button>
          </div>
        </CardContent>

        {/* Bottom glow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Card>
    </div>
  );
};

export default ProjectCard;