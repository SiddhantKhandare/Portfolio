import { useState } from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  current?: boolean;
}

const ExperienceSection = () => {
  const [activeExp, setActiveExp] = useState(0);

  const experiences: Experience[] = [
    {
      id: 1,
      title: 'React Native Developer',
      company: 'Osbeam IT Private Limited',
      period: '03/2024 - Current',
      current: true,
      description:
        'Playing a key role in building robust mobile applications from the ground up. Spearheading development efforts to deliver smooth, feature-rich, cross-platform solutions.',
      highlights: [
        'Built SNS Teams App for employee management and loan processing',
        'Developed Channel Partner App for customer data collection',
        'Resolved complex issues and enhanced app performance',
        'Drove the success of innovative mobile initiatives',
      ],
    },
    {
      id: 2,
      title: 'React Native Developer',
      company: 'Clever Mind Media (Socium Partners)',
      period: '01/2023 - 02/2024',
      description:
        'Instrumental in crafting high-performance mobile applications. Led the development of apps from scratch ensuring seamless cross-platform experience.',
      highlights: [
        'Developed Cohousy - an online room booking app for PG accommodations',
        'Built Vacation Tracker application from scratch',
        'Tackled challenges and optimized performance',
        'Contributed to the success of innovative solutions',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Work <span className="gradient-text">History</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Timeline Navigation */}
          <AnimatedSection animation="fade-right" delay={200} className="lg:col-span-4">
            <div className="space-y-4 sticky top-24">
              {experiences.map((exp, index) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveExp(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                    activeExp === index
                      ? 'bg-primary/10 border-primary shadow-lg shadow-primary/10'
                      : 'bg-secondary/50 border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        activeExp === index
                          ? 'bg-primary text-primary-foreground scale-110'
                          : 'bg-secondary text-muted-foreground'
                      }`}
                    >
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <span
                      className={`font-semibold transition-colors ${
                        activeExp === index ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      {exp.company}
                    </span>
                    {exp.current && (
                      <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium animate-pulse">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground pl-11">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </div>
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Experience Details */}
          <AnimatedSection animation="fade-left" delay={400} className="lg:col-span-8">
            <div className="p-8 rounded-2xl card-gradient border border-border hover:border-primary/30 transition-all duration-300">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">
                    {experiences[activeExp].title}
                  </h3>
                  <p className="text-primary font-medium">
                    {experiences[activeExp].company}
                  </p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {experiences[activeExp].period}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {experiences[activeExp].description}
              </p>

              <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
              <ul className="space-y-3">
                {experiences[activeExp].highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground group"
                    style={{ 
                      animation: 'stagger-fade 0.5s ease-out forwards',
                      animationDelay: `${index * 100}ms`,
                      opacity: 0
                    }}
                  >
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:text-foreground transition-colors">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
