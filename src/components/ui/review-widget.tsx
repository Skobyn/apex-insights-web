"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronRight, ChevronLeft } from "lucide-react";

const reviews = [
  {
    text: "Apex Insights transformed our business with their AI solutions. 23% increase in efficiency!",
    author: "Sarah J.",
    rating: 5,
    company: "RetailPlus"
  },
  {
    text: "Their AI chatbot handles 65% of our inquiries, saving us thousands each month.",
    author: "Dr. Chen",
    rating: 5,
    company: "HealthFirst"
  },
  {
    text: "Our organic traffic increased by 215% within just 6 months of working with them.",
    author: "Jennifer M.",
    rating: 5,
    company: "Martinez Legal"
  }
];

export function ReviewWidget() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const nextReview = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
      <Card className="border-0 shadow-lg overflow-hidden">
        <CardContent className="p-6">
          <div className="relative">
            <div className="flex justify-between mb-4">
              <div className="flex gap-1">
                {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="flex gap-1">
                <button 
                  onClick={prevReview} 
                  className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-3 w-3" />
                </button>
                <button 
                  onClick={nextReview} 
                  className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-3 w-3" />
                </button>
              </div>
            </div>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <blockquote className="space-y-2">
                      <div className="flex items-start">
                        <Quote className="h-4 w-4 mr-2 text-primary shrink-0 mt-1" />
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          {review.text}
                        </p>
                      </div>
                      <footer className="text-xs text-slate-500 dark:text-slate-400 pt-2">
                        <div className="font-medium">{review.author}, {review.company}</div>
                      </footer>
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex justify-center gap-1">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setAutoplay(false);
                    setActiveIndex(i);
                  }}
                  className={`h-1.5 w-1.5 rounded-full ${
                    i === activeIndex ? "bg-primary" : "bg-slate-300 dark:bg-slate-700"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 