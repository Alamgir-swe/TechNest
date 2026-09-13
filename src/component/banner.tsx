const Banner = () => {
  return (
    <section id="home" style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, #0f172a, #1d4ed8)', color: '#fff', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Build the Future with TechNest</h1>
      <p style={{ maxWidth: '700px', margin: '0 auto 1.5rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
        Discover modern tools, creative solutions, and powerful technology services designed to help your business grow faster.
      </p>
      <button style={{ padding: '0.9rem 1.5rem', border: 'none', borderRadius: '8px', background: '#facc15', color: '#111827', fontWeight: 700, cursor: 'pointer' }}>
        Explore More
      </button>
    </section>
  );
};

export default Banner;
