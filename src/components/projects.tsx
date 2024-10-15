import { projects } from "@/constants/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";

export const Projects = () => {
  return (
    <section id="work" className="w-full max-w-7xl mx-auto py-8 md:py-20">
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="w-full flex flex-col items-center justify-center gap-10 mt-10"
          >
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
              } gap-6`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full xl:w-1/2 h-auto relative group"
              >
                <Link
                  href={project.href}
                  target="_blank"
                  className="w-full h-full block"
                >
                  <Image
                    src={project.imgSrc}
                    alt={project.title}
                    className="object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-textGreen bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg font-bold">
                      View Project
                    </span>
                  </div>
                </Link>
              </motion.div>
              <div
                className={`w-full xl:w-1/2 flex flex-col gap-6 ${
                  index % 2 === 0
                    ? "items-end text-right"
                    : "items-start text-left"
                } z-10`}
              >
                <motion.h3
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-2xl sm:text-3xl font-black text-textGreen"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-[#112240] text-sm md:text-base p-4 md:p-6 rounded-md leading-relaxed shadow-lg"
                >
                  {project.description}
                </motion.p>
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-xs md:text-sm font-bold tracking-wide flex flex-wrap gap-2 md:gap-4 text-textDark"
                >
                  {project.technologies.map((t) => (
                    <li
                      key={t}
                      className="hover:text-textGreen cursor-pointer duration-300 transition-colors bg-[#233554] px-3 py-1 rounded-full"
                    >
                      {t}
                    </li>
                  ))}
                </motion.ul>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="text-2xl flex gap-4"
                >
                  <Link
                    className="hover:text-textGreen duration-300 transform hover:scale-110"
                    href={project.githubSrc}
                    target="_blank"
                  >
                    <TbBrandGithub className="w-6 h-6" />
                  </Link>
                  <Link
                    className="hover:text-textGreen duration-300 transform hover:scale-110"
                    href={project.liveDemo}
                    target="_blank"
                  >
                    <RxOpenInNewWindow className="w-6 h-6" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
