import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import NotableWork from "@/components/NotableWork";

export default function Home() {
  return (
    <div className="lg:flex lg:min-h-screen">
      {/* Left sidebar on desktop, top on mobile */}
      <Header />
      
      {/* Right content area */}
      <main className="lg:flex-1 lg:overflow-y-auto pt-24 lg:pt-0 px-6 lg:px-12 xl:px-20 bg-stone-100 dark:bg-[#0a1428]">
        <About />
        <Experience />
        <Education />
        <NotableWork />
        <footer className="py-8 border-t border-navy/10 dark:border-offwhite/10">
          <div className="max-w-4xl mx-auto text-center text-sm text-navy/60 dark:text-offwhite/60">
            © {new Date().getFullYear()} Jacob Haile. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}

