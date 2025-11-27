interface Job {
  title: string;
  company: string;
  period: string;
  summary: string;
}

const jobs: Job[] = [
  {
    title: 'Staff Engineer',
    company: 'Endpoint',
    period: 'Aug 2021 - Present',
    summary: 'Designed and planned frontend and backend work around tasks, a core event-driven service powering millions of operational tasks, which served as the basis for workflows and several other instrumental services. Modernized the frontend stack by adopting Next.js, introducing SSR and optimizing page performance with persisted state across page navigation. Served as subject matter expert for the company\'s Next.js clients, NestJS BFF, and component library.',
  },
  {
    title: 'Senior Front End Engineer',
    company: 'PatientPop',
    period: 'Oct 2019 - Jul 2021',
    summary: 'Led frontend redesign of appointment scheduling UI using Vue and Vuex, significantly improving page load times and user satisfaction. Built a frontend appointment scheduling conflict engine to alert users of occupied appointments within the scheduling form. Developed and expanded self-service flows, contributing to reducing manual call-center workload by 10 hours per week.',
  },
  {
    title: 'Front End Developer',
    company: 'Meredith',
    period: 'Jan 2019 - Oct 2019',
    summary: 'Introduced modern tooling including webpack, React, and Next.js to a legacy codebase, bringing contemporary development practices to the team. Delivered a commerce project 2.5x faster than planned by recommending and implementing the company\'s first Next.js project, demonstrating the value of modern frameworks.',
  },
  {
    title: 'Software Engineer',
    company: 'Reddit',
    period: 'July 2017 - Aug 2018',
    summary: 'Built a new onboarding flow for the legacy site, introducing modern functionality while ensuring broad support for a variety of web browsers. Developed a personalized email digest system that scaled to deliver to over 100,000+ users per week, improving user engagement and retention.',
  },
  {
    title: 'Web Developer',
    company: '23andMe',
    period: 'May 2014 - July 2017',
    summary: 'Led mobile-first frontend implementation of the full redesign of the logged-in experience, ensuring responsive and accessible interfaces across devices. Created interactive genome visualizations and custom UI widgets using Backbone, JavaScript, and Sass, making complex genetic data accessible to users.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal mb-12 pb-2 border-b-2 border-navy dark:border-offwhite">
          experience
        </h2>
        <div className="space-y-12">
          {jobs.map((job, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-xl md:text-2xl font-semibold text-right">
                {job.title}
              </h3>
              <div className="flex items-baseline justify-between">
                <h4 className="text-lg md:text-xl font-medium text-orange">
                  {job.company}
                </h4>
                <span className="text-sm md:text-base text-navy/60 dark:text-offwhite/60">
                  {job.period}
                </span>
              </div>
              <p className="text-base md:text-lg leading-relaxed">
                {job.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

