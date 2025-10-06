import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface WardWorkLogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function WardWorkLogo({ 
  className, 
  showText = true, 
  size = "md" 
}: WardWorkLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10", 
    lg: "w-12 h-12"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <Link 
      href="/" 
      className={cn(
        "flex items-center gap-3 hover:opacity-80 transition-opacity",
        className
      )}
    >
      <Image 
        src="/dark_logo.svg" 
        alt="WardWork Logo" 
        width={size === "sm" ? 32 : size === "md" ? 40 : 48}
        height={size === "sm" ? 32 : size === "md" ? 40 : 48}
        className={sizeClasses[size]}
      />
      {showText && (
        <span className={cn(
          "font-semibold text-gray-900 dark:text-white",
          textSizeClasses[size]
        )}>
          WardWork
        </span>
      )}
    </Link>
  );
}
