import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MobileOptimizedProps {
  children: ReactNode;
  className?: string;
  tapScale?: number;
  hoverScale?: number;
}

export const MobileOptimized = ({ 
  children, 
  className = "", 
  tapScale = 0.95, 
  hoverScale = 1.02 
}: MobileOptimizedProps) => {
  return (
    <motion.div
      className={`touch-manipulation ${className}`}
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: tapScale }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
};

interface MobileScrollProps {
  children: ReactNode;
  className?: string;
}

export const MobileScroll = ({ children, className = "" }: MobileScrollProps) => {
  return (
    <div className={`overflow-x-auto overscroll-x-contain scrollbar-hide ${className}`}>
      {children}
    </div>
  );
};

interface MobileSectionProps {
  children: ReactNode;
  className?: string;
  paddingX?: string;
  paddingY?: string;
}

export const MobileSection = ({ 
  children, 
  className = "",
  paddingX = "px-4 sm:px-6 lg:px-8",
  paddingY = "py-6 sm:py-8 lg:py-12"
}: MobileSectionProps) => {
  return (
    <section className={`${paddingX} ${paddingY} ${className}`}>
      {children}
    </section>
  );
};

// Mobile-optimized grid component
interface MobileGridProps {
  children: ReactNode;
  className?: string;
  cols?: string;
  gap?: string;
}

export const MobileGrid = ({ 
  children, 
  className = "",
  cols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  gap = "gap-4 sm:gap-6 lg:gap-8"
}: MobileGridProps) => {
  return (
    <div className={`grid ${cols} ${gap} ${className}`}>
      {children}
    </div>
  );
};

// Mobile-optimized text component
interface MobileTextProps {
  children: ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "caption";
  className?: string;
}

export const MobileText = ({ children, variant = "body", className = "" }: MobileTextProps) => {
  const variants = {
    h1: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold",
    h2: "text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold",
    h3: "text-lg sm:text-xl lg:text-2xl font-semibold",
    h4: "text-base sm:text-lg lg:text-xl font-medium",
    body: "text-sm sm:text-base",
    caption: "text-xs sm:text-sm text-muted-foreground"
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default MobileOptimized;
