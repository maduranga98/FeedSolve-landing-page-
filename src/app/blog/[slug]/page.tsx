import type { Metadata } from "next";
import blogData from "@/data/blog.json";
import BlogPostClient from "./BlogPostClient";

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
      title: "Post not found — FeedSolve Blog",
    };
  }

  return {
    title: `${blog.meta.title} — FeedSolve Blog`,
    description: blog.meta.meta_description,
    openGraph: {
      title: blog.meta.title,
      description: blog.meta.meta_description,
      url: `https://feedsolve.com${blog.meta.slug}`,
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
      canonical: `https://feedsolve.com${blog.meta.slug}`,
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.meta.title,
    description: blog.meta.meta_description,
    url: `https://feedsolve.com${blog.meta.slug}`,
    datePublished: (blog.content as any).date_published ?? "2026-04-01",
    dateModified: (blog.content as any).date_modified ?? "2026-04-01",
    author: {
      "@type": "Organization",
      name: "FeedSolve Team",
      url: "https://feedsolve.com",
    },
    publisher: {
      "@type": "Organization",
      name: "FeedSolve",
      url: "https://feedsolve.com",
      logo: {
        "@type": "ImageObject",
        url: "https://feedsolve.com/logo.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://feedsolve.com${blog.meta.slug}`,
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
