import Image from "next/image";

interface Props {
  title: React.ReactNode;
  subtitle: string;
}

export function CourseHero({ title, subtitle }: Props) {
  return (
    <header className="
      relative flex flex-col items-center justify-center
      px-6 pt-40 pb-24 text-center overflow-hidden
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
          {title}
        </h1>
        <p className="
          mx-auto mt-6 max-w-2xl text-lg text-muted
          sm:text-xl
        ">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
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
      </div>
    </header>
  );
}
