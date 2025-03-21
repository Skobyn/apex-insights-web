"use client";

import { InlineWidget } from "react-calendly";

interface CalendlyWidgetProps {
  url?: string;
  serviceType?: string;
}

export function CalendlyWidget({ url = "https://calendly.com/apexinsights", serviceType }: CalendlyWidgetProps) {
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