import { skills } from "@/app/data/skills";
import Image from "next/image";
import SkillsSection from "./SkillsSection";
import SocialButtons from "./SocialButtons";
import Title from "./Title";

const HomPart = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-8">
        <div>
          <Title />
          <SocialButtons />
        </div>
        <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-zinc-700 shadow-2xl">
          <Image
            src={"/images/profil.png"}
            fill
            alt="Photo de profil Antoine Delbos"
            className="rounded-full object-cover object-top border-4 border-zinc-700"
          />
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap max-w-[80vw] mx-auto mt-4">
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
