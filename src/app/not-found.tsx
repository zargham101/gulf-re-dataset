import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl py-16">
      <h1 className="text-4xl">That page is not on the desk</h1>
      <p className="mt-3 leading-7 text-muted-foreground">
        The directory is the full list of sites covered here.
      </p>
      <Link href="/" className="mt-6 inline-block text-primary hover:underline">
        Back to the directory
      </Link>
    </div>
  );
}
