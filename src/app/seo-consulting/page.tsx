import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";
import { Search, ChevronRight, CheckCircle, BarChart, Award, Users, Globe, ArrowUpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SEOConsultingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  SEO Consulting Services
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Strategic SEO Consulting for Business Growth
                </h1>
                <p className="max-w-[600px] text-slate-700 dark:text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Partner with our expert consultants to develop a customized SEO strategy that drives organic traffic, increases conversions, and grows your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#contact-form">
                    <Button size="lg" className="w-full sm:w-auto">
                      Get a Free Consultation
                    </Button>
                  </Link>
                  <Link href="#why-choose-us">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto group">
                      <span className="inline-flex items-center">
                        Learn More <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="relative rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-lg"></div>
                  <div className="p-10 flex justify-center">
                    <Search className="h-32 w-32 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Our SEO Consulting Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Comprehensive SEO Solutions
                </h2>
                <p className="max-w-[900px] text-slate-500 dark:text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a full range of SEO consulting services tailored to your unique business needs and goals.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {/* Service 1 */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 transition-all hover:shadow-lg">
                <div className="mb-4">
                  <BarChart className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">SEO Audit & Analysis</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-4">
                  Comprehensive evaluation of your website's technical health, content quality, and competitive landscape to identify opportunities.
                </p>
                <ul className="space-y-2 mt-4 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Technical SEO assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Competitor analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Keyword opportunity identification</span>
                  </li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 transition-all hover:shadow-lg">
                <div className="mb-4">
                  <Globe className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Strategic Planning</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-4">
                  Custom SEO roadmap development based on your business goals, target audience, and competitive landscape.
                </p>
                <ul className="space-y-2 mt-4 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Custom SEO strategy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Prioritized action plan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Timeline and milestone development</span>
                  </li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 transition-all hover:shadow-lg">
                <div className="mb-4">
                  <ArrowUpCircle className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Implementation Support</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-4">
                  Hands-on technical guidance for implementing SEO recommendations, with ongoing support from our experts.
                </p>
                <ul className="space-y-2 mt-4 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Technical SEO execution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Content optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Developer coordination</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Why Apex Insights
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What Sets Our SEO Consulting Apart
                </h2>
                <p className="max-w-[900px] text-slate-500 dark:text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We combine data-driven insights with proven strategies to deliver measurable results for your business.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Advantage 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Experienced Consultants</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    Our team of SEO specialists has years of experience working with businesses across various industries, staying current with the latest algorithm updates and best practices.
                  </p>
                </div>
              </div>

              {/* Advantage 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <BarChart className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Data-Driven Approach</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    We base our recommendations on comprehensive data analysis, ensuring that every strategy is backed by evidence and tailored to your specific needs.
                  </p>
                </div>
              </div>

              {/* Advantage 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Collaborative Partnership</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    We work closely with your team, sharing knowledge and providing regular updates to ensure alignment with your business objectives.
                  </p>
                </div>
              </div>

              {/* Advantage 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    Our track record speaks for itself, with clients consistently seeing improvements in rankings, traffic, and conversions from our consulting services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Our Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  How Our SEO Consulting Works
                </h2>
                <p className="max-w-[900px] text-slate-500 dark:text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A structured approach to improve your search visibility and drive sustainable results.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {/* Step 1 */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 transition-all hover:shadow-lg relative">
                <div className="absolute top-6 right-6 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4 mt-6">Discovery</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  We start by understanding your business, goals, target audience, and current SEO performance.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 transition-all hover:shadow-lg relative">
                <div className="absolute top-6 right-6 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4 mt-6">Analysis</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Our team conducts a comprehensive audit of your site and competitive landscape to identify opportunities.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 transition-all hover:shadow-lg relative">
                <div className="absolute top-6 right-6 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4 mt-6">Strategy</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  We develop a customized SEO roadmap with prioritized recommendations based on impact and resources.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 transition-all hover:shadow-lg relative">
                <div className="absolute top-6 right-6 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold mb-4 mt-6">Implementation</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  We guide and support your team through implementing changes, providing ongoing expertise and monitoring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  FAQs
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-slate-500 dark:text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Common questions about our SEO consulting services.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* FAQ 1 */}
              <div className="bg-white dark:bg-slate-950 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">How long does it take to see results from SEO consulting?</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  SEO is a long-term strategy, but most clients begin seeing improvements within 3-6 months. Initial technical improvements may show results sooner, while content and link-building strategies typically take longer to fully mature.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white dark:bg-slate-950 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">What makes your SEO consulting different?</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  We combine technical expertise with a business-focused approach, ensuring our strategies align with your specific goals. Our consultants stay current with algorithm changes and industry trends to provide cutting-edge recommendations.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white dark:bg-slate-950 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Do you guarantee first-page rankings?</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  We don't guarantee specific rankings as search algorithms are constantly evolving. However, we do guarantee a data-driven approach focused on sustainable, long-term improvements to your organic visibility.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white dark:bg-slate-950 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">What reporting do you provide?</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  We provide comprehensive monthly reports tracking key metrics including rankings, traffic, conversions, and technical health. These reports include actionable insights and recommendations for ongoing improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-16 md:py-24 bg-white dark:bg-slate-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Get Started
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Improve Your SEO?
                </h2>
                <p className="max-w-[900px] text-slate-500 dark:text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today for a free consultation with one of our SEO experts.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-[800px]">
              <ContactSection />
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
} 