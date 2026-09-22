import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFigma,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiCanva,
  SiNotion,
  SiAdobexd,
  SiAdobepremierepro,
  SiAdobeillustrator,
} from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { RiPagesLine } from "react-icons/ri";
import { GrOptimize } from "react-icons/gr";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 className="text-orange-500 text-8xl" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500 text-8xl" />, name: "CSS" },
    { icon: <FaJs className="text-yellow-400 text-8xl" />, name: "JavaScript" },
    { icon: <FaFigma className="text-pink-500 text-8xl" />, name: "Figma" },
    { icon: <SiAdobephotoshop className="text-blue-600 text-8xl" />, name: "Adobe Photoshop" },
    { icon: <SiAdobeillustrator className="text-orange-600 text-8xl" />, name: "Adobe Illustrator" },
    { icon: <SiAdobepremierepro className="text-purple-600 text-8xl" />, name: "Adobe Premiere Pro" },
    { icon: <SiAdobexd className="text-fuchsia-500 text-8xl" />, name: "Adobe XD" },
    { icon: <SiCanva className="text-cyan-500 text-8xl" />, name: "Canva" },
    { icon: <SiNotion className="text-stone-700 text-8xl" />, name: "Notion" },
  ];

  const services = [
    {
      icon: <CgWebsite className="text-stone-800 text-6xl mb-4" />,
      title: "Motion Graphics",
      description:
        "Creating animated visual content, transitions, and dynamic elements that add energy and personality to digital experiences.",
    },
    {
      icon: <RiPagesLine className="text-stone-800 text-6xl mb-4" />,
      title: "UI/UX Motion",
      description:
        "Designing subtle and meaningful motion that guides users, improves clarity, and makes interfaces feel more engaging and intuitive.",
    },
    {
      icon: <GrOptimize className="text-stone-800 text-6xl mb-4" />,
      title: "Visual Editing",
      description:
        "Refining layouts, compositions, and multimedia content for polished, professional, and audience-focused results.",
    },
  ];

  return (
    <>
      {/* Skills Section */}
      <section className="py-16 px-4 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-stone-800 mb-7"
          style={{ fontFamily: "satoshi-black" }}
        >
          My Tech Stack
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-zinc-600 leading-relaxed max-w-2xl mx-auto text-base md:text-lg"
          style={{ fontFamily: "satoshi-medium" }}
        >
          I build responsive and visually engaging websites using HTML, CSS, and
          JavaScript, with UI/UX tools such as Figma, Adobe Photoshop, Canva, and
          Notion to shape clean, user-centered interfaces from concept to final design.
        </motion.p>

        <div className="max-w-5xl mx-auto">
          <Carousel
            plugins={[Autoplay({ delay: 2200 })]}
            className="w-full"
          >
            <CarouselContent className="flex items-center gap-4 py-6">
              {skills.map((skill, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex flex-col items-center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center rounded-2xl border border-stone-200 bg-white/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md w-full min-h-[180px]"
                  >
                    <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 via-rose-50 to-violet-100 shadow-inner">
                      {skill.icon}
                    </div>
                    <p
                      className="text-sm text-stone-700"
                      style={{ fontFamily: "satoshi-medium" }}
                    >
                      {skill.name}
                    </p>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-pink-50 via-rose-50 to-violet-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-stone-800 mb-6"
            style={{ fontFamily: "satoshi-black" }}
          >
            What Can I Do
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 text-zinc-600 leading-relaxed max-w-2xl mx-auto text-base md:text-lg"
            style={{ fontFamily: "satoshi-medium" }}
          >
            I focus on creating engaging visual experiences through editing, design, and motion-driven storytelling,
            blending creativity with usability to produce polished interfaces and dynamic content that feel modern and memorable.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-pink-100 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center"
              >
                {service.icon}
                <h5
                  className="mb-3 text-lg md:text-xl text-stone-800"
                  style={{ fontFamily: "satoshi-bold" }}
                >
                  {service.title}
                </h5>
                <p
                  className="text-zinc-600"
                  style={{ fontFamily: "satoshi-medium" }}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
