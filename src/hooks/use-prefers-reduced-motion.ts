import { useState, useEffect } from "react";
const QUERY = "(prefers-reduced-motion: no-preference)";
const isRenderingOnServer = typeof window === "undefined";

const getInitialState = () =>
  isRenderingOnServer ? true : !window.matchMedia(QUERY).matches;

export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState(getInitialState);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);
    const listener = (event: { matches: boolean }) => {
      setPrefersReducedMotion(!event.matches);
    };
    mediaQueryList.addEventListener("change", listener);
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, []);
  return prefersReducedMotion;
};
