import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Keep for potential future use (e.g., case study snippet)
import { Database, BarChart, Sparkles, CalendarCheck, Info } from 'lucide-react'; // Relevant icons

export default function GeminiBiQuickstartPage() {

  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-secondary/10 via-background to-primary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-geist-sans">
              Unlock Data Insights Faster:
              <span className="block text-primary">
                 2-Week Google Looker AI Pilot
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Tired of slow, complex reporting? Experience the power of conversational AI in BI. Turn your data into decisions in just two weeks.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:px-6 lg:py-24 space-y-16">

        {/* Intro/Pain Point Section */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
           <h2 className="text-3xl font-bold tracking-tight">From Bottleneck to Breakthrough</h2>
           <p className="text-muted-foreground">
             Traditional BI often means waiting for reports or struggling with complex tools. Google's Gemini in Looker changes the game, allowing anyone to ask questions of their data in natural language and get instant insights. This pilot lets you see it firsthand, using your own data.
           </p>
        </section>

        {/* Content Cards Section */}
        <section className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border border-border/10">
            <CardHeader className="flex flex-row items-center gap-4">
              <Database className="h-8 w-8 text-primary" />
              <div>
                 <CardTitle>2-Week Pilot: Scope & Process</CardTitle>
                 <CardDescription>Focused engagement using your data.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pl-16"> {/* Indent content under icon */}
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Connect Looker AI to one key data source.</li>
                <li>Identify 2-3 core business questions/use cases.</li>
                <li>Guided setup and configuration.</li>
                <li>Hands-on exploration and query testing.</li>
                <li>Brief workshops for your team.</li>
              </ul>
               <div className="pt-4">
                 <h4 className="text-sm font-semibold flex items-center"><Info className="h-4 w-4 mr-1 text-muted-foreground"/> Prerequisites:</h4>
                 <p className="text-xs text-muted-foreground">Existing Looker instance (or trial setup), accessible data source (e.g., BigQuery, Snowflake, Redshift), stakeholder availability.</p>
               </div>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border border-border/10">
            <CardHeader className="flex flex-row items-center gap-4">
                <BarChart className="h-8 w-8 text-primary" />
                 <div>
                    <CardTitle>Deliverables & Value</CardTitle>
                    <CardDescription>Tangible results and clear next steps.</CardDescription>
                 </div>
            </CardHeader>
            <CardContent className="space-y-4 pl-16"> {/* Indent content under icon */}
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Working demo of Looker AI querying your data.</li>
                  <li>Summary of results and insights gained.</li>
                  <li>Assessment of conversational BI potential.</li>
                  <li>Recommendations for broader rollout.</li>
                  <li>Demonstrated ROI potential for faster insights.</li>
              </ul>
               <p className="text-sm font-medium pt-4 text-primary">Fixed Fee & Limited-Time Pilot Offer Available.</p>
            </CardContent>
          </Card>
        </section>

        {/* Potential: Add a small section for a Looker logo or a quote about data accessibility */}

        {/* CTA Section */}
        <section className="text-center space-y-6 py-12 bg-muted/50 rounded-lg">
             <h2 className="text-2xl font-semibold">Ready to Revolutionize Your Reporting?</h2>
             <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                 <Button size="lg" asChild>
                   <a href="#start"> {/* Replace #start with actual booking/contact link */}
                     <Sparkles className="mr-2 h-5 w-5" /> Start Your Conversational BI Pilot
                   </a>
                 </Button>
                 <Button size="lg" variant="outline" asChild>
                    <a href="#demo"> {/* Replace #demo with actual demo request link */}
                     See Looker AI in Action
                   </a>
                 </Button>
             </div>
        </section>
      </div>
    </>
  );
} 