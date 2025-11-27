const projects = [
  {
    name: 'PatientPop Appointment Scheduling Widget',
    description: 'A comprehensive appointment scheduling solution with conflict detection and self-service capabilities.',
  },
  {
    name: 'Reddit Daily Email Digest',
    description: 'Personalized email digest system delivering to 100K+ users weekly.',
  },
  {
    name: 'Reddit Onboarding Experience',
    description: 'Modern onboarding flow for old.reddit.com with broad browser support.',
  },
];

export default function NotableWork() {
  return (
    <section id="notable-work" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal mb-12 pb-2 border-b-2 border-navy dark:border-offwhite">
          notable work
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-offwhite dark:bg-navy border border-navy/10 dark:border-offwhite/10"
            >
              <h3 className="text-lg font-semibold mb-3 text-orange">
                {project.name}
              </h3>
              <p className="text-sm md:text-base leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

