import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Стили кнопок/CTA. Экспортируем отдельно, чтобы вешать на <Link> тоже.
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 font-medium uppercase tracking-[0.14em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Латунная заливка — основной CTA.
        primary: "bg-accent text-ink hover:bg-[var(--color-accent-hover)]",
        // Кремовая рамка с инверсией на ховере.
        outline:
          "border border-primary/30 text-primary hover:bg-primary hover:text-bg",
        // Тонкая рамка — «тихая роскошь» на тёмном фоне.
        light:
          "border border-primary/25 text-primary hover:border-accent hover:text-accent",
        ghost: "text-primary hover:text-accent",
      },
      size: {
        sm: "h-9 px-5 text-[0.7rem]",
        md: "h-12 px-8 text-xs",
        lg: "h-14 px-10 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
