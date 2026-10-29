import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ReactLenis
        root
        options={{
        lerp: 0.08,
        wheelMultiplier: 0.9,
        anchors: true,
        allowNestedScroll: true,
      }}
            >
        {children}
      </ReactLenis>
    </MotionConfig>
  );
}