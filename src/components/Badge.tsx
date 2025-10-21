import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium",
        "bg-primary/10 text-primary border border-primary/20",
        "transition-all duration-300 hover:bg-primary/20",
        className
      )}
    >
      {children}
    </span>
  );
};
