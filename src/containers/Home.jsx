import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero } from "../assets";
import { HeroTypeWritter, HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";

const Home = () => {
  return (
    <section
      id="home"
      className=" flex items-center justify-center flex-col gap-12 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* content section */}

        <div
          className=" w-full h-full flex flex-col items-center
          lg:items-start justify-center gap-4"
        >
          <h2 className="text-3xl lg:text-4xl text-texlight">
            Hello, It's me
            <span
              className="block tracking-wider text-3xl lg:text-5xl mt-4
              text-white"
            >
              {""}
              Peradheep Yuvaraj
            </span>
          </h2>

          {/* typewritter */}

          <h2 className="text-1xl lg:text-3xl text-texlight mt-4">
            And I'm{" "}
            <HeroTypeWritter
              speed={100}
              words={[
                "a Full Stack Developer..",
                "an Web Designer..",
                "a Freelancer..",
              ]}
            />
          </h2>

          <p className="text-base text-texlight mt-6 text-center lg:text-left">
            Aspiring to apply comprehensive knowledge of web development,
            including HTML, CSS, JavaScript, and backend frameworks, to create
            dynamic and efficient web applications.
          </p>

          {/* social media links */}

          <div className="flex items-center justify-center gap-16 mt-16">
            <AnimatePresence>
              {Socials &&
                Socials.map((item, index) => (
                  <HomeSocialLinks key={index} data={item} index={index} />
                ))}
            </AnimatePresence>
          </div>

          {/* hire me */}
          <a
            href="https://drive.google.com/file/d/1i7piFWQSdVADb9wo5xrJMoKETJa63eRE/view?usp=sharing"
            style={{ boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.3)" }}
            className="mt-12 border border-[rgba(255,255,255,0.3)]
            rounded-xl px-8 py-3 active:95 group hover:border-primary"
          >
            <p
              className="text-texlight group-hover:text-transparent
            group-hover:bg-clip-text group-hover:bg-gradient-to-r
          group-hover:from-primary group-hover:to-secondary"
            >
              Hire Me
            </p>
          </a>
        </div>

        {/* hero image */}

        <div
          className="w-full h-full flex items-start justify-center
          lg:item-center"
        >
          <motion.img
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
            src={Hero} // placeholder for image
            className="w-auto h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
