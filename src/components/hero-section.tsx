"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, ChevronRight, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                <span className="inline-flex items-center gap-1">
                  <Zap size={14} />
                  Empowering SMBs with AI
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                Elevate Your Business with AI-Powered Solutions
              </h1>
              <p className="max-w-[600px] text-slate-600 dark:text-slate-400 md:text-xl">
                Helping small and medium businesses compete and thrive in their marketplace with cutting-edge AI automations and strategic growth solutions.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/#contact" className="inline-flex items-center gap-1">
                  Get Started <ArrowRight size={16} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#services" className="inline-flex items-center gap-1">
                  Explore Services <ChevronRight size={16} />
                </Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center gap-1">
                <Bot className="h-4 w-4 text-primary" />
                <span>AI-Powered</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-border" />
              <div>Tailored for SMBs</div>
              <div className="h-1 w-1 rounded-full bg-border" />
              <div>Results-Driven</div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] md:h-[550px] md:w-[550px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] rounded-xl bg-white dark:bg-slate-900 shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden p-6">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                  <div className="space-y-5">
                    <div className="h-8 w-3/4 rounded-md bg-slate-100 dark:bg-slate-800"></div>
                    <div className="h-24 rounded-md bg-slate-100 dark:bg-slate-800"></div>
                    <div className="space-y-2">
                      <div className="h-4 w-full rounded-md bg-slate-100 dark:bg-slate-800"></div>
                      <div className="h-4 w-full rounded-md bg-slate-100 dark:bg-slate-800"></div>
                      <div className="h-4 w-3/4 rounded-md bg-slate-100 dark:bg-slate-800"></div>
                    </div>
                    <div className="flex justify-end">
                      <div className="h-8 w-24 rounded-md bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
