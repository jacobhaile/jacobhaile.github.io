export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal mb-12 pb-2 border-b-2 border-navy dark:border-offwhite">
          contact
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold mb-2 text-navy/60 dark:text-offwhite/60 uppercase tracking-wide">
                Email
              </h3>
              <a
                href="mailto:jacobhaile@gmail.com"
                className="text-lg md:text-xl text-orange hover:underline"
              >
                jacobhaile@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2 text-navy/60 dark:text-offwhite/60 uppercase tracking-wide">
                Phone
              </h3>
              <a
                href="tel:+13234232594"
                className="text-lg md:text-xl text-orange hover:underline"
              >
                (323) 423-2594
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold mb-2 text-navy/60 dark:text-offwhite/60 uppercase tracking-wide">
                GitHub
              </h3>
              <a
                href="https://github.com/jacobhaile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl text-orange hover:underline"
              >
                github.com/jacobhaile
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2 text-navy/60 dark:text-offwhite/60 uppercase tracking-wide">
                LinkedIn
              </h3>
              <a
                href="https://linkedin.com/in/jacobhaile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl text-orange hover:underline"
              >
                linkedin.com/in/jacobhaile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

