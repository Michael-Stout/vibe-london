import Link from "next/link";

export default function Home() {
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
          <a
            href="mailto:hello@vibecodinglondon.com"
            className="
              rounded-full bg-primary px-5 py-2 text-sm font-medium text-white
              hover:bg-primary-light transition-colors
            "
          >
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header
        className="
          relative flex flex-col items-center justify-center
          px-6 pt-40 pb-16 text-center
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
          <span className="text-primary-light">Vibe</span> Coding London
        </h1>
        <p className="
          mx-auto mt-6 max-w-2xl text-lg text-muted
          sm:text-xl
        ">
          Hands-on courses to master AI-powered development. Learn by building.
        </p>
      </header>

      {/* Course Tiles */}
      <section className="flex-1 py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-center sm:text-3xl">
            Our Courses
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {/* Vibe Coding Tile */}
            <Link
              href="/vibe-coding"
              className="
                group rounded-2xl border border-white/10 bg-surface p-8
                hover:border-primary/40 transition-all hover:scale-[1.02]
              "
            >
              <div className="
                mb-4 inline-block rounded-full
                bg-purple-700/20 px-4 py-1.5
                text-sm font-semibold text-purple-400
              ">
                One-Day Hackathon
              </div>
              <h3 className="text-2xl font-bold sm:text-3xl">
                Learn <span className="text-purple-700">Vibe Coding</span>
                <br />
                &amp; Build a{" "}
                <span className="text-accent-light">Full Stack App</span>
              </h3>
              <p className="mt-4 text-muted leading-relaxed">
                From your idea to a deployed application in one day using
                AI tools and techniques. Build with Next.js, TypeScript,
                Tailwind, and PostgreSQL.
              </p>
              <div className="
                mt-6 inline-flex items-center gap-2 text-sm font-semibold
                text-primary-light group-hover:gap-3 transition-all
              ">
                Learn more
                <span aria-hidden="true">&rarr;</span>
              </div>
            </Link>

            {/* OpenClaw Tile */}
            <Link
              href="/openclaw"
              className="
                group rounded-2xl border border-white/10 bg-surface p-8
                hover:border-primary/40 transition-all hover:scale-[1.02]
              "
            >
              <div className="
                mb-4 inline-block rounded-full
                bg-orange-500/20 px-4 py-1.5
                text-sm font-semibold text-orange-400
              ">
                One-Day Course
              </div>
              <h3 className="text-2xl font-bold sm:text-3xl">
                Master <span className="text-orange-500">OpenClaw</span>
                <br />
                Build Your Own{" "}
                <span className="text-accent-light">AI Agent</span>
              </h3>
              <p className="mt-4 text-muted leading-relaxed">
                Build and deploy your own autonomous AI agent using OpenClaw.
                Persistent memory, integrations, security, and real-world
                deployment.
              </p>
              <div className="
                mt-6 inline-flex items-center gap-2 text-sm font-semibold
                text-primary-light group-hover:gap-3 transition-all
              ">
                Learn more
                <span aria-hidden="true">&rarr;</span>
              </div>
            </Link>
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
