"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import the PopupButton with no SSR
const PopupButton = dynamic(
  () => import("react-calendly").then((mod) => mod.PopupButton),
  { ssr: false }
);

interface CalendlyButtonProps {
  url?: string;
  serviceType?: string;
  text?: string;
  className?: string;
}

export function CalendlyButton({ 
  url = "https://calendly.com/skobyn/process-improvement-clone-1", 
  serviceType,
  text = "Schedule a Call",
  className = ""
}: CalendlyButtonProps) {
  // State to track if we're in the browser
  const [mounted, setMounted] = useState(false);
  
  // Determine which Calendly URL to use based on service type
  let calendlyUrl = url;
  
  // You can add different Calendly event links based on the service type
  if (serviceType) {
    switch(serviceType) {
      case "SEO Services":
        calendlyUrl = "https://calendly.com/skobyn/it-health-check-clone-1";
        break;
      case "IT Consulting":
        calendlyUrl = "https://calendly.com/skobyn/30min";
        break;
      case "AI Automations":
        calendlyUrl = "https://calendly.com/skobyn/it-health-check-clone";
        break;
      case "Process Improvement":
        calendlyUrl = "https://calendly.com/skobyn/ai-consultation-clone";
        break;
      case "Marketing Solutions":
        calendlyUrl = "https://calendly.com/skobyn/it-health-check-clone-2";
        break;
      case "Business Analytics":
        calendlyUrl = "https://calendly.com/skobyn/process-improvement-clone";
        break;
      default:
        break;
    }
  }

  // We need to use useEffect to access document because Next.js does server-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted (server-side), render a standard button
  if (!mounted) {
    return (
      <Button className={className}>
        <Calendar className="mr-2 h-4 w-4" /> {text}
      </Button>
    );
  }

  // Once we're in the browser, use the PopupButton from react-calendly
  // Remove children from PopupButton as it doesn't support them
  return (
    <PopupButton
      url={calendlyUrl}
      rootElement={document.body}
      text={`${text}`}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ${className}`}
    />
  );
}