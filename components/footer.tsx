"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-primary/20 bg-[hsl(240,33%,5%)] px-6 pt-20 pb-8"
    >
      {/* Glowing purple top edge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-primary/40 shadow-[0_0_15px_hsl(263,84%,52%,0.3)]" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/6 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-balance text-3xl font-bold text-foreground md:text-4xl"
        >
          Ready to build intelligent systems together?
        </motion.h2>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10"
        >
          <a
            href="tel:+201094546725"
            className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-primary/10 transition-colors group-hover:border-primary/40 group-hover:bg-primary/15">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <span className="text-base font-medium text-foreground">
              +20 1094546725
            </span>
          </a>

          <a
            href="mailto:OmarDiaa177@gmail.com"
            className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-primary/10 transition-colors group-hover:border-primary/40 group-hover:bg-primary/15">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <span className="text-base font-medium text-foreground">
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
            className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-card/50 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:text-foreground hover:shadow-lg hover:shadow-primary/15"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-card/50 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:text-foreground hover:shadow-lg hover:shadow-primary/15"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </motion.div>

        {/* Divider */}
        <div className="mx-auto mt-16 h-px max-w-2xl bg-border/50" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground md:flex-row">
          <span>
            &copy; {new Date().getFullYear()} Omar Diaa-Eldeen. All rights
            reserved.
          </span>
          <span>Engineered with passion for AI {"&"} Innovation.</span>
        </div>
      </div>
    </footer>
  );
}
