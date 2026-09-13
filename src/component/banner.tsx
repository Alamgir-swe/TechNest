import bannerImage from '../assets/banner-stack.png';

const Banner = () => {
  return (
    <section
      id="home"
      style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #0f172a, #1d4ed8)',
        color: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        <div style={{ textAlign: 'left' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1.2 }}>
            Build the Future with TechNest
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 0 1.5rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Discover modern tools, creative solutions, and powerful technology services designed to help your business grow faster.
          </p>
          <button
            style={{
              padding: '0.9rem 1.5rem',
              border: 'none',
              borderRadius: '8px',
              background: '#facc15',
              color: '#111827',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Explore More
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={bannerImage}
            alt="TechNest banner illustration"
            style={{
              width: '100%',
              maxWidth: '520px',
              height: 'auto',
              borderRadius: '18px',
              boxShadow: '0 20px 40px rgba(15, 23, 42, 0.35)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
