import type { Metadata } from "next";
import blogData from "@/data/blog.json";
import BlogPostClient from "./BlogPostClient";
import { breadcrumbJsonLd } from "@/lib/seo";

const SITE_URL = "https://feedsolve.com";
const withTrailingSlash = (path: string) => (path === "/" ? path : `${path.replace(/\/$/, "")}/`);
const absoluteUrl = (path: string) => `${SITE_URL}${withTrailingSlash(path)}`;

export function generateStaticParams() {
 return blogData.map((blog) => ({
  slug: blog.meta.slug.replace("/blog/", ""),
 }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
 const { slug } = await params;
 const blog = blogData.find((b) => b.meta.slug === `/blog/${slug}`);

 if (!blog) {
  return {
   title: "Post not found",
  };
 }

 return {
  title: blog.meta.title,
  description: blog.meta.meta_description,
  openGraph: {
   title: blog.meta.title,
   description: blog.meta.meta_description,
   url: absoluteUrl(blog.meta.slug),
   siteName: "FeedSolve",
   locale: "en_US",
   type: "article",
   images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
   card: "summary_large_image",
   title: blog.meta.title,
   description: blog.meta.meta_description,
   images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
   index: true,
   follow: true,
  },
  alternates: {
   canonical: absoluteUrl(blog.meta.slug),
   languages: {
    "en-GB": absoluteUrl(blog.meta.slug),
    "en-AU": absoluteUrl(blog.meta.slug),
    "en-US": absoluteUrl(blog.meta.slug),
    "en": absoluteUrl(blog.meta.slug),
    "x-default": absoluteUrl(blog.meta.slug),
   },
  },
 };
}

export default async function BlogSlugPage({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 const blog = blogData.find((b) => b.meta.slug === `/blog/${slug}`);

 if (!blog) {
  return (
   <div style={{ maxWidth: 700, margin: "120px auto", textAlign: "center", padding: 40 }}>
    <h1>Post not found</h1>
    <p>The blog post you&apos;re looking for doesn&apos;t exist.</p>
   </div>
  );
 }

 // Spread internal link equity: pick the 3 posts with the next ids
 // (wrapping around) instead of always the first 3. This gives every
 // post inbound links from its neighbours rather than concentrating
 // all "related" links on ids 1-3.
 const ordered = [...blogData].sort((a, b) => a.id - b.id);
 const currentIndex = ordered.findIndex((b) => b.id === blog.id);
 const otherPosts = [1, 2, 3].map(
  (offset) => ordered[(currentIndex + offset) % ordered.length]
 );
 const publishedDate = blog.meta.date_published;
 const modifiedDate = blog.meta.date_modified;

 const keywords = [blog.meta.primary_keyword, ...(blog.meta.secondary_keywords ?? [])]
  .filter(Boolean)
  .join(", ");

 const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: blog.meta.title,
  description: blog.meta.meta_description,
  url: absoluteUrl(blog.meta.slug),
  image: [`${SITE_URL}/og-image.png`],
  inLanguage: "en",
  keywords,
  datePublished: publishedDate,
  dateModified: modifiedDate,
  author: {
   "@type": "Person",
   name: "FeedSolve Team",
   url: `${SITE_URL}/authors/feedsolve-team/`,
  },
  publisher: {
   "@type": "Organization",
   name: "FeedSolve",
   url: `${SITE_URL}/`,
   logo: {
    "@type": "ImageObject",
    url: "https://feedsolve.com/logo.webp",
   },
  },
  mainEntityOfPage: {
   "@type": "WebPage",
   "@id": absoluteUrl(blog.meta.slug),
  },
 };

 const breadcrumb = breadcrumbJsonLd([
  { name: "Home", url: `${SITE_URL}/` },
  { name: "Blog", url: `${SITE_URL}/blog/` },
  { name: blog.meta.title, url: absoluteUrl(blog.meta.slug) },
 ]);

 return (
  <>
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
   />
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
   />
   <BlogPostClient blog={blog} otherPosts={otherPosts} />
  </>
 );
}
