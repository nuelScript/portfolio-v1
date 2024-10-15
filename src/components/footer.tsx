import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex justify-between pt-4 border-t border-textlight">
      <p className="uppercase font-bold text-xs sm:text-lg">Copyright 2024</p>
      <p className="uppercase font-bold text-xs sm:text-lg text-right">
        Development by{" "}
        <Link
          href="https://github.com/nuelScript"
          className="underline hover:text-textGreen duration-300 transition-all"
        >
          Ibiang Emmanuel
        </Link>
      </p>
    </div>
  );
};
