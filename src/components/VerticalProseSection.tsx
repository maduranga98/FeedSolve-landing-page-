import { Check, X } from "lucide-react";

export interface ContrastColumn {
  title: string;
  tone: "plain" | "feedsolve";
  points: string[];
}

export interface VerticalProseSectionProps {
  /** Small uppercase eyebrow above the heading. */
  label: string;
  heading: string;
  paragraphs: string[];
  /** Optional two-column "them vs. us" comparison rendered under the copy. */
  contrast?: ContrastColumn[];
  background?: string;
}

/**
 * A narrow prose block for vertical pages - used for positioning and
 * comparison copy that does not fit the template's fixed sections.
 * Injected through VerticalPage's `extraSections` prop.
 */
export default function VerticalProseSection({
  label,
  heading,
  paragraphs,
  contrast,
  background = "white",
}: VerticalProseSectionProps) {
  return (
    <section style={{ background, padding: "80px 32px" }}>
      <div className="container" style={{ maxWidth: 820 }}>
        <div className="section-label" style={{ marginBottom: 20 }}>
          {label}
        </div>
        <h2 style={{ color: "var(--navy)", marginBottom: 28 }}>{heading}</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: 16,
                lineHeight: 1.75,
                color: "var(--text)",
                margin: 0,
              }}
            >
              {p}
            </p>
          ))}
        </div>

        {contrast && contrast.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
              marginTop: 36,
            }}
          >
            {contrast.map((col) => {
              const isFeedSolve = col.tone === "feedsolve";
              return (
                <div
                  key={col.title}
                  style={{
                    background: isFeedSolve ? "var(--teal-pale)" : "var(--bg-warm)",
                    border: `1px solid ${
                      isFeedSolve ? "var(--teal)" : "var(--border)"
                    }`,
                    borderRadius: 14,
                    padding: "22px 24px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginBottom: 16,
                    }}
                  >
                    {col.title}
                  </div>
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: 12 }}
                  >
                    {col.points.map((point) => (
                      <div
                        key={point}
                        style={{
                          display: "flex",
                          gap: 10,
                          alignItems: "flex-start",
                          fontSize: 14,
                          lineHeight: 1.6,
                          color: "var(--text)",
                        }}
                      >
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                            background: isFeedSolve
                              ? "var(--teal)"
                              : "rgba(30,53,87,0.12)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginTop: 1,
                          }}
                        >
                          {isFeedSolve ? (
                            <Check size={11} color="white" />
                          ) : (
                            <X size={11} color="var(--navy)" />
                          )}
                        </div>
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
