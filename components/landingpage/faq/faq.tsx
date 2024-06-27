import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { faqData } from "@/data/faqLanding";

export function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Get answers to the most common questions about our product.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-2">
            {faqData.map((eachFaq, i) => {
              return (
                <AccordionItem value={`faq-${i}`} key={`f_${i}`}>
                  <AccordionTrigger className="flex items-center justify-between rounded-md bg-background px-2 py-3 text-lg text-left font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                    {eachFaq.Q}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 w-11/12 text-foreground">
                    {eachFaq.A}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
