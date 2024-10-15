"use client";

import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

export const VisapointTravel = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Engineer
        <span className="text-textGreen tracking-wide">@Visapoint.travel</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Mar 2023 - Sep 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Wrote modern, readable, and maintainable code for various internal
          projects.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Worked with a variety of languages, platforms, framworks and content
          management systems such as JavaScript, TypeScript, React, MongoDB and
          NodeJS.
        </li>
      </ul>
    </motion.div>
  );
};
