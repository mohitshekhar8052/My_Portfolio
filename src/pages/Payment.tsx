import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CreditCard, DollarSign, Smartphone, Building, CheckCircle, AlertCircle, Copy, ExternalLink, Wallet, Bitcoin, Banknote, Zap, Shield, Clock, Award, Star } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Payment = () => {
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [projectId, setProjectId] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [clientEmail, setClientEmail] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState<string>("");
  
  const paymentMethods = [
    {
      id: "upi",
      name: "UPI Payment",
      icon: <Smartphone className="h-6 w-6" />,
      description: "Pay via UPI (Google Pay, PhonePe, Paytm, etc.)",
      features: ["Instant Transfer", "24/7 Available", "Zero Fees"],
      color: "from-blue-500 to-cyan-500",
      details: {
        upiId: "mohit8052231582@paytm",
        qrCode: "Show QR code for UPI payment"
      }
    },
    {
      id: "bank-transfer",
      name: "Bank Transfer",
      icon: <Building className="h-6 w-6" />,
      description: "Direct bank transfer (NEFT/RTGS/IMPS)",
      features: ["Secure Transfer", "Bank Verified", "Receipt Available"],
      color: "from-green-500 to-emerald-500",
      details: {
        accountName: "Mohit Shekhar",
        accountNumber: "XXXX-XXXX-XXXX-1234",
        ifscCode: "HDFC0001234",
        bankName: "HDFC Bank"
      }
    },
    {
      id: "online",
      name: "Online Payment",
      icon: <CreditCard className="h-6 w-6" />,
      description: "Credit/Debit Card, Net Banking, Wallets",
      features: ["Multiple Options", "Secure Gateway", "International Cards"],
      color: "from-purple-500 to-pink-500",
      details: {
        gateway: "Razorpay/PayU Integration"
      }
    },
    {
      id: "digital-wallet",
      name: "Digital Wallets",
      icon: <Wallet className="h-6 w-6" />,
      description: "PayPal, Amazon Pay, Apple Pay, Google Pay",
      features: ["Global Support", "Quick Checkout", "Buyer Protection"],
      color: "from-orange-500 to-red-500",
      details: {
        wallets: ["PayPal", "Amazon Pay", "Apple Pay", "Google Pay"]
      }
    },
    {
      id: "crypto",
      name: "Cryptocurrency",
      icon: <Bitcoin className="h-6 w-6" />,
      description: "Bitcoin, Ethereum, USDT, and other cryptocurrencies",
      features: ["Decentralized", "Low Fees", "Global Access"],
      color: "from-yellow-500 to-orange-500",
      details: {
        supported: ["Bitcoin (BTC)", "Ethereum (ETH)", "USDT", "USDC"]
      }
    },
    {
      id: "installments",
      name: "Installment Plans",
      icon: <Banknote className="h-6 w-6" />,
      description: "Split payments into easy installments",
      features: ["Flexible Terms", "No Interest", "Budget Friendly"],
      color: "from-indigo-500 to-blue-500",
      details: {
        plans: ["3 months", "6 months", "12 months"]
      }
    }
  ];

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.95,
      y: 50
    },
    in: {
      opacity: 1,
      scale: 1,
      y: 0
    },
    out: {
      opacity: 0,
      scale: 1.05,
      y: -50
    }
  };

  const pageTransition = {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 0.5
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPaymentMethod || !amount || !clientName || !clientEmail) {
      alert("Please fill in all required fields");
      return;
    }

    // Create payment confirmation email
    const emailSubject = `Payment Confirmation - ${projectId || 'New Project'}`;
    const emailBody = `
PAYMENT DETAILS
==================
Client Name: ${clientName}
Client Email: ${clientEmail}
Project ID: ${projectId || 'Not specified'}
Amount: ₹${amount}
Description: ${description}

PAYMENT DETAILS:
================
- Amount: ₹${amount}
- Payment Method: ${paymentMethods.find(m => m.id === selectedPaymentMethod)?.name}
- Project: ${projectId || 'New Project'}

PAYMENT INSTRUCTIONS:
${selectedPaymentMethod === 'upi' ? 
  'Please transfer the amount to UPI ID: mohit8052231582@paytm' :
  selectedPaymentMethod === 'bank-transfer' ?
  'Please transfer to the bank account details provided' :
  `Online payment gateway will be provided separately`
}

Please send payment confirmation (screenshot/transaction ID) after completing the payment.

Best regards,
Mohit Shekhar
    `;

    const mailtoLink = `mailto:mohit8052231582@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(""), 2000);
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-gradient-hero py-12 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mb-6"
          >
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="hover:bg-primary/10 hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </motion.div>
          
          <motion.h1 
            className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.3, delay: 0.3 }}
          >
            Secure Payment Portal
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Choose your preferred payment method and complete your transaction securely
          </motion.p>
          
          {/* Trust indicators */}
          <motion.div 
            className="flex justify-center items-center gap-6 mt-6 text-sm text-muted-foreground"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-500" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Verified Merchant</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-green-500" />
              <span>5★ Rating</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-gradient-card border-border shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-primary" />
                  Payment Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePaymentSubmit} className="space-y-6">
                  {/* Basic Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Client Name *</label>
                      <Input
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="Your full name"
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address *</label>
                      <Input
                        type="email"
                        required
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className="bg-secondary border-border"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Project ID</label>
                      <Input
                        value={projectId}
                        onChange={(e) => setProjectId(e.target.value)}
                        placeholder="e.g., PROJ-2024-001"
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Payment Amount (₹) *</label>
                      <Input
                        type="number"
                        required
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="5000"
                        className="bg-secondary border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Payment Description</label>
                    <Textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Brief description of what this payment is for (e.g., Initial payment for mobile app development, Final payment for website project, etc.)"
                      className="bg-secondary border-border"
                      rows={3}
                    />
                  </div>

                  {/* Payment Methods */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Select Payment Method</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {paymentMethods.map((method, index) => (
                        <motion.div
                          key={method.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index }}
                        >
                          <motion.div
                            className={`relative cursor-pointer border-2 rounded-lg p-4 transition-all duration-300 ${
                              selectedPaymentMethod === method.id 
                                ? 'border-primary bg-primary/5 shadow-lg' 
                                : 'border-border hover:border-primary/50 hover:shadow-md'
                            }`}
                            onClick={() => setSelectedPaymentMethod(method.id)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-start gap-3">
                              <motion.div 
                                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center text-white shadow-lg`}
                                whileHover={{ rotate: 5 }}
                              >
                                {method.icon}
                              </motion.div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-foreground">{method.name}</h4>
                                <p className="text-sm text-muted-foreground mt-1">{method.description}</p>
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {method.features.map((feature, i) => (
                                    <Badge key={i} variant="secondary" className="text-xs">
                                      {feature}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              {selectedPaymentMethod === method.id && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                                >
                                  <CheckCircle className="h-4 w-4 text-white" />
                                </motion.div>
                              )}
                            </div>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Payment Instructions */}
                  <AnimatePresence>
                    {selectedPaymentMethod && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                          <CardContent className="p-6">
                            <h4 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                              <Zap className="h-5 w-5 text-primary" />
                              Payment Instructions
                            </h4>
                            
                            {selectedPaymentMethod === 'upi' && (
                              <div className="space-y-4">
                                <div className="bg-white/10 rounded-lg p-4 border border-primary/20">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="font-medium text-foreground">UPI ID:</span>
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      onClick={() => copyToClipboard("mohit8052231582@paytm", "upi")}
                                      className="h-8 px-2"
                                    >
                                      {copiedField === "upi" ? (
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                      ) : (
                                        <Copy className="h-4 w-4" />
                                      )}
                                    </Button>
                                  </div>
                                  <p className="font-mono text-primary bg-white/5 px-3 py-2 rounded border">
                                    mohit8052231582@paytm
                                  </p>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  <span>Scan QR code or enter UPI ID in your payment app</span>
                                </div>
                              </div>
                            )}

                            {selectedPaymentMethod === 'bank-transfer' && (
                              <div className="space-y-4">
                                <div className="grid gap-3">
                                  {[
                                    { label: "Account Name", value: "Mohit Shekhar" },
                                    { label: "Account Number", value: "XXXX-XXXX-XXXX-1234" },
                                    { label: "IFSC Code", value: "HDFC0001234" },
                                    { label: "Bank Name", value: "HDFC Bank" }
                                  ].map((item, i) => (
                                    <div key={i} className="bg-white/10 rounded-lg p-3 border border-primary/20">
                                      <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-foreground">{item.label}:</span>
                                        <Button
                                          size="sm"
                                          variant="ghost"
                                          onClick={() => copyToClipboard(item.value, item.label)}
                                          className="h-6 px-2"
                                        >
                                          {copiedField === item.label ? (
                                            <CheckCircle className="h-3 w-3 text-green-500" />
                                          ) : (
                                            <Copy className="h-3 w-3" />
                                          )}
                                        </Button>
                                      </div>
                                      <p className="font-mono text-primary bg-white/5 px-2 py-1 rounded text-sm mt-1">
                                        {item.value}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {selectedPaymentMethod === 'online' && (
                              <div className="space-y-4">
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                  <Clock className="h-4 w-4 text-primary" />
                                  <span>Online payment link will be provided via email after form submission.</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                  <Shield className="h-4 w-4 text-green-500" />
                                  <span>Secure payment gateway powered by Razorpay</span>
                                </div>
                              </div>
                            )}

                            {selectedPaymentMethod === 'digital-wallet' && (
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-3">
                                  {["PayPal", "Amazon Pay", "Apple Pay", "Google Pay"].map((wallet, i) => (
                                    <div key={i} className="bg-white/10 rounded-lg p-3 border border-primary/20 text-center">
                                      <span className="text-sm font-medium text-foreground">{wallet}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {selectedPaymentMethod === 'crypto' && (
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-3">
                                  {["Bitcoin (BTC)", "Ethereum (ETH)", "USDT", "USDC"].map((crypto, i) => (
                                    <div key={i} className="bg-white/10 rounded-lg p-3 border border-primary/20 text-center">
                                      <span className="text-sm font-medium text-foreground">{crypto}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {selectedPaymentMethod === 'installments' && (
                              <div className="space-y-4">
                                <div className="grid grid-cols-3 gap-3">
                                  {["3 months", "6 months", "12 months"].map((plan, i) => (
                                    <div key={i} className="bg-white/10 rounded-lg p-3 border border-primary/20 text-center">
                                      <span className="text-sm font-medium text-foreground">{plan}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg py-6"
                      disabled={!selectedPaymentMethod}
                    >
                      <CreditCard className="h-5 w-5 mr-2" />
                      Proceed with Payment
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Payment Info Sidebar */}
          <motion.div 
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gradient-card border-border shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  Payment Security
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">SSL Encryption</h4>
                      <p className="text-sm text-muted-foreground">All payments are processed securely</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Verified Merchant</h4>
                      <p className="text-sm text-muted-foreground">Trusted payment processor</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Instant Confirmation</h4>
                      <p className="text-sm text-muted-foreground">Receive payment confirmation immediately</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  Payment Terms
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Initial payment: 50% before project start</p>
                  <p>• Milestone payments: As agreed in contract</p>
                  <p>• Final payment: Upon project completion</p>
                  <p>• Refund policy: As per agreement terms</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-500" />
                  Need Help?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Having trouble with payment? Contact me directly.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="mailto:mohit8052231582@gmail.com?subject=Payment Support">
                    Contact Support
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Success Message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed bottom-8 right-8 z-50"
            >
              <Card className="bg-green-500 text-white border-green-400 shadow-2xl">
                <CardContent className="p-4 flex items-center gap-3">
                  <CheckCircle className="h-6 w-6" />
                  <div>
                    <h4 className="font-semibold">Payment Request Sent!</h4>
                    <p className="text-sm opacity-90">Check your email for payment details.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Payment;