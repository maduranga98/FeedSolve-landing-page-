export type ComparisonRow = { label: string; left: string; right: string };

/**
 * Three-column feature comparison. `rightHeader` is the column that should read
 * as the featured one (FeedSolve). Scrolls sideways on narrow screens rather
 * than squashing the copy.
 */
export default function ComparisonTable({
  caption,
  leftHeader,
  rightHeader,
  rows,
}: {
  caption: string;
  leftHeader: string;
  rightHeader: string;
  rows: ComparisonRow[];
}) {
  return (
    <div className="cmp-table-wrap">
      <table className="cmp-table">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Feature</th>
            <th scope="col">{leftHeader}</th>
            <th scope="col" className="cmp-featured">{rightHeader}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              <td>{row.left}</td>
              <td className="cmp-featured">{row.right}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
