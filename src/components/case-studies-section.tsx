"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const caseStudies = [
  {
    title: "AI-Powered Inventory Management",
    industry: "Retail",
    description: "Implemented an AI system that reduced inventory costs by 23% and improved product availability by predicting demand patterns for a mid-sized retail chain.",
    results: ["23% reduction in inventory costs", "94% product availability (up from 82%)", "Automated reordering process", "Real-time inventory insights"],
    challenge: "Manual inventory management leading to overstocking and stockouts.",
    solution: "Custom AI solution that analyzes historical data, seasonal trends, and external factors to predict optimal inventory levels.",
    imageBg: "bg-blue-600"
  },
  {
    title: "Customer Service Automation",
    industry: "Healthcare",
    description: "Developed an AI chatbot that handles 65% of customer inquiries automatically, reducing wait times and freeing up staff for complex cases at a healthcare provider.",
    results: ["65% of inquiries handled automatically", "Customer satisfaction increased by 18%", "Average response time reduced from 24hrs to 10min", "24/7 availability"],
    challenge: "Long wait times for customer service and overwhelmed support staff.",
    solution: "AI-powered chatbot that understands complex healthcare queries and integrates with patient records for personalized responses.",
    imageBg: "bg-purple-600"
  },
  {
    title: "SEO & Digital Marketing Overhaul",
    industry: "Professional Services",
    description: "Comprehensive SEO and digital marketing strategy that increased organic traffic by 215% and doubled lead generation for a law firm.",
    results: ["215% increase in organic traffic", "104% increase in quality leads", "First page rankings for 45+ target keywords", "ROI of 320% on marketing spend"],
    challenge: "Low online visibility and expensive PPC campaigns with poor conversion rates.",
    solution: "Data-driven SEO strategy, content marketing plan, and website optimization focused on high-intent keywords and user experience.",
    imageBg: "bg-green-600"
  },
  {
    title: "Process Automation for Manufacturing",
    industry: "Manufacturing",
    description: "Streamlined operations through process automation, reducing production errors by 37% and increasing output by 28% for a manufacturing company.",
    results: ["37% reduction in production errors", "28% increase in output", "Labor costs reduced by 19%", "Improved product consistency"],
    challenge: "Inefficient manual processes causing errors and limiting production capacity.",
    solution: "End-to-end process automation system with quality control algorithms and predictive maintenance to prevent downtime.",
    imageBg: "bg-amber-600"
  }
];

export function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCase = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const activeCase = caseStudies[activeIndex];

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Success Stories
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Real Results for Real Businesses
            </h2>
            <p className="max-w-[900px] text-slate-500 dark:text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how we've helped other small and medium businesses overcome challenges and achieve remarkable growth.
            </p>
          </div>
        </div>

        <Card className="overflow-hidden border-0 shadow-lg">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <div className={`${activeCase.imageBg} p-10 flex items-center justify-center min-h-[300px]`}>
                <div className="text-white space-y-4 max-w-md">
                  <h3 className="text-2xl font-bold">{activeCase.title}</h3>
                  <p className="text-white/80 text-sm">Industry: {activeCase.industry}</p>
                  <p className="text-white/90">{activeCase.description}</p>
                </div>
              </div>
              <div className="p-10 space-y-6 bg-white dark:bg-slate-900">
                <div>
                  <h4 className="text-lg font-semibold mb-2">The Challenge</h4>
                  <p className="text-slate-600 dark:text-slate-400">{activeCase.challenge}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Our Solution</h4>
                  <p className="text-slate-600 dark:text-slate-400">{activeCase.solution}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Key Results</h4>
                  <ul className="space-y-1">
                    {activeCase.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                        <span className="text-slate-600 dark:text-slate-400">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center mt-6 gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevCase}
            aria-label="Previous case study"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex gap-1">
            {caseStudies.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full ${
                  i === activeIndex ? "bg-primary" : "bg-slate-300 dark:bg-slate-700"
                }`}
                aria-label={`Go to case study ${i + 1}`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={nextCase}
            aria-label="Next case study"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
