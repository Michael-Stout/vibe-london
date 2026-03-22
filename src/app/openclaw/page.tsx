export default function OpenClaw() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="
        fixed top-0 w-full z-50
        border-b border-white/10 bg-background/80 backdrop-blur-md
      ">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight">
            <span className="text-primary-light">Vibe</span> Coding London
          </span>
          <div className="hidden gap-8 text-sm text-muted sm:flex">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#schedule" className="hover:text-foreground transition-colors">Schedule</a>
            <a href="#topics" className="hover:text-foreground transition-colors">Topics</a>
            <a href="#register" className="hover:text-foreground transition-colors">Register</a>
          </div>
          <a
            href="#register"
            className="
              rounded-full bg-primary px-5 py-2 text-sm font-medium text-white
              hover:bg-primary-light transition-colors
            "
          >
            Join Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header
        className="
          relative flex flex-col items-center justify-center
          px-6 pt-40 pb-24 text-center
          bg-cover bg-[center_60%] bg-no-repeat bg-fixed
        "
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(10,10,10,0.4), rgba(10,10,10,0.6), rgba(10,10,10,1)), url('/london-hero.jpg')",
        }}
      >
        <h1 className="
          mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight
          sm:text-5xl md:text-6xl
        ">
          Master <span className="text-orange-500">OpenClaw</span>
          <br />
          Build Your Own{" "}
          <span className="text-accent-light">AI Agent</span>
        </h1>
        <p className="
          mx-auto mt-6 max-w-2xl text-lg text-muted
          sm:text-xl
        ">
          From Setup to a Fully Deployed Personal AI Agent in One Day
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#register"
            className="
              rounded-full bg-primary px-8 py-3 text-base font-semibold text-white
              hover:bg-primary-light transition-colors
            "
          >
            Reserve Your Spot
          </a>
          <a
            href="#schedule"
            className="
              rounded-full border border-white/20 px-8 py-3 text-base font-semibold
              hover:bg-white/5 transition-colors
            "
          >
            View Schedule
          </a>
        </div>
      </header>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What is OpenClaw?
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted">
            OpenClaw (formerly ClawdBot and MoltBot) is an open-source autonomous
            AI agent that can execute real-world tasks on your behalf &mdash;
            browsing the web, managing emails, scheduling calendar entries, and
            much more. It uses LLMs with persistent memory to adapt to your
            habits and carry out hyper-personalised functions via messaging
            platforms like WhatsApp.
          </p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
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
            ].map((item) => (
              <div
                key={item.title}
                className="
                  rounded-2xl border border-white/10 bg-surface p-6
                  hover:border-primary/30 transition-colors
                "
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section
        id="schedule"
        className="py-24 px-6 bg-surface"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            One-Day Schedule
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            An intensive course designed to take you from zero to a deployed AI agent.
          </p>
          <div className="mt-16 max-w-2xl">
            <ul className="space-y-6">
              {[
                {
                  time: "09:00",
                  title: "Kickoff & Environment Setup",
                  desc: "Install OpenClaw, configure your LLM provider, and connect your first messaging platform.",
                },
                {
                  time: "09:45",
                  title: "OpenClaw Architecture",
                  desc: "Understand how OpenClaw works — LLM integration, tool execution, memory systems, and the agent loop.",
                },
                {
                  time: "10:30",
                  title: "Building Your First Agent",
                  desc: "Create a basic agent that can browse the web, summarise content, and respond via WhatsApp.",
                },
                {
                  time: "12:00",
                  title: "Lunch",
                  desc: "Refuel and connect with fellow participants.",
                },
                {
                  time: "13:00",
                  title: "Persistent Memory & Personalisation",
                  desc: "Implement memory so your agent recalls interactions and adapts to user preferences over weeks.",
                },
                {
                  time: "14:30",
                  title: "Advanced Integrations",
                  desc: "Connect your agent to email, calendar, file storage, and other services. Build custom tools.",
                },
                {
                  time: "16:00",
                  title: "Security & Permissions",
                  desc: "Lock down your agent — configure permissions, audit logs, and safe defaults for production use.",
                },
                {
                  time: "17:00",
                  title: "Deploy & Demo",
                  desc: "Deploy your agent to the cloud and demo it to the group. Prizes for the best builds.",
                },
              ].map((item) => (
                <li key={item.time} className="flex gap-4">
                  <span className="
                    mt-0.5 font-mono text-sm text-accent-light
                    shrink-0 w-14
                  ">
                    {item.time}
                  </span>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="mt-1 text-sm text-muted">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Topics / Tech Stack */}
      <section id="topics" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What You&apos;ll Use
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            The tools and concepts for building autonomous AI agents.
          </p>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "OpenClaw",
              "LLM APIs",
              "Persistent Memory",
              "WhatsApp Integration",
              "Web Browsing",
              "Email & Calendar",
              "Custom Tools",
              "Agent Security",
              "Cloud Deployment",
              "Cloudflare Workers",
              "Prompt Engineering",
              "Agentic Patterns",
            ].map((topic) => (
              <div
                key={topic}
                className="
                  rounded-xl border border-white/10 bg-surface
                  px-5 py-4 text-center font-medium
                  hover:border-primary/30 hover:bg-surface-light
                  transition-colors
                "
              >
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section
        id="register"
        className="
          py-24 px-6
          bg-gradient-to-b from-background via-primary/5 to-background
        "
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Vibe?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Space is Limited &mdash; Register to Secure Your Place
          </p>
          <div className="
            mt-10 rounded-2xl border border-white/10 bg-surface p-8
            text-left
          ">
            <div>
              <p className="text-xl text-muted line-through">
                &pound;699 <span className="text-base">per person</span>
              </p>
              <p className="mt-1 text-3xl font-bold">
                &pound;599{" "}
                <span className="
                  ml-2 inline-block rounded-full bg-accent/20 px-3 py-1
                  text-xs font-semibold text-accent-light align-middle
                ">
                  Early Bird
                </span>
              </p>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              {[
                "Bring your own laptop, leave with a deployed AI agent",
                "Full day of hands-on learning",
                "All materials and resources included",
                "Lunch and refreshments provided",
                "Prizes for the best projects",
                "Access to Vibe Coding London Events",
                "Post-course support",
                "Free AI Certs Self-Paced Course of your choice (a £195 value)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent-light">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="mailto:hello@vibecodinglondon.com?subject=OpenClaw%20Course%20Registration"
              className="
                mt-8 block w-full rounded-full bg-primary py-3
                text-center font-semibold text-white
                hover:bg-primary-light transition-colors
              "
            >
              Register Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="
          mx-auto max-w-6xl flex flex-col items-center justify-between
          gap-4 text-sm text-muted sm:flex-row
        ">
          <span>
            &copy; {new Date().getFullYear()} Vibe Coding London. All rights
            reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a
              href="mailto:hello@vibecodinglondon.com"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
