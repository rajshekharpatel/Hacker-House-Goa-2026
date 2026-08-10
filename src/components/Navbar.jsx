function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <div className="nav-logo">HH</div>

        <div className="nav-brand-text">
          <strong>HACKER HOUSE</strong>
          <span>GOA · 2026</span>
        </div>
      </div>

      <div className="nav-center">
        <span>BUILDER ID</span>
        <span>FRAME GENERATOR</span>
      </div>

      <a
        href="https://hhgoa.com/"
        target="_blank"
        rel="noreferrer"
        className="nav-link"
      >
        HH GOA ↗
      </a>
    </nav>
  );
}

export default Navbar;