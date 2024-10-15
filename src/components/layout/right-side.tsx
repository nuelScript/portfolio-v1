import Link from "next/link";

export const RightSide = () => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-end gap-6
    text-textLight"
    >
      <Link href="mailto:ibiang.manuel@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-wide text-textDark hover:text-textGreen hover:-translate-y-2 duration-300 transition-all">
          ibiang.manuel@gmail.com
        </p>
      </Link>
      <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
    </div>
  );
};
