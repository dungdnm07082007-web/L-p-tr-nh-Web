export default function Section({ title, children }) {
  return (
    <section style={{ marginBottom: '24px' }}>
      {title && <h3 style={{ marginBottom: '12px', color: '#333' }}>{title}</h3>}
      {children}
    </section>
  );
}