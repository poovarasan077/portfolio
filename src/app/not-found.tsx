import { ArrowLeft } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-6xl flex-col items-start justify-center px-5 py-24 sm:px-8 lg:px-12">
      <p className="eyebrow mb-4 text-accent-strong">404</p>
      <h1 className="text-[clamp(2rem,5vw,3rem)]">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">
        That page doesn&rsquo;t exist. It may have been moved, or the link may be
        incorrect.
      </p>
      <ButtonLink href="/" variant="outline" className="mt-8">
        <ArrowLeft aria-hidden="true" className="size-4" />
        Back to home
      </ButtonLink>
    </div>
  );
}
