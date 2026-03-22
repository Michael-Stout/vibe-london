import Link from "next/link";
import Image from "next/image";
import { SiteNav } from "@/components/SiteNav";

export default function Home() {
  return (
    <>
      <SiteNav />

      <header className="
        relative flex flex-col items-center justify-center
        px-6 pt-40 pb-16 text-center overflow-hidden
      ">
        <Image
          src="/london-hero.jpg"
          alt="Houses of Parliament and Big Ben at sunset"
          fill
          priority
          className="object-cover object-[center_60%]"
        />
        <div className="
          absolute inset-0
          bg-gradient-to-b from-background/40 via-background/60 to-background
        " />
        <div className="relative z-10">
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
        </div>
      </header>

      <section className="flex-1 py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-center sm:text-3xl">
            Our Courses
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <Link
              href="/vibe-coding"
              className="
                group rounded-2xl border border-white/10 bg-surface p-8
                hover:border-primary/40 transition-all hover:scale-[1.02]
              "
            >
              <div className="
                mb-4 inline-block rounded-full
                bg-purple-400/20 px-4 py-1.5
                text-sm font-semibold text-purple-400
              ">
                One-Day Hackathon
              </div>
              <h3 className="text-2xl font-bold sm:text-3xl">
                Learn <span className="text-purple-400">Vibe Coding</span>
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
    </>
  );
}
