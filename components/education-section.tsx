"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, Crown } from "lucide-react";

const coursework = [
"Machine Learning",
"Deep Learning",
"Data Structures & Algorithms",
"Software Engineering",
"SQL & Databases",
];

export default function EducationSection() {
return (
<section id="education" className="relative px-6 py-24">
    {/* Ambient glow */}
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[140px]" />

    <div className="relative z-10 mx-auto max-w-6xl">
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
    >
        <h2 className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
        Academic Background
        </h2>
        <h3 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
        Education
        </h3>
    </motion.div>

    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="overflow-hidden rounded-xl border border-primary/15 bg-card/40 backdrop-blur-2xl"
    >
        {/* Top accent line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="flex flex-col gap-8 p-8 md:flex-row md:items-stretch md:gap-10 md:p-12">
        
        {/* Left Side: Education & Coursework */}
        <div className="flex flex-1 flex-col gap-6 md:flex-row md:items-start md:gap-8">
            {/* Graduation icon */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 shadow-lg shadow-primary/15">
            <GraduationCap className="h-8 w-8 text-primary" />
            </div>

            {/* Content */}
            <div className="flex-1">
            <h3 className="mb-2 text-xl font-bold text-foreground md:text-2xl">
                Bachelor's Degree in Artificial Intelligence
            </h3>
            <p className="mb-4 text-base font-medium text-primary">
                Benha National University (BNU)
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary/70" />
                October 2023 - June 2027
                </span>
                <span className="hidden text-border md:inline">|</span>
                <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary/70" />
                GPA: 3.25
                </span>
            </div>

            {/* Relevant Coursework */}
            <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-foreground/60">
                Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                {coursework.map((course, i) => (
                    <motion.span
                    key={course}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
                    className="rounded-full border border-primary/15 bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-foreground/80 transition-all hover:border-primary/40 hover:text-foreground"
                    >
                    {course}
                    </motion.span>
                ))}
                </div>
            </div>
            </div>
        </div>

        {/* Vertical divider on desktop */}
        <div className="hidden w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent md:block" />
        {/* Horizontal divider on mobile */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/25 to-transparent md:hidden" />

        {/* Right Side: Leadership Highlight Card */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center justify-center rounded-lg border border-primary/25 bg-primary/5 p-6 text-center shadow-[0_0_30px_hsl(263_84%_52%/0.08)] md:w-72 shrink-0"
        >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 shadow-lg shadow-primary/15">
            <Crown className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-foreground">
            Leadership
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
            Vice President at Computer Science Student Union (BNU)
            </p>
        </motion.div>

        </div>
    </motion.div>
    </div>
</section>
);
}