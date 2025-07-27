import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Download, FileText, Eye, Code, Trophy, Briefcase, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  const navigate = useNavigate();
  
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mohit8052231582@gmail.com",
      href: "mailto:mohit8052231582@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8299742112",
      href: "tel:+918299742112"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kanpur, Uttar Pradesh, India",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/mohitshekhar8052", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mohit-shekhar-8838162a8/", label: "LinkedIn" },
    { icon: Code, href: "https://leetcode.com/u/mohitKumarShekhar/", label: "LeetCode" },
    { icon: Trophy, href: "https://www.codechef.com/users/mohitshekhar80", label: "CodeChef" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <section id="contact" className="spacing-mobile-y bg-gradient-hero">
      <div className="container mx-auto spacing-mobile">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="heading-mobile-1 mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="body-mobile text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-mobile">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-border touch-manipulation">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="heading-mobile-3 text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 pt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <label className="caption-mobile font-medium text-foreground">First Name</label>
                  <Input placeholder="Name" className="bg-secondary border-border tap-target" />
                </div>
                <div className="space-y-2">
                  <label className="caption-mobile font-medium text-foreground">Last Name</label>
                  <Input placeholder="Last Name" className="bg-secondary border-border tap-target" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="caption-mobile font-medium text-foreground">Email</label>
                <Input type="email" placeholder="developer@gami.com" className="bg-secondary border-border tap-target" />
              </div>
              
              <div className="space-y-2">
                <label className="caption-mobile font-medium text-foreground">Subject</label>
                <Input placeholder="Project Discussion" className="bg-secondary border-border tap-target" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  className="bg-secondary border-border min-h-32"
                />
              </div>
              
              <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="bg-gradient-card border-border hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <a 
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Me & Coding Profiles</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="hover:text-primary hover:bg-primary/10 transition-all duration-300 justify-start"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-4 w-4 mr-2" />
                      {social.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-primary/10 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <FileText className="h-5 w-5 text-primary" />
                  <h4 className="text-lg font-semibold text-foreground">Resume Preview</h4>
                </div>
                
                {/* Resume Preview Box */}
                <div className="relative bg-white rounded-lg shadow-lg p-4 mb-6 border hover:shadow-xl transition-shadow duration-300">
                  <iframe
                    src="/Mohit_Shekhar_Resume.pdf"
                    className="w-full h-80 border-0 rounded"
                    title="Resume Preview"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none rounded-lg"></div>
                  
                  {/* Preview overlay with view button */}
                  <div className="absolute top-2 right-2">
                    <Button size="sm" variant="secondary" asChild>
                      <a href="/Mohit_Shekhar_Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <Eye className="h-3 w-3 mr-1" />
                        View Full
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="text-center space-y-4">
                  <div>
                    <h5 className="text-md font-semibold mb-2 text-foreground">Available for Work</h5>
                    <p className="text-muted-foreground text-sm">
                      Currently accepting new projects and collaborations.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ 
                        scale: 0.95,
                        rotate: [0, -2, 2, 0],
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Button variant="default" size="sm" className="bg-gradient-primary hover:shadow-glow relative overflow-hidden group" asChild>
                        <a href="mailto:mohit8052231582@gmail.com?subject=Hiring Inquiry - Software Engineer Position">
                          <motion.div
                            className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500"
                          />
                          <Briefcase className="h-4 w-4 mr-2 relative z-10" />
                          <span className="relative z-10">Hire Me</span>
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ 
                        scale: 0.95,
                        y: [0, -5, 0],
                        transition: { duration: 0.4 }
                      }}
                    >
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white relative overflow-hidden group shadow-lg hover:shadow-xl"
                        onClick={() => navigate('/payment')}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                        />
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="relative z-10"
                        >
                          <CreditCard className="h-4 w-4 mr-2" />
                        </motion.div>
                        <span className="relative z-10">Make Payment</span>
                      </Button>
                    </motion.div>
                    <Button variant="secondary" size="sm" asChild>
                      <a href="/Mohit_Shekhar_Resume.pdf" download="Mohit_Shekhar_Resume.pdf">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/Mohit_Shekhar_Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <Eye className="h-4 w-4 mr-2" />
                        View Online
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;