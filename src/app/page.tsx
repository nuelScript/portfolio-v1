"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/navbar";
import PreLoader from "./animations/preloader/PreLoader";
import { motion, AnimatePresence } from "framer-motion";
import { LeftSide } from "@/components/layout/left-side";
import { RightSide } from "@/components/layout/right-side";
import Banner from "@/components/banner";
import About from "@/components/about";
import Experience from "@/components/experience";
import { Projects } from "@/components/projects";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = "#020c1b";
  }, []);

  const mainContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="bg-navy min-h-screen relative">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <PreLoader key="preloader" setIsLoading={setIsLoading} />
        ) : (
          <>
            <motion.div
              variants={childVariants}
              className="z-[99] fixed top-0 inset-x-0"
            >
              <Navbar />
            </motion.div>
            <motion.main
              key="main-content"
              initial="hidden"
              animate="visible"
              variants={mainContentVariants}
              className="w-full min-h-screen text-textLight overflow-x-hidden"
            >
              <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
                <motion.div
                  variants={childVariants}
                  className="hidden xl:inline-flex w-32 h-full fixed left-0 top-0 bottom-0 z-50"
                >
                  <LeftSide />
                </motion.div>
                <div
                  className="flex-grow overflow-y-auto mx-auto"
                  style={{ paddingTop: "64px" }}
                >
                  <motion.div
                    variants={childVariants}
                    className="w-full max-w-7xl mx-auto p-4 h-[88vh]"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0 }}
                    >
                      <Banner />
                    </motion.div>
                    {/* <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <About />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <Experience />
                    </motion.div> */}
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <Projects />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <About />
                    </motion.div>
                  </motion.div>
                </div>
                <motion.div
                  variants={childVariants}
                  className="hidden xl:inline-flex w-32 fixed right-0 top-0 bottom-0 z-50"
                >
                  <RightSide />
                </motion.div>
              </div>
            </motion.main>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
