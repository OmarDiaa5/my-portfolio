"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// NVIDIA Icon
function NvidiaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z"/>
    </svg>
  );
}

// Microsoft Icon
function MicrosoftIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3h8.5v8.5H3V3zm9.5 0H21v8.5h-8.5V3zM3 12.5h8.5V21H3v-8.5zm9.5 0H21V21h-8.5v-8.5z" />
    </svg>
  );
}

// Huawei Icon (Cleaned & Correct Path)


// Coursera Icon (Named correctly now)
function HuaweiIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M13.262 13.576a.07.07 0 0 0 .074 0a27.5 27.5 0 0 0 5.453-3.406a2.7 2.7 0 0 0 .911-1.81a4.5 4.5 0 0 0-1.46-2.98a41.2 41.2 0 0 0-4.994 8.106s-.025.058.016.09m7.574-3.603s-4.7 2.522-7.132 4.168a.1.1 0 0 0-.033.082s.025.041.058.041c.868 0 4.168 0 4.249-.008a3.2 3.2 0 0 0 .95-.221a3.28 3.28 0 0 0 1.785-1.7a3.37 3.37 0 0 0 .123-2.362m-1.474 4.889l-5.535-.2v.009a.08.08 0 0 0-.066.04a.08.08 0 0 0 .025.074a14.2 14.2 0 0 0 2.907 1.72s1.433.486 2.669-1.643m-6.853-1.744l.008.016c.049.025.082-.033.082-.033c.532-.769 2.915-4.315 3.406-6.477a3.64 3.64 0 0 0 0-1.76a2.57 2.57 0 0 0-1.826-1.712s-.418-.106-.868-.172c0 0-1.638 2.113-.843 10.08a.055.055 0 0 0 .041.058m-1.109 0c.033.041.065.024.065.024a.06.06 0 0 0 .05-.065C12.3 5.109 10.674 3 10.674 3l.009-.008c-.238.024-.893.172-.893.172a2.56 2.56 0 0 0-1.81 1.708a3.4 3.4 0 0 0 0 1.76c.492 2.168 2.891 5.741 3.42 6.486m-6.351.909a3.2 3.2 0 0 0 1.056.229c.082.016 3.292 0 4.152 0c.032 0 .057-.041.057-.041v.008c.025-.041-.016-.082-.016-.082C7.866 12.5 3.157 9.982 3.157 9.982a3.275 3.275 0 0 0 1.892 4.045m5.11.647l-5.528.188c.6 1.073 1.613 1.9 2.662 1.646a14 14 0 0 0 2.915-1.72c.041-.041.024-.074.024-.074v.009a.08.08 0 0 0-.073-.049M5.2 10.17a27.6 27.6 0 0 0 5.47 3.414c.009 0 .05.017.074-.016v.008a.054.054 0 0 0 .016-.065A41 41 0 0 0 5.753 5.38S4.181 6.87 4.3 8.368a2.64 2.64 0 0 0 .9 1.802m15.112 7.918H21v2.899h-.688ZM17.16 19.6a1.32 1.32 0 0 0 .483 1.138a1.45 1.45 0 0 0 .974.254h1.114v-.508H18.65c-.516 0-.745-.188-.745-.712h1.826v-.508h-1.815v.017l-.008-.017h.011a.637.637 0 0 1 .734-.655h1.081V18.1h-1.1c-1.008 0-1.474.479-1.474 1.5m.753-.316v-.017h-.011zm-2.244 1.031l-.704-2.227h-.778l-.614 2.227l-.721-2.227h-.712l1.048 2.899h.803l.581-2.162l.672 2.162h.802l.974-2.899h-.679zm-4.407-2.204h-.7l-1.327 2.9h.7l.279-.688h1.359l.287.688h.736zm-.835 1.7l.458-1.114l.475 1.114zm-2.027.013c0 .516-.164.729-.7.729s-.7-.221-.7-.729v-1.736h-.666v1.752a1.1 1.1 0 0 0 .181.778a1.46 1.46 0 0 0 1.179.4a1.46 1.46 0 0 0 1.179-.4a1.16 1.16 0 0 0 .188-.778v-1.752H8.4Zm-3.261-.557H3.665v-1.179h-.663v2.899h.663v-1.212h1.474v1.212h.655v-2.899h-.655Z" />
    </svg>
  );
}

// IBM Icon (Original, just in case you need it later)
function IbmIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M23.544 15.993q.059 0 .06-.053v-.036q-.001-.052-.06-.052h-.09v.14zm-.09.262h-.121v-.498h.225c.112 0 .169.066.169.157c0 .079-.036.129-.09.15l.111.19h-.133l-.092-.17h-.07zm.434-.222v-.062c0-.2-.157-.357-.363-.357a.355.355 0 0 0-.363.357v.062c0 .2.156.358.363.358a.355.355 0 0 0 .363-.358m-.838-.03c0-.28.212-.492.475-.492c.264 0 .475.213.475.491a.477.477 0 0 1-.475.491a.477.477 0 0 1-.475-.49M16.21 8.13l-.216-.624h-3.56v.624zm.413 1.19l-.216-.623h-3.973v.624zm2.65 7.147h3.107v-.624h-3.108zm0-1.192h3.107v-.623h-3.108zm0-1.19h1.864v-.624h-1.865zm0-1.191h1.864v-.624h-1.865zm0-1.191h1.864v-.624h-3.555l-.175.504l-.175-.504h-3.555v.624h1.865v-.574l.2.574h3.33l.2-.574zm1.864-1.815h-3.142l-.217.624h3.359zm-7.46 3.006h1.865v-.624h-1.865zm0 1.19h1.865v-.623h-1.865zm-1.243 1.191h3.108v-.623h-3.108zm0 1.192h3.108v-.624h-3.108zm6.386-8.961l-.216.624h3.776v-.624zm-.629 1.815h4.19v-.624h-3.974zm-4.514 1.19h3.359l-.216-.623h-3.143zm2.482 2.383h2.496l.218-.624h-2.932zm.417 1.19h1.662l.218-.623h-2.098zm.416 1.191h.83l.218-.623h-1.266zm.414 1.192l.217-.624h-.432zm-12.433-.006l4.578.006c.622 0 1.18-.237 1.602-.624h-6.18zm4.86-3v.624h2.092q-.002-.325-.083-.624zm-3.616.624h1.865v-.624H6.217zm3.617-3.573h2.008q.081-.3.083-.624H9.834zm-3.617 0h1.865v-.624H6.217zM9.55 7.507H4.973v.624h6.18a2.36 2.36 0 0 0-1.602-.624zm2.056 1.191H4.973v.624h6.884a2.4 2.4 0 0 0-.25-.624zm-5.39 2.382v.624h4.87c.207-.176.382-.387.519-.624zm4.87 1.191h-4.87v.624h5.389a2.4 2.4 0 0 0-.519-.624m-6.114 3.006h6.634c.11-.193.196-.402.25-.624H4.973zM0 8.13h4.352v-.624H0zm0 1.191h4.352v-.624H0zm1.243 1.191h1.865v-.624H1.243zm0 1.191h1.865v-.624H1.243zm0 1.19h1.865v-.623H1.243zm0 1.192h1.865v-.624H1.243zM0 15.276h4.352v-.623H0zm0 1.192h4.352v-.624H0Z"/>
    </svg>
  );
}

const certifications = [
  {
    Icon: NvidiaIcon,
    title: "Generative AI Training Program",
    issuer: "NVIDIA Deep Learning Institute & ITI",
    description: "Mastering the foundations of LLMs and AI architectures, including fine-tuning ,LangChain and deploying large language models",
    link: "https://learn.nvidia.com/certificates?id=2kPdf3-GQe2jXnpVh8b7ug",
  },
  {
    Icon: MicrosoftIcon,
    title: "Machine Learning Engineer Track",
    issuer: "Digital Egypt Pioneers Initiative - DEPI",
    description: "Mastered end-to-end ML lifecycles, focusing on model deployment and MLOps practices.",
    link: "https://depi.gov.eg/",
  },
  {
    Icon: HuaweiIcon,
    title: "HCIA-AI V4 Certification",
    issuer: "Huawei ICT Academy & NTI",
    description: "Achieved a 98% score, gaining deep insights into AI frameworks and Neural Network implementations",
    link: "https://drive.google.com/file/d/1hfsDZHe7TJp4ygozJOgX7rqjPd57xlGL/view?usp=sharing",
  },
  {
    Icon: IbmIcon, // 👈 غيرنا الأيقونة هنا ibm
    title: "Data Science Professional Certificate",
    issuer: "IBM (via Coursera)", // 👈 ضفنا كورسيرا هنا للدقة
    description: "Mastered the complete data science methodology, from raw data preprocessing to building robust classification models",
    link: "https://www.coursera.org/account-profile",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative px-6 py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
            Certifications
          </h2>
          <h3 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Courses {"&"} Certifications
          </h3>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-primary/15 bg-card/50 p-8 backdrop-blur-xl transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/8 blur-2xl" />
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              <div className="relative z-10 flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 shadow-lg shadow-primary/15">
                  <cert.Icon className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="mb-1 font-semibold text-foreground">
                    {cert.title}
                  </h4>
                  <p className="mb-3 font-mono text-xs text-primary">
                    {cert.issuer}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {cert.description}
                  </p>
                  
                  {/* الكلمة الجديدة والاحترافية هنا 👇 */}
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/30 text-foreground hover:bg-primary/10 hover:text-foreground"
                    >
                      View Credential
                    </Button>
                  </a>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}