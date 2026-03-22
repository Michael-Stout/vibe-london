interface Feature {
  title: string;
  description: string;
}

interface Props {
  heading: string;
  description: string;
  features: Feature[];
}

export function FeatureGrid({ heading, description, features }: Props) {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-muted">
          {description}
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
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
  );
}
