"use client";

import { motion } from "framer-motion";
import { AnimatedLink } from "./layout/animated-link";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full max-w-7xl mx-auto py-10 md:py-24 flex flex-col px-4 gap-4 lg:gap-8 md:px-10 xl:px-8 bg-darkNavy rounded-lg shadow-lg"
    >
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-semibold flex flex-col"
      >
        Ibiang Emmanuel{" "}
      </motion.h1>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-xl text-textDark font-medium max-w-7xl gap-1 flex justify-between flex-col items-center sm:flex-row sm:items-center"
      >
        <span className="tracking-tight sm:w-1/3">
          Full-Stack Engineer and Web Designer, currently at{" "}
          <AnimatedLink href="https://ivory.finance">Ivory</AnimatedLink>
        </span>
        <span className="tracking-tight sm:text-right sm:w-1/3">
          Focused on interfaces and experiences, working remotely from Lagos,
          Nigeria
        </span>
      </motion.div>
    </section>
  );
};

export default Banner;
