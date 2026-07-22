import { motion } from "framer-motion";
import { ReactNode } from "react";
import { animationConfig, uiConfig } from "@/config";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export const GlassCard = ({
  children,
  className = "",
  delay = 0,
  hover = true,
}: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: uiConfig.viewport.margin }}
      transition={{
        duration: animationConfig.defaultDuration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={
        hover
          ? {
              y: -4,
              transition: { duration: animationConfig.shortDuration },
            }
          : undefined
      }
      className={`glass-card p-6 md:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};
