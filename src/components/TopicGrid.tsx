interface Props {
  heading?: string;
  description?: string;
  topics: string[];
}

export function TopicGrid({
  heading = "What You'll Use",
  description = "The tools and technologies you'll work with.",
  topics,
}: Props) {
  return (
    <section id="topics" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          {description}
        </p>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic) => (
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
  );
}
