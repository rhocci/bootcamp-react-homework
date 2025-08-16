export default function ListSection({ title, children }) {
  return (
    <section className="list-section">
      <h2>{title}</h2>
      <ul className="list">{children}</ul>
    </section>
  );
}
