import { Sparkles } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is your design process?",
      answer:
        "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
    },
    {
      question: "What tools and software do you use for UX design?",
      answer: "",
    },
    {
      question: "How do you measure the success of your UX designs?",
      answer: "",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-16">
          <Sparkles className="w-8 h-8" />
          <h2 className="text-4xl md:text-5xl font-bold">Frequently asked questions</h2>
        </div>

        <div className="space-y-12">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">{faq.question}</h3>
              {faq.answer && (
                <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
