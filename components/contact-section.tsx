"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/6 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-12 text-balance text-4xl font-bold text-foreground md:text-5xl">
            {"Let's Connect"}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Phone */}
          <a
            href="tel:+201094546725"
            className="group flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 transition-colors group-hover:border-primary/40">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <span className="text-lg font-medium text-foreground">
              +20 1094546725
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:OmarDiaa177@gmail.com"
            className="group flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 transition-colors group-hover:border-primary/40">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <span className="text-lg font-medium text-foreground">
              OmarDiaa177@gmail.com
            </span>
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex items-center justify-center gap-5"
        >
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-card/50 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:text-foreground hover:shadow-lg hover:shadow-primary/10"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-card/50 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:text-foreground hover:shadow-lg hover:shadow-primary/10"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
