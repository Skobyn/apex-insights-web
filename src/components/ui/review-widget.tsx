"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    text: "\"This community was an extremely beautiful,peaceful. Everything was so beautiful that I felt like I was at a resort.\"",
    author: "Ritika poul",
    rating: 5
  },
  {
    text: "\"My experience with matheran is like in heaven.I am found of nature.Excellent place to hangout & cool Atmosphere.\"",
    author: "Maran Calzoni",
    rating: 5
  },
  {
    text: "\"Amazing product in this price range Light weight.The material is high-quality and very comfortable & Stylish.\"",
    author: "Shlok Gupta",
    rating: 5
  }
];

export function ReviewWidget() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Calculate the next and previous indexes
  const nextIndex = (activeIndex + 1) % reviews.length;
  const prevIndex = (activeIndex - 1 + reviews.length) % reviews.length;

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
    <div className="relative p-6 bg-[#eeedf7] rounded-xl h-full min-h-[450px] flex flex-col items-center">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
      
      {/* Navigation controls */}
      <div className="flex justify-between w-full mb-4 px-2">
        <button 
          onClick={handlePrev}
          className="bg-white rounded-full p-2 shadow-md hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Previous review"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button 
          onClick={handleNext}
          className="bg-white rounded-full p-2 shadow-md hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Next review"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Stacked cards container */}
      <div className="relative w-full max-w-md mx-auto flex-grow flex items-center justify-center">
        {/* Previous card (peeking from behind) */}
        <div className="absolute z-10 w-full transform translate-y-4 -translate-x-6 scale-[0.92] opacity-60 shadow-lg">
          <Card className="bg-white rounded-xl overflow-hidden">
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
                  {[...Array(reviews[prevIndex].rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>
              </div>
              
              {/* Review text */}
              <p className="text-sm text-slate-700 line-clamp-3">
                {reviews[prevIndex].text}
              </p>
              
              {/* Author with avatar */}
              <div className="flex items-center mt-4">
                <div className="h-8 w-8 rounded-full overflow-hidden bg-slate-200 mr-2 flex items-center justify-center text-sm font-medium text-slate-600">
                  {reviews[prevIndex].author.charAt(0)}
                </div>
                <span className="text-xs font-medium">{reviews[prevIndex].author}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main active card */}
        <div className="relative z-20 w-full transform transition-all duration-500 ease-in-out shadow-xl">
          <Card className="bg-white rounded-xl overflow-hidden">
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
              
              {/* Review text */}
              <p className="text-sm text-slate-700 mb-4">
                {reviews[activeIndex].text}
              </p>
              
              {/* Author with avatar */}
              <div className="flex items-center mt-auto">
                <div className="h-8 w-8 rounded-full overflow-hidden bg-slate-200 mr-2 flex items-center justify-center text-sm font-medium text-slate-600">
                  {reviews[activeIndex].author.charAt(0)}
                </div>
                <span className="text-xs font-medium">{reviews[activeIndex].author}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
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