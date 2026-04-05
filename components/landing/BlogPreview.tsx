import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogPreview() {
  const posts = [
    {
      title: "How to Pack Light for a Two Week European Tour",
      date: "Oct 12, 2026",
      category: "Tips",
      readTime: "5 min read",
      img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Discovering Hidden Gems in Southeast Asia",
      date: "Oct 08, 2026",
      category: "Guides",
      readTime: "8 min read",
      img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "The Future of AI in Travel Planning",
      date: "Oct 01, 2026",
      category: "Technology",
      readTime: "4 min read",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Travel Insights</h2>
            <p className="text-foreground/70 text-lg">Tips, guides, and stories from our experts.</p>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline">
            Read all posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Link href="/blog" key={i} className="group flex flex-col h-[400px] border border-foreground/10 rounded-3xl overflow-hidden hover:shadow-xl transition-all cursor-pointer bg-background block">
              <div className="h-48 w-full overflow-hidden relative">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-background/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
              </div>
              <div className="p-6 flex-1 flex flex-col bg-background">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  <span>{post.category}</span>
                  <span className="text-foreground/50">{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="mt-auto text-sm text-foreground/50">
                  {post.date}
                </div>
              </div>
              </Link>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
            Read all posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
