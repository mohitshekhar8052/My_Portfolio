import { Check, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import GlowingCard from "./GlowingCard";

const Pricing = () => {
  const navigate = useNavigate();
  
  const plans = [
    {
      name: "Basic",
      price: "₹1599",
      period: "/project",
      description: "Perfect for simple Android apps or basic video editing",
      features: [
        "Simple Android app development",
        "Basic video editing (up to 5 minutes)",
        "Code optimization & debugging",
        "1 week delivery",
        "2 revisions included",
        "Email support"
      ],
      whatIDo: "I focus on creating clean, functional apps with essential features and deliver quality video content for your brand.",
      popular: false,
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      name: "Pro",
      price: "₹2999",
      period: "/project",
      description: "Advanced solutions with complex features and professional editing",
      features: [
        "Complex Android app with advanced features",
        "Professional video editing (up to 15 minutes)",
        "Custom UI/UX design",
        "Database integration",
        "Advanced DSA implementation",
        "3 weeks delivery",
        "5 revisions included",
        "Priority support",
        "Source code documentation"
      ],
      whatIDo: "I invest in cutting-edge tools, advanced learning resources, and premium software licenses to deliver enterprise-level solutions.",
      popular: true,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "Ultimate",
      price: "₹5999",
      period: "/project",
      description: "Complete end-to-end solution with premium features",
      features: [
        "Full-stack Android application",
        "Cinematic video production (unlimited duration)",
        "Complete app ecosystem with backend",
        "Advanced algorithms & data structures",
        "Performance optimization",
        "App store deployment assistance",
        "6 weeks delivery",
        "Unlimited revisions",
        "24/7 dedicated support",
        "1 month free maintenance",
        "Training session included"
      ],
      whatIDo: "I reinvest in team collaboration, professional equipment, cloud infrastructure, and continuous education to deliver industry-leading solutions.",
      popular: false,
      gradient: "from-pink-500/20 to-orange-500/20"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Investment Plans
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your project needs. Every investment goes directly into delivering exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div key={plan.name} className="relative">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-full text-sm font-semibold text-primary-foreground flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <GlowingCard className={`h-full p-8 bg-gradient-to-br ${plan.gradient} backdrop-blur-sm border-2 ${plan.popular ? 'border-primary/50' : 'border-border/50'} hover:border-primary/70 transition-all duration-500`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-background/50 rounded-lg p-4 mb-6 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">What I do with your investment:</h4>
                  <p className="text-sm text-muted-foreground">{plan.whatIDo}</p>
                </div>

                <button 
                  onClick={() => navigate('/payment', { 
                    state: { 
                      selectedPlan: {
                        name: plan.name,
                        price: plan.price,
                        period: plan.period,
                        description: plan.description,
                        features: plan.features
                      }
                    } 
                  })}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105' 
                      : 'bg-background text-foreground border border-primary/50 hover:bg-primary/10 hover:border-primary'
                  }`}
                >
                  Get Started
                </button>
              </GlowingCard>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Need a custom solution? <span className="text-primary font-semibold cursor-pointer hover:underline">Let's discuss your project</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;