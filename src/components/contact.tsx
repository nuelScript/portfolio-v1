import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full max-w-7xl mx-auto py-10 lg:py-32 flex flex-col gap-6 lg:gap-8 space-y-6 lg:space-y-16 items-center"
    >
      <div className="relative w-full">
        <motion.h3
          className="font-black text-4xl sm:text-5xl lg:text-6xl xl:text-[135px] uppercase text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Let&apos;s talk
        </motion.h3>
        <motion.p
          className="absolute text-5xl sm:text-6xl lg:text-7xl xl:text-[135px] inset-x-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 1, rotate: 0 }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 15, -15, 0] }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          🫱🏾‍🫲🏾
        </motion.p>
      </div>
      <motion.p
        className="text-lg sm:text-2xl lg:text-4xl xl:text-5xl text-center text-textDark font-bold flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
      >
        <motion.span
          className="mr-4 text-3xl hidden xl:block"
          initial={{ x: -10, rotate: -10 }}
          animate={{
            x: [0, -5, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 0,
          }}
        >
          ←
        </motion.span>
        Have any questions or suggestions? Reach out
        <motion.span
          className="ml-4 text-3xl hidden xl:block"
          initial={{ x: 10, rotate: 10 }}
          animate={{
            x: [0, 5, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 0,
          }}
        >
          →
        </motion.span>
      </motion.p>
    </section>
  );
};
