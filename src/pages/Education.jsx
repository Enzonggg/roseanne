import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    school: "Laguna State Polytechnic University - Siniloan Campus",
    degree: "Bachelor of Science in Information Technology",
    description:
      "Focused on Animation and Motion Graphics, UI/UX principles, and digital design thinking to create functional and user-centered digital experiences.",
  },
  {
    school: "Relevant Learning / Training",
    degree: "Web Design and Front-End Development",
    period: "Self-paced / Continuing Education",
    description:
      "Strengthened skills in HTML, CSS, JavaScript, responsive design, prototyping, and visual communication for modern interfaces.",
  },
];

const Education = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50 to-violet-50 px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2
            className="text-3xl md:text-4xl text-stone-800"
            style={{ fontFamily: "satoshi-black" }}
          >
            Education
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-base text-zinc-600"
            style={{ fontFamily: "satoshi-medium" }}
          >
            Building a strong foundation in technology, design, and user-centered problem solving.
          </p>
        </motion.div>

        <div className="space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl border-2 border-stone-800 bg-white p-6 shadow-md md:p-8"
            >
              <p
                className="mb-2 text-sm uppercase tracking-[0.2em] text-pink-600"
                style={{ fontFamily: "satoshi-bold" }}
              >
                {item.period}
              </p>
              <h3
                className="text-2xl text-stone-800"
                style={{ fontFamily: "satoshi-bold" }}
              >
                {item.school}
              </h3>
              <h4
                className="mt-2 text-lg text-zinc-700"
                style={{ fontFamily: "satoshi-medium" }}
              >
                {item.degree}
              </h4>
              <p
                className="mt-4 text-zinc-600 leading-relaxed"
                style={{ fontFamily: "satoshi-medium" }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
