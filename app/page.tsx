import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import NotableWork from "@/components/NotableWork";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <NotableWork />
        <Contact />
      </main>
      <footer className="py-8 px-4 border-t border-navy/10 dark:border-offwhite/10">
        <div className="max-w-4xl mx-auto text-center text-sm text-navy/60 dark:text-offwhite/60">
          © {new Date().getFullYear()} Jacob Haile. All rights reserved.
        </div>
      </footer>
    </>
  );
}

