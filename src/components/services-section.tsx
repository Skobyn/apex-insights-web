"use client";

import {
  Bot,
  LineChart,
  Server,
  Search,
  BarChart4,
  Workflow,
  ArrowUpRight
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: <Bot className="h-12 w-12 text-primary" />,
    title: "AI Automations",
    description: "Streamline your business processes with intelligent automation solutions powered by artificial intelligence.",
    link: "/#ai-automation",
    features: ["Workflow Automation", "Document Processing", "Customer Service AI", "Data Analysis"]
  },
  {
    icon: <Workflow className="h-12 w-12 text-primary" />,
    title: "Process Improvement",
    description: "Optimize your business operations to save time, reduce costs, and improve overall efficiency.",
    link: "/#process-improvement",
    features: ["Business Process Analysis", "Efficiency Optimization", "Workflow Redesign", "Process Documentation"]
  },
  {
    icon: <Server className="h-12 w-12 text-primary" />,
    title: "IT Consulting",
    description: "Expert guidance on technology strategy, implementation, and management for your business needs.",
    link: "/#it-consulting",
    features: ["Technology Assessment", "Infrastructure Planning", "Cloud Migration", "Security Auditing"]
  },
  {
    icon: <Search className="h-12 w-12 text-primary" />,
    title: "SEO Services",
    description: "Improve your online visibility and drive more qualified traffic to your website with targeted SEO strategies.",
    link: "/#seo",
    features: ["Keyword Research", "On-Page Optimization", "Content Strategy", "Technical SEO"]
  },
  {
    icon: <BarChart4 className="h-12 w-12 text-primary" />,
    title: "Marketing Solutions",
    description: "Comprehensive marketing strategies designed to grow your brand and attract more customers.",
    link: "/#marketing",
    features: ["Digital Marketing", "Social Media Management", "Email Campaigns", "Content Creation"]
  },
  {
    icon: <LineChart className="h-12 w-12 text-primary" />,
    title: "Business Analytics",
    description: "Transform your data into actionable insights to make better business decisions and drive growth.",
    link: "/#business-analytics",
    features: ["Data Visualization", "Performance Metrics", "Predictive Analytics", "Custom Reporting"]
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Comprehensive Solutions for SMBs
            </h2>
            <p className="max-w-[900px] text-slate-500 dark:text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a wide range of services designed to help small and medium businesses leverage technology and strategic approaches to grow and succeed.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mt-4 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" asChild className="w-full mt-2 group">
                  <Link href={service.link} className="inline-flex items-center justify-center">
                    Learn More
                    <ArrowUpRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
