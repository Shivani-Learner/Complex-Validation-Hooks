
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a
          href="#top"
          className="navbar-brand"
          aria-label="Complex Validation Hooks home"
        >
          <span
            className="brand-mark"
            aria-hidden="true"
          >
            CV
          </span>

          <span className="brand-name">
            Validation
          </span>
        </a>

        <nav
          className="nav-links"
          aria-label="Main navigation"
        >
          <a href="#validation">
            Validation
          </a>

          <a href="#security">
            Security
          </a>

          <a href="#workflow">
            Workflow
          </a>
        </nav>

        <div
          className="nav-status"
          aria-label="System status"
        >
          <span
            className="status-dot"
            aria-hidden="true"
          />

          <span>
            System operational
          </span>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
