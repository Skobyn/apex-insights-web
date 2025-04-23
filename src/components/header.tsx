"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Case Studies", href: "/#case-studies" },
    { name: "Contact", href: "/#contact" },
  ];

  const serviceItems = [
    { name: "Marketing Solutions", href: "/marketing-solutions" },
    { name: "AI Automations", href: "/ai-automations" },
    { name: "Process Improvement", href: "/process-improvement" },
    { name: "IT Consulting", href: "/it-consulting" },
    { name: "Business Analytics", href: "/business-analytics" },
    { name: "SEO Consulting", href: "/seo-consulting" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/ApexLogo.svg" alt="Apex Insights Logo" width={94} height={94} priority className="min-w-[94px] min-h-[94px] object-contain" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          
          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-primary">
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              {serviceItems.map((service) => (
                <DropdownMenuItem key={service.name} asChild>
                  <Link href={service.href} className="cursor-pointer w-full">
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link href="/#contact">
            <Button>Get Started</Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Services in Mobile Menu */}
              <div className="flex flex-col gap-2">
                <span className="text-lg font-medium">Services</span>
                <div className="flex flex-col gap-2 pl-4">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="text-base transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="mt-4">Get Started</Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
