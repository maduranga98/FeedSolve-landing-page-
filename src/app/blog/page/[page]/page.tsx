import type { Metadata } from "next";
import { notFound } from "next/navigation";
import blogData from "@/data/blog.json";
import { JsonLdScript } from "@/components/JsonLd";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";
import { generatePageMetadata } from "@/lib/seo/metadata";
import BlogHubClient from "../../BlogHubClient";
import { POSTS_PER_PAGE } from "../../constants";

const TOTAL_PAGES = Math.max(1, Math.ceil(blogData.length / POSTS_PER_PAGE));

// Page 1 is /blog/ itself (src/app/blog/page.tsx). This route only covers
// page 2 and up, so every post - not just the first 6 - has a real,
// crawlable static link from somewhere in the hub, without reintroducing a
// plain-text archive list on the hub page.
export function generateStaticParams() {
 return Array.from({ length: TOTAL_PAGES - 1 }, (_, i) => ({ page: String(i + 2) }));
}

export async function generateMetadata({
 params,
}: {
 params: Promise<{ page: string }>;
}): Promise<Metadata> {
 const { page } = await params;
 return generatePageMetadata({
  title: `Blog - Page ${page}`,
  description:
   "Practical guides on complaint management, customer feedback, QR code surveys and suggestion boxes for small businesses, restaurants and operations teams.",
  path: `/blog/page/${page}/`,
 });
}

export default async function BlogPageN({ params }: { params: Promise<{ page: string }> }) {
 const { page } = await params;
 const pageNum = Number(page);

 if (!Number.isInteger(pageNum) || pageNum < 2 || pageNum > TOTAL_PAGES) {
  notFound();
 }

 // Same minimal projection as src/app/blog/page.tsx.
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
     { name: `Page ${pageNum}`, url: `${SITE_URL}/blog/page/${pageNum}/` },
    ])}
   />
   <BlogHubClient blogs={blogs} initialPage={pageNum} />
  </>
 );
}
