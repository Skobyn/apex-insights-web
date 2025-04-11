import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Assuming Avatar component exists for bios

export default function AIAgentWorkshopPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 font-geist-sans">
          Google Next \'25: Define Your AI Agent Strategy in One Day.
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Navigate the buzz around Google\'s new agent ecosystem (Agentspace, ADK, A2A). This intensive workshop cuts through the noise, helping you identify concrete, high-impact AI agent pilot opportunities tailored specifically to your business challenges and goals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Workshop Goal: Actionable Strategy</CardTitle>
            <CardDescription>
              Move beyond hype to practical application. We focus on identifying and prioritizing AI agent use cases that deliver tangible business value quickly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="text-lg font-semibold">Key Deliverables:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Prioritized list of AI agent use cases.</li>
              <li>High-level pilot roadmap for top opportunities.</li>
              <li>Understanding of Google Agent ecosystem relevance.</li>
              <li>Action plan for next steps.</li>
            </ul>
             <p className="text-sm font-medium pt-4">Fixed Fee Structure & Limited-Time Introductory Offer Available.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Intensive 1-Day Agenda</CardTitle>
             <CardDescription>
               A focused day covering strategy, use case identification, and pilot planning. (Detailed agenda provided upon consultation).
            </CardDescription>
          </CardHeader>
           <CardContent className="space-y-4">
             {/* Placeholder for Agenda Highlights */}
             <p className="text-muted-foreground italic">[Detailed Agenda Section - Add specific timings/topics here]</p>
             <p className="text-muted-foreground">Example Topics:</p>
             <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                <li>Understanding Agentspace, ADK, A2A</li>
                <li>Mapping Business Processes to Agent Capabilities</li>
                <li>Use Case Prioritization Framework</li>
                <li>Pilot Scoping and Success Metrics</li>
                <li>Integration & Technical Considerations</li>
             </ul>
          </CardContent>
        </Card>
      </div>

       {/* Consultant Bios Section - Placeholder */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Your Workshop Facilitators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
           {/* Add Consultant Cards Here */}
          <Card className="text-center">
            <CardContent className="pt-6">
              <Avatar className="mx-auto mb-3 h-20 w-20">
                 <AvatarImage src="/placeholder-avatar.jpg" alt="Consultant Name" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold">Consultant Name</h3>
              <p className="text-sm text-muted-foreground">Expertise Area (e.g., AI Strategy, Process Automation)</p>
              {/* Add brief bio link or text */}
            </CardContent>
          </Card>
           <Card className="text-center">
            <CardContent className="pt-6">
              <Avatar className="mx-auto mb-3 h-20 w-20">
                 <AvatarImage src="/placeholder-avatar.jpg" alt="Consultant Name 2" />
                <AvatarFallback>C2</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold">Consultant Name 2</h3>
              <p className="text-sm text-muted-foreground">Expertise Area</p>
             </CardContent>
          </Card>
           {/* Add more cards as needed */}
        </div>
      </div>


      <div className="text-center space-x-4">
        <Button size="lg" asChild>
          <a href="#book"> {/* Replace #book with actual booking link/modal trigger */}
            Book Your AI Agent Strategy Workshop
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
           <a href="#consult"> {/* Replace #consult with actual consultation link/modal trigger */}
            Request Consultation
          </a>
        </Button>
      </div>
    </div>
  );
} 