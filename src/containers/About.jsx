import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";

const About = () => {
  return (
    <section
      id="about"
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
            About
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* main content */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/*image section */}

        <div className="w-full flex items-center justify-center px-8">
          <div
            className="w-full lg:w-96 p-[2px] rounded-md 
            bg-gradient-to-br from bg-primary to-secondary relative"
          >
            <img
              src={about}
              className="w-full rounded-md h-auto object-contain"
              alt=""
            />
            <div
              className="absolute w-full h-full -top-3 -left-2 
              bg-gradient-to-br from bg-primary to-secondary rounded-md blur
              [5px] -z-10"
            ></div>
          </div>
        </div>

        {/* content section */}

        <div
          className="w-full px-8 flex flex-col gap-4 items-start
          justify-start"
        >
          <p className="text-texlight text-base tracking-wide text-justify">
            I'm an agriculture graduate with a deep passion for the IT field. My
            journey began in the fields, where I cultivated not just crops but
            also a keen interest in technology and its potential to
            revolutionize various industries, including agriculture.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Beyond my academic background, I have a diverse range of hobbies
            that keep me energized and inspired. Football is one of my greatest
            passions; I love the strategy, teamwork, and excitement that come
            with the game. Music is another essential part of my life, and I
            enjoy listening to a wide variety of genres that fuel my creativity
            and help me unwind.
          </p>
          {/* <p className="text-texlight text-base tracking-wide text-justify">
            Photography allows me to capture the beauty of the world around me,
            whether it's a stunning landscape or a candid moment with friends. I
            also enjoy video editing, where I can bring my visual stories to
            life with creativity and precision. Surfing the internet keeps me
            updated with the latest trends and innovations in technology, and
            it's a constant source of learning and inspiration.
          </p> */}
          <p className="text-texlight text-base tracking-wide text-justify">
            Combining my background in agriculture with my enthusiasm for IT, I
            aim to leverage technology to create innovative solutions that can
            address real-world challenges. Whether it's through digital
            transformation in agriculture or exploring new tech frontiers, I'm
            excited to contribute to the future of both fields.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
