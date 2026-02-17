"use client";

import { motion } from "framer-motion";
import { Cpu, BookOpen } from "lucide-react";

// ضفنا الـ skills لكل خبرة
const experiences = [
  {
    icon: Cpu,
    title: "Robotics Internship",
    company: "Innovatera",
    date: "Aug 2024 - Oct 2024", // يفضل إضافة التاريخ
    description: "Developed an AI-driven smart plant monitoring system with Python-based real-time decision algorithms.",
    skills: ["Python", "Algorithms", "IoT", "Sensors"], 
  },
  {
    icon: BookOpen,
    title: "Robotics Instructor (Part-time)",
    company: "Innovatera",
    date: "Present", // التاريخ اللي اتفقنا عليه
    description: "Selected to mentor students and guide them through the full development lifecycle of robotics projects.",
    skills: ["Robotics", "Mentorship", "Hardware Assembly"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative px-6 py-24">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
            Career Journey
          </h2>
          <h3 className="mb-12 text-balance text-3xl font-bold text-foreground md:text-5xl">
            Work Experience
          </h3>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-primary/15 bg-card/50 p-8 backdrop-blur-xl transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Inner glow */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/8 blur-2xl transition-opacity group-hover:bg-primary/12" />

              {/* Top accent line */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              <div className="relative z-10 flex items-start gap-6">
                {/* 3D-style icon */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 shadow-lg shadow-primary/15">
                  <exp.icon className="h-7 w-7 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="mb-1 text-xl font-bold text-foreground">
                    {exp.title}
                  </h3>
                  
                  {/* Company & Date */}
                  <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-mono text-xs text-primary">
                      {exp.company}
                    </p>
                    <p className="text-xs font-medium text-muted-foreground">
                      {exp.date}
                    </p>
                  </div>

                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                  
                  {/* Skills Tags (بديل الزرار) */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {exp.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="rounded-md bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}