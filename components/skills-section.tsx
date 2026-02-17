"use client";

import { motion } from "framer-motion";

interface SkillCluster {
  label: string;
  badges: string[];
}

const clusters: SkillCluster[] = [
  {
    label: "PROGRAMMING & CORE",
    badges: ["Python", "C++", "JavaScript", "React", "SQL"],
  },
  {
    label: "FRAMEWORKS & LIBRARIES",
    badges: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face",
      "OpenCV",
      "LangChain",
      "UMAP-learn",
    ],
  },
  {
    label: "INTELLIGENT SYSTEMS",
    badges: [
      "Deep Learning",
      "Computer Vision",
      "Transfer Learning",
      "Genetic Algorithms",
      "LLMs / GPT",
      "Agentic Workflows"
    ],
  },
  {
    label: "MLOPS & DATA LIFECYCLE",
    badges: [
      "Azure AI",
      "MLflow",
      "Git/GitHub",
      "Feature Engineering",
      "Streamlit",
      "Matplotlib",
      "Seaborn",
    ],
  },
];

function Badge({ name, delay }: { name: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="inline-block cursor-default rounded-full border border-primary/20 bg-card/60 px-4 py-2 text-sm font-medium text-foreground/90 backdrop-blur-md transition-all duration-300 hover:border-primary/60 hover:text-white hover:shadow-[0_0_15px_hsl(263_84%_52%/0.3)] hover:-translate-y-1"
    >
      {name}
    </motion.span>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          {/* ضفنا كلمة SKILLS هنا بنفس ستايل الباقي */}
          <h2 className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
            Technical Skills
          </h2>
          <h3 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-5xl">
            Building Scalable AI Solutions{" "}
            <span className="text-primary">{"&"}</span> Intelligent Systems
          </h3>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mt-4">
            A curated ecosystem of tools, languages, and frameworks powering
            my production-grade machine learning models.
          </p>
        </motion.div>

        {/* Skill clusters - 2x2 grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {clusters.map((cluster, ci) => (
            <motion.div
              key={cluster.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 + ci * 0.1 }}
              className="group rounded-2xl border border-primary/10 bg-card/40 p-8 shadow-lg backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card/60"
            >
              <span className="mb-6 block text-xs font-bold tracking-[0.25em] text-primary">
                {cluster.label}
              </span>
              <div className="flex flex-wrap gap-3">
                {cluster.badges.map((badge, bi) => (
                  <Badge
                    key={badge}
                    name={badge}
                    delay={0.2 + ci * 0.1 + bi * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}