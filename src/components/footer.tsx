import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Apex Insights</h3>
            <p className="text-slate-400">
              Helping SMBs compete and thrive in their marketplace using AI solutions.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/#ai-automation" className="hover:text-primary transition-colors">
                  AI Automations
                </Link>
              </li>
              <li>
                <Link href="/#process-improvement" className="hover:text-primary transition-colors">
                  Process Improvement
                </Link>
              </li>
              <li>
                <Link href="/#it-consulting" className="hover:text-primary transition-colors">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link href="/#seo" className="hover:text-primary transition-colors">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="/#marketing" className="hover:text-primary transition-colors">
                  Marketing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/#about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#case-studies" className="hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact</h4>
            <address className="not-italic text-slate-400 space-y-2">
              <p>Chicago, IL</p>
              <p>
                <a href="mailto:solutions@getapexinsights.com" className="hover:text-primary transition-colors">
                  solutions@getapexinsights.com
                </a>
              </p>
              <p>
                <a href="tel:+17739579267" className="hover:text-primary transition-colors">
                  (773) 957-9267
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>© {new Date().getFullYear()} Apex Insights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
