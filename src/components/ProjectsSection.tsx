import { Users, Home, Building } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  techStack: string[];
  role: string[];
  color: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'SNS Teams App',
      description:
        'A comprehensive employee management app designed for daily attendance and loan processing workflows.',
      icon: <Users className="w-8 h-8" />,
      techStack: ['React Native', 'JavaScript', 'Firebase', 'Redux', 'Node.js', 'Express.js'],
      role: [
        'Developed features for collecting and managing customer details',
        'Integrated EMI calculator and CIBIL check',
        'Designed user-friendly interface for data entry',
        'Ensured app stability through rigorous testing',
      ],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 2,
      title: 'Channel Partner App',
      description:
        'A partner-facing app for collecting customer data and documents, integrating directly with SNS Teams App.',
      icon: <Building className="w-8 h-8" />,
      techStack: ['React Native', 'JavaScript', 'Firebase', 'Redux', 'Node.js', 'Express.js'],
      role: [
        'Built functionalities for channel partners',
        'Enabled data flow integration with SNS Teams App',
        'Optimized user workflows for efficiency',
        'Conducted performance optimization',
      ],
      color: 'from-violet-500 to-purple-500',
    },
    {
      id: 3,
      title: 'Cohousy',
      description:
        'An online room booking app tailored for PG accommodations with intuitive search and booking features.',
      icon: <Home className="w-8 h-8" />,
      techStack: ['React Native', 'JavaScript', 'Firebase', 'Redux', 'Node.js', 'Express.js'],
      role: [
        'Designed intuitive user interfaces',
        'Implemented room search and booking features',
        'Integrated real-time notification features',
        'Conducted extensive cross-device testing',
      ],
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 lg:py-32 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="zoom"
              delay={index * 150}
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* Card */}
              <div className="h-full p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  {project.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Role Highlights */}
                <div className="space-y-2">
                  {project.role.slice(0, 2).map((item, i) => (
                    <p key={i} className="text-xs text-muted-foreground flex items-start gap-2 group-hover:text-foreground/70 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
