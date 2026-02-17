"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Real vs. Synthetic Image Classifier",
    description:
      "Achieved 95% accuracy using Transfer Learning with PyTorch and ResNet50. Utilized Hugging Face and UMAP clustering for advanced feature analysis.",
    tags: ["PyTorch", "Computer Vision"],
    imageSrc: "\Real vs. Synthetic Image Classifier.png", // 👈 تأكد إن ده اسم الصورة في فولدر public
    imageAlt: "Real vs Synthetic classifier visualization",
  },
  {
    title: "E-Commerce Web Application", // 👈 ضفت المشروع ده بناءً على طلباتك السابقة
    description:
      "Developed a fully functional platform featuring user authentication and shopping cart logic. Strictly applied Software Development Life Cycle (SDLC) principles.",
    tags: ["React", "JavaScript", "SDLC"],
    imageSrc: "\Freshcart-Ecommerce-Template.jpg", // 👈 صورة الـ FreshCart
    imageAlt: "E-Commerce FreshCart UI Template",
  },
  {
    title: "INRC-II Workforce Scheduling System",
    description:
      "Built an optimal scheduling system using a Genetic Algorithm to enforce coverage and legal shift constraints, visualized with Streamlit.",
    tags: ["Python", "Streamlit"],
    imageSrc: "\INRC.png ", // 👈 صورة الـ Dashboard
    imageAlt: "Workforce scheduling dashboard",
  },
  {
    title: "Moisture Guard AI-IoT",
    description:
      "Developed a smart plant monitoring system integrating electronics with an AI-driven decision layer in Python.",
    tags: ["IoT", "Microcontrollers"],
    imageSrc: "\Moisture.png", // 👈 صورة السيركت
    imageAlt: "IoT plant monitoring system",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
            Portfolio
          </h2>
          <h3 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Featured Projects
          </h3>
        </motion.div>

        <div className="mt-16 flex flex-col gap-28">
          {projects.map((project, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col items-center gap-8 md:gap-0 ${
                  isReversed ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Image Section (التعديل الأساسي هنا) */}
                <div className="relative w-full md:w-1/2">
                  <div className="overflow-hidden rounded-xl border-2 border-primary/20 bg-card shadow-[0_0_30px_rgba(124,58,237,0.15)] transition-all hover:border-primary/50">
                    <div className="relative aspect-[16/9] w-full bg-secondary/20">
                      <img
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" // ضفت Animation خفيف لما تقف بالماوس
                      />
                    </div>
                  </div>
                </div>

                {/* Glassmorphic text overlay */}
                <div
                  className={`relative w-full md:w-1/2 ${
                    isReversed ? "md:pr-0 md:pl-0" : "md:pl-0 md:pr-0"
                  }`}
                >
                  <div
                    className={`relative overflow-hidden rounded-xl border border-primary/15 bg-card/60 p-8 backdrop-blur-2xl md:-mx-12 ${
                      isReversed ? "md:text-right" : ""
                    }`}
                  >
                    {/* Glow behind card */}
                    <div className="pointer-events-none absolute inset-0 bg-primary/3" />
                    <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />

                    <div className="relative z-10">
                      <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-primary">
                        Featured Project
                      </p>
                      <h3 className="mb-4 text-2xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                      <div
                        className={`flex flex-wrap items-center gap-3 ${
                          isReversed ? "md:justify-end" : ""
                        }`}
                      >
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}