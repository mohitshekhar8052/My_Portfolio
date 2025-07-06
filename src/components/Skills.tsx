import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Android Development",
      icon: "📱",
      skills: [
        { name: "Kotlin", level: 90 },
        { name: "Java", level: 85 },
        { name: "Android SDK", level: 88 },
        { name: "Jetpack Compose", level: 80 },
        { name: "MVVM Architecture", level: 85 },
        { name: "Room Database", level: 82 }
      ]
    },
    {
      title: "Video Editing",
      icon: "🎬",
      skills: [
        { name: "Adobe Premiere Pro", level: 90 },
        { name: "After Effects", level: 85 },
        { name: "DaVinci Resolve", level: 78 },
        { name: "Motion Graphics", level: 80 },
        { name: "Color Grading", level: 85 },
        { name: "Audio Editing", level: 75 }
      ]
    },
    {
      title: "Programming & DSA",
      icon: "⚡",
      skills: [
        { name: "Data Structures", level: 88 },
        { name: "Algorithms", level: 85 },
        { name: "Problem Solving", level: 90 },
        { name: "Time Complexity", level: 82 },
        { name: "System Design", level: 75 },
        { name: "Competitive Programming", level: 80 }
      ]
    }
  ];

  const tools = [
    "Android Studio", "IntelliJ IDEA", "Git", "Firebase", 
    "Adobe Creative Suite", "Premiere Pro", "After Effects",
    "LeetCode", "HackerRank", "Figma", "Postman"
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-card rounded-lg p-8 border border-border">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <h4 className="text-3xl font-bold text-primary">3+</h4>
            <p className="text-muted-foreground">Years of Experience</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-3xl font-bold text-primary">50+</h4>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-3xl font-bold text-primary">500+</h4>
            <p className="text-muted-foreground">DSA Problems Solved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;