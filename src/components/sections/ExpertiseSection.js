import { Sparkles } from 'lucide-react';

export default function ExpertiseSection() {
  const expertiseItems = [
    {
      title: 'Branding',
      description:
        'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.',
    },
    {
      title: 'UI Design',
      description:
        'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.',
    },
    {
      title: 'UX Design',
      description:
        'I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements',
    },
    {
      title: 'Development',
      description:
        'I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach. I employ it to produce safe, top-notch personalized websites.',
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* heading */}
        <div className="flex items-center gap-4 mb-16">
          <Sparkles className="w-8 h-8" />
          <h2 className="text-4xl md:text-5xl font-bold">Expertise</h2>
        </div>

        {/* cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {expertiseItems.map((item) => (
            <div key={item.title} className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span className="text-2xl">■</span>
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
