const Nav = () => {
  return (
    <nav style={{ padding: '1rem 2rem', background: '#111827', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontWeight: 700, fontSize: '1.2rem' }}>TechNest</div>
      <div style={{ display: 'flex', gap: '1.2rem' }}>
        <a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
        <a href="#tech" style={{ color: '#fff', textDecoration: 'none' }}>Tech</a>
        <a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a>
        <a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a>
      </div>
    </nav>
  );
};

export default Nav;
