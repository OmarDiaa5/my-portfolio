"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react"; // مسحنا الـ Crown من هنا

export default function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-24">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-xl border border-primary/15 bg-card/40 p-8 backdrop-blur-2xl md:p-12"
        >
          {/* Top accent line */}
          <div className="absolute left-0 right-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {/* About Me Content */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
              <User className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              About Me
            </h2>
          </div>
          
          <p className="max-w-4xl text-sm leading-relaxed text-muted-foreground md:text-base md:leading-8">
            Combining technical coursework in AI with active student leadership as Vice President of the CS Student Union. Developing a strong foundation in Machine Learning by applying Python, Scikit-learn, and Pandas to build introductory models. Gaining hands-on experience in data preprocessing, model evaluation, and computer vision. Deepening technical understanding through the Microsoft DEPI Track, IBM Data Science Professional Certificate, and NVIDIA DLI training. Translating academic concepts into practical code, with a specific interest in autonomous systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}