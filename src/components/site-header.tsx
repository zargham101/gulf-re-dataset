"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "cn";

const links = [
  { href: "/", label: "Directory" },
  { href: "/websites", label: "All websites" },
  { href: "/monitor", label: "Monitor" },
  { href: "/gaps", label: "What's missing" },
  { href: "/forums", label: "Where people talk" },
  { href: "/system", label: "How the rules work" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
            غ
          </span>
          <span>
            <span className="block font-heading text-lg leading-none text-foreground">
              Gulf Property Desk
            </span>
            <span className="text-xs text-muted-foreground">
              Budget boards to luxury desks
            </span>
          </span>
        </Link>
        <nav className="flex flex-wrap gap-1" aria-label="Sections">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm transition-colors",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
