import Navbar from "@/components/layout/navbar";
import PreLoader from "./animations/preloader/PreLoader";

export default function Home() {
  return (
    <>
      <PreLoader />
      <main className="w-full min-h-screen bg-navy text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textGreen/20 scrollbar-thumb-textDark/60">
        <Navbar />
      </main>
    </>
  );
}
