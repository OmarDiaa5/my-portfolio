import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import CertificationsSection from "@/components/certifications-section";
import Footer from "@/components/footer";
import AboutSection from "@/components/about-section";
import EducationSection from "@/components/education-section";
import ValueSection from "@/components/value-section";
import ServicesSection from "@/components/services-section"; // تأكد من اسم الملف

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ValueSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <Footer />
    </main>
  );
}
