import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";
import { SkillCard } from "../components";

const Skills = () => {
  return (
    <section
      id="skills"
      className=" flex items-center justify-center flex-col gap-12 my-12"
    >
      {/* title */}

      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />

          <p
            className="text-transparent bg-clip-text bg-gradient-to-r
             from-primary to-secondary capitalize text-xl font-serif
          tracking-widest"
          >
            Skills
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* main content */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
       

        {/* content section */}

        <div
          className="w-full px-8 flex flex-col gap-4 items-start
          justify-start"
        >
          <p
            className="text-transparent bg-clip-text bg-gradient-to-r
             from-primary to-secondary capitalize text-xl font-serif
          tracking-widest"
          >
            My Skills and Experience
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Intern at KGiSL Micro college
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Intern at Avi Game Studio
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Intern at Innobytes services
          </p>
        </div>

         {/*image section */}

         <div className="w-full flex flex-col gap-4 items-center justify-center px-8">
          <SkillCard skill={"HTML 5"} percentage={"95%"} color={"#FF3F3F"} move={true} />
          <SkillCard skill={"CSS 3"} percentage={"75%"} color={"#008FFF"}  />

          <SkillCard skill={"JavaScript"} percentage={"65%"} color={"#FFB900"} move={true} />
          <SkillCard skill={"Node js"} percentage={"80%"} color={"#14DB00"}  />

          <SkillCard skill={"React & Express JS"} percentage={"90%"} color={"#00FFF3"} move={true} />
          <SkillCard skill={"MongoDB"} percentage={"75%"} color={"#008FFF"}  />

        </div>
      </div>
    </section>
  );
};

export default Skills;
