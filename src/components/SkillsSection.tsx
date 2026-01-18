import { useEffect, useRef, useState } from 'react';
import { Code2, Smartphone, Server, Wrench, Palette, Rocket } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'HTML', level: 85 },
        { name: 'CSS', level: 85 },
      ],
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: 'React Native', level: 95 },
        { name: 'Redux', level: 88 },
        { name: 'React Navigation', level: 90 },
        { name: 'AsyncStorage', level: 85 },
      ],
    },
    {
      title: 'APIs & Backend',
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: 'REST APIs', level: 90 },
        { name: 'Firebase', level: 85 },
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 75 },
      ],
    },
    {
      title: 'Tools',
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Android Studio', level: 85 },
        { name: 'Xcode', level: 80 },
        { name: 'Postman', level: 88 },
      ],
    },
    {
      title: 'Design',
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: 'Figma', level: 75 },
        { name: 'Wireframing', level: 80 },
      ],
    },
    {
      title: 'Deployment',
      icon: <Rocket className="w-6 h-6" />,
      skills: [
        { name: 'Play Store', level: 90 },
        { name: 'App Store', level: 85 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection
              key={category.title}
              animation="scale"
              delay={categoryIndex * 100}
              className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 group hover:-translate-y-1"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 group-hover:scale-110">
                  {category.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-primary transition-all duration-1000 ease-out ${
                          isVisible ? '' : 'w-0'
                        }`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 100 + skillIndex * 100 + 300}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
