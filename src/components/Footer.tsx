import { Heart, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="w-4 h-4" />,
      href: 'https://www.linkedin.com/in/siddhantkhandare96',
      label: 'LinkedIn',
    },
    {
      icon: <Github className="w-4 h-4" />,
      href: 'https://github.com/siddhantkhandare',
      label: 'GitHub',
    },
    {
      icon: <Mail className="w-4 h-4" />,
      href: 'mailto:sidhu.ak96@gmail.com',
      label: 'Email',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-border bg-background/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <button
              onClick={scrollToTop}
              className="text-2xl font-heading font-bold gradient-text hover:opacity-80 transition-opacity"
            >
              SK
            </button>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Siddhant Khandare. All rights reserved.
            </p>
          </div>

          {/* Made with love */}
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in India
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
