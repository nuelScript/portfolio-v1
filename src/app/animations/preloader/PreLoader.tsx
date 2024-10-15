"use client";

import { useEffect } from "react";
import { preLoaderAnim } from "./loader";
import "./preloader.css";
import { motion } from "framer-motion";

const PreLoader = ({
  setIsLoading,
}: {
  setIsLoading: (loading: boolean) => void;
}) => {
  useEffect(() => {
    preLoaderAnim().then(() => {
      setIsLoading(false);
    });
  }, [setIsLoading]);

  return (
    <motion.div
      className="preloader gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="texts-container w-500 flex h-60 items-center justify-center gap-[5px] overflow-hidden text-[14px] font-extrabold text-[#ccd6f6] opacity-0 sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
        <span>Designer,</span>
        <span>Developer,</span>
        <span>Builder.</span>
        <div className="sub hidden"></div>
      </div>
    </motion.div>
  );
};

export default PreLoader;
