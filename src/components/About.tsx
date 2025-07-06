import { Card, CardContent } from "@/components/ui/card";
import { Code, Video, Brain, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Android Developer",
      description: "Creating intuitive mobile applications with modern technologies and best practices."
    },
    {
      icon: Video,
      title: "Video Editor",
      description: "Crafting compelling visual stories through professional video editing and post-production."
    },
    {
      icon: Brain,
      title: "DSA Enthusiast",
      description: "Passionate about algorithmic problem solving and data structure optimization."
    },
    {
      icon: Award,
      title: "Problem Solver",
      description: "Always eager to tackle challenging problems and learn new technologies."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer who combines technical expertise with creative vision. 
            My journey spans mobile development, video editing, and algorithmic problem solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Started my tech journey with a curiosity for how mobile apps work, which led me 
                to dive deep into Android development. Along the way, I discovered my passion 
                for visual storytelling through video editing.
              </p>
              <p>
                My love for problem-solving naturally drew me to Data Structures and Algorithms, 
                where I enjoy the challenge of optimizing solutions and thinking algorithmically.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest technologies 
                and industry trends. Every project is an opportunity to grow and create something meaningful.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-gradient-card hover:shadow-glow transition-all duration-300 border-border">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-card rounded-lg p-8 border border-border">
          <h3 className="text-2xl font-bold text-center mb-6 text-foreground">What Drives Me</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-primary">Innovation</h4>
              <p className="text-muted-foreground">
                Constantly exploring new technologies and creative approaches to solve problems.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-primary">Quality</h4>
              <p className="text-muted-foreground">
                Committed to delivering high-quality work that meets both user needs and technical standards.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-primary">Growth</h4>
              <p className="text-muted-foreground">
                Embracing challenges as opportunities to learn, grow, and expand my skill set.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;