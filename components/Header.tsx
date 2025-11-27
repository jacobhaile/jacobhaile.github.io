'use client';

import { useEffect, useState } from 'react';

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
    const sections = ['about', 'experience', 'education', 'notable-work', 'contact'];
    
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
          <div className="lg:text-right">
            <h1 className="font-bold text-3xl lg:text-4xl">Jacob Haile</h1>
            <p className="text-sm text-navy/70 dark:text-offwhite/70 lg:text-base lg:mt-1">Staff Engineer</p>
            <div className="hidden lg:flex gap-3 mt-4 lg:justify-end">
              <a href="#" className="w-10 h-10 rounded-full bg-navy/10 dark:bg-offwhite/10 flex items-center justify-center text-xl hover:bg-orange/20 transition-colors">
                🔗
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy/10 dark:bg-offwhite/10 flex items-center justify-center text-xl hover:bg-orange/20 transition-colors">
                💼
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy/10 dark:bg-offwhite/10 flex items-center justify-center text-xl hover:bg-orange/20 transition-colors">
                📧
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy/10 dark:bg-offwhite/10 flex items-center justify-center text-xl hover:bg-orange/20 transition-colors">
                📱
              </a>
            </div>
          </div>
          <div className="flex lg:hidden gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-navy/10 dark:bg-offwhite/10 flex items-center justify-center text-lg hover:bg-orange/20 transition-colors">
              🔗
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-navy/10 dark:bg-offwhite/10 flex items-center justify-center text-lg hover:bg-orange/20 transition-colors">
              💼
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-navy/10 dark:bg-offwhite/10 flex items-center justify-center text-lg hover:bg-orange/20 transition-colors">
              📧
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-navy/10 dark:bg-offwhite/10 flex items-center justify-center text-lg hover:bg-orange/20 transition-colors">
              📱
            </a>
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
        <div className="lg:text-right">
          <h1 className="font-bold text-3xl lg:text-4xl transition-all duration-300">
            Jacob Haile
          </h1>
          <p className="text-sm text-navy/70 dark:text-offwhite/70 lg:text-base lg:mt-1">
            Staff Engineer
          </p>
          
          {/* Desktop social icons - below subtitle */}
          <div className="hidden lg:flex gap-3 mt-4 lg:justify-end">
            <a href="#" className="w-10 h-10 rounded-full bg-navy/10 dark:bg-offwhite/10 flex items-center justify-center text-xl hover:bg-orange/20 transition-colors">
              🔗
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-navy/10 dark:bg-offwhite/10 flex items-center justify-center text-xl hover:bg-orange/20 transition-colors">
              💼
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-navy/10 dark:bg-offwhite/10 flex items-center justify-center text-xl hover:bg-orange/20 transition-colors">
              📧
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-navy/10 dark:bg-offwhite/10 flex items-center justify-center text-xl hover:bg-orange/20 transition-colors">
              📱
            </a>
          </div>
        </div>
        
        {/* Mobile social icons - right aligned */}
        <div className="flex lg:hidden gap-3">
          <a href="#" className="w-9 h-9 rounded-full bg-navy/10 dark:bg-offwhite/10 flex items-center justify-center text-lg hover:bg-orange/20 transition-colors">
            🔗
          </a>
          <a href="#" className="w-9 h-9 rounded-full bg-navy/10 dark:bg-offwhite/10 flex items-center justify-center text-lg hover:bg-orange/20 transition-colors">
            💼
          </a>
          <a href="#" className="w-9 h-9 rounded-full bg-navy/10 dark:bg-offwhite/10 flex items-center justify-center text-lg hover:bg-orange/20 transition-colors">
            📧
          </a>
          <a href="#" className="w-9 h-9 rounded-full bg-navy/10 dark:bg-offwhite/10 flex items-center justify-center text-lg hover:bg-orange/20 transition-colors">
            📱
          </a>
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
            <li>
              <a 
                href="#contact" 
                className={`text-lg hover:text-orange transition-all duration-200 inline-block relative
                  ${activeSection === 'contact' ? 'text-orange' : ''}
                `}
              >
                contact
                <span 
                  className={`absolute left-0 bottom-0 h-0.5 bg-orange transition-all duration-300 ${
                    activeSection === 'contact' ? 'w-full' : 'w-0'
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
