import { socials } from "@/constants/socials";
import Link from "next/link";

export const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <div className="flex flex-col gap-4">
        {socials.map((social) => (
          <Link
            key={social.url}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-1 transition-all duration-300">
              <social.icon />
            </span>
          </Link>
        ))}
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};
