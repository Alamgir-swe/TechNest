type TechItem = {
  name: string;
  description: string;
};

const techItems: TechItem[] = [
  { name: 'React', description: 'Interactive UI development with reusable components.' },
  { name: 'TypeScript', description: 'Reliable and scalable frontend engineering.' },
  { name: 'Node.js', description: 'Powerful backend solutions and APIs.' },
  { name: 'Tailwind', description: 'Fast design system styling and responsive layouts.' },
];

const TechSection = () => {
  return (
    <section id="tech" style={{ padding: '4rem 2rem', background: '#f8fafc' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>Our Technologies</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        {techItems.map((tech) => (
          <div key={tech.name} style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <h3 style={{ marginBottom: '0.6rem' }}>{tech.name}</h3>
            <p style={{ color: '#475569', lineHeight: 1.7 }}>{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechSection;
