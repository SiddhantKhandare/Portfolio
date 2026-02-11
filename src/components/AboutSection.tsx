import { MapPin, Phone, Mail, GraduationCap, Calendar, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  const education = [
    {
      year: '2021',
      degree: 'M.Sc Computer Science',
      institution: 'Shri Shivaji College, Parbhani',
      score: '87.04%',
    },
    {
      year: '2019',
      degree: 'BCS',
      institution: 'Shri Shivaji College, Parbhani',
      score: '57.78%',
    },
  ];

  const highlights = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '5+' },
    { label: 'Technologies', value: '10+' },
  ];

  return (
    <section
      id="about"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Know Me <span className="gradient-text">Better</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - About Text */}
          <AnimatedSection animation="fade-right" delay={200}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Dedicated and skilled React Native Developer with 3 years of experience in 
              building cross-platform applications. I am passionate about creating smooth, 
              feature-rich mobile solutions that provide exceptional user experiences.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              My expertise spans across React Native, JavaScript, Redux, and various 
              modern mobile development tools. I thrive on tackling complex challenges, 
              optimizing performance, and contributing to the success of innovative solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <AnimatedSection animation="fade-up" delay={300} className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Thite Nagar, Kharadi, Pune</span>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={400} className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:7767973768" className="hover:text-primary transition-colors">
                  7767973768
                </a>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={500} className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:sidhu.ak96@gmail.com" className="hover:text-primary transition-colors">
                  sidhu.ak96@gmail.com
                </a>
              </AnimatedSection>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <AnimatedSection
                  key={item.label}
                  animation="scale"
                  delay={600 + index * 100}
                  className="text-center p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:scale-105 transition-all duration-300"
                >
                  <div className="text-3xl font-heading font-bold gradient-text mb-1">
                    {item.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Right Column - Education */}
          <AnimatedSection animation="fade-left" delay={400}>
            <div className="p-8 rounded-2xl card-gradient border border-border hover:border-primary/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-heading font-bold">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <AnimatedSection
                    key={edu.degree}
                    animation="fade-up"
                    delay={500 + index * 150}
                    className={`relative pl-8 pb-6 ${
                      index !== education.length - 1 ? 'border-l-2 border-border' : ''
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-effect" />

                    <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                      <Calendar className="w-4 h-4" />
                      {edu.year}
                    </div>
                    <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      {edu.institution}
                    </p>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      <Award className="w-3.5 h-3.5" />
                      {edu.score}
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <AnimatedSection animation="fade-up" delay={800} className="mt-6 p-6 rounded-2xl card-gradient border border-border hover:border-primary/30 transition-colors duration-300">
              <h4 className="text-lg font-heading font-semibold mb-4">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {['Quick Learner', 'Problem Solving', 'Leadership', 'Decision Making'].map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-secondary text-sm text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
