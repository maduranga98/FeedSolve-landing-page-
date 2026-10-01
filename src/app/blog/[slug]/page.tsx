import type { Metadata } from "next";
import blogData from "@/data/blog.json";
import BlogPostView from "./BlogPostView";
import { JsonLdScript } from "@/components/JsonLd";
import { authorJsonLd } from "@/lib/blog/authors";
import { toPublicPost, type BlogFaq } from "@/lib/blog/public";
import { breadcrumbJsonLd } from "@/lib/seo";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { hreflangForPath } from "@/lib/seo/hreflang";
import { generateOrganizationSchema } from "@/lib/seo/schema";
import { OG_IMAGE_URL, SITE_URL } from "@/lib/seo/site";
import { getNeighbourPosts, getRelatedPosts, getSolutionPage } from "@/lib/blog/related";

const withTrailingSlash = (path: string) => (path === "/" ? path : `${path.replace(/\/$/, "")}/`);
const absoluteUrl = (path: string) => `${SITE_URL}${withTrailingSlash(path)}`;

const posts = blogData.map(toPublicPost);

export function generateStaticParams() {
 return posts.map((post) => ({
  slug: post.meta.slug.replace("/blog/", ""),
 }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
 const { slug } = await params;
 const post = posts.find((p) => p.meta.slug === `/blog/${slug}`);

 if (!post) {
  return {
   title: "Post not found",
  };
 }

 const path = withTrailingSlash(post.meta.slug);
 return generatePageMetadata({
  title: post.meta.title,
  description: post.meta.meta_description,
  path,
  type: "article",
  publishedTime: post.meta.date_published,
  modifiedTime: post.meta.date_modified,
  alternates: {
   canonical: absoluteUrl(post.meta.slug),
   // Only posts with a Portuguese equivalent carry hreflang.
   languages: hreflangForPath(path),
  },
 });
}

export default async function BlogSlugPage({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 const blog = posts.find((p) => p.meta.slug === `/blog/${slug}`);

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
 const relatedPosts = getRelatedPosts(blog, posts);
 const morePosts = getNeighbourPosts(blog, posts, relatedPosts);
 const solution = getSolutionPage(blog);

 const keywords = [blog.meta.primary_keyword, ...blog.meta.secondary_keywords]
  .filter(Boolean)
  .join(", ");

 const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: blog.meta.title,
  description: blog.meta.meta_description,
  url: absoluteUrl(blog.meta.slug),
  image: [OG_IMAGE_URL],
  inLanguage: "en",
  keywords,
  datePublished: blog.meta.date_published,
  dateModified: blog.meta.date_modified,
  author: authorJsonLd(blog.meta.author_name),
  publisher: generateOrganizationSchema({ standalone: false }),
  mainEntityOfPage: {
   "@type": "WebPage",
   "@id": absoluteUrl(blog.meta.slug),
  },
 };

 // One FAQPage per post, covering every Q&A the page shows: the FAQ section
 // inside `sections` and, on the one post that also has a top-level `faq`,
 // those entries too (deduplicated by question).
 const faqs: BlogFaq[] = [];
 const seen = new Set<string>();
 for (const faq of [
  ...blog.content.sections.flatMap((s) => (s.heading.startsWith("H2: FAQ") ? s.faqs ?? [] : [])),
  ...(blog.content.faq ?? []),
 ]) {
  if (seen.has(faq.question)) continue;
  seen.add(faq.question);
  faqs.push(faq);
 }
 const faqJsonLd =
  faqs.length > 0
   ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
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
   <JsonLdScript data={faqJsonLd ? [jsonLd, breadcrumb, faqJsonLd] : [jsonLd, breadcrumb]} />
   <BlogPostView blog={blog} relatedPosts={relatedPosts} morePosts={morePosts} solution={solution} />
  </>
 );
}
