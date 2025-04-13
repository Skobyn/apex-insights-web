import React from 'react';
// If using shadcn/ui button:
// import { Button } from '@/components/ui/button'; 

// Placeholder icons (replace with actual icons if using an icon library like lucide-react)
const ClockIcon = () => <span className="text-primary-green text-2xl mr-2">⏰</span>;
const MapIcon = () => <span className="text-primary-green text-2xl mr-2">🗺️</span>;
const LaptopIcon = () => <span className="text-primary-green text-2xl mr-2">💻</span>;
const AdminIcon = () => <span className="text-primary-green text-2xl mr-2">📊</span>; // Placeholder
const PhoneIcon = () => <span className="text-primary-green text-2xl mr-2">📞</span>;
const SearchIcon = () => <span className="text-primary-green text-2xl mr-2">🔍</span>;
const ChartIcon = () => <span className="text-primary-green text-2xl mr-2">📈</span>; // Placeholder
const MoneyIcon = () => <span className="text-primary-green text-4xl mb-4 block">💰</span>;
const TimerIcon = () => <span className="text-primary-green text-4xl mb-4 block">⏱️</span>;
const PinIcon = () => <span className="text-primary-green text-4xl mb-4 block">📍</span>;
const RobotIcon = () => <span className="text-primary-green text-4xl mb-4 block">🤖</span>;

export default function LandscapingLandingPage() {
  return (
    <>
      {/* Note: Navbar and Footer are typically handled in the main layout.tsx */}
      {/*       We are only creating the page-specific content here. */}

      {/* Hero Section */}
      <section id="home" className="w-full py-20 md:py-32 lg:py-40 bg-secondary-green/30 text-center">
        {/* Optional: Add a background image with Tailwind */}
        {/* className="... bg-[url('/path/to/your/landscaping-hero.jpg')] bg-cover bg-center" */}
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-primary-green mb-4">
            Stop Chasing Leads, Start Landing Profitable Landscaping Projects
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-secondary-green-foreground mb-6">
            Apex Insights delivers AI-powered automation, stunning lead-generating websites, and dominant local SEO to help landscaping companies like yours streamline operations, attract high-value clients, and boost profitability.
          </p>
          {/* Replace with Shadcn Button if available and preferred */}
          <a href="#contact" 
             className="inline-block bg-primary-green text-primary-green-foreground font-semibold py-3 px-8 rounded-md text-lg hover:bg-opacity-90 transition duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-md hover:shadow-lg mb-2">
            Request My Free Growth Analysis
          </a>
          <p className="text-sm text-muted-foreground">Discover how technology can automate tasks and win you more business.</p>
          {/* Placeholder for Social Proof Logos */}
          <div className="mt-8 opacity-80">
             <span className="block mb-2 font-semibold text-secondary-green-foreground">Trusted by Service Businesses</span>
             {/* Add logos here using img tags or components */}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problems" className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            Spending More Time Managing Crews Than Designing Landscapes?
          </h2>
          <ul className="max-w-2xl mx-auto space-y-4">
            <li className="flex items-start text-lg"><ClockIcon /> Wasting hours manually scheduling complex multi-day projects?</li>
            <li className="flex items-start text-lg"><MapIcon /> Burning fuel and time with inefficient crew routing across town?</li>
            <li className="flex items-start text-lg"><LaptopIcon /> Is your website outdated and failing to showcase your best work?</li>
            <li className="flex items-start text-lg"><AdminIcon /> Drowning in administrative tasks instead of focusing on client relations?</li>
            <li className="flex items-start text-lg"><PhoneIcon /> Losing potential high-value projects to competitors who respond faster?</li>
            <li className="flex items-start text-lg"><SearchIcon /> Invisible to affluent homeowners searching online for premium landscaping?</li>
            <li className="flex items-start text-lg"><ChartIcon /> Unsure if your marketing spend is attracting the right kind of projects?</li>
          </ul>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solutions" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Apex Insights: We Build Growth Engines for Landscaping Businesses.
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-foreground/80">
            <p>
              Our team combines deep tech knowledge (AI, Web Dev) with proven digital marketing strategies (SEO) to solve the specific challenges landscaping professionals face. We understand the seasonality, the equipment logistics, the importance of visual portfolios, and the competitive local market.
            </p>
            <p>
              We implement AI to automate scheduling and optimize routes. We build visually stunning websites that showcase your portfolio and convert visitors into qualified leads. Our targeted SEO ensures you dominate local search results when clients need high-quality landscaping services.
            </p>
          </div>
           {/* Optional: Team photo or diagram placeholder */}
        </div>
      </section>

      {/* Benefit Section */}
      <section id="benefits" className="py-16 md:py-24 bg-secondary-green/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-primary-green">
            Reap the Rewards of Smarter Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md text-center border border-border/10 hover:shadow-lg transition-shadow duration-300">
              <MoneyIcon />
              <h3 className="text-xl font-semibold mb-2">Increase High-Profit Bookings</h3>
              <p className="text-card-foreground/80">Generate a steady stream of qualified leads for larger projects through top Google rankings and a website that converts.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md text-center border border-border/10 hover:shadow-lg transition-shadow duration-300">
              <TimerIcon />
              <h3 className="text-xl font-semibold mb-2">Slash Operational Costs</h3>
              <p className="text-card-foreground/80">Cut fuel expenses and save admin hours with AI-powered route optimization and automated communication.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md text-center border border-border/10 hover:shadow-lg transition-shadow duration-300">
              <PinIcon />
              <h3 className="text-xl font-semibold mb-2">Dominate Your Local Market</h3>
              <p className="text-card-foreground/80">Become the go-to landscaper in target neighborhoods with laser-focused local SEO.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md text-center border border-border/10 hover:shadow-lg transition-shadow duration-300">
              <RobotIcon />
              <h3 className="text-xl font-semibold mb-2">Automate Your Admin Work</h3>
              <p className="text-card-foreground/80">Free up time from tedious manual tasks like follow-ups and scheduling confirmations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Action Plan Section */}
      <section id="plan" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-12">
            Your Path to Smarter Landscaping Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-green text-primary-green-foreground text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Schedule Free Analysis</h3>
              <p className="text-foreground/80">Book a no-obligation call focused on your landscaping business's growth opportunities.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-green text-primary-green-foreground text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Get Custom Growth Plan</h3>
              <p className="text-foreground/80">We'll discuss goals, analyze your setup, and outline a tailored strategy.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-green text-primary-green-foreground text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Implement & Scale</h3>
              <p className="text-foreground/80">We put the plan into action, helping you streamline, increase leads, and grow sustainably.</p>
            </div>
          </div>
          <a href="#contact" 
             className="inline-block bg-primary-green text-primary-green-foreground font-semibold py-3 px-8 rounded-md text-lg hover:bg-opacity-90 transition duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-md hover:shadow-lg">
             Start Your Growth Journey
          </a>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="results" className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            Don't Just Take Our Word For It
          </h2>
          <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg shadow-md border-l-4 border-primary-green">
            <blockquote className="text-lg italic text-card-foreground/80 mb-4">
              "Apex Insights redesigned our website and optimized our local SEO. Our lead quality improved dramatically, and we landed three major design/build projects within months. Their understanding of the service industry is top-notch."
            </blockquote>
            <cite className="block font-semibold text-right text-primary-green not-italic">
              – [Placeholder Name], [Placeholder Landscaping Co.]
            </cite>
            {/* Add more testimonials similarly */} 
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">How exactly can AI help my landscaping business?</h3>
              <p className="text-foreground/80">AI can optimize multi-day project scheduling, create the most efficient daily routes for multiple crews, automate client communication and follow-ups, and even assist with initial quote generation based on project parameters.</p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-xl font-semibold mb-2">What's the typical investment?</h3>
              <p className="text-foreground/80">We offer tailored packages based on your specific needs (AI, Web, SEO, or a combination). We focus on delivering a strong ROI, ensuring our services pay for themselves through increased efficiency and revenue. Let's discuss your goals in the free analysis.</p>
            </div>
             <div className="border-t border-border pt-6">
              <h3 className="text-xl font-semibold mb-2">How long until I see results?</h3>
              <p className="text-foreground/80">AI automation benefits like improved scheduling and routing efficiency can be seen quickly. SEO results typically build over 3-6 months, establishing long-term visibility. A new website starts generating leads as soon as it's live and promoted.</p>
            </div>
             <div className="border-t border-border pt-6">
              <h3 className="text-xl font-semibold mb-2">Will this integrate with software we already use?</h3>
              <p className="text-foreground/80">We strive to integrate with popular CRM and scheduling software used in the landscaping industry. We'll assess your current tech stack during the analysis phase.</p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-xl font-semibold mb-2">We're great at landscaping, not tech. Is this complex?</h3>
              <p className="text-foreground/80">Our solutions are designed to be user-friendly. We provide training and ongoing support to ensure your team can easily leverage the tools we implement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section (Bottom) */}
      <section id="contact" className="py-16 md:py-24 bg-primary-green text-primary-green-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ready to Automate Tasks and Grow Your Landscaping Revenue?
          </h2>
          <p className="max-w-xl mx-auto text-lg mb-8">
             Let's build your custom growth plan. Schedule your free, no-obligation analysis today.
          </p>
          {/* Example Form (Needs state management and submission logic) */}
          <form 
            name="landscaping-analysis-request"
            method="POST"
            data-netlify="true"
            className="max-w-lg mx-auto space-y-4"
          >
            <input type="text" name="name" placeholder="Your Name" required 
                   className="w-full px-4 py-2 rounded-md text-foreground bg-background border border-border focus:ring-primary-green focus:border-primary-green" />
            <input type="text" name="company" placeholder="Company Name" required
                   className="w-full px-4 py-2 rounded-md text-foreground bg-background border border-border focus:ring-primary-green focus:border-primary-green" />
            <input type="email" name="email" placeholder="Your Email" required
                   className="w-full px-4 py-2 rounded-md text-foreground bg-background border border-border focus:ring-primary-green focus:border-primary-green" />
            <input type="tel" name="phone" placeholder="Phone Number"
                   className="w-full px-4 py-2 rounded-md text-foreground bg-background border border-border focus:ring-primary-green focus:border-primary-green" />
            <textarea name="challenge" placeholder="Your Biggest Challenge (Optional)"
                      rows={4}
                      className="w-full px-4 py-2 rounded-md text-foreground bg-background border border-border focus:ring-primary-green focus:border-primary-green"></textarea>
            {/* Replace with Shadcn Button if available and preferred */}
            <button type="submit" 
                    className="w-full md:w-auto bg-white text-primary-green font-semibold py-3 px-8 rounded-md text-lg hover:bg-secondary-green hover:text-secondary-green-foreground transition duration-300 ease-in-out shadow-md hover:shadow-lg">
              Schedule My Free Analysis Call Now!
            </button>
          </form>
           {/* Or link to Calendly/Booking Tool */}
           {/* <a href="YOUR_BOOKING_LINK" className="...">Schedule My Free Analysis Call Now!</a> */}
        </div>
      </section>
    </>
  );
} 