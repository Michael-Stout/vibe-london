interface ScheduleItem {
  time: string;
  title: string;
  desc: string;
}

interface Props {
  heading?: string;
  description?: string;
  items: ScheduleItem[];
}

export function ScheduleList({
  heading = "One-Day Schedule",
  description = "An intensive course designed to take you from zero to deployed in a single day.",
  items,
}: Props) {
  return (
    <section id="schedule" className="py-24 px-6 bg-surface">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          {description}
        </p>
        <div className="mt-16 max-w-2xl">
          <ul className="space-y-6">
            {items.map((item) => (
              <li key={`${item.time}-${item.title}`} className="flex gap-4">
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
  );
}
