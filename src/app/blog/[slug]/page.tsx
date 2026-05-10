import type { Metadata } from "next";
import blogData from "@/data/blog.json";
import BlogPostClient from "./BlogPostClient";

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
  },
  twitter: {
   card: "summary_large_image",
   title: blog.meta.title,
   description: blog.meta.meta_description,
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

 const otherPosts = blogData.filter((b) => b.id !== blog.id).slice(0, 3);
 const publishedDate = new Date(Date.UTC(2025, 10 + Math.floor((blog.id - 1) / 4), ((blog.id - 1) % 4) * 6 + 3)).toISOString().slice(0, 10);
 const modifiedDate = new Date(Date.UTC(2026, 3, Math.min(28, blog.id + 1))).toISOString().slice(0, 10);

 const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: blog.meta.title,
  description: blog.meta.meta_description,
  url: absoluteUrl(blog.meta.slug),
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

 return (
  <>
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
   />
   <BlogPostClient blog={blog} otherPosts={otherPosts} />
  </>
 );
}
