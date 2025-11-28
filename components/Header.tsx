'use client';

import { useEffect, useState } from 'react';
import { EmailIcon, GitHubIcon, LinkedInIcon, PhoneIcon } from './Icons';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['about', 'experience', 'education', 'notable-work'];
    
    const observers = sections.map((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          });
        },
        {
          rootMargin: '-20% 0px -60% 0px',
          threshold: 0,
        }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-offwhite/95 backdrop-blur-sm border-b border-navy/10 transition-all duration-300 h-20 lg:sticky lg:h-screen lg:w-96 xl:w-[32rem] lg:border-b-0 lg:border-r">
        <div className="h-full flex items-center justify-between px-6 lg:flex-col lg:items-end lg:justify-start lg:py-20 lg:px-12">
          <div className="flex items-center justify-between lg:block w-full">
            <div className="lg:text-right">
              <h1 className="font-bold text-3xl lg:text-4xl">Jacob Haile</h1>
              <p className="text-sm text-navy/70 dark:text-offwhite/70 lg:text-base lg:mt-1">Staff Engineer</p>
            </div>
            
            <div className="flex gap-3 lg:mt-4 lg:justify-end">
            <a href="https://github.com/jacobhaile" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-navy/10 dark:bg-offwhite/10 flex items-center justify-center hover:bg-orange/20 transition-colors" aria-label="GitHub">
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/in/jacobhaile" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-navy/10 dark:bg-offwhite/10 flex items-center justify-center hover:bg-orange/20 transition-colors" aria-label="LinkedIn">
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a href="mailto:jacobhaile@gmail.com" className="w-9 h-9 rounded-full bg-navy/10 dark:bg-offwhite/10 flex items-center justify-center hover:bg-orange/20 transition-colors" aria-label="Email">
              <EmailIcon className="w-4 h-4" />
            </a>
            <a href="tel:+13234232594" className="w-9 h-9 rounded-full bg-navy/10 dark:bg-offwhite/10 flex items-center justify-center hover:bg-orange/20 transition-colors" aria-label="Phone">
              <PhoneIcon className="w-4 h-4" />
            </a>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-offwhite/95 dark:bg-navy/95 backdrop-blur-sm border-b border-navy/10 dark:border-offwhite/10 transition-all duration-300 h-20
        lg:sticky lg:h-screen lg:w-96 xl:w-[32rem] lg:border-b-0 lg:border-r lg:dark:border-offwhite/10"
    >
      <div className={`h-full flex items-center justify-between px-6 transition-all duration-300
        lg:flex-col lg:items-end lg:justify-between lg:py-20 lg:px-12`}>
        {/* Name and social icons */}
        <div className="flex items-center justify-between lg:block w-full">
          <div className="lg:text-right">
            <h1 className="font-bold text-3xl lg:text-4xl transition-all duration-300">
              Jacob Haile
            </h1>
            <p className="text-sm text-navy/70 dark:text-offwhite/70 lg:text-base lg:mt-1">
              Staff Engineer
            </p>
          </div>
          
          {/* Social icons */}
        <div className="flex gap-3 lg:mt-4 lg:justify-end">
          <a href="mailto:jacobhaile@gmail.com" className="w-9 h-9 rounded-full bg-navy/10 dark:bg-offwhite/10 flex items-center justify-center hover:bg-orange/20 transition-colors" aria-label="Email">
            <EmailIcon className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/in/jacobhaile" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-navy/10 dark:bg-offwhite/10 flex items-center justify-center hover:bg-orange/20 transition-colors" aria-label="LinkedIn">
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a href="https://github.com/jacobhaile" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-navy/10 dark:bg-offwhite/10 flex items-center justify-center hover:bg-orange/20 transition-colors" aria-label="GitHub">
            <GitHubIcon className="w-4 h-4" />
          </a>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden lg:block lg:text-right">
          <ul className="space-y-4">
            <li>
              <a 
                href="#about" 
                className={`text-lg hover:text-orange transition-all duration-200 inline-block relative
                  ${activeSection === 'about' ? 'text-orange' : ''}
                `}
              >
                about
                <span 
                  className={`absolute left-0 bottom-0 h-0.5 bg-orange transition-all duration-300 ${
                    activeSection === 'about' ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className={`text-lg hover:text-orange transition-all duration-200 inline-block relative
                  ${activeSection === 'experience' ? 'text-orange' : ''}
                `}
              >
                experience
                <span 
                  className={`absolute left-0 bottom-0 h-0.5 bg-orange transition-all duration-300 ${
                    activeSection === 'experience' ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            </li>
            <li>
              <a 
                href="#education" 
                className={`text-lg hover:text-orange transition-all duration-200 inline-block relative
                  ${activeSection === 'education' ? 'text-orange' : ''}
                `}
              >
                education
                <span 
                  className={`absolute left-0 bottom-0 h-0.5 bg-orange transition-all duration-300 ${
                    activeSection === 'education' ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            </li>
            <li>
              <a 
                href="#notable-work" 
                className={`text-lg hover:text-orange transition-all duration-200 inline-block relative
                  ${activeSection === 'notable-work' ? 'text-orange' : ''}
                `}
              >
                notable work
                <span 
                  className={`absolute left-0 bottom-0 h-0.5 bg-orange transition-all duration-300 ${
                    activeSection === 'notable-work' ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
