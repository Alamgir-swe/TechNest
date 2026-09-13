const Footer = () => {
  return (
    <footer
      id="contact"
      style={{
        background: '#0f172a',
        color: '#e2e8f0',
        padding: '3rem 2rem 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr',
          gap: '2rem',
        }}
      >
        <div>
          <h3 style={{ margin: '0 0 0.75rem', color: '#fff' }}>TechNest</h3>
          <p style={{ margin: 0, lineHeight: 1.7, color: '#cbd5e1' }}>
            We build smart digital solutions for modern businesses and ambitious ideas.
          </p>
        </div>

        <div>
          <h4 style={{ margin: '0 0 0.75rem', color: '#fff' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 1.9 }}>
            <li>Home</li>
            <li>Services</li>
            <li>Technologies</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 style={{ margin: '0 0 0.75rem', color: '#fff' }}>Contact</h4>
          <p style={{ margin: '0 0 0.4rem', color: '#cbd5e1' }}>hello@technest.com</p>
          <p style={{ margin: 0, color: '#cbd5e1' }}>+880 1234 567890</p>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '2rem auto 0',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(255,255,255,0.15)',
          textAlign: 'center',
          color: '#cbd5e1',
        }}
      >
        © 2026 TechNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
