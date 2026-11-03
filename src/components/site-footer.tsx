import Link from "next/link";
import { researchedOn } from "@/lib/desk";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:px-6">
        <p>
          Compiled {researchedOn}. This desk maps websites and public complaints.
          It does not list homes, take fees, or check a live ad for you. Laws,
          commissions, and portals change. Confirm a permit, a title, and a price
          with the official body, and see the room before you pay.
        </p>
        <p>
          Company download counts and “we are the leading portal” lines are marked
          as claims when they come from the company itself.
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <Link className="underline-offset-4 hover:underline" href="/gaps">
            The missing card
          </Link>
          <Link className="underline-offset-4 hover:underline" href="/forums">
            Forums and reviews
          </Link>
          <Link className="underline-offset-4 hover:underline" href="/system">
            Local rules in plain words
          </Link>
        </div>
      </div>
    </footer>
  );
}
