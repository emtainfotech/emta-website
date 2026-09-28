import type { HTMLAttributes } from "react";

export function Card({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={`rounded-3xl border border-white/80 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,.07)] backdrop-blur-xl ${className}`}
    />
  );
}

export function CardHeader({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={`p-6 pb-3 ${className}`} />;
}

export function CardContent({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={`p-6 pt-3 ${className}`} />;
}

export function CardFooter({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={`p-6 pt-0 ${className}`} />;
}
