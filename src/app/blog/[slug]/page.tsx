import blogData from "@/data/blog.json";
import BlogPostClient from "./BlogPostClient";

export function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.meta.slug.replace("/blog/", ""),
  }));
}

export default function BlogSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  return <BlogPostClient params={params} />;
}
