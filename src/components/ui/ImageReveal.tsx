import { cn } from "@/lib/cn";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  ratio?: string; // e.g. "aspect-[4/5]"
  placeholderClass?: string; // ph-warm | ph-cool | ph-deep
};

export function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  ratio = "aspect-[4/5]",
  placeholderClass = "ph-warm",
}: Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-ivory",
        ratio,
        placeholderClass,
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        className={cn(
          "absolute inset-0 h-full w-full object-cover",
          imgClassName,
        )}
      />
    </div>
  );
}
