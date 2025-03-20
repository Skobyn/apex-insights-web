"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Download, Calendar, Clock, ArrowRight, FileText, BarChart } from "lucide-react";

type ServiceType = 
  | "AI Automations"
  | "Process Improvement"
  | "IT Consulting"
  | "SEO Services"
  | "Marketing Solutions"
  | "Business Analytics";

// Define the interface for funnel content objects
interface FunnelContent {
  icon: React.ReactNode;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  hasSecondaryButton: boolean;
  formFields?: string[];
  isCalendar?: boolean;
  isOrderBump?: boolean;
  isUpSell?: boolean;
  isOfferWall?: boolean;
  isFinal?: boolean;
  upSellOptions?: string[];
  offerWallOptions?: string[];
}

interface LeadGenDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceType: ServiceType;
}

export function LeadGenDialog({ open, onOpenChange, serviceType }: LeadGenDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: ""
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [selectedBump, setSelectedBump] = useState(false);
  const [selectedUpgrades, setSelectedUpgrades] = useState<string[]>([]);

  // Define different funnels based on service type
  const getFunnelContent = (service: ServiceType, step: number): FunnelContent => {
    switch(service) {
      case "SEO Services":
        return getSeoFunnelContent(step);
      case "IT Consulting":
        return getItConsultingFunnelContent(step);
      case "AI Automations":
        return getAiAutomationsFunnelContent(step);
      case "Process Improvement":
        return getProcessImprovementFunnelContent(step);
      case "Marketing Solutions":
        return getMarketingSolutionsFunnelContent(step);
      case "Business Analytics":
        return getBusinessAnalyticsFunnelContent(step);
      default:
        return getDefaultFunnelContent(step);
    }
  };

  // SEO Services: "Dominate Google" Lead Generation Funnel
  const getSeoFunnelContent = (step: number): FunnelContent => {
    switch(step) {
      case 1:
        return {
          icon: <FileText className="h-12 w-12 text-primary" />,
          title: "Unlock the Secret to Getting Found First on Google",
          description: "Get our exclusive 10-Point SEO Audit Checklist that reveals why your competitors rank higher than you.",
          primaryButtonText: "Get My Free SEO Checklist",
          hasSecondaryButton: false,
          formFields: ["name", "email"]
        };
      case 2:
        return {
          icon: <CheckCircle className="h-12 w-12 text-green-600" />,
          title: "Your SEO Checklist is Ready!",
          description: "We've sent the '10-Point SEO Audit Checklist' to your email. While you're implementing these tips, would you like our experts to conduct a FREE in-depth analysis of your website's SEO?",
          primaryButtonText: "Yes! Analyze My Website",
          secondaryButtonText: "No Thanks",
          hasSecondaryButton: true,
          formFields: ["website"]
        };
      case 3:
        return {
          icon: <Calendar className="h-12 w-12 text-primary" />,
          title: "Let's Review Your SEO Analysis Together",
          description: "Great! Our SEO specialists will analyze your website and prepare a personalized report. When would you like to schedule a 15-minute call to review the findings?",
          primaryButtonText: "Schedule My Call",
          hasSecondaryButton: false,
          isCalendar: true
        };
      default:
        return {
          icon: <CheckCircle className="h-12 w-12 text-green-600" />,
          title: "You're All Set!",
          description: "Thank you for scheduling your SEO analysis call. We'll send a confirmation to your email shortly with all the details.",
          primaryButtonText: "Close",
          hasSecondaryButton: false,
          isFinal: true
        };
    }
  };

  // IT Consulting: "Peace of Mind IT Audit" Consultation Funnel
  const getItConsultingFunnelContent = (step: number): FunnelContent => {
    switch(step) {
      case 1:
        return {
          icon: <FileText className="h-12 w-12 text-primary" />,
          title: "Is Your Business Data Safe?",
          description: "Get peace of mind with our free, no-obligation IT Health Check. Identify security vulnerabilities before they become costly problems.",
          primaryButtonText: "Book My Free IT Health Check",
          hasSecondaryButton: false,
          formFields: ["name", "email", "company", "phone"]
        };
      case 2:
        return {
          icon: <Calendar className="h-12 w-12 text-primary" />,
          title: "Schedule Your IT Health Check",
          description: "Our IT specialists will conduct a comprehensive assessment of your systems. When would you like to schedule your 30-minute consultation?",
          primaryButtonText: "Confirm Appointment",
          hasSecondaryButton: false,
          isCalendar: true
        };
      default:
        return {
          icon: <CheckCircle className="h-12 w-12 text-green-600" />,
          title: "Your IT Health Check is Confirmed!",
          description: "We've scheduled your IT Health Check consultation. Here's what to expect: our specialist will review your current infrastructure, identify security gaps, and provide recommendations to improve your IT efficiency and security.",
          primaryButtonText: "Close",
          hasSecondaryButton: false,
          isFinal: true
        };
    }
  };

  // AI Automations: "Reclaim Your Time" Webinar Funnel
  const getAiAutomationsFunnelContent = (step: number): FunnelContent => {
    switch(step) {
      case 1:
        return {
          icon: <Clock className="h-12 w-12 text-primary" />,
          title: "Discover the Hidden AI Tools Your Competitors Are Using",
          description: "Register for our free webinar to learn how SMBs like yours are saving 10+ hours per week with simple AI automations.",
          primaryButtonText: "Reserve My Spot",
          hasSecondaryButton: false,
          formFields: ["name", "email", "company"]
        };
      case 2:
        return {
          icon: <CheckCircle className="h-12 w-12 text-green-600" />,
          title: "You're Registered!",
          description: "Thanks for registering for our AI Automation webinar. Would you like to get a head start with our 'Quick Wins AI Automation Guide' while you wait?",
          primaryButtonText: "Yes, Send Me the Guide",
          secondaryButtonText: "No Thanks",
          hasSecondaryButton: true
        };
      default:
        return {
          icon: <Download className="h-12 w-12 text-primary" />,
          title: "Your AI Automation Resources",
          description: "Your webinar details and AI Automation Guide have been sent to your email. After watching the webinar, would you like a personalized consultation to identify automation opportunities in your business?",
          primaryButtonText: "Request a Consultation",
          secondaryButtonText: "I'll Decide Later",
          hasSecondaryButton: true,
          isFinal: true
        };
    }
  };

  // Process Improvement: "Boost Your Bottom Line" Order Form Bump Funnel
  const getProcessImprovementFunnelContent = (step: number): FunnelContent => {
    switch(step) {
      case 1:
        return {
          icon: <BarChart className="h-12 w-12 text-primary" />,
          title: "Get Your Top 3 Process Bottlenecks Identified",
          description: "Our experts will analyze your business processes and identify the top 3 areas where you're losing time and money. Limited time offer: Just $197 (normally $597).",
          primaryButtonText: "Start My Process Analysis",
          hasSecondaryButton: false,
          formFields: ["name", "email", "company", "phone"]
        };
      case 2:
        return {
          icon: <ArrowRight className="h-12 w-12 text-primary" />,
          title: "One More Step!",
          description: "Want to add our Customizable Process Mapping Template to visualize your improvements for just $57 more?",
          primaryButtonText: "Yes, Add the Template",
          secondaryButtonText: "No Thanks",
          hasSecondaryButton: true,
          isOrderBump: true
        };
      default:
        return {
          icon: <CheckCircle className="h-12 w-12 text-green-600" />,
          title: "Your Order is Confirmed!",
          description: `We've received your order for the Process Bottleneck Analysis${selectedBump ? " and Process Mapping Template" : ""}. Our team will be in touch within 24 hours to gather more information about your business processes.`,
          primaryButtonText: "Close",
          hasSecondaryButton: false,
          isFinal: true
        };
    }
  };

  // Marketing Solutions: "More Leads, More Sales" Up-sell Funnel
  const getMarketingSolutionsFunnelContent = (step: number): FunnelContent => {
    switch(step) {
      case 1:
        return {
          icon: <FileText className="h-12 w-12 text-primary" />,
          title: "Transform Your Marketing Results",
          description: "Book a free marketing strategy session to identify quick wins and long-term opportunities for your business.",
          primaryButtonText: "Book My Strategy Session",
          hasSecondaryButton: false,
          formFields: ["name", "email", "company", "website", "phone"]
        };
      case 2:
        return {
          icon: <ArrowRight className="h-12 w-12 text-primary" />,
          title: "Enhance Your Marketing Strategy",
          description: "Would you like to include any of these additional areas in your strategy session?",
          primaryButtonText: "Continue",
          hasSecondaryButton: false,
          isUpSell: true,
          upSellOptions: [
            "Social Media Strategy", 
            "Email Marketing", 
            "Content Marketing", 
            "SEO Strategy", 
            "Paid Advertising"
          ]
        };
      case 3:
        return {
          icon: <Calendar className="h-12 w-12 text-primary" />,
          title: "Schedule Your Strategy Session",
          description: `Let's find a time for your marketing strategy session${selectedUpgrades.length > 0 ? " covering " + selectedUpgrades.join(", ") : ""}.`,
          primaryButtonText: "Schedule Now",
          hasSecondaryButton: false,
          isCalendar: true
        };
      default:
        return {
          icon: <CheckCircle className="h-12 w-12 text-green-600" />,
          title: "Your Marketing Strategy Session is Confirmed!",
          description: "We've sent the details to your email. Our marketing specialist will prepare a customized agenda based on your business needs and the areas you selected.",
          primaryButtonText: "Close",
          hasSecondaryButton: false,
          isFinal: true
        };
    }
  };

  // Business Analytics: "Unlock Your Data Insights" Thank You Page Offer Wall
  const getBusinessAnalyticsFunnelContent = (step: number): FunnelContent => {
    switch(step) {
      case 1:
        return {
          icon: <BarChart className="h-12 w-12 text-primary" />,
          title: "Unlock the Hidden Insights in Your Business Data",
          description: "Get a free data assessment to discover actionable insights that can drive growth and efficiency in your business.",
          primaryButtonText: "Get My Free Data Assessment",
          hasSecondaryButton: false,
          formFields: ["name", "email", "company", "phone"]
        };
      case 2:
        return {
          icon: <ArrowRight className="h-12 w-12 text-primary" />,
          title: "Explore Our Analytics Services",
          description: "Which of these analytics services would you like to learn more about?",
          primaryButtonText: "Send Me Information",
          secondaryButtonText: "Skip This Step",
          hasSecondaryButton: true,
          isOfferWall: true,
          offerWallOptions: [
            "Sales Performance Dashboards", 
            "Marketing ROI Analysis", 
            "Operational Efficiency Metrics", 
            "Customer Behavior Analytics", 
            "Predictive Business Forecasting"
          ]
        };
      default:
        return {
          icon: <CheckCircle className="h-12 w-12 text-green-600" />,
          title: "Thank You!",
          description: `We've received your request for a data assessment${selectedUpgrades.length > 0 ? " and information about " + selectedUpgrades.join(", ") : ""}. Our analytics team will contact you within 24 hours to schedule your assessment.`,
          primaryButtonText: "Close",
          hasSecondaryButton: false,
          isFinal: true
        };
    }
  };

  // Default funnel content
  const getDefaultFunnelContent = (step: number): FunnelContent => {
    switch(step) {
      case 1:
        return {
          icon: <FileText className="h-12 w-12 text-primary" />,
          title: "Free 30-Minute Consultation",
          description: "Speak with our experts about your business needs and goals.",
          primaryButtonText: "Book My Consultation",
          hasSecondaryButton: false,
          formFields: ["name", "email", "company", "phone"]
        };
      case 2:
        return {
          icon: <Calendar className="h-12 w-12 text-primary" />,
          title: "Schedule Your Consultation",
          description: "When would you like to speak with our expert?",
          primaryButtonText: "Confirm Appointment",
          hasSecondaryButton: false,
          isCalendar: true
        };
      default:
        return {
          icon: <CheckCircle className="h-12 w-12 text-green-600" />,
          title: "Your Consultation is Confirmed!",
          description: "We've scheduled your consultation and sent the details to your email.",
          primaryButtonText: "Close",
          hasSecondaryButton: false,
          isFinal: true
        };
    }
  };

  const currentContent = getFunnelContent(serviceType, currentStep);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpgradeToggle = (option: string) => {
    setSelectedUpgrades(prev => {
      if (prev.includes(option)) {
        return prev.filter(item => item !== option);
      } else {
        return [...prev, option];
      }
    });
  };

  const handlePrimaryButtonClick = () => {
    if (currentContent.isFinal) {
      // Reset and close on final step
      setTimeout(() => {
        setCurrentStep(1);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          website: ""
        });
        setSelectedBump(false);
        setSelectedUpgrades([]);
        onOpenChange(false);
      }, 500);
      return;
    }
    
    // For order bump step
    if (currentContent.isOrderBump) {
      setSelectedBump(true);
    }
    
    setCurrentStep(prev => prev + 1);
  };

  const handleSecondaryButtonClick = () => {
    setCurrentStep(prev => prev + 1);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            {currentContent.icon}
          </div>
          <DialogTitle className="text-xl font-bold text-primary">{currentContent.title}</DialogTitle>
          <DialogDescription className="text-center">
            {currentContent.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          {/* Form fields */}
          {(currentContent.formFields && currentContent.formFields.length > 0) && (
            <form 
              name="lead-gen"
              method="POST"
              data-netlify="true"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="lead-gen" />
              <input type="hidden" name="service-type" value={serviceType} />
              {(currentContent.formFields && currentContent.formFields.includes("name")) && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              )}
              
              {(currentContent.formFields && currentContent.formFields.includes("email")) && (
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              )}
              
              {(currentContent.formFields && currentContent.formFields.includes("phone")) && (
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    value={formData.phone} 
                    onChange={handleChange} 
                  />
                </div>
              )}
              
              {(currentContent.formFields && currentContent.formFields.includes("company")) && (
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input 
                    id="company" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                  />
                </div>
              )}
              
              {(currentContent.formFields && currentContent.formFields.includes("website")) && (
                <div className="space-y-2">
                  <Label htmlFor="website">Website URL</Label>
                  <Input 
                    id="website" 
                    name="website" 
                    value={formData.website} 
                    onChange={handleChange} 
                  />
                </div>
              )}
            </form>
          )}

          {/* Calendar placeholder */}
          {currentContent.isCalendar && (
            <div className="border p-4 rounded-lg text-center">
              <p className="text-slate-500 mb-2">Select a date and time:</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
                  <Button key={day} variant="outline" className="text-xs py-1">{day}</Button>
                ))}
                {['10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'].map(time => (
                  <Button key={time} variant="outline" className="text-xs py-1">{time}</Button>
                ))}
              </div>
              <p className="text-xs text-slate-400">* In a real implementation, this would be a calendar selector</p>
            </div>
          )}

          {/* Order bump checkbox */}
          {currentContent.isOrderBump && (
            <div className="border-2 border-primary p-4 rounded-lg mb-4">
              <label className="flex items-start space-x-3">
                <input 
                  type="checkbox"
                  checked={selectedBump}
                  onChange={() => setSelectedBump(!selectedBump)}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <div>
                  <p className="font-medium">Yes! Add the Process Mapping Template for just $7</p>
                  <p className="text-sm text-slate-500">Visualize your process improvements with our easy-to-use template (Normally $27)</p>
                </div>
              </label>
            </div>
          )}

          {/* Up-sell options */}
          {currentContent.isUpSell && currentContent.upSellOptions && (
            <div className="space-y-3 border p-4 rounded-lg">
              <p className="font-medium mb-2">Select all that apply:</p>
              {currentContent.upSellOptions.map((option) => (
                <label key={option} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedUpgrades.includes(option)}
                    onChange={() => handleUpgradeToggle(option)}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          )}

          {/* Offer wall options */}
          {currentContent.isOfferWall && currentContent.offerWallOptions && (
            <div className="space-y-3 border p-4 rounded-lg">
              <p className="font-medium mb-2">Select all that interest you:</p>
              {currentContent.offerWallOptions.map((option) => (
                <label key={option} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedUpgrades.includes(option)}
                    onChange={() => handleUpgradeToggle(option)}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <DialogFooter className="flex flex-col sm:flex-col gap-2">
          <Button 
            type="button" 
            className="w-full" 
            onClick={handlePrimaryButtonClick}
          >
            {currentContent.primaryButtonText}
          </Button>
          
          {currentContent.hasSecondaryButton && (
            <Button 
              type="button" 
              variant="outline" 
              className="w-full" 
              onClick={handleSecondaryButtonClick}
            >
              {currentContent.secondaryButtonText}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 