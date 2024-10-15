import React, { useState } from "react";
import { SectionTitle } from "./section-title";
import { VisapointTravel } from "./works/visapoint-travel";
import { GPIT } from "./works/gpit-nigeria";

const Experience = () => {
  const [workVisapointTravel, setWorkVisapointTravel] = useState(true);
  const [workGPIT, setWorkGPIT] = useState(false);

  const handleSideHustle = () => {
    setWorkVisapointTravel(true);
    setWorkVisapointTravel(false);
  };

  const handleVisapointTravel = () => {
    setWorkGPIT(false);
    setWorkVisapointTravel(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Experience" titleNo="*" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleSideHustle}
            className={`${
              workVisapointTravel
                ? "border-l-textGreen text-textGreen"
                : "border-l-textDark text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm
            cursor-pointer duration-300 px-8 font-medium`}
          >
            Visapoint.travel
          </li>
          <li
            onClick={handleVisapointTravel}
            className={`${
              workVisapointTravel
                ? "border-l-textGreen text-textGreen"
                : "border-l-textDark text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm
            cursor-pointer duration-300 px-8 font-medium`}
          >
            GoPro Integrated Technology
          </li>
        </ul>
        {workVisapointTravel && <VisapointTravel />}
        {workGPIT && <GPIT />}
      </div>
    </section>
  );
};

export default Experience;
