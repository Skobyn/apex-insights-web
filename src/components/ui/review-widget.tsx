"use client";

// Review widget with service-specific testimonials
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    text: "Apex Insights transformed our marketing strategy with their AI solutions. The automation tools they implemented saved us 15+ hours weekly and increased our conversion rates by 32%.",
    author: "Michael Thompson",
    position: "Marketing Director",
    company: "TechGrowth Solutions",
    rating: 5
  },
  {
    text: "Their SEO consulting services delivered exactly what we needed. Within 3 months, our organic traffic increased by 78% and we're now ranking on page 1 for our target keywords.",
    author: "Sarah Johnson",
    position: "E-commerce Manager",
    company: "Retail Innovations",
    rating: 5
  },
  {
    text: "The business analytics platform Apex built for us provides actionable insights we never had access to before. It's completely changed how we make decisions and allocate resources.",
    author: "David Chen",
    position: "Operations Director",
    company: "Summit Manufacturing",
    rating: 5
  },
  {
    text: "Apex's process improvement consultation helped us identify and eliminate inefficiencies we didn't even know existed. Our productivity is up 40% and costs are down significantly.",
    author: "Jennifer Williams",
    position: "COO",
    company: "HealthTech Services",
    rating: 5
  },
  {
    text: "The IT consulting team at Apex Insights modernized our entire tech stack while ensuring zero downtime. Their expertise in cloud migration saved us thousands in potential lost revenue.",
    author: "Robert Miller",
    position: "CTO",
    company: "Financial Solutions Group",
    rating: 5
  }
];

export function ReviewWidget() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Calculate the next and previous indexes
  const nextIndex = (activeIndex + 1) % reviews.length;
  const prevIndex = (activeIndex - 1 + reviews.length) % reviews.length;

  // Calculate the second card index (one after the active index)
  const secondCardIndex = (activeIndex + 1) % reviews.length;

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex(nextIndex);
  };

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex(prevIndex);
  };

  return (
    <div className="relative p-6 bg-[#eeedf7] rounded-xl flex flex-col">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
      
      {/* Main content container with side navigation */}
      <div className="flex items-center justify-center relative">
        {/* Left navigation arrow */}
        <button 
          onClick={handlePrev}
          className="absolute left-0 z-30 -ml-4 bg-white rounded-full p-2 shadow-md hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Previous review"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Cards container - vertically stacked */}
        <div className="flex flex-col w-full max-w-xl mx-auto space-y-4 py-2">
          {/* First card */}
          <div className="w-full">
            <Card className="bg-white rounded-xl overflow-hidden shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  {/* Google logo */}
                  <div className="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  
                  {/* Stars */}
                  <div className="flex">
                    {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4 fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                  </div>
                </div>
                
                {/* Review text with properly styled quotation marks */}
                <div className="relative text-sm text-slate-700 mb-4 pl-6 pr-2">
                  <span className="absolute left-0 top-0 text-3xl text-primary/40 leading-none">"</span>
                  <p className="relative z-10">
                    {reviews[activeIndex].text}
                  </p>
                  <span className="absolute right-0 bottom-0 text-3xl text-primary/40 leading-none">"</span>
                </div>
                
                {/* Author with avatar */}
                <div className="flex items-center mt-auto">
                  <div className="h-8 w-8 rounded-full overflow-hidden bg-slate-200 mr-2 flex items-center justify-center text-sm font-medium text-slate-600">
                    {reviews[activeIndex].author.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium">{reviews[activeIndex].author}</span>
                    {reviews[activeIndex].position && reviews[activeIndex].company && (
                      <span className="text-xs text-slate-500">{reviews[activeIndex].position}, {reviews[activeIndex].company}</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Second card (next in sequence) */}
          <div className="w-full">
            <Card className="bg-white rounded-xl overflow-hidden shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  {/* Google logo */}
                  <div className="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  
                  {/* Stars */}
                  <div className="flex">
                    {[...Array(reviews[secondCardIndex].rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4 fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                  </div>
                </div>
                
                {/* Review text with properly styled quotation marks */}
                <div className="relative text-sm text-slate-700 mb-4 pl-6 pr-2">
                  <span className="absolute left-0 top-0 text-3xl text-primary/40 leading-none">"</span>
                  <p className="relative z-10">
                    {reviews[secondCardIndex].text}
                  </p>
                  <span className="absolute right-0 bottom-0 text-3xl text-primary/40 leading-none">"</span>
                </div>
                
                {/* Author with avatar */}
                <div className="flex items-center mt-auto">
                  <div className="h-8 w-8 rounded-full overflow-hidden bg-slate-200 mr-2 flex items-center justify-center text-sm font-medium text-slate-600">
                    {reviews[secondCardIndex].author.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium">{reviews[secondCardIndex].author}</span>
                    {reviews[secondCardIndex].position && reviews[secondCardIndex].company && (
                      <span className="text-xs text-slate-500">{reviews[secondCardIndex].position}, {reviews[secondCardIndex].company}</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right navigation arrow */}
        <button 
          onClick={handleNext}
          className="absolute right-0 z-30 -mr-4 bg-white rounded-full p-2 shadow-md hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Next review"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-4 mb-1">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setAutoplay(false);
              setActiveIndex(i);
            }}
            className={`h-2 w-2 rounded-full transition-all ${
              i === activeIndex 
                ? "bg-primary w-6" 
                : "bg-slate-300"
            }`}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 