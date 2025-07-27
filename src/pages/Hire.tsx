import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Send, Briefcase, Clock, DollarSign, Users, Loader2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Hire = () => {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    projectTitle: '',
    projectType: '',
    budget: '',
    timeline: '',
    teamSize: '',
    projectDescription: '',
    additionalRequirements: ''
  });

  const services = [
    "Android App Development",
    "Web Development",
    "Frontend Development",
    "Mobile App Design",
    "API Integration",
    "Database Design",
    "Code Review",
    "Technical Consulting",
    "Maintenance & Support"
  ];

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create email content
      const emailSubject = `Project Inquiry: ${formData.projectTitle}`;
      const emailBody = `
PROJECT INQUIRY DETAILS
=======================

CLIENT INFORMATION:
- Name: ${formData.fullName}
- Company: ${formData.company || 'Not specified'}
- Email: ${formData.email}
- Phone: ${formData.phone || 'Not provided'}

PROJECT DETAILS:
- Title: ${formData.projectTitle}
- Type: ${formData.projectType}
- Budget: ${formData.budget || 'Not specified'}
- Timeline: ${formData.timeline || 'Not specified'}
- Team Size: ${formData.teamSize || 'Not specified'}

SERVICES NEEDED:
${selectedServices.length > 0 ? selectedServices.join(', ') : 'None selected'}

PROJECT DESCRIPTION:
${formData.projectDescription}

ADDITIONAL REQUIREMENTS:
${formData.additionalRequirements || 'None'}

Submission Date: ${new Date().toLocaleDateString()}
      `.trim();

      // Create mailto link
      const mailtoLink = `mailto:mohit8052231582@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;

      // Show success message
      setTimeout(() => {
        alert("Email client opened! Please send the email to complete your submission. I'll get back to you within 24 hours.");
        
        // Reset form
        setFormData({
          fullName: '',
          company: '',
          email: '',
          phone: '',
          projectTitle: '',
          projectType: '',
          budget: '',
          timeline: '',
          teamSize: '',
          projectDescription: '',
          additionalRequirements: ''
        });
        setSelectedServices([]);
      }, 1000);
      
    } catch (error) {
      console.error('Error preparing email:', error);
      alert("Please send an email directly to mohit8052231582@gmail.com with your project details.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-hero pt-16 sm:pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Header */}
        <motion.div 
          className="flex items-center gap-4 mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/')}
              className="hover:bg-primary/10 transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </motion.div>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Let's Work Together
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">
              Tell me about your project and let's bring your ideas to life
            </p>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Form Section */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <Card className="bg-gradient-card border-border shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Briefcase className="h-6 w-6 text-primary" />
                  </motion.div>
                  Project Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Client Information */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name *</label>
                      <Input 
                        placeholder="Your full name" 
                        className="bg-secondary border-border" 
                        required 
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Company/Organization</label>
                      <Input 
                        placeholder="Company name (optional)" 
                        className="bg-secondary border-border"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address *</label>
                      <Input 
                        type="email" 
                        placeholder="your.email@company.com" 
                        className="bg-secondary border-border" 
                        required 
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone Number</label>
                      <Input 
                        placeholder="+1 (555) 123-4567" 
                        className="bg-secondary border-border"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Project Title *</label>
                    <Input 
                      placeholder="Brief title for your project" 
                      className="bg-secondary border-border" 
                      required 
                      value={formData.projectTitle}
                      onChange={(e) => handleInputChange('projectTitle', e.target.value)}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Project Type *</label>
                      <Select required value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                        <SelectTrigger className="bg-secondary border-border">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                          <SelectItem value="web-app">Web Application</SelectItem>
                          <SelectItem value="frontend">Frontend Development</SelectItem>
                          <SelectItem value="consulting">Technical Consulting</SelectItem>
                          <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Budget Range</label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="bg-secondary border-border">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under ₹5,000</SelectItem>
                          <SelectItem value="5k-10k">₹5,000 - ₹10,000</SelectItem>
                          <SelectItem value="10k-25k">₹10,000 - ₹25,000</SelectItem>
                          <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                          <SelectItem value="50k-plus">₹50,000+</SelectItem>
                          <SelectItem value="discuss">Let's discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Timeline</label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger className="bg-secondary border-border">
                          <SelectValue placeholder="Project timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="2-3-months">2-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="6-plus-months">6+ months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Team Size Needed</label>
                      <Select value={formData.teamSize} onValueChange={(value) => handleInputChange('teamSize', value)}>
                        <SelectTrigger className="bg-secondary border-border">
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="solo">Just me (1 developer)</SelectItem>
                          <SelectItem value="small">Small team (2-3)</SelectItem>
                          <SelectItem value="medium">Medium team (4-6)</SelectItem>
                          <SelectItem value="large">Large team (7+)</SelectItem>
                          <SelectItem value="discuss">Let's discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Services Needed */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-foreground">Services Needed</label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((service) => (
                        <Badge
                          key={service}
                          variant={selectedServices.includes(service) ? "default" : "outline"}
                          className={`cursor-pointer transition-all duration-200 ${
                            selectedServices.includes(service) 
                              ? "bg-primary text-primary-foreground hover:bg-primary/80" 
                              : "hover:bg-primary/10"
                          }`}
                          onClick={() => toggleService(service)}
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Project Description *</label>
                    <Textarea 
                      placeholder="Describe your project in detail. Include features, functionality, target audience, technical requirements, and any specific goals you want to achieve..."
                      className="bg-secondary border-border min-h-32"
                      required
                      value={formData.projectDescription}
                      onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Additional Requirements</label>
                    <Textarea 
                      placeholder="Any additional information, specific technologies, design preferences, or special requirements..."
                      className="bg-secondary border-border min-h-24"
                      value={formData.additionalRequirements}
                      onChange={(e) => handleInputChange('additionalRequirements', e.target.value)}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit Project Request
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Info Sidebar */}
          <motion.div 
            className="space-y-6"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              <Card className="bg-gradient-primary/10 border-primary/20 hover:border-primary/30 transition-colors duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Why Work With Me?</h3>
                  <div className="space-y-3">
                    <motion.div 
                      className="flex items-start gap-3"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Clock className="h-5 w-5 text-primary mt-0.5" />
                      </motion.div>
                      <div>
                        <h4 className="font-medium text-foreground">Quick Response</h4>
                        <p className="text-sm text-muted-foreground">I respond to all inquiries within 24 hours</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-start gap-3"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 15, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <DollarSign className="h-5 w-5 text-primary mt-0.5" />
                      </motion.div>
                      <div>
                        <h4 className="font-medium text-foreground">Transparent Pricing</h4>
                        <p className="text-sm text-muted-foreground">Clear, upfront pricing with no hidden costs</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-start gap-3"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Users className="h-5 w-5 text-primary mt-0.5" />
                      </motion.div>
                      <div>
                        <h4 className="font-medium text-foreground">Collaborative Approach</h4>
                        <p className="text-sm text-muted-foreground">Regular updates and client involvement</p>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <Card className="bg-gradient-card border-border hover:border-primary/30 transition-colors duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">My Expertise</h3>
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    {["Android Development", "React/Next.js", "TypeScript", "Node.js"].map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                      >
                        <Badge variant="secondary" className="hover:bg-primary/20 transition-colors duration-300">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
              <Card className="bg-gradient-card border-border hover:border-primary/30 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Need to Talk First?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Prefer a quick call to discuss your project?
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" className="w-full hover:border-primary transition-colors duration-300" asChild>
                      <a href="mailto:mohit8052231582@gmail.com?subject=Quick Call Request">
                        Schedule a Call
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Ready to Pay?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Secure payment options for your project
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors duration-300" 
                      onClick={() => navigate('/payment')}
                    >
                      Make Payment
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hire;
