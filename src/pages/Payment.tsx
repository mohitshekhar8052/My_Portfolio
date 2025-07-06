import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CreditCard, DollarSign, Smartphone, Building, CheckCircle, AlertCircle, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [projectId, setProjectId] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [clientEmail, setClientEmail] = useState<string>("");
  
  const paymentMethods = [
    {
      id: "upi",
      name: "UPI Payment",
      icon: <Smartphone className="h-5 w-5" />,
      description: "Pay via UPI (Google Pay, PhonePe, Paytm, etc.)",
      details: {
        upiId: "mohit8052231582@paytm",
        qrCode: "Show QR code for UPI payment"
      }
    },
    {
      id: "bank-transfer",
      name: "Bank Transfer",
      icon: <Building className="h-5 w-5" />,
      description: "Direct bank transfer (NEFT/RTGS/IMPS)",
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
      icon: <CreditCard className="h-5 w-5" />,
      description: "Credit/Debit Card, Net Banking, Wallets",
      details: {
        gateway: "Razorpay/PayU Integration"
      }
    }
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPaymentMethod || !amount || !clientName || !clientEmail) {
      alert("Please fill all required fields");
      return;
    }

    // Create payment confirmation email
    const emailSubject = `Payment Confirmation - ${projectId || 'New Project'}`;
    const emailBody = `
PAYMENT DETAILS
================

CLIENT INFORMATION:
- Name: ${clientName}
- Email: ${clientEmail}

PAYMENT DETAILS:
- Amount: ₹${amount}
- Project ID: ${projectId || 'New Project'}
- Payment Method: ${paymentMethods.find(m => m.id === selectedPaymentMethod)?.name}
- Description: ${description || 'No description provided'}

PAYMENT INSTRUCTIONS:
${selectedPaymentMethod === 'upi' ? 
  `Please pay ₹${amount} to UPI ID: mohit8052231582@paytm` :
  selectedPaymentMethod === 'bank-transfer' ?
  `Please transfer ₹${amount} to:\nAccount: XXXX-XXXX-XXXX-1234\nIFSC: HDFC0001234\nBank: HDFC Bank` :
  `Online payment gateway will be provided separately`
}

Please send payment confirmation (screenshot/transaction ID) after completing the payment.

Date: ${new Date().toLocaleDateString()}
    `.trim();

    const mailtoLink = `mailto:mohit8052231582@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    alert("Payment details sent! Please complete the payment and send confirmation.");
  };

  return (
    <div className="min-h-screen bg-gradient-hero pt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/')}
            className="hover:bg-primary/10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Project Payment
            </h1>
            <p className="text-muted-foreground mt-2">
              Secure and convenient payment options for your project
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <DollarSign className="h-6 w-6 text-primary" />
                  Payment Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePaymentSubmit} className="space-y-6">
                  {/* Client Information */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name *</label>
                      <Input 
                        placeholder="Your full name" 
                        className="bg-secondary border-border" 
                        required 
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address *</label>
                      <Input 
                        type="email"
                        placeholder="your.email@company.com" 
                        className="bg-secondary border-border" 
                        required 
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Payment Amount */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Amount (₹) *</label>
                      <Input 
                        type="number"
                        placeholder="10000" 
                        className="bg-secondary border-border" 
                        required 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Project ID</label>
                      <Input 
                        placeholder="e.g., PROJ-2024-001 (optional)" 
                        className="bg-secondary border-border"
                        value={projectId}
                        onChange={(e) => setProjectId(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Payment Description */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Payment Description</label>
                    <Textarea 
                      placeholder="Brief description of what this payment is for (e.g., Initial payment for mobile app development, Final payment for website project, etc.)"
                      className="bg-secondary border-border min-h-24"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>

                  <Separator className="my-6" />

                  {/* Payment Methods */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Select Payment Method</h3>
                    <div className="grid gap-4">
                      {paymentMethods.map((method) => (
                        <Card 
                          key={method.id}
                          className={`cursor-pointer transition-all duration-200 ${
                            selectedPaymentMethod === method.id 
                              ? "ring-2 ring-primary bg-primary/5" 
                              : "hover:bg-secondary/50"
                          }`}
                          onClick={() => setSelectedPaymentMethod(method.id)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <div className="flex items-center gap-3 flex-1">
                                {method.icon}
                                <div>
                                  <h4 className="font-medium text-foreground">{method.name}</h4>
                                  <p className="text-sm text-muted-foreground">{method.description}</p>
                                </div>
                              </div>
                              {selectedPaymentMethod === method.id && (
                                <CheckCircle className="h-5 w-5 text-primary" />
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Payment Details */}
                  {selectedPaymentMethod && (
                    <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                      <CardContent className="p-4">
                        <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-blue-600" />
                          Payment Instructions
                        </h4>
                        
                        {selectedPaymentMethod === 'upi' && (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                              <div>
                                <p className="text-sm text-muted-foreground">UPI ID:</p>
                                <p className="font-mono text-foreground">mohit8052231582@paytm</p>
                              </div>
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => handleCopy("mohit8052231582@paytm")}
                              >
                                <Copy className="h-4 w-4" />
                              </Button>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Scan QR code or enter UPI ID in your payment app
                            </p>
                          </div>
                        )}

                        {selectedPaymentMethod === 'bank-transfer' && (
                          <div className="space-y-3">
                            <div className="grid gap-3">
                              <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                                <div>
                                  <p className="text-sm text-muted-foreground">Account Name:</p>
                                  <p className="text-foreground">Mohit Shekhar</p>
                                </div>
                              </div>
                              <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                                <div>
                                  <p className="text-sm text-muted-foreground">Account Number:</p>
                                  <p className="font-mono text-foreground">XXXX-XXXX-XXXX-1234</p>
                                </div>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => handleCopy("XXXX-XXXX-XXXX-1234")}
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                              <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                                <div>
                                  <p className="text-sm text-muted-foreground">IFSC Code:</p>
                                  <p className="font-mono text-foreground">HDFC0001234</p>
                                </div>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => handleCopy("HDFC0001234")}
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Use NEFT/RTGS/IMPS for bank transfer
                            </p>
                          </div>
                        )}

                        {selectedPaymentMethod === 'online' && (
                          <div className="space-y-3">
                            <p className="text-sm text-muted-foreground">
                              Online payment link will be provided via email after form submission.
                              Supports all major credit/debit cards, net banking, and digital wallets.
                            </p>
                            <Badge variant="secondary">
                              Secure payment gateway powered by Razorpay
                            </Badge>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    disabled={!selectedPaymentMethod}
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Proceed with Payment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Payment Info Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gradient-primary/10 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Payment Security</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Secure Transactions</h4>
                      <p className="text-sm text-muted-foreground">All payments are processed securely</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Multiple Options</h4>
                      <p className="text-sm text-muted-foreground">UPI, Bank Transfer, Cards supported</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Instant Confirmation</h4>
                      <p className="text-sm text-muted-foreground">Receive payment confirmation immediately</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Payment Terms</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>• Initial payment: 50% before project start</p>
                  <p>• Milestone payments: As agreed in contract</p>
                  <p>• Final payment: Upon project completion</p>
                  <p>• Refund policy: As per service agreement</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Having trouble with payment? Contact me directly.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:mohit8052231582@gmail.com?subject=Payment Support">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Contact Support
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
