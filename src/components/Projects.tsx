import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";

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
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="secondary"
            className="hover:scale-105 transition-all duration-300 hover:shadow-glow"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;