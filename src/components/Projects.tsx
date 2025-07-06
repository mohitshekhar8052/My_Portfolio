import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Android App",
      category: "Mobile Development",
      description: "A full-featured e-commerce application built with Kotlin and Jetpack Compose, featuring user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Room", "Retrofit", "Firebase"],
      type: "android",
      featured: true
    },
    {
      title: "Task Management App",
      category: "Mobile Development", 
      description: "A productivity app with offline capabilities, real-time synchronization, and beautiful Material Design UI. Includes task scheduling, reminders, and progress tracking.",
      technologies: ["Android", "SQLite", "Material Design", "WorkManager", "Notifications"],
      type: "android"
    },
    {
      title: "Brand Promotional Video",
      category: "Video Editing",
      description: "Created a compelling 2-minute promotional video for a tech startup, incorporating motion graphics, color grading, and professional audio mixing.",
      technologies: ["Premiere Pro", "After Effects", "Audition", "Motion Graphics", "Color Grading"],
      type: "video",
      featured: true
    },
    {
      title: "Wedding Highlight Reel",
      category: "Video Editing",
      description: "Crafted an emotional wedding highlight reel with cinematic transitions, synchronized audio, and beautiful color correction to capture the special moments.",
      technologies: ["DaVinci Resolve", "Color Correction", "Audio Sync", "Transitions"],
      type: "video"
    },
    {
      title: "Algorithm Visualizer",
      category: "Programming",
      description: "Interactive web application to visualize sorting and pathfinding algorithms. Helps students understand algorithmic concepts through visual representation.",
      technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "Data Structures", "Algorithms"],
      type: "dsa"
    },
    {
      title: "LeetCode Solutions",
      category: "Programming",
      description: "Comprehensive collection of optimized solutions to 500+ LeetCode problems with detailed explanations and multiple approaches for each problem.",
      technologies: ["Java", "Python", "Data Structures", "Dynamic Programming", "Graphs"],
      type: "dsa",
      featured: true
    }
  ];

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'android': return '📱';
      case 'video': return '🎬';
      case 'dsa': return '⚡';
      default: return '💻';
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work across Android development, video editing, and programming projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card border-border hover:shadow-glow transition-all duration-300 ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{getProjectIcon(project.type)}</span>
                    <div>
                      <CardTitle className="text-foreground">{project.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">{project.category}</Badge>
                    </div>
                  </div>
                  {project.featured && (
                    <Badge className="bg-gradient-primary text-primary-foreground">Featured</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="secondary" className="flex items-center gap-2">
                    {project.type === 'video' ? <Play className="h-4 w-4" /> : <Github className="h-4 w-4" />}
                    {project.type === 'video' ? 'Watch' : 'Code'}
                  </Button>
                  <Button size="sm" variant="ghost" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="secondary">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;