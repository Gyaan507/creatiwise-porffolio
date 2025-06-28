import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import Button from "../ui/Button" 

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
      <div className="flex items-center gap-4 mb-16">
          <Sparkles className="w-8 h-8" />
          <h2 className="text-4xl md:text-5xl font-bold">What they say</h2>
        </div>

        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="w-16 h-16 bg-orange-500 rounded-full overflow-hidden">
                <img
                  src="/images/myphoto.jpeg"
                  alt="Gyaneshwar Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-xl">Gyaneshwar Kumar</div>
                <div className="text-gray-400">eBay</div>
              </div>
            </div>

            <div className="flex-1">
              <div className="text-6xl text-gray-600 mb-4">"</div>
              <p className="text-xl md:text-2xl leading-relaxed">
                Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to
                employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood
                out to employers.
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 flex items-center justify-center">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 flex items-center justify-center">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
