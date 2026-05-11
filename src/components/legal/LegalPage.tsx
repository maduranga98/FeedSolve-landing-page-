import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MarkdownRenderer from "./MarkdownRenderer";

interface LegalPageProps {
  title: string;
  description: string;
  markdown: string;
}

export default function LegalPage({ title, description, markdown }: LegalPageProps) {
  return (
    <>
      <Navbar variant="blog" />
      <main className="legal-page">
        <section className="legal-hero">
          <div className="container">
            <Link className="legal-back" href="/">← Back to home</Link>
            <span className="section-label">Legal</span>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </section>
        <section className="legal-document-section">
          <div className="legal-document">
            <MarkdownRenderer markdown={markdown} />
          </div>
        </section>
      </main>
      <Footer variant="blog" />
    </>
  );
}
