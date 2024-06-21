import React from "react";
import {
  About,
  Contact,
  Header,
  Home,
  ParticlesContainer,
  Projects,
  ServiceCount,
  Skills,
} from "./";
import { AnimatePresence } from "framer-motion";
import { Socials } from "../utils/helper";
import { HomeSocialLinks } from "../components";

const App = () => {
  return (
    <div className="w-full xl:w-[1100px] py-28 px-4 lg:px-12 pr-4 lg:pr-32 ">
      {/* particles container */}
      <ParticlesContainer/>
      {/* header */}
      <Header />

      {/* home container */}
      <Home />

      {/* service count cards */}
      {/* <ServiceCount /> */}

      {/* about container */}
      <About />

      {/* skills container */}
      <Skills />

      {/* project container */}
      <Projects />

      {/* contact conatiner */}
      <Contact />

      {/* footer conatiner */}
      <div className="w-ful flex flex-col items-center justify-start mt-32 mb-12">
        <p className="text-3xl tracking-wide text-texlight">
          Peradheep Yuvaraj
        </p>
        <div className="flex items-center justify-center gap-16 mt-16">
          <AnimatePresence>
            {Socials &&
              Socials.map((item, index) => (
                <HomeSocialLinks key={index} data={item} index={index} />
              ))}
          </AnimatePresence>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-12">
          <p className="text-texlight text-center">
            5/59 A, Near VMK Nagar, <br />
            Attur main road, <br />
            Ayothiyapattinam, <br />
            Salem - 636103 <br />
            Tamil nadu, India
          </p>
          <p className="text-texlight text-center">
            
          </p>
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <p className="text-texlight text-center">
              peradheep200617@outlook.com
            </p>
            <p className="text-texlight text-center">
              +91 638-525-7430
            </p>
            <a href="#">
              <p className="text-primary text-center">Hire Me</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
