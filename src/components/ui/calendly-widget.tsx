"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the InlineWidget with no SSR
const InlineWidget = dynamic(
  () => import("react-calendly").then((mod) => mod.InlineWidget),
  { ssr: false }
);

interface CalendlyWidgetProps {
  url?: string;
  serviceType?: string;
}

export function CalendlyWidget({ url = "https://calendly.com/skobyn/process-improvement-clone-1", serviceType }: CalendlyWidgetProps) {
  // Track if we're in the browser environment
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Determine which Calendly URL to use based on service type
  let calendlyUrl = url;
  
  // You can add different Calendly event links based on the service type
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
      calendlyUrl = "https://calendly.com/skobyn/process-improvement-clone-1";
      break;
  }

  // If not mounted (server-side), render a placeholder
  if (!mounted) {
    return <div className="border rounded-lg w-full h-[600px] bg-gray-50 flex items-center justify-center text-gray-400">Loading calendar...</div>;
  }

  // Client-side render of the Calendly widget
  return (
    <div className="calendly-container">
      <InlineWidget 
        url={calendlyUrl}
        styles={{
          height: '600px',
          minWidth: '320px'
        }}
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '6366f1', // Using the primary color from your site
          textColor: '4d5055'
        }}
      />
    </div>
  );
} 