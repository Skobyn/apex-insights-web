import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Keep for potential future use
import { Users, GraduationCap, Wand2, CheckSquare } from 'lucide-react'; // Relevant icons

export default function WorkspaceAiBoostPage() {

  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-geist-sans">
              Maximize Your Google Workspace:
              <span className="block text-primary">
                 AI Training & Automation Pilot
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Unlock immediate productivity gains by empowering your teams with the latest Workspace AI features (Sheets, Docs, Flows & more) announced at Google Next '25.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:px-6 lg:py-24 space-y-16">

        {/* Intro/Features Section */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
           <h2 className="text-3xl font-bold tracking-tight">Leverage the Power Within Workspace</h2>
           <p className="text-muted-foreground">
             Google is embedding powerful AI directly into the tools your teams use daily. From analyzing data in Sheets, summarizing Docs, to building custom automations with Flows and the Agent Development Kit (ADK), these features can significantly boost efficiency. Our program helps you adopt them effectively.
           </p>
        </section>

        {/* Content Cards Section - Two-Part Offering */}
        <section className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border border-border/10">
            <CardHeader className="flex flex-row items-center gap-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <div>
                 <CardTitle>Part 1: Targeted AI Training</CardTitle>
                 <CardDescription>Equip your teams for immediate impact.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pl-16"> {/* Indent content under icon */}
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Customized sessions focused on relevant Workspace AI features.</li>
                <li>Hands-on exercises using real-world team scenarios.</li>
                <li>Best practices for prompt engineering and AI usage.</li>
                <li>Focus on features like Docs summaries, Sheets analysis, Meet transcriptions, etc.</li>
                <li>Delivered virtually or on-site.</li>
              </ul>
               <p className="text-xs text-muted-foreground pt-4">Maximize adoption and ROI on your existing Google Workspace investment.</p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border border-border/10">
            <CardHeader className="flex flex-row items-center gap-4">
                <Wand2 className="h-8 w-8 text-primary" />
                 <div>
                    <CardTitle>Part 2: Automation Pilot</CardTitle>
                    <CardDescription>Automate one key workflow.</CardDescription>
                 </div>
            </CardHeader>
            <CardContent className="space-y-4 pl-16"> {/* Indent content under icon */}
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Identify a high-impact, automatable process (e.g., approvals, data entry, report generation).</li>
                  <li>Develop a pilot solution using Google Flows and/or ADK.</li>
                  <li>Build and test the automated workflow.</li>
                  <li>Demonstrate tangible time savings and efficiency gains.</li>
                  <li>Provide a roadmap for further automation.</li>
              </ul>
              <p className="text-xs text-muted-foreground pt-4">Prove the value of AI-powered automation within your specific context.</p>
            </CardContent>
          </Card>
        </section>

        {/* Pricing/Offer Section */}
        <section className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-3">Get Started Quickly</h3>
            <p className="text-muted-foreground mb-4">
                This combined Training & Pilot program is offered at a transparent, fixed price structure designed for rapid deployment and value demonstration. A limited-time introductory offer is available for early adopters following Google Next '25.
            </p>
            {/* Consider adding specific pricing tiers or a contact link for details */}
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-6 py-12 bg-muted/50 rounded-lg">
             <h2 className="text-2xl font-semibold">Ready to Boost Your Team's Workspace Productivity?</h2>
             <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                 <Button size="lg" asChild>
                   <a href="#boost"> {/* Replace #boost with actual booking/contact link */}
                     <Users className="mr-2 h-5 w-5" /> Boost Your Team's Productivity
                   </a>
                 </Button>
                 <Button size="lg" variant="outline" asChild>
                    <a href="#start"> {/* Replace #start with actual contact/info link */}
                     Get Started with Workspace AI
                   </a>
                 </Button>
             </div>
        </section>
      </div>
    </>
  );
} 