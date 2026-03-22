import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { CourseHero } from "@/components/CourseHero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ScheduleList } from "@/components/ScheduleList";
import { TopicGrid } from "@/components/TopicGrid";
import { RegistrationCTA } from "@/components/RegistrationCTA";

export const metadata: Metadata = {
  title: "Learn Vibe Coding & Build a Full Stack App",
  description:
    "A one-day hackathon in London. Learn vibe coding and go from your idea to a deployed full stack application using AI tools.",
};

const NAV_ANCHORS = [
  { href: "#about", label: "About" },
  { href: "#schedule", label: "Schedule" },
  { href: "#topics", label: "Topics" },
  { href: "#register", label: "Register" },
];

const FEATURES = [
  {
    title: "AI-Powered Development",
    description:
      "Leverage Claude, Cursor, and other AI tools to write code 10x faster without sacrificing quality.",
  },
  {
    title: "Full Stack Skills",
    description:
      "Build with Next.js, TypeScript, Tailwind CSS, and PostgreSQL — the modern production stack.",
  },
  {
    title: "Ship a Real App",
    description:
      "Walk away with a deployed, working application you built yourself in a single day.",
  },
  {
    title: "Hack, Don't Lecture",
    description:
      "No slides, no talks. You'll be building from hour one with mentors on hand when you need them.",
  },
  {
    title: "Small Teams",
    description:
      "Limited to 10 participants so everyone gets hands-on support and meaningful collaboration.",
  },
  {
    title: "London Based",
    description:
      "Join us in-person in central London. Network with fellow developers and build connections.",
  },
];

const SCHEDULE = [
  { time: "09:00", title: "Kickoff & Tooling", desc: "Set up your dev environment, AI tools, and project scaffold. Pick your project idea." },
  { time: "09:45", title: "Vibe Coding Fundamentals", desc: "Learn prompting strategies, iteration loops, and when to trust (or override) AI output." },
  { time: "10:30", title: "Frontend Sprint", desc: "Build your app's UI with Next.js, React, and Tailwind CSS using AI-assisted workflows." },
  { time: "12:00", title: "Lunch", desc: "Refuel and connect with fellow participants." },
  { time: "13:00", title: "Database, API & Auth", desc: "Design your schema, set up PostgreSQL, build API routes, and add authentication." },
  { time: "14:30", title: "Feature Sprint", desc: "Build out your killer feature — real-time updates, file uploads, or whatever your app needs." },
  { time: "16:00", title: "Polish & Testing", desc: "Add error handling, write tests, and make your app production-ready." },
  { time: "17:00", title: "Deploy & Demo", desc: "Deploy to Vercel, then demo your app to the group. Prizes for the best hacks." },
];

const TOPICS = [
  "Next.js & React", "TypeScript", "Tailwind CSS", "PostgreSQL",
  "Drizzle ORM", "NextAuth.js", "AI Prompting", "Claude & Cursor",
  "Vercel Deploy", "API Design", "Git Workflow", "Testing",
];

const BENEFITS = [
  "Bring your own laptop, leave with a development environment",
  "Full day of hands-on learning",
  "All materials and resources included",
  "Lunch and refreshments provided",
  "Prizes for the best projects",
  "Access to Vibe Coding London Events",
  "Post-course support",
  "Free AI Certs Self-Paced Course of your choice (a £195 value)",
];

export default function VibeCoding() {
  return (
    <>
      <SiteNav anchors={NAV_ANCHORS} ctaHref="#register" ctaLabel="Join Now" />

      <CourseHero
        title={
          <>
            Learn <span className="text-purple-400">Vibe Coding</span>
            <br />
            &amp; Build a{" "}
            <span className="text-accent-light">Full Stack App</span>
            <br />
            from <span className="text-red-500">Zero</span> to{" "}
            <span className="text-green-500">Hero</span>
          </>
        }
        subtitle="From Your Idea to a Deployed Application in One Day"
      />

      <FeatureGrid
        heading="What is Vibe Coding?"
        description="Vibe coding is a new paradigm where you collaborate with AI to build software at unprecedented speed. Instead of writing every line by hand, you describe what you want and guide AI tools to generate, iterate, and refine your code — while keeping full control of architecture and quality."
        features={FEATURES}
      />

      <ScheduleList
        description="An intensive hackathon designed to take you from zero to deployed in a single day."
        items={SCHEDULE}
      />

      <TopicGrid
        description="The complete modern stack for building and shipping web applications with AI assistance."
        topics={TOPICS}
      />

      <RegistrationCTA
        mailtoSubject="Hackathon Registration"
        benefits={BENEFITS}
      />
    </>
  );
}
