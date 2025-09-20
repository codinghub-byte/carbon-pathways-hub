import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Building2, 
  Upload, 
  FileText, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  DollarSign,
  Leaf,
  Info
} from "lucide-react";
import Navigation from "@/components/Navigation";

const ListCompany = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    region: "",
    website: "",
    description: "",
    contactEmail: "",
    contactName: "",
    emissions: "",
    creditsAvailable: "",
    pricePerCredit: "",
    certifications: []
  });

  const steps = [
    { id: 1, title: "Company Details", icon: Building2 },
    { id: 2, title: "Emission Data", icon: Leaf },
    { id: 3, title: "Credit Information", icon: DollarSign },
    { id: 4, title: "Documentation", icon: FileText },
    { id: 5, title: "Review & Submit", icon: CheckCircle }
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const progress = (currentStep / steps.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground">List Your Company</h1>
          <p className="text-muted-foreground">Join our carbon credit marketplace and contribute to a sustainable future</p>
        </div>

        {/* Progress Bar */}
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Step {currentStep} of {steps.length}</span>
                <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
              
              {/* Step Indicators */}
              <div className="flex justify-between mt-6">
                {steps.map((step) => (
                  <div key={step.id} className="flex flex-col items-center gap-2">
                    <div className={`p-2 rounded-full transition-all duration-300 ${
                      step.id <= currentStep 
                        ? "bg-gradient-eco text-white shadow-glow" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      <step.icon className="h-4 w-4" />
                    </div>
                    <span className={`text-xs font-medium hidden sm:block ${
                      step.id <= currentStep ? "text-primary" : "text-muted-foreground"
                    }`}>
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {React.createElement(steps[currentStep - 1].icon, { className: "h-5 w-5 text-primary" })}
                  {steps[currentStep - 1].title}
                </CardTitle>
                <CardDescription>
                  {currentStep === 1 && "Basic information about your company"}
                  {currentStep === 2 && "Your carbon emission data and environmental metrics"}
                  {currentStep === 3 && "Carbon credit availability and pricing"}
                  {currentStep === 4 && "Upload supporting documents and certifications"}
                  {currentStep === 5 && "Review your information before submission"}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Step 1: Company Details */}
                {currentStep === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name *</Label>
                        <Input 
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) => handleInputChange("companyName", e.target.value)}
                          placeholder="Enter your company name"
                          className="transition-all duration-200 focus:shadow-soft"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input 
                          id="website"
                          value={formData.website}
                          onChange={(e) => handleInputChange("website", e.target.value)}
                          placeholder="https://yourcompany.com"
                          className="transition-all duration-200 focus:shadow-soft"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Industry *</Label>
                        <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                          <SelectTrigger className="transition-all duration-200 focus:shadow-soft">
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="automotive">Automotive</SelectItem>
                            <SelectItem value="energy">Energy</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Region *</Label>
                        <Select value={formData.region} onValueChange={(value) => handleInputChange("region", value)}>
                          <SelectTrigger className="transition-all duration-200 focus:shadow-soft">
                            <SelectValue placeholder="Select your region" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="north-america">North America</SelectItem>
                            <SelectItem value="europe">Europe</SelectItem>
                            <SelectItem value="asia-pacific">Asia Pacific</SelectItem>
                            <SelectItem value="latin-america">Latin America</SelectItem>
                            <SelectItem value="africa">Africa</SelectItem>
                            <SelectItem value="middle-east">Middle East</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Company Description *</Label>
                      <Textarea 
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="Brief description of your company and sustainability initiatives"
                        className="min-h-[100px] transition-all duration-200 focus:shadow-soft"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contactName">Contact Person *</Label>
                        <Input 
                          id="contactName"
                          value={formData.contactName}
                          onChange={(e) => handleInputChange("contactName", e.target.value)}
                          placeholder="Full name"
                          className="transition-all duration-200 focus:shadow-soft"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="contactEmail">Contact Email *</Label>
                        <Input 
                          id="contactEmail"
                          type="email"
                          value={formData.contactEmail}
                          onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                          placeholder="contact@yourcompany.com"
                          className="transition-all duration-200 focus:shadow-soft"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Emission Data */}
                {currentStep === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Info className="h-5 w-5 text-accent mt-0.5" />
                        <div>
                          <h4 className="font-medium text-accent">Emission Data Requirements</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Please provide your most recent annual carbon emission data. This information will be verified during our review process.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="emissions">Total Annual Emissions *</Label>
                        <div className="relative">
                          <Input 
                            id="emissions"
                            type="number"
                            value={formData.emissions}
                            onChange={(e) => handleInputChange("emissions", e.target.value)}
                            placeholder="120000"
                            className="pr-20 transition-all duration-200 focus:shadow-soft"
                          />
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground">
                            tons CO₂
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Reporting Period</Label>
                        <Select defaultValue="2023">
                          <SelectTrigger className="transition-all duration-200 focus:shadow-soft">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2023">2023</SelectItem>
                            <SelectItem value="2022">2022</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Emission Sources (Select all that apply)</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                        {["Energy Use", "Transportation", "Manufacturing", "Waste", "Agriculture", "Other"].map((source) => (
                          <label key={source} className="flex items-center space-x-2 cursor-pointer">
                            <input type="checkbox" className="rounded border-border" />
                            <span className="text-sm">{source}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Credit Information */}
                {currentStep === 3 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="creditsAvailable">Credits Available for Sale *</Label>
                        <Input 
                          id="creditsAvailable"
                          type="number"
                          value={formData.creditsAvailable}
                          onChange={(e) => handleInputChange("creditsAvailable", e.target.value)}
                          placeholder="50000"
                          className="transition-all duration-200 focus:shadow-soft"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="pricePerCredit">Price per Credit *</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground">
                            $
                          </span>
                          <Input 
                            id="pricePerCredit"
                            type="number"
                            value={formData.pricePerCredit}
                            onChange={(e) => handleInputChange("pricePerCredit", e.target.value)}
                            placeholder="18.00"
                            className="pl-8 transition-all duration-200 focus:shadow-soft"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Credit Type</Label>
                      <Select defaultValue="verified">
                        <SelectTrigger className="transition-all duration-200 focus:shadow-soft">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="verified">Verified Carbon Standard (VCS)</SelectItem>
                          <SelectItem value="gold">Gold Standard</SelectItem>
                          <SelectItem value="plan-vivo">Plan Vivo</SelectItem>
                          <SelectItem value="car">Climate Action Reserve (CAR)</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 4: Documentation */}
                {currentStep === 4 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                        <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="font-medium text-foreground mb-2">Upload Emission Report</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Upload your latest carbon emission report or sustainability documentation
                        </p>
                        <Button variant="outline" className="hover:shadow-soft transition-all duration-200">
                          Choose Files
                        </Button>
                      </div>

                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                        <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="font-medium text-foreground mb-2">Certifications</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Upload any relevant certifications (ISO 14001, B-Corp, etc.)
                        </p>
                        <Button variant="outline" className="hover:shadow-soft transition-all duration-200">
                          Choose Files
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Review */}
                {currentStep === 5 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                      <h3 className="font-medium text-foreground">Application Summary</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-foreground mb-2">Company Information</h4>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p><strong>Name:</strong> {formData.companyName || "Not provided"}</p>
                            <p><strong>Industry:</strong> {formData.industry || "Not selected"}</p>
                            <p><strong>Region:</strong> {formData.region || "Not selected"}</p>
                            <p><strong>Contact:</strong> {formData.contactEmail || "Not provided"}</p>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-foreground mb-2">Emission & Credits</h4>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p><strong>Emissions:</strong> {formData.emissions || "0"} tons CO₂</p>
                            <p><strong>Credits Available:</strong> {formData.creditsAvailable || "0"}</p>
                            <p><strong>Price per Credit:</strong> ${formData.pricePerCredit || "0"}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-warning mt-0.5" />
                        <div>
                          <h4 className="font-medium text-warning">Review Process</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Your application will be reviewed by our team within 5-7 business days. We may contact you for additional information if needed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t border-border">
                  <Button 
                    variant="outline" 
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                    className="hover:shadow-soft transition-all duration-200"
                  >
                    Previous
                  </Button>
                  
                  {currentStep < steps.length ? (
                    <Button 
                      onClick={handleNext}
                      className="bg-gradient-eco hover:shadow-glow transition-all duration-300"
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button className="bg-gradient-eco hover:shadow-glow transition-all duration-300">
                      Submit Application
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent" />
                  Application Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">Form Started</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Under Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Approved</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Live on Platform</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Benefits of Listing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                  <span>Access to global carbon credit marketplace</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                  <span>Transparent pricing and trading</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                  <span>Verified emission tracking</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                  <span>Sustainability reporting tools</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ListCompany;