import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, FileDown } from 'lucide-react';
import { Button } from './ui/button';
import { useTypingEffect } from '@/hooks/useTypingEffect';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { displayedText: typedName, isComplete: nameComplete, showCursor } = useTypingEffect({
    text: 'Siddhant Khandare',
    speed: 80,
    delay: 800,
    enabled: isVisible,
  });

  const { displayedText: typedRole, isComplete: roleComplete } = useTypingEffect({
    text: 'React Native Developer',
    speed: 60,
    delay: 2200,
    enabled: isVisible,
  });

  const handleDownloadResume = () => {
    // Opens the resume PDF in a new tab (you can replace this URL with your actual resume link)
    window.open('/Siddhant_Khandare_Resume.pdf', '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        {/* Animated particles */}
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary/40 rounded-full animate-pulse-glow" />
        <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-primary/30 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary/50 rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pre-title */}
          <div
            className={`mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for opportunities
            </span>
          </div>

          {/* Main Title with Typing Effect */}
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Hi, I'm{' '}
            <span className="gradient-text inline-block min-w-[1ch]">
              {typedName}
              {!nameComplete && (
                <span className={`inline-block w-[3px] h-[0.9em] bg-primary ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              )}
            </span>
          </h1>

          {/* Subtitle with Typing Effect */}
          <p
            className={`text-xl md:text-2xl text-muted-foreground mb-4 transition-all duration-700 delay-300 h-8 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block min-w-[1ch]">
              {typedRole}
              {nameComplete && !roleComplete && (
                <span className={`inline-block w-[2px] h-[0.9em] bg-primary ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              )}
            </span>
          </p>

          {/* Description */}
          <p
            className={`text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 transition-all duration-700 ${
              roleComplete ? 'opacity-100 translate-y-0 delay-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: roleComplete ? '0ms' : '0ms' }}
          >
            Dedicated and skilled developer with 2+ years of experience in building 
            cross-platform mobile applications. Passionate about creating smooth, 
            feature-rich solutions.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 ${
              roleComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: roleComplete ? '200ms' : '0ms' }}
          >
            <Button
              variant="hero"
              size="xl"
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Get In Touch
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              className="group"
              onClick={handleDownloadResume}
            >
              <FileDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div
            className={`flex items-center justify-center gap-4 transition-all duration-700 ${
              roleComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: roleComplete ? '400ms' : '0ms' }}
          >
            <a
              href="https://www.linkedin.com/in/siddhantkhandare96"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 group hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 group-hover:rotate-6 transition-transform" />
            </a>
            <a
              href="https://github.com/siddhantkhandare"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 group hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 group-hover:-rotate-6 transition-transform" />
            </a>
            <a
              href="mailto:sidhu.ak96@gmail.com"
              className="p-3 rounded-xl bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 group hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 group-hover:rotate-6 transition-transform" />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
