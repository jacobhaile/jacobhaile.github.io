export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Jacob Haile
        </h1>
        <h2 className="text-2xl md:text-3xl text-navy/70 dark:text-offwhite/70 mb-6">
          Staff Engineer
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Software engineer with 10+ years of experience building performant, scalable applications. 
          With deep experience across stacks, team coordination and collaboration, and mentoring engineers, 
          web development acts as both my hobby and profession.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-orange text-white rounded-lg hover:bg-orange/90 transition-colors font-medium"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}

