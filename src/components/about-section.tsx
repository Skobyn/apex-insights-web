import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                About Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                We Help SMBs Leverage Technology
              </h2>
              <p className="text-slate-600 dark:text-slate-400 md:text-lg">
                Apex Insights is a specialized agency focused on empowering small and medium-sized businesses with cutting-edge AI solutions and strategic services. We bridge the technology gap, providing enterprise-level capabilities at SMB-friendly costs.
              </p>
              <ul className="grid gap-2">
                {[
                  "Founded by tech industry veterans with 15+ years of experience",
                  "Dedicated team of AI specialists, developers, and strategists",
                  "Proven track record with 100+ successful implementations",
                  "Customized solutions that scale with your business",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button asChild>
                  <Link href="/#case-studies">View Our Work</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl sm:aspect-[4/3] lg:aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl"></div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 p-6 h-full">
              <div className="rounded-lg bg-white dark:bg-slate-800 shadow-lg p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">100+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Clients Served</div>
                </div>
              </div>
              <div className="rounded-lg bg-white dark:bg-slate-800 shadow-lg p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">93%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Client Retention</div>
                </div>
              </div>
              <div className="rounded-lg bg-white dark:bg-slate-800 shadow-lg p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">15+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
                </div>
              </div>
              <div className="rounded-lg bg-white dark:bg-slate-800 shadow-lg p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
