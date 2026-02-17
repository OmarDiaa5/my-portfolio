"use client";

import { motion } from "framer-motion";
import { 
Eye, 
Users, 
Aperture, 
GraduationCap, 
Scan, 
Layers,
CloudCog,
FileCode2,
Dna, 
Gem
} from "lucide-react";


const differentiators = [
{
icon: Aperture,
title: "Advanced Computer Vision",
text: "Specializing in Deep Learning for image analysis—from building robust image classifiers to advanced feature extraction and clustering.",
},
{
icon: Eye,
title: "The AI-to-Hardware Bridge",
text: "Bridging the gap between software and physical systems, integrating advanced computer vision capabilities into robotics and edge devices.",
},
{
icon: GraduationCap,
title: "Academic & Industry Synergy",
text: "Combining rigorous academic research in Artificial Intelligence with practical, cloud-native ML deployment strategies.",
},
{
icon: Users,
title: "Leadership & Innovation",
text: "A proven track record of tech leadership and mentoring students in robotics, driving innovation initiatives beyond just writing code.",
},
];

const values = [
{
icon: Scan,
title: "Visual Data to Insights",
text: "Developing end-to-end computer vision pipelines that transform raw, complex image data into accurate, actionable decisions.",
},
{
icon: Layers,
title: "Architecting Deep Learning",
text: "Applying tailored architectures—like ResNet and custom PyTorch models—to achieve high-accuracy classifications and robust object detection.",
},
{
icon: CloudCog,
title: "Production-Ready Vision",
text: "Designing scalable machine learning lifecycles, ensuring heavy visual models run efficiently in production or edge/IoT environments.",
},
{
icon: FileCode2,
title: "Collaborative Engineering",
text: "Delivering clean, modular, and well-documented code while effectively communicating complex visual AI concepts to diverse teams.",
},
];

export default function ValueSection() {
return (
<section id="value-proposition" className="relative px-6 py-24">
    {/* Background Glow */}
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[160px]" />

    <div className="relative z-10 mx-auto max-w-6xl">
    {/* Section Header */}
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
    >
        <h2 className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
        Why Hire Me
        </h2>
        <h3 className="text-balance text-3xl font-bold text-foreground md:text-5xl">
        The Edge I Bring to Your Team
        </h3>
    </motion.div>

    {/* 2-Column Grid for the Cards */}
    <div className="grid gap-8 lg:grid-cols-2">
        
        {/* Card 1: What Makes Me Different */}
        <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-card/40 p-8 backdrop-blur-xl transition-all hover:border-primary/30 hover:shadow-[0_0_30px_hsl(263_84%_52%/0.1)]"
        >
        <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Dna className="h-6 w-6" />
            </div>
            <h4 className="text-2xl font-bold text-foreground">
            What Makes Me Different
            </h4>
        </div>

        <ul className="flex flex-col gap-8">
            {differentiators.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-4 w-4" />
                </div>
                <div>
                <h5 className="mb-1 font-semibold text-foreground">
                    {item.title}
                </h5>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.text}
                </p>
                </div>
            </li>
            ))}
        </ul>
        </motion.div>

        {/* Card 2: Value I Bring */}
        <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-card/40 p-8 backdrop-blur-xl transition-all hover:border-primary/30 hover:shadow-[0_0_30px_hsl(263_84%_52%/0.1)]"
        >
        <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Gem className="h-6 w-6" /></div>
            <h4 className="text-2xl font-bold text-foreground">
            Value I Bring
            </h4>
        </div>

        <ul className="flex flex-col gap-8">
            {values.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-4 w-4" />
                </div>
                <div>
                <h5 className="mb-1 font-semibold text-foreground">
                    {item.title}
                </h5>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.text}
                </p>
                </div>
            </li>
            ))}
        </ul>
        </motion.div>

    </div>
    </div>
</section>
);
}