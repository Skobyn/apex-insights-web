"use client";

import React from 'react';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// Define custom element types using interfaces instead of namespaces
type DFMessengerProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  'project-id'?: string;
  'agent-id'?: string;
  'language-code'?: string;
  'max-query-length'?: string;
};

type DFMessengerChatBubbleProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  'chat-title'?: string;
};

// Extend JSX IntrinsicElements via module augmentation
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'df-messenger': DFMessengerProps;
      'df-messenger-chat-bubble': DFMessengerChatBubbleProps;
    }
  }
}

export default function OwnersPage() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [loadError, setLoadError] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Check if scripts/styles are already loaded
    const existingScript = document.querySelector('script[src*="df-messenger.js"]');
    const existingLink = document.querySelector('link[href*="df-messenger-default.css"]');
    
    // Only load if not already present
    if (!existingScript) {
      try {
        const script = document.createElement('script');
        script.src = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";
        script.async = true;
        script.onload = () => {
          setIsLoaded(true);
          console.log("Dialogflow script loaded successfully");
        };
        script.onerror = (e) => {
          console.error("Failed to load Dialogflow script:", e);
          setLoadError("Failed to load Dialogflow script");
        };
        document.head.appendChild(script);
      } catch (error) {
        console.error("Error adding script:", error);
        setLoadError(`Error adding script: ${error instanceof Error ? error.message : String(error)}`);
      }
    } else {
      // If script exists, assume it's loaded or loading
      setIsLoaded(true);
    }

    if (!existingLink) {
      try {
        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css";
        link.onload = () => console.log("Dialogflow styles loaded successfully");
        link.onerror = (e) => console.error("Failed to load Dialogflow styles:", e);
        document.head.appendChild(link);
      } catch (error) {
        console.error("Error adding stylesheet:", error);
      }
    }

    // No cleanup needed - these resources should persist across component unmounts
    // to avoid reloading issues
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-primary-green mb-6 text-center">
            Owner Resources
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-center mb-12">
            Welcome to the owners section. Here you'll find resources and tools to help you manage your business more effectively.
          </p>
          
          <div className="bg-secondary-green/10 p-8 rounded-lg shadow-md max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-bold mb-4">Chat with Our Tax Assistant</h2>
            <p className="mb-4">
              Have questions about SMB taxes? Our AI assistant can help you navigate tax-related questions for your small business.
            </p>
            {loadError && (
              <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
                Error: {loadError}. Please refresh the page or try again later.
              </div>
            )}
          </div>
          
          {/* Dialogflow Messenger Component - Will be rendered when script loads */}
          <div id="chatbot-container">
            {isLoaded && (
              <df-messenger
                project-id="n8nsb-451803"
                agent-id="b86e0b04-b725-44ac-8e64-b7ee300d0531"
                language-code="en"
                max-query-length="-1">
                <df-messenger-chat-bubble
                  chat-title="SMB Tax">
                </df-messenger-chat-bubble>
              </df-messenger>
            )}
          </div>
          
          {/* Custom styling for Dialogflow Messenger */}
          <style jsx global>{`
            df-messenger {
              z-index: 999;
              position: fixed;
              --df-messenger-font-color: #000;
              --df-messenger-font-family: Google Sans;
              --df-messenger-chat-background: #f3f6fc;
              --df-messenger-message-user-background: #d3e3fd;
              --df-messenger-message-bot-background: #fff;
              bottom: 16px;
              right: 16px;
            }
          `}</style>
        </div>
      </main>
      <Footer />
    </div>
  );
} 