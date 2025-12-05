import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "outline" | "gradient";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-8 py-4 text-sm",
  lg: "px-10 py-5 text-sm",
} as const;

const variantStyles = {
  outline:
    "border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 rounded",
  gradient:
    "bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-bold rounded-lg hover:opacity-90 shadow-[0_0_30px_rgba(0,245,255,0.3)]",
} as const;

export default function Button({
  href,
  children,
  variant = "outline",
  size = "md",
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-3 tracking-widest uppercase transition-all duration-300 ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
