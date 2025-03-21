"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";
import { Server, ChevronRight, CheckCircle, Shield, Code, Database, Laptop, CloudCog, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { toast } from "@/components/toast-fallback";

export default function ITConsultingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    itChallenges: "",
    budget: "",
    projectType: ""
  });
  
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    
    if (!formData.company.trim()) {
      errors.company = "Company name is required";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Get form data for Netlify submission
      const form = e.target as HTMLFormElement;
      const formDataObj = new FormData(form);
      
      // Process form data for Netlify
      const formEntries = Array.from(formDataObj.entries())
        .filter(([_, value]) => typeof value === 'string')
        .map(([key, value]) => [key, value.toString()]);
        
      // Submit to Netlify
      const netlifyResponse = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formEntries).toString()
      });
      
      if (!netlifyResponse.ok) {
        console.error('Netlify form submission error:', await netlifyResponse.text());
      } else {
        console.log('Netlify form submission successful');
      }
      
      // Send data to our serverless function for Supabase
      const response = await fetch('/.netlify/functions/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'it-consulting',
          submittedAt: new Date().toISOString()
        }),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Form submission failed');
      }
      
      toast.success("Thank you! We'll contact you shortly about IT consulting solutions for your business.", {
        duration: 5000
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        itChallenges: "",
        budget: "",
        projectType: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section with Form */}
        <section className="py-6 md:py-10 bg-gradient-to-b from-primary/5 to-primary/10">
          <div className="container px-5 md:px-7">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  IT Consulting
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Transform Your IT Infrastructure
                </h1>
                <p className="max-w-[600px] text-slate-700 dark:text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Strategic IT consulting to enhance your technology capabilities, improve security, and drive business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#why-choose-us">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto group">
                      <span className="inline-flex items-center">
                        Learn More <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Lead Generation Form */}
              <div className="relative">
                {/* Attention-grabbing animation */}
                <div className="hidden md:block absolute -top-5 -left-5 right-5 bottom-5 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 blur-xl -z-10 animate-pulse" />
                
                <div className="max-w-[768px] mx-auto bg-white dark:bg-slate-900 rounded-lg shadow-lg border border-slate-200 dark:border-slate-800 p-6 lg:p-8 relative overflow-hidden">
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 border-t-[40px] border-r-[40px] border-t-primary border-r-transparent" />
                  
                  <h3 className="text-2xl font-bold text-center text-primary mb-6 uppercase tracking-wide">
                    GET A FREE IT CONSULTATION
                  </h3>
                  
                  <form 
                    name="it-consulting"
                    method="POST"
                    data-netlify="true"
                    className="space-y-4" 
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="form-name" value="it-consulting" />
                    <div>
                      <div className="relative">
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border ${formErrors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} rounded-md focus:ring-primary focus:border-primary dark:bg-slate-800 dark:text-white`}
                          placeholder="Name*" 
                          required 
                        />
                        {formErrors.name && (
                          <p className="text-red-500 text-xs mt-1 flex items-center">
                            <Server className="h-3 w-3 mr-1" /> {formErrors.name}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <div className="relative">
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border ${formErrors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} rounded-md focus:ring-primary focus:border-primary dark:bg-slate-800 dark:text-white`}
                          placeholder="Email*" 
                          required 
                        />
                        {formErrors.email && (
                          <p className="text-red-500 text-xs mt-1 flex items-center">
                            <Server className="h-3 w-3 mr-1" /> {formErrors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <div className="w-1/4">
                        <select 
                          className="w-full h-[52px] px-3 py-3 border border-slate-300 dark:border-slate-700 rounded-md focus:ring-primary focus:border-primary dark:bg-slate-800 dark:text-white text-sm"
                          name="countryCode"
                          onChange={handleChange}
                        >
                          <option value="+1">+1</option>
                          <option value="+44">+44</option>
                          <option value="+61">+61</option>
                          <option value="+91">+91</option>
                        </select>
                      </div>
                      <div className="relative w-3/4">
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange} 
                          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-md focus:ring-primary focus:border-primary dark:bg-slate-800 dark:text-white" 
                          placeholder="Phone Number" 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="relative">
                        <input 
                          type="text" 
                          id="company" 
                          name="company"
                          value={formData.company}
                          onChange={handleChange} 
                          className={`w-full px-4 py-3 border ${formErrors.company ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} rounded-md focus:ring-primary focus:border-primary dark:bg-slate-800 dark:text-white`}
                          placeholder="Company Name*" 
                          required 
                        />
                        {formErrors.company && (
                          <p className="text-red-500 text-xs mt-1 flex items-center">
                            <Server className="h-3 w-3 mr-1" /> {formErrors.company}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <div className="relative">
                        <textarea
                          id="itChallenges"
                          name="itChallenges"
                          value={formData.itChallenges}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-md focus:ring-primary focus:border-primary dark:bg-slate-800 dark:text-white"
                          placeholder="What IT challenges is your business currently facing?"
                          rows={3}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="relative">
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-md focus:ring-primary focus:border-primary dark:bg-slate-800 dark:text-white"
                        >
                          <option value="" disabled>Approximate Budget</option>
                          <option value="Under $10k">Under $10k</option>
                          <option value="$10k-$25k">$10k-$25k</option>
                          <option value="$25k-$50k">$25k-$50k</option>
                          <option value="$50k-$100k">$50k-$100k</option>
                          <option value="$100k+">$100k+</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded w-full">
                        <div className="text-xs text-slate-500 flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border border-slate-400 rounded"></div>
                            <span>I'm not a robot</span>
                          </div>
                          <div className="flex flex-col items-end">
                            <div className="text-[10px]">reCAPTCHA</div>
                            <div className="text-[8px]">Privacy - Terms</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-[#b9d234] hover:bg-[#a8be2d] text-black font-bold py-3 px-4 rounded uppercase transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg relative overflow-hidden group"
                      disabled={isSubmitting}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            Get IT Solutions Now
                            <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                    
                    <p className="text-xs text-slate-500 text-center">
                      By submitting this form, you agree to our 
                      <a href="/privacy" className="text-primary hover:underline"> Privacy Policy</a>.
                    </p>
                  </form>
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
                  Our IT Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Comprehensive IT Solutions
                </h2>
                <p className="max-w-[900px] text-slate-500 dark:text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide end-to-end IT consulting and implementation services to help your business leverage technology effectively.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {/* Service 1 */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 transition-all hover:shadow-lg">
                <div className="mb-4">
                  <CloudCog className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">IT Strategy & Architecture</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-4">
                  Develop a comprehensive IT roadmap aligned with your business goals and industry best practices.
                </p>
                <ul className="space-y-2 mt-4 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Technology needs assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>IT infrastructure planning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Digital transformation roadmaps</span>
                  </li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 transition-all hover:shadow-lg">
                <div className="mb-4">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cybersecurity Solutions</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-4">
                  Protect your business from cyber threats with comprehensive security assessments, implementation, and monitoring.
                </p>
                <ul className="space-y-2 mt-4 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Security audits and assessments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Data protection strategies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Compliance and regulatory guidance</span>
                  </li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 transition-all hover:shadow-lg">
                <div className="mb-4">
                  <Database className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cloud Migration & Management</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-4">
                  Seamlessly transition your business to the cloud with our expert migration and ongoing management services.
                </p>
                <ul className="space-y-2 mt-4 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Cloud readiness assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Migration planning and execution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Ongoing cloud optimization</span>
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
                  Your Trusted IT Partner
                </h2>
                <p className="max-w-[900px] text-slate-500 dark:text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We combine technical expertise with business acumen to deliver IT solutions that drive real results.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Advantage 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Code className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Technical Excellence</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    Our team of certified IT professionals brings decades of experience across various technologies and platforms.
                  </p>
                </div>
              </div>

              {/* Advantage 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Laptop className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Business-Focused Approach</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    We understand that technology should serve your business goals, not the other way around. Our solutions are designed with your specific business needs in mind.
                  </p>
                </div>
              </div>

              {/* Advantage 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    We've successfully implemented IT solutions for businesses of all sizes across multiple industries, with a focus on delivering measurable results.
                  </p>
                </div>
              </div>

              {/* Advantage 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    Our relationship doesn't end with implementation. We provide ongoing support and optimization to ensure your IT infrastructure continues to serve your evolving needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
} 