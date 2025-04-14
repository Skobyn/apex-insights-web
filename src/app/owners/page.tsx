"use client";

import React from 'react';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Head from "next/head";

// Extend JSX IntrinsicElements with custom elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'df-messenger': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'project-id'?: string;
        'agent-id'?: string;
        'language-code'?: string;
        'max-query-length'?: string;
      };
      'df-messenger-chat-bubble': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'chat-title'?: string;
      };
    }
  }
}

export default function OwnersPage() {
  React.useEffect(() => {
    // Load the Dialogflow Messenger script
    const script = document.createElement('script');
    script.src = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";
    script.async = true;
    document.head.appendChild(script);

    // Create and append the stylesheet
    const link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css";
    document.head.appendChild(link);

    // Clean up function
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(link);
    };
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
          </div>
          
          {/* Dialogflow Messenger Component - Will be created by useEffect */}
          <div id="chatbot-container">
            <df-messenger
              project-id="n8nsb-451803"
              agent-id="b86e0b04-b725-44ac-8e64-b7ee300d0531"
              language-code="en"
              max-query-length="-1">
              <df-messenger-chat-bubble
                chat-title="SMB Tax">
              </df-messenger-chat-bubble>
            </df-messenger>
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