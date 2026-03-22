interface Props {
  mailtoSubject?: string;
  benefits: string[];
}

export function RegistrationCTA({
  mailtoSubject = "Registration",
  benefits,
}: Props) {
  return (
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
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 text-accent-light">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={`mailto:hello@vibecodinglondon.com?subject=${encodeURIComponent(mailtoSubject)}`}
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
  );
}
