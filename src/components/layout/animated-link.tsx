import Link from "next/link";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
}

export const AnimatedLink = ({ href, children }: AnimatedLinkProps) => {
  return (
    <Link href={href} className="group relative inline-block">
      <span className="relative z-10 text-textLight transition-colors duration-300 group-hover:text-textGreen">
        {children}
      </span>
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-textGreen transition-all duration-300 ease-out group-hover:w-full"></span>
    </Link>
  );
};
