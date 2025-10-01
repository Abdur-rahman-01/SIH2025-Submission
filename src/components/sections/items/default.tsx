import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Why Choose Us?",
  items = [
    {
      title: "Personalized Learning Paths",
      description: "AI-driven recommendations tailored to each learner’s skills, goals, and background",
      icon: <ScanFaceIcon className="w-10 h-10" />,
    },
    {
      title: "Career Explorer",
      description: "Discover future-ready job roles and the skills needed to reach them",
      icon: <MonitorSmartphoneIcon className="w-10 h-10" />,
    },
    {
      title: "Skill Gap Analyzer",
      description:
        "Instant insights into current vs required skills with actionable training suggestions",
      icon: <EclipseIcon className="w-10 h-10" />,
    },
    {
      title: "Real-time Updates",
      description: "Recommendations adapt continuously based on learner progress and labor market trends",
      icon: <BlocksIcon className="w-10 h-10" />,
    },
    {
      title: "NSQF-aligned Programs",
      description: "All courses and credentials mapped to NCVET’s National Skills Qualifications Framework",
      icon: <FastForwardIcon className="w-10 h-10" />,
    },
    {
      title: "Inclusive & Multilingual",
      description: "Supports diverse learners with multiple language options and accessibility-first design",
      icon: <RocketIcon className="w-10 h-10" />,
    },
    {
      title: "Interactive Dashboard",
      description:
        "Track progress, milestones, and learning achievements in one intuitive interface",
      icon: <LanguagesIcon className="w-10 h-10" />,
    },
    {
      title: "Scalable & Secure",
      description:
        "Capable of serving millions of learners while ensuring full data privacy and compliance",
      icon: <SquarePenIcon className="w-10 h-10" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 sm:gap-24">
        <h2 className="max-w-[600px] text-center text-3xl sm:text-5xl font-bold leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((item, index) => (
              <Item key={index} className="p-4">
                <ItemTitle className="flex items-center gap-4 text-xl font-semibold">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription className="mt-2 text-gray-500 text-base">
                  {item.description}
                </ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
