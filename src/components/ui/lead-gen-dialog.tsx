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
import { CheckCircle } from "lucide-react";

type ServiceType = 
  | "AI Automations"
  | "Process Improvement"
  | "IT Consulting"
  | "SEO Services"
  | "Marketing Solutions"
  | "Business Analytics";

interface LeadGenDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceType: ServiceType;
}

interface OfferInfo {
  title: string;
  description: string;
  buttonText: string;
}

export function LeadGenDialog({ open, onOpenChange, serviceType }: LeadGenDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: ""
  });
  const [submitted, setSubmitted] = useState(false);

  // Define different offers based on service type
  const getOfferInfo = (service: ServiceType): OfferInfo => {
    switch(service) {
      case "AI Automations":
        return {
          title: "Free AI Automation Assessment",
          description: "Discover how AI can automate your business processes and save up to 20 hours per week.",
          buttonText: "Get My Free Assessment"
        };
      case "Process Improvement":
        return {
          title: "Free Process Efficiency Audit",
          description: "Let us analyze your current workflows and identify opportunities for optimization.",
          buttonText: "Get My Free Audit"
        };
      case "IT Consulting":
        return {
          title: "Free 30-Minute IT Strategy Session",
          description: "Speak with our IT experts to identify your technology needs and opportunities.",
          buttonText: "Book My Strategy Session"
        };
      case "SEO Services":
        return {
          title: "Free SEO Analysis",
          description: "Get a detailed report of your website's SEO performance and improvement opportunities.",
          buttonText: "Get My SEO Analysis"
        };
      case "Marketing Solutions":
        return {
          title: "Free Marketing Strategy Call",
          description: "Discuss your marketing challenges with our experts and get actionable advice.",
          buttonText: "Book My Strategy Call"
        };
      case "Business Analytics":
        return {
          title: "Free Data Assessment",
          description: "Learn how to leverage your business data for better decision-making.",
          buttonText: "Get My Data Assessment"
        };
      default:
        return {
          title: "Free 30-Minute Consultation",
          description: "Speak with our experts about your business needs and goals.",
          buttonText: "Book My Consultation"
        };
    }
  };

  const offerInfo = getOfferInfo(serviceType);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead form submitted:", formData, "Service:", serviceType);
    setSubmitted(true);
    
    // In a real app, you would send this data to your backend/CRM
    // After successful submission, reset form after a delay
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: ""
      });
      setSubmitted(false);
      onOpenChange(false);
    }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-10 space-y-4">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <DialogTitle className="text-xl font-medium text-center">Thank You!</DialogTitle>
            <DialogDescription className="text-center">
              We've received your information and will contact you shortly about your {offerInfo.title}.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-primary">{offerInfo.title}</DialogTitle>
              <DialogDescription>
                {offerInfo.description}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
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
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input 
                  id="company" 
                  name="company" 
                  value={formData.company} 
                  onChange={handleChange} 
                />
              </div>
              <DialogFooter className="pt-4">
                <Button type="submit" className="w-full">{offerInfo.buttonText}</Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
} 