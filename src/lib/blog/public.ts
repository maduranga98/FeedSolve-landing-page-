// The public shape of a blog post. blog.json also carries editorial-only data
// (writer_notes, target_audience, search_intent, funnel_stage, content_type,
// target_word_count, internal_links). Anything handed to a client component is
// serialized into the public HTML, so posts are reduced to this shape first.

import blogData from "@/data/blog.json";

type RawPost = (typeof blogData)[number];

export type BlogFaq = { question: string; answer: string };

export type BlogSection = {
  heading: string;
  key_points?: string[];
  body?: string[];
  examples?: string[];
  checklist?: string[];
  comparison_table?: { columns: string[]; rows: string[][] };
  faqs?: BlogFaq[];
};

export type PublicPost = {
  id: number;
  meta: {
    title: string;
    slug: string;
    primary_keyword: string;
    secondary_keywords: string[];
    meta_description: string;
    date_published: string;
    date_modified: string;
    author_name?: string;
  };
  /** Derived on the server from target_word_count, e.g. "5 min". */
  readTime: string;
  content: {
    quick_answer_box: string;
    h1: string;
    key_takeaways?: string[];
    sections: BlogSection[];
    faq?: BlogFaq[];
    /** Rendered as the "Further reading" list; never sent to client components. */
    internal_links?: { anchor: string; url: string }[];
  };
};

function readTime(targetWordCount: string): string {
  const avg = parseInt(targetWordCount.replace(/[^0-9]/g, "").slice(0, 4));
  return `${Math.max(3, Math.round(avg / 300))} min`;
}

export function toPublicPost(post: RawPost): PublicPost {
  const { meta, content } = post as unknown as {
    meta: RawPost["meta"];
    content: PublicPost["content"] & { writer_notes?: string };
  };
  return {
    id: post.id,
    readTime: readTime(meta.target_word_count),
    meta: {
      title: meta.title,
      slug: meta.slug,
      primary_keyword: meta.primary_keyword,
      secondary_keywords: meta.secondary_keywords ?? [],
      meta_description: meta.meta_description,
      date_published: meta.date_published,
      date_modified: meta.date_modified,
      author_name: meta.author_name,
    },
    content: {
      quick_answer_box: content.quick_answer_box,
      h1: content.h1,
      key_takeaways: content.key_takeaways,
      sections: content.sections,
      faq: content.faq,
      internal_links: content.internal_links,
    },
  };
}
