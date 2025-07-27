import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      category: "Web Development",
      description: "A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and optimized performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
      type: "web",
      featured: true,
      githubUrl: "https://github.com/yourusername/portfolio-website",
      liveUrl: "https://yourportfolio.com"
    },
    {
      title: "Task Manager Android App",
      category: "Mobile Development", 
      description: "A productivity app with offline capabilities, real-time synchronization, and beautiful Material Design UI.",
      technologies: ["Kotlin", "Jetpack Compose", "Room", "WorkManager", "Material 3"],
      type: "android",
      githubUrl: "https://github.com/yourusername/task-manager-android",
      liveUrl: "https://play.google.com/store/apps/details?id=com.yourapp"
    },
    {
      title: "E-Commerce Platform",
      category: "Full Stack Development",
      description: "A complete e-commerce solution with user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Express"],
      type: "fullstack",
      featured: true,
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://your-ecommerce.com"
    },
    {
      title: "Algorithm Visualizer",
      category: "Web Development",
      description: "Interactive web application to visualize sorting and pathfinding algorithms with smooth animations.",
      technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "Algorithms", "Data Structures"],
      type: "web",
      githubUrl: "https://github.com/yourusername/algorithm-visualizer",
      liveUrl: "https://algorithm-viz.com"
    },
    {
      title: "Weather App",
      category: "Mobile Development",
      description: "A beautiful weather application with location-based forecasts and interactive weather maps.",
      technologies: ["React Native", "TypeScript", "Weather API", "Maps SDK", "Async Storage"],
      type: "mobile",
      githubUrl: "https://github.com/yourusername/weather-app",
      liveUrl: "https://weather-app-demo.com"
    },
    {
      title: "LeetCode Solutions Repository",
      category: "Programming",
      description: "Comprehensive collection of optimized solutions to 500+ LeetCode problems with detailed explanations.",
      technologies: ["Java", "Python", "C++", "Data Structures", "Dynamic Programming"],
      type: "dsa",
      featured: true,
      githubUrl: "https://github.com/yourusername/leetcode-solutions"
    }
  ];

  return (
    <section id="projects" className="spacing-mobile-y spacing-mobile relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="heading-mobile-1 mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="body-mobile text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work across Android development, video editing, and programming projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-mobile">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in touch-manipulation" style={{ animationDelay: `${index * 100}ms` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button 
            size="lg" 
            variant="secondary"
            className="btn-mobile hover:scale-105 transition-all duration-300 hover:shadow-glow touch-manipulation tap-target"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;