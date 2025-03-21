import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CalendlyButton } from "@/components/calendly-button";

export function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-primary text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 text-lg text-white/90 max-w-[600px]">
              Take the first step toward leveraging AI and technology to grow your business. Our team is ready to help you implement custom solutions tailored to your specific needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
            <CalendlyButton 
              text="Schedule a Free Consultation" 
              className="text-primary bg-white hover:bg-white/90 font-medium" 
            />
            <Button size="lg" variant="outline" className="bg-black border-white hover:bg-black/80 text-white" asChild>
              <Link href="/#services">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
