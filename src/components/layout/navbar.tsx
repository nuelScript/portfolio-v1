"use client";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import useScrollDirection from "@/hooks/use-scroll-direction";
import { useEffect, useState } from "react";
import { loaderDelay } from "@/utils/index";

const Navbar = ({ isHome }: { isHome: boolean }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection({ initialDirection: "down" });
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prefersReducedMotion]);

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? "fade" : "";
  const fadeDownClass = isHome ? "fadedown" : "";
  return <div>Hello</div>;
};

export default Navbar;
