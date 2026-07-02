"use client";

import { useEffect, useState } from "react";

/**
 * Animates a numeric value from 0 up to `target` using an ease-out cubic
 * curve, mirroring the original vanilla-JS countUp() behaviour.
 */
export function useCountUp(target: number, durationMs = 1100): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame: number;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, durationMs]);

  return value;
}