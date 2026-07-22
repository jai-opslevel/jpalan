import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { animationConfig, uiConfig } from "@/config";

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);

  const springConfig = { damping: animationConfig.spring.cursorDamping, stiffness: animationConfig.spring.cursorStiffness };
  const glowSpringConfig = { damping: animationConfig.spring.glowDamping, stiffness: animationConfig.spring.glowStiffness };

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const glowXSpring = useSpring(glowX, glowSpringConfig);
  const glowYSpring = useSpring(glowY, glowSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      glowX.set(e.clientX);
      glowY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("magnetic") ||
        target.closest(".magnetic")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [cursorX, cursorY, glowX, glowY]);

  // Hide on touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2 bg-foreground rounded-full"
          animate={{
            width: isHovering ? uiConfig.cursor.hoverSize : isClicking ? uiConfig.cursor.clickSize : uiConfig.cursor.defaultSize,
            height: isHovering ? uiConfig.cursor.hoverSize : isClicking ? uiConfig.cursor.clickSize : uiConfig.cursor.defaultSize,
            opacity: isHovering ? uiConfig.cursor.hoverOpacity : uiConfig.cursor.defaultOpacity,
          }}
          transition={{
            type: "spring",
            damping: animationConfig.spring.transitionDamping,
            stiffness: animationConfig.spring.transitionStiffness,
          }}
        />
      </motion.div>

      {/* Glow trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99]"
        style={{
          x: glowXSpring,
          y: glowYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(210 100% 60% / 0.15) 0%, transparent 70%)",
          }}
          animate={{
            width: isHovering ? uiConfig.cursor.glowHoverSize : uiConfig.cursor.glowDefaultSize,
            height: isHovering ? uiConfig.cursor.glowHoverSize : uiConfig.cursor.glowDefaultSize,
            opacity: isHovering ? uiConfig.cursor.glowHoverOpacity : uiConfig.cursor.glowDefaultOpacity,
          }}
          transition={{
            type: "spring",
            damping: animationConfig.spring.glowEffectDamping,
            stiffness: animationConfig.spring.glowEffectStiffness,
          }}
        />
      </motion.div>
    </>
  );
};
