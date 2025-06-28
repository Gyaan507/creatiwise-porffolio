import { Sparkles } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Lead Product Designer',
      company: 'Fortknox',
      period: 'Mar 2022 - Oct 2023',
    },
    {
      title: 'Intern Designer',
      company: 'OmniSafe',
      period: 'Mar 2022 - Oct 2023',
    },
    {
      title: 'UI Designer',
      company: 'Doradesign',
      period: 'Mar 2022 - Oct 2023',
    },
    {
      title: 'Frontend Developer',
      company: 'OpacityAuthor',
      period: 'Mar 2022 - Oct 2023',
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* heading */}
        <div className="flex items-center gap-4 mb-16">
          <Sparkles className="w-8 h-8" />
          <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
        </div>

        {/* timeline / list */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-gray-800"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-0">
                {exp.title}
              </h3>

              <div className="text-right">
                <div className="text-xl md:text-2xl font-bold mb-1">
                  {exp.company}
                </div>
                <div className="text-gray-400">{exp.period}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
