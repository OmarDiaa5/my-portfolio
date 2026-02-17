"use client";

import { motion } from "framer-motion";
import { FileText, ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6">
      {/* Ambient glow effects */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/8 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-16 md:flex-row md:justify-between">
        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <p className="mb-3 text-lg text-muted-foreground">Hi I am</p>
          <h2 className="mb-4 text-2xl font-semibold text-foreground md:text-3xl">
            Omar Diaa-Eldeen
          </h2>
          <h1 className="mb-8 text-balance text-4xl font-bold leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl">
            Machine Learning Engineer
          </h1>

          {/* Social icons */}
          <div className="mb-8 flex items-center gap-4">
            <a
              href="https://github.com/OmarDiaa5" // حطيت لينك جيت هاب بتاعك
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/50 hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/omardiaalink" // حط لينك لينكد إن بتاعك هنا
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/50 hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:OmarDiaa177@gmail.com"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/50 hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90"
            >
              <a href="#projects">
                <ArrowDown className="mr-2 h-4 w-4" />
                View My Work
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-card"
            >
              <a href="https://drive.google.com/file/d/1QSLZJ8tOJb2TydP4DAUS57TgphoKHCvM/view?usp=sharing" target="_blank" rel="noopener noreferrer"> {/* غيرت اللينك لملف الـ CV */}
                <FileText className="mr-2 h-4 w-4" />
                View My CV
              </a>
            </Button>
          </div>
        </motion.div>
       
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex shrink-0 items-center justify-center py-10 md:py-0"
        >
          {/* غيرنا المقاسات هنا عشان تبقى مستطيل طولي مش مربع */}
          <div className="relative flex w-72 h-[24rem] items-center justify-center overflow-hidden rounded-[2.5rem] border-4 border-primary/50 bg-card shadow-[0_0_50px_rgba(124,58,237,0.4)] md:w-80 md:h-[28rem]">
            <img
              src="/Omar.png"
              alt="Omar Diaa-Eldeen - Machine Learning Engineer"
              // object-cover مع object-top هنا هتشتغل بمثالية لأن الإطار بقى مناسب للصورة
              className="h-full w-full object-cover object-top" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}