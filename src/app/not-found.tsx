import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg)",
        fontFamily: "var(--font-body)",
        color: "var(--text)",
        textAlign: "center",
        padding: "0 24px",
      }}
    >
      <h1
        style={{
          fontSize: 72,
          fontWeight: 800,
          color: "var(--navy)",
          fontFamily: "var(--font-display)",
          margin: 0,
        }}
      >
        404
      </h1>
      <p
        style={{
          fontSize: 18,
          color: "var(--text-mid)",
          maxWidth: 400,
          margin: "12px 0 28px",
        }}
      >
        This page doesn&apos;t exist. Maybe the feedback was resolved and closed.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "12px 24px",
          background: "var(--teal)",
          color: "white",
          borderRadius: "var(--radius)",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
