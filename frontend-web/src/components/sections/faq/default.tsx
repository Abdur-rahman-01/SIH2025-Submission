import { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Questions and Answers",
  items = [
    {
      question:
        "What is ShikshaDisha?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            ShikshaDisha is an AI-powered platform that generates personalized vocational training roadmaps, connecting learners with NSQF-aligned courses tailored to their background, skills, and career aspirations.
          </p>
        </>
      ),
    },
    {
      question: "How does ShikshaDisha personalize learning paths?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            Our AI analyzes your education, existing skills, social context, and career goals to create a dynamic learning roadmap that adapts as you progress or as job market demands evolve.
          </p>
        </>
      ),
    },
    {
      question:
        "What is NSQF alignment and why does it matter?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            NSQF (National Skills Qualification Framework) ensures standardized competency levels across vocational training. All recommended courses are NSQF-aligned, making your credentials recognized and valued by employers nationwide.
          </p>
        </>
      ),
    },
    {
      question: 'Does ShikshaDisha support multiple languages?',
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Yes! The platform supports several Indian languages including Hindi, English, Tamil, Telugu, Bengali, and more, with an inclusive UI designed for seamless mobile usage.
          </p>
        </>
      ),
    },
    {
      question: "How does the platform track real-time job market trends?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[580px]">
          ShikshaDisha integrates labor market data APIs and industry partnership feeds to continuously update skill demand forecasts, ensuring your learning path remains relevant to current job opportunities.
        </p>
      ),
    },
    {
      question: "What types of training and credentials are available?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            We recommend vocational courses, micro-credentials, industry certifications, internships, apprenticeships, and on-the-job training opportunities—all mapped to specific career outcomes.
          </p>
        </>
      ),
    },
    {
      question: "Who can benefit from ShikshaDisha?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            <strong>Learners:</strong> Get personalized career guidance | <strong>Trainers:</strong> Monitor learner progress | <strong>Policymakers:</strong> Access skill demand analytics and training outcome insights.
          </p>
        </>
      ),
    },
    {
      question: "Is the platform scalable for nationwide implementation?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Absolutely. Built with cloud-native scalable architecture, ShikshaDisha can handle millions of concurrent users while maintaining fast response times and data integrity.
          </p>
        </>
      ),
    },
    {
      question: "How does the AI improve recommendations over time?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            The system learns from your interactions—course views, completion rates, quiz performance, and career goal updates—to progressively refine its recommendations, increasing relevance and reducing your search time.
          </p>
        </>
      ),
    },
    {
      question: "What makes ShikshaDisha different from other learning platforms?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Unlike generic course aggregators, ShikshaDisha combines behavioral AI analysis, NSQF skill mapping, labor market intelligence, and multi-stakeholder dashboards to deliver truly personalized career transformation pathways.
          </p>
        </>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 px-4">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
