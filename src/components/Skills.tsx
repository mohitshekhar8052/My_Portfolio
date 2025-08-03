import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSkillBar from "./AnimatedSkillBar";
import AnimatedCounter from "./AnimatedCounter";
import GlowingCard from "./GlowingCard";
import ScrollReveal from "./ScrollReveal";
import { SkillsSplineScene } from "@/components/ui/spline-scenes";

const Skills = () => {
  const skillCategories = [
    {
      title: "Android Development",
      icon: "📱",
      skills: [
        { name: "Kotlin", level: 50 },
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
        { name: "Adobe Premiere Pro", level: 68 },
        { name: "After Effects", level: 45 },
        { name: "DaVinci Resolve", level: 55 },
        { name: "Motion Graphics", level: 55 },
        { name: "Color Grading", level: 40 },
        { name: "Audio Editing", level: 75 }
      ]
    },
    {
      title: "Programming & DSA",
      icon: "⚡",
      skills: [
        { name: "Data Structures", level: 60 },
        { name: "Algorithms", level: 85 },
        { name: "Problem Solving", level: 70 },
        { name: "Time Complexity", level: 60 },
        { name: "System Design", level: 75 },
        { name: "Competitive Programming", level: 44 }
      ]
    }
  ];

  const tools = [
    "Android Studio", "IntelliJ IDEA", "Git", "Firebase", 
    "Adobe Creative Suite", "Premiere Pro", "After Effects",
    "LeetCode", "HackerRank", "Figma", "Postman"
  ];

  return (
    <section id="skills" className="spacing-mobile-y bg-gradient-hero">
      <div className="container mx-auto spacing-mobile">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="heading-mobile-1 mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="body-mobile text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-mobile mb-12 sm:mb-16">
          {skillCategories.map((category, index) => (
            <GlowingCard key={index} className="group hover:scale-105 transition-transform duration-300 touch-manipulation">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-foreground group-hover:text-primary transition-colors duration-300 text-base sm:text-lg">
                  <span className="text-xl sm:text-2xl group-hover:animate-bounce">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 pt-0">
                {category.skills.map((skill, skillIndex) => (
                  <AnimatedSkillBar 
                    key={skillIndex}
                    skill={skill.name}
                    percentage={skill.level}
                    delay={skillIndex * 100}
                  />
                ))}
              </CardContent>
            </GlowingCard>
          ))}
        </div>

        <GlowingCard glowColor="accent" className="mb-12 sm:mb-16 touch-manipulation">
          <div className="card-mobile">
            <h3 className="heading-mobile-2 text-center mb-6 sm:mb-8 text-foreground">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {tools.map((tool, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-pointer touch-manipulation tap-target"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </GlowingCard>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <GlowingCard className="hover:scale-105 transition-transform duration-300">
            <div className="p-6 space-y-2">
              <h4 className="text-4xl font-bold text-primary">
                <AnimatedCounter end={1} suffix="+" />
              </h4>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
          </GlowingCard>
          <GlowingCard className="hover:scale-105 transition-transform duration-300">
            <div className="p-6 space-y-2">
              <h4 className="text-4xl font-bold text-primary">
                <AnimatedCounter end={5} suffix="+" duration={2500} />
              </h4>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
          </GlowingCard>
          <GlowingCard className="hover:scale-105 transition-transform duration-300">
            <div className="p-6 space-y-2">
              <h4 className="text-4xl font-bold text-primary">
                <AnimatedCounter end={120} suffix="+" duration={3000} />
              </h4>
              <p className="text-muted-foreground">DSA Problems Solved</p>
            </div>
          </GlowingCard>
        </div>

        {/* 3D Skills Visualization */}
        <ScrollReveal>
          <div className="mt-12 sm:mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
                Skills in 3D
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Visualizing my technical expertise through interactive 3D elements
              </p>
            </div>
            <SkillsSplineScene />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;