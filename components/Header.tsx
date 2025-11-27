'use client';

import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

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

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-offwhite/95 backdrop-blur-sm border-b border-navy/10 transition-all duration-300 h-20">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <h1 className="font-bold text-2xl">Jacob Haile</h1>
          <div className="w-9 h-9" />
        </div>
      </header>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-offwhite/95 dark:bg-navy/95 backdrop-blur-sm border-b border-navy/10 dark:border-offwhite/10 transition-all duration-300 ${
        isScrolled ? 'h-14' : 'h-20'
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <h1
          className={`font-bold transition-all duration-300 ${
            isScrolled ? 'text-xl' : 'text-2xl'
          }`}
        >
          Jacob Haile
        </h1>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-navy/10 dark:hover:bg-offwhite/10 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

