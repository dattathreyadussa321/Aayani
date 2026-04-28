import { cn } from "@/lib/cn";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("eyebrow", className)}>{children}</span>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  size = "lg",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  size?: "md" | "lg" | "xl";
  className?: string;
}) {
  const sizeClass =
    size === "xl"
      ? "text-display-xl"
      : size === "lg"
        ? "text-display-lg"
        : "text-display-md";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <SectionLabel className="mb-5">{eyebrow}</SectionLabel>}
      <h2 className={cn("font-serif text-charcoal", sizeClass)}>{title}</h2>
      {description && (
        <p className="mt-5 text-warm-grey leading-relaxed text-base sm:text-lg max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
