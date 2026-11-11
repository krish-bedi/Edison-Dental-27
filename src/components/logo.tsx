import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Renders the Edison Dental 27 logotype from the official /logo.png asset.
 * Size the logo with a height class (e.g. `h-[50px]`) via `className`.
 */
export function Logo({
  className = "h-[50px] w-auto",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo.png"
      alt={`${site.name} logo`}
      width={312}
      height={108}
      priority={priority}
      className={className}
    />
  );
}
