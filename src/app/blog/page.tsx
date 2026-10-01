import blogData from "@/data/blog.json";
import { JsonLdScript } from "@/components/JsonLd";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";
import { generatePageMetadata } from "@/lib/seo/metadata";
import BlogHubClient from "./BlogHubClient";

export const metadata = generatePageMetadata({
 title: "Blog — Insights on Feedback & Operations",
 description:
  "Practical guides on complaint management, customer feedback, QR code surveys and suggestion boxes for small businesses, restaurants and operations teams.",
 path: "/blog/",
});

export default function BlogPage() {
 // Only what the listing needs - the full posts (and their editorial notes)
 // stay on the server.
 const blogs = blogData.map((blog) => ({
  id: blog.id,
  title: blog.meta.title,
  slug: blog.meta.slug,
  description: blog.meta.meta_description,
  datePublished: blog.meta.date_published,
 }));

 return (
  <>
   <JsonLdScript
    data={breadcrumbJsonLd([
     { name: "Home", url: `${SITE_URL}/` },
     { name: "Blog", url: `${SITE_URL}/blog/` },
    ])}
   />
   <BlogHubClient blogs={blogs} />
  </>
 );
}
