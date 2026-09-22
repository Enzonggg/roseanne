import React from "react";
import coffeeImg from "../assets/coffee.png";
import lakayImg from "../assets/lakay.png";
import pixelImg from "../assets/pixel.jpg";
import spyltImg from "../assets/spylt.png";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Coffee",
      description:
        "Coffee is a warm and inviting cafe landing page designed to highlight the brand’s atmosphere, signature drinks, and premium experience. The layout balances cozy visuals with clear product storytelling, making the brand feel approachable and memorable.",
      image: coffeeImg,
      link: "#",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Lakay",
      description:
        "Lakay is a modern food and lifestyle landing page created to showcase an inviting restaurant brand with a warm, premium feel. It emphasizes easy navigation, rich visuals, and a smooth browsing experience that helps customers connect with the brand quickly.",
      image: lakayImg,
      link: "#",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Pixel Sprout",
      description:
        "Pixel Sprout is an educational pixel-style game where the player controls a tiny plant seedling. As the sprout moves, it encounters water-drop obstacles. Each time the sprout touches one, an educational question automatically appears. Correct answers allow the sprout to grow into a bigger plant.",
      image: pixelImg,
      link: "#",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "SPYLT",
      description:
        "SPYLT is a visually engaging school website focused on creating a modern and student-friendly online presence. It presents information in a clean layout with strong visual hierarchy, making it easy for students and visitors to explore school details, activities, and updates.",
      image: spyltImg,
      link: "#",
      tech: ["HTML", "CSS", "JavaScript"],
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-pink-50 via-rose-50 to-violet-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl text-stone-800 mb-6"
          style={{ fontFamily: "satoshi-black" }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <motion.p
          className="mb-10 text-zinc-600 leading-relaxed max-w-2xl mx-auto text-base"
          style={{ fontFamily: "satoshi-medium" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here are some of the projects I've worked on, showcasing my skills in
          creating functional, visually appealing, and user-friendly websites.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3
                  className="text-xl font-semibold text-stone-800 mb-2"
                  style={{ fontFamily: "satoshi-bold" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-zinc-600 text-sm mb-4"
                  style={{ fontFamily: "satoshi-medium" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-rose-200 text-rose-800 px-2 py-1 rounded-full text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-rose-300 border border-stone-800 text-stone-800 px-4 py-2 rounded-sm text-sm font-semibold hover:bg-rose-400 transition-colors"
                  style={{ fontFamily: "satoshi-medium" }}
                >
                  Live Site
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
