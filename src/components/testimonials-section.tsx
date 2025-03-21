"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Apex Insights helped us implement an AI system that transformed our inventory management. We've reduced waste by 23% and improved customer satisfaction. Their team understood our unique challenges and delivered a solution that exceeded our expectations.",
    author: "Sarah Johnson",
    position: "COO, RetailPlus",
    company: "RetailPlus",
  },
  {
    quote: "As a healthcare provider, we were drowning in administrative tasks. Apex Insights' process automation solutions freed up our staff to focus on patient care. The AI chatbot they developed now handles 65% of our routine inquiries, improving both employee and patient satisfaction.",
    author: "Dr. Michael Chen",
    position: "Director, HealthFirst Clinic",
    company: "HealthFirst",
  },
  {
    quote: "Our law firm struggled with online visibility until we partnered with Apex Insights for SEO and marketing services. Within 6 months, our organic traffic increased by 215% and we're now ranking first page for our key service areas. The ROI has been incredible.",
    author: "Jennifer Martinez",
    position: "Managing Partner, Martinez Legal",
    company: "Martinez Legal",
  },
  {
    quote: "The business analytics dashboard that Apex Insights created gives us real-time insights that have transformed our decision-making process. We can now spot trends and opportunities that we were completely missing before. It's like having a crystal ball for our business.",
    author: "Robert Williams",
    position: "CEO, Innovative Manufacturing",
    company: "Innovative Manufacturing",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const nextTestimonial = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-slate-500 dark:text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what business owners like you have to say about our services.
            </p>
          </div>
        </div>

        <div className="relative mx-auto max-w-4xl px-8">
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-0 shadow-md relative min-h-[280px]">
                    <div className="absolute top-0 left-0 -translate-y-1/2 translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-md">
                      <Quote className="h-5 w-5 text-white" />
                    </div>
                    <CardContent className="pt-12 px-6 pb-6">
                      <blockquote className="space-y-6">
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                          {testimonial.quote}
                        </p>
                        <footer className="border-t border-slate-200 pt-4 dark:border-slate-800">
                          <div className="font-medium">{testimonial.author}</div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">
                            {testimonial.position}, {testimonial.company}
                          </div>
                        </footer>
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setAutoplay(false);
                  setActiveIndex(i);
                }}
                className={`h-2 w-2 rounded-full ${
                  i === activeIndex ? "bg-primary" : "bg-slate-300 dark:bg-slate-700"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
          
      </div>
    </section>
  );
}
