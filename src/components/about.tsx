import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const technologies = [
    "JavaScript (ES6+)",
    "Next.js",
    "React",
    "TypeScript",
    "Zustand",
    "Sanity",
    "Kinde Auth",
    "NextAuth",
    "HTML5",
    "Git/GitHub",
    "Zod",
    "React Hook Form",
    "React Query",
  ];

  const libraries = [
    "Framer Motion",
    "Tailwind CSS",
    "Chakra UI",
    "Shadcn UI",
    "GSAP",
    "Three.js",
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={mainControls}
      variants={containerVariants}
      id="about"
      className="w-full max-w-7xl mx-auto py-10 lg:py-32 flex flex-col gap-8"
    >
      <div className="flex flex-col gap-16 items-center">
        <motion.div
          variants={itemVariants}
          className="w-full text-base text-textDark font-medium flex flex-col gap-4"
        >
          <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-black uppercase text-textLight">
            I make brands stunning, websites seamless, and content engaging.
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6"
        >
          {/* Main Content Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 space-y-4">
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-2xl text-textDark font-medium"
            >
              I specialize in creating responsive, high-performance websites and
              digital experiences tailored for SaaS, AI, and Web3 startups. I
              thrive on solving complex problems and turning ideas into
              user-friendly products.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-2xl text-textDark font-medium"
            >
              Beyond coding, I actively contribute to the tech community.
              I&apos;ve served as a frontend lead for the Google Developer Group
              (GDG), where I mentored students and collaborated with peers. I
              believe that knowledge shared is knowledge multiplied, which fuels
              my passion for leadership and community involvement.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-2xl text-textDark font-medium"
            >
              Outside of work, I&apos;m a big fan of music—particularly rap and
              anime soundtracks. I love immersing myself in the worlds of the
              anime I&apos;ve watched, with Naruto sitting at the top of my
              favorites list. I also have a growing interest in cars and enjoy
              diving into physics whenever I have the time.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-2xl text-textDark font-medium"
            >
              Right now, I&apos;m working on a few exciting projects that I
              can&apos;t wait to share. I&apos;m always on the lookout for new
              opportunities and collaborations, so feel free to reach
              out—let&apos;s create something amazing together!
            </motion.p>
          </div>

          {/* Tools and Libraries Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 space-y-4">
            <motion.div
              variants={itemVariants}
              className="text-lg sm:text-2xl text-textDark font-medium"
            >
              <h3 className="font-bold text-2xl text-textLight">
                Frontend Tools
              </h3>
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-textDark font-medium"
              >
                {technologies.map((tech, index) => (
                  <span key={tech} className="inline-block mr-1">
                    {tech}
                    {index === technologies.length - 1 ? "." : ","}
                  </span>
                ))}
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-lg sm:text-2xl text-textDark font-medium"
            >
              <h3 className="font-bold text-2xl text-textLight">
                UI Libraries
              </h3>
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-textDark font-medium"
              >
                {libraries.map((lib, index) => (
                  <span key={lib} className="inline-block mr-1">
                    {lib}
                    {index === libraries.length - 1 ? "." : ","}
                  </span>
                ))}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
