import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BrArticle from "@/components/br/BrArticle";
import { brMetadata } from "@/components/br/brMetadata";
import { BR_POSTS, brPostPath } from "@/data/brBlog";

export const dynamicParams = false;

export function generateStaticParams() {
  return BR_POSTS.map((p) => ({ slug: p.slug }));
}

const findPost = async (params: Promise<{ slug: string }>) => {
  const { slug } = await params;
  return BR_POSTS.find((p) => p.slug === slug);
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = await findPost(params);
  if (!post) return {};
  const meta = brMetadata({
    title: post.title,
    description: post.description,
    path: brPostPath(post),
    cluster: post.cluster,
  });
  return { ...meta, openGraph: { ...meta.openGraph, type: "article" } };
}

export default async function BrBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = await findPost(params);
  if (!post) notFound();
  return <BrArticle post={post} />;
}
