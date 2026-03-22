import Link from "next/link";

interface Props {
  anchors?: { href: string; label: string }[];
  ctaHref?: string;
  ctaLabel?: string;
}

export function SiteNav({
  anchors,
  ctaHref = "mailto:hello@vibecodinglondon.com",
  ctaLabel = "Contact Us",
}: Props) {
  return (
    <nav className="
      fixed top-0 w-full z-50
      border-b border-white/10 bg-background/80 backdrop-blur-md
    ">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight">
          <span className="text-primary-light">Vibe</span> Coding London
        </Link>
        {anchors && anchors.length > 0 && (
          <div className="hidden gap-8 text-sm text-muted sm:flex">
            {anchors.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="hover:text-foreground transition-colors"
              >
                {a.label}
              </a>
            ))}
          </div>
        )}
        <a
          href={ctaHref}
          className="
            rounded-full bg-primary px-5 py-2 text-sm font-medium text-white
            hover:bg-primary-light transition-colors
          "
        >
          {ctaLabel}
        </a>
      </div>
    </nav>
  );
}
