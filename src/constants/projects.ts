import {
  abiye,
  adminDashborad,
  casecobra,
  databrain,
  evig,
} from "../../public/assets";

export const projects = [
  {
    id: 1,
    imgSrc: databrain,
    href: "https://data-brain-ai.vercel.app/",
    title: "Databrain AI",
    description:
      "DataBrain AI leverages the power of artificial intelligence to provide various creative and practical features, including conversation, image generation, video generation, code generation, and music generation",
    technologies: ["NextJS", "React", "Typescript", "OpenAI"],
    githubSrc: "https://github.com/nuelScript/dataBrain-ai",
    liveDemo: "https://data-brain-ai.vercel.app/",
  },
  {
    id: 2,
    imgSrc: adminDashborad,
    href: "https://ecommerce-admin-nuelscript.vercel.app/",
    title: "Ecommerce Admin",
    description:
      "Admin CMS and frontend store that allows users to create and manage products, categories, and carts with real-time updates.",
    technologies: ["NextJS", "Typescript", "Tailwind CSS"],
    githubSrc: "https://github.com/nuelScript/ecommerce-admin",
    liveDemo: "https://ecommerce-admin-nuelscript.vercel.app/",
  },
  {
    id: 3,
    imgSrc: casecobra,
    href: "https://cobra-prod.vercel.app/",
    title: "CaseCobra",
    description:
      "Capture your favorite memories with your own, one-of-one phone case. Casecobra allows you to protect your memories, not just your phone case.",
    technologies: ["NextJS", "Typescript", "Tailwind CSS", "Framer Motion"],
    githubSrc: "https://github.com/nuelScript/cobra-prod",
    liveDemo: "https://cobra-prod.vercel.app/",
  },
  {
    id: 4,
    imgSrc: abiye,
    href: "https://abiye-portfolio.vercel.app/",
    title: "Abiye",
    description:
      "Portfolio website for Abiye Lawson, a seasoned SEO content writer for FinTech blogs, building topical authority in the fintech space.",
    technologies: ["NextJS", "Typescript", "Tailwind CSS"],
    githubSrc: "https://github.com/nuelScript/abiye-portfolio",
    liveDemo: "https://abiye-portfolio.vercel.app/",
  },
  {
    id: 5,
    imgSrc: evig,
    href: "https://evigschools.com/",
    title: "EVIG International",
    description:
      "Official website for EVIG International Schools, a school that provides quality education to students in Nigeria.",
    technologies: ["NextJS", "Typescript", "Tailwind CSS", "Framer Motion"],
    githubSrc: "https://github.com/nuelScript/evig",
    liveDemo: "https://evigschools.com/",
  },
];
