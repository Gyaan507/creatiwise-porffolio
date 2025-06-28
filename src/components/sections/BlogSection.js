import { Sparkles } from "lucide-react"
import Button from "../ui/Button" 

export default function BlogSection() {
  const blogPosts = [
    {
      date: "Nov 9, 2023",
      title: "How UX works in web",
      tags: ["UI", "UX"],
      image: "/images/fortknox-app.png",
    },
    {
      date: "Aug 18, 2023",
      title: "Case study - Analysis Application.",
      tags: ["DESIGN", "PRINT"],
      image: "/images/analysis-app.png",
    },
    {
      date: "Feb 16, 2023",
      title: "3 ways to develop your skill",
      tags: ["FIGMA", "WEB"],
      image: "/images/zenocide-app.png",
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <Sparkles className="w-8 h-8" />
            <h2 className="text-4xl md:text-5xl font-bold">Blog</h2>
          </div>
          <a href="#" className="text-white underline hover:text-gray-300">
            view all
          </a>
        </div>

        {/* posts */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.title} className="flex flex-col lg:flex-row gap-8 items-start">
              {/* thumbnail */}
              <div className="flex-shrink-0">
                <div className="bg-gray-200 rounded-2xl w-full lg:w-80 aspect-video">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* details */}
              <div className="flex-1 space-y-4">
                <time className="text-gray-400 text-lg">{post.date}</time>
                <h3 className="text-2xl md:text-3xl font-bold">{post.title}</h3>
                <div className="flex gap-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-4 py-2 border border-gray-600 text-white rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* action */}
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 flex-shrink-0">
                Read
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
