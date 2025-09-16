import { skills } from "@/app/data/skills";
import Image from "next/image";
import SkillsSection from "./SkillsSection";
import SocialButtons from "./SocialButtons";
import Title from "./Title";

const HomPart = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full px-2 sm:px-4">
        <div className="flex flex-col items-center w-full md:w-auto">
          <Title />
          <SocialButtons />
          <h3 className="text-md sm:text-lg md:text-2xl font-bold font-roboto text-white text-center">
            From Toulouse
          </h3>
        </div>
        <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-zinc-700 shadow-2xl mt-6 md:mt-0">
          <Image
            src={"/images/profil.png"}
            fill
            alt="Photo de profil Antoine Delbos"
            className="rounded-full object-cover object-top border-4 border-zinc-700"
          />
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap max-w-[95vw] md:max-w-[80vw] mx-auto mt-4 gap-2 md:gap-4">
        {skills.map((skillGroup) => (
          <div
            key={skillGroup.items.map((i) => i.name).join(",")}
            className="flex flex-wrap justify-center"
          >
            <SkillsSection />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomPart;
