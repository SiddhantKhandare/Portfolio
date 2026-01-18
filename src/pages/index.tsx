import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Siddhant Khandare | React Native Developer Portfolio</title>
        <meta
          name="description"
          content="Siddhant Khandare - Experienced React Native Developer specializing in cross-platform mobile applications. View my projects, skills, and experience."
        />
        <meta
          name="keywords"
          content="React Native Developer, Mobile App Developer, Cross-platform Development, Siddhant Khandare, Portfolio"
        />
        <meta name="author" content="Siddhant Khandare" />
        <meta property="og:title" content="Siddhant Khandare | React Native Developer" />
        <meta
          property="og:description"
          content="Experienced React Native Developer specializing in cross-platform mobile applications."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://siddhantkhandare.dev" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
