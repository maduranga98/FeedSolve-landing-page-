import type { Metadata } from "next";
import blogData from "@/data/blog.json";
import BlogPostClient from "./BlogPostClient";
import { breadcrumbJsonLd } from "@/lib/seo";
import { hreflangForPath } from "@/lib/seo/hreflang";
import { getNeighbourPosts, getRelatedPosts, getSolutionPage } from "@/lib/blog/related";

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
   // Only posts with a Portuguese equivalent carry hreflang.
   languages: hreflangForPath(withTrailingSlash(blog.meta.slug)),
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

 // Two link sets per post: topical neighbours (keeps each cluster linked to
 // itself) plus id neighbours (guarantees every post some inbound links).
 // See src/lib/blog/related.ts.
 const relatedPosts = getRelatedPosts(blog, blogData);
 const morePosts = getNeighbourPosts(blog, blogData, relatedPosts);
 const solution = getSolutionPage(blog);
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
   name: blog.meta.author_name ?? "FeedSolve Team",
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

 // FAQPage structured data for posts that end with an FAQ section, so
 // Google can show FAQ rich results and match question-form queries.
 type FaqEntry = { question: string; answer: string };
 const faqSection = (
  blog.content.sections as { heading: string; faqs?: FaqEntry[] }[]
 ).find((s) => s.heading.startsWith("H2: FAQ") && Array.isArray(s.faqs));
 const faqJsonLd = faqSection?.faqs
  ? {
     "@context": "https://schema.org",
     "@type": "FAQPage",
     mainEntity: faqSection.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
     })),
    }
  : null;

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
   {faqJsonLd && (
    <script
     type="application/ld+json"
     dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
    />
   )}
   <BlogPostClient blog={blog} relatedPosts={relatedPosts} morePosts={morePosts} solution={solution} />
  </>
 );
}
