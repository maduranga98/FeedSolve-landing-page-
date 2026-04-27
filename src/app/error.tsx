"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
          fontSize: 48,
          fontWeight: 800,
          color: "var(--navy)",
          fontFamily: "var(--font-display)",
          margin: 0,
        }}
      >
        Something went wrong
      </h1>
      <p
        style={{
          fontSize: 16,
          color: "var(--text-mid)",
          maxWidth: 400,
          margin: "12px 0 28px",
        }}
      >
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "12px 24px",
          background: "var(--teal)",
          color: "white",
          border: "none",
          borderRadius: "var(--radius)",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Try Again
      </button>
    </div>
  );
}
