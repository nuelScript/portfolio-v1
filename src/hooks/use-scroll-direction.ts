const SCROLL_UP = "up";
const SCROLL_DOWN = "down";

import { useState, useEffect } from "react";

interface ScrollDirectionOptions {
  initialDirection?: string;
  thresholdPixels?: number;
  off?: boolean;
}

const useScrollDirection = ({
  initialDirection,
  thresholdPixels,
  off,
}: ScrollDirectionOptions = {}) => {
  const [scrollDir, setScrollDir] = useState(initialDirection);

  useEffect(() => {
    const threshold = thresholdPixels || 0;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    if (!off) {
      window.addEventListener("scroll", onScroll);
    } else {
      setScrollDir(initialDirection);
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [initialDirection, thresholdPixels, off]);

  return scrollDir;
};

export default useScrollDirection;
