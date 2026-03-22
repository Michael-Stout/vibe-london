import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { CourseHero } from "@/components/CourseHero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ScheduleList } from "@/components/ScheduleList";
import { TopicGrid } from "@/components/TopicGrid";
import { RegistrationCTA } from "@/components/RegistrationCTA";

export const metadata: Metadata = {
  title: "Master OpenClaw: Build Your Own AI Agent",
  description:
    "A one-day hands-on course in London. Build and deploy your own autonomous AI agent using OpenClaw.",
};

const NAV_ANCHORS = [
  { href: "#about", label: "About" },
  { href: "#schedule", label: "Schedule" },
  { href: "#topics", label: "Topics" },
  { href: "#register", label: "Register" },
];

const FEATURES = [
  {
    title: "Autonomous AI Agent",
    description:
      "Build an agent that browses the web, manages emails, schedules events, and acts on your behalf.",
  },
  {
    title: "Persistent Memory",
    description:
      "Learn to implement memory that lets your agent recall past interactions and adapt to user habits over time.",
  },
  {
    title: "Deploy Your Agent",
    description:
      "Walk away with a working, deployed OpenClaw agent you built and configured yourself.",
  },
  {
    title: "Hands-On, Not Slides",
    description:
      "You'll be building from hour one with mentors on hand to help you through every step.",
  },
  {
    title: "Security First",
    description:
      "Understand the security implications of autonomous agents and learn to configure permissions safely.",
  },
  {
    title: "London Based",
    description:
      "Join us in-person in central London. Network with fellow developers and build connections.",
  },
];

const SCHEDULE = [
  { time: "09:00", title: "Kickoff & Environment Setup", desc: "Install OpenClaw, configure your LLM provider, and connect your first messaging platform." },
  { time: "09:45", title: "OpenClaw Architecture", desc: "Understand how OpenClaw works — LLM integration, tool execution, memory systems, and the agent loop." },
  { time: "10:30", title: "Building Your First Agent", desc: "Create a basic agent that can browse the web, summarise content, and respond via WhatsApp." },
  { time: "12:00", title: "Lunch", desc: "Refuel and connect with fellow participants." },
  { time: "13:00", title: "Persistent Memory & Personalisation", desc: "Implement memory so your agent recalls interactions and adapts to user preferences over weeks." },
  { time: "14:30", title: "Advanced Integrations", desc: "Connect your agent to email, calendar, file storage, and other services. Build custom tools." },
  { time: "16:00", title: "Security & Permissions", desc: "Lock down your agent — configure permissions, audit logs, and safe defaults for production use." },
  { time: "17:00", title: "Deploy & Demo", desc: "Deploy your agent to the cloud and demo it to the group. Prizes for the best builds." },
];

const TOPICS = [
  "OpenClaw", "LLM APIs", "Persistent Memory", "WhatsApp Integration",
  "Web Browsing", "Email & Calendar", "Custom Tools", "Agent Security",
  "Cloud Deployment", "Cloudflare Workers", "Prompt Engineering", "Agentic Patterns",
];

const BENEFITS = [
  "Bring your own laptop, leave with a deployed AI agent",
  "Full day of hands-on learning",
  "All materials and resources included",
  "Lunch and refreshments provided",
  "Prizes for the best projects",
  "Access to Vibe Coding London Events",
  "Post-course support",
  "Free AI Certs Self-Paced Course of your choice (a £195 value)",
];

export default function OpenClaw() {
  return (
    <>
      <SiteNav anchors={NAV_ANCHORS} ctaHref="#register" ctaLabel="Join Now" />

      <CourseHero
        title={
          <>
            Master <span className="text-orange-500">OpenClaw</span>
            <br />
            Build Your Own{" "}
            <span className="text-accent-light">AI Agent</span>
          </>
        }
        subtitle="From Setup to a Fully Deployed Personal AI Agent in One Day"
      />

      <FeatureGrid
        heading="What is OpenClaw?"
        description="OpenClaw (formerly ClawdBot and MoltBot) is an open-source autonomous AI agent that can execute real-world tasks on your behalf — browsing the web, managing emails, scheduling calendar entries, and much more. It uses LLMs with persistent memory to adapt to your habits and carry out hyper-personalised functions via messaging platforms like WhatsApp."
        features={FEATURES}
      />

      <ScheduleList
        description="An intensive course designed to take you from zero to a deployed AI agent."
        items={SCHEDULE}
      />

      <TopicGrid
        description="The tools and concepts for building autonomous AI agents."
        topics={TOPICS}
      />

      <RegistrationCTA
        mailtoSubject="OpenClaw Course Registration"
        benefits={BENEFITS}
      />
    </>
  );
}
