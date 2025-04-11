import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CountdownTimer from "@/components/ui/countdown-timer";
import { Target, Briefcase, CalendarClock } from 'lucide-react';

export default function AIAgentWorkshopPage() {
  const workshopTargetDate = "2024-10-31T09:00:00Z";

  return (
    <>
      <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-geist-sans">
              Define Your AI Agent Strategy After
              <span className="block text-primary">
                 Google Next '25: One-Day Workshop
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Cut through the hype of Agentspace, ADK, & A2A. Pinpoint high-impact pilot opportunities tailored to your business in our intensive strategy session.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:px-6 lg:py-24 space-y-16">
        <section className="text-center space-y-4">
           <h2 className="text-3xl font-bold tracking-tight">Workshop Begins In:</h2>
           <CountdownTimer targetDate={workshopTargetDate} />
           <p className="text-sm text-muted-foreground pt-2">Limited Spots Available - Secure Yours Today!</p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border border-border/10">
            <CardHeader className="flex flex-row items-center gap-4">
              <Target className="h-8 w-8 text-primary" />
              <div>
                 <CardTitle>Workshop Goal: Actionable Strategy</CardTitle>
                 <CardDescription>Move beyond hype to practical application.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pl-16">
              <h3 className="text-lg font-semibold">Key Deliverables:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Prioritized list of AI agent use cases.</li>
                <li>High-level pilot roadmap for top opportunities.</li>
                <li>Understanding of Google Agent ecosystem relevance.</li>
                <li>Action plan for next steps.</li>
              </ul>
              <p className="text-sm font-medium pt-4 text-primary">Fixed Fee & Limited-Time Introductory Offer Available.</p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border border-border/10">
            <CardHeader className="flex flex-row items-center gap-4">
                <Briefcase className="h-8 w-8 text-primary" />
                 <div>
                    <CardTitle>Intensive 1-Day Agenda</CardTitle>
                    <CardDescription>Strategy, use cases, and pilot planning.</CardDescription>
                 </div>
            </CardHeader>
            <CardContent className="space-y-4 pl-16">
              <p className="text-muted-foreground italic">[Detailed Agenda - Add specific timings/topics here]</p>
              <p className="text-muted-foreground font-semibold">Example Topics:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                  <li>Understanding Agentspace, ADK, A2A</li>
                  <li>Mapping Business Processes to Agent Capabilities</li>
                  <li>Use Case Prioritization Framework</li>
                  <li>Pilot Scoping and Success Metrics</li>
                  <li>Integration & Technical Considerations</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Your Workshop Facilitators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
            <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-border/10">
              <CardContent className="pt-6">
                <Avatar className="mx-auto mb-3 h-20 w-20 border-2 border-primary/30">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Consultant Name" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold">Consultant Name</h3>
                <p className="text-sm text-muted-foreground">Expertise Area (e.g., AI Strategy)</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-border/10">
              <CardContent className="pt-6">
                <Avatar className="mx-auto mb-3 h-20 w-20 border-2 border-primary/30">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Consultant Name 2" />
                  <AvatarFallback>C2</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold">Consultant Name 2</h3>
                <p className="text-sm text-muted-foreground">Expertise Area</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center space-y-6 py-12 bg-muted/50 rounded-lg">
             <h2 className="text-2xl font-semibold">Ready to Build Your AI Agent Roadmap?</h2>
             <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                 <Button size="lg" asChild>
                   <a href="#book">
                     <CalendarClock className="mr-2 h-5 w-5" /> Book Your Strategy Workshop
                   </a>
                 </Button>
                 <Button size="lg" variant="outline" asChild>
                    <a href="#consult">
                     Request Consultation
                   </a>
                 </Button>
             </div>
        </section>
      </div>
    </>
  );
} 