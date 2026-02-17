"use client";

import { motion } from "framer-motion";
import { Brain, Camera, Bot, Code, Cpu, Database } from "lucide-react";

const services = [
{
icon: Brain,
title: "Machine Learning Solutions",
description: "Developing end-to-end ML models, from data preprocessing to deployment, specializing in predictive analytics and MLOps.",
},
{
icon: Camera,
title: "Computer Vision",
description: "Building advanced image classification, object detection, and feature analysis systems using PyTorch and OpenCV.",
},
{
icon: Bot,
title: "Robotics & Automation",
description: "Designing and programming autonomous systems and drones, bridging the gap between hardware and intelligent software.",
},
{
icon: Code,
title: "AI Integration",
description: "Integrating Generative AI and LLM capabilities into web applications for enhanced user experiences and automation.",
},
{
icon: Database,
title: "Data Science & Analysis",
description: "Transforming raw data into actionable insights through advanced statistical modeling and visualization techniques.",
},
{
icon: Cpu,
title: "Embedded Systems",
description: "Developing efficient software for microcontrollers and IoT devices, optimized for real-time performance.",
},
];

export default function ServicesSection() {
return (
<section id="services" className="relative px-6 py-24 bg-background">
    {/* Ambient Glow */}
    <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

    <div className="relative z-10 mx-auto max-w-6xl">
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
    >
        <h2 className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
        Expertise
        </h2>
        <h3 className="text-3xl font-bold text-foreground md:text-5xl">
        Offered Services
        </h3>
    </motion.div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
        <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-card/40 p-8 backdrop-blur-xl transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
        >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <service.icon size={24} />
            </div>
            <h4 className="mb-3 text-xl font-bold text-foreground">
            {service.title}
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
            {service.description}
            </p>
        </motion.div>
        ))}
    </div>
    </div>
</section>
);
}