/**
 * Renders one or more JSON-LD blocks. Each object gets its own <script> tag so
 * a malformed entry cannot invalidate the rest of the page's structured data.
 */
export function JsonLdScript({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

export default JsonLdScript;
