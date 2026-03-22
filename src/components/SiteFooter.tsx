export function SiteFooter() {
  return (
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
          <a
            href="mailto:hello@vibecodinglondon.com"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
