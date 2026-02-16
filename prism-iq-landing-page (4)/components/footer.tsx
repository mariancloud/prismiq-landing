export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
              <svg
                width="14"
                height="14"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 3L9 1L15 3L17 9L15 15L9 17L3 15L1 9L3 3Z"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M9 5L13 9L9 13L5 9L9 5Z"
                  fill="white"
                  opacity="0.7"
                />
              </svg>
            </div>
            <span className="text-sm font-bold font-display text-foreground">
              PrismIQ
            </span>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Security
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            {"© 2026 PrismIQ. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
