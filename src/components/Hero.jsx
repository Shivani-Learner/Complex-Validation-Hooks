import "../styles/Hero.css";

function Hero() {
  return (
    <section
      className="hero"
      aria-labelledby="hero-title"
    >
      <div
        className="hero-background"
        aria-hidden="true"
      >
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
      </div>

      <div className="hero-container">
        <div className="hero-main">
          <div className="hero-meta">
            <span className="hero-meta-line" />

            <span>SUBSCRIPTION SERVICE</span>

            <span className="hero-meta-id">
              ENG / 76834
            </span>
          </div>

          <h1 id="hero-title">
            Complex validation,
            <span>beautifully simplified.</span>
          </h1>

          <p className="hero-description">
            A structured validation workspace designed
            to make complex subscription workflows
            faster, clearer, and more reliable.
          </p>

          <div className="hero-actions">
            <a
              href="#validation"
              className="hero-primary"
            >
              <span>Begin validation</span>

              <span
                className="hero-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </a>

            <a
              href="#workflow"
              className="hero-secondary"
            >
              Explore workflow
            </a>
          </div>
        </div>

        <div
          className="hero-system-card"
          aria-label="Validation system overview"
        >
          <div className="system-card-top">
            <div>
              <span className="system-label">
                VALIDATION CORE
              </span>

              <strong>CV / 01</strong>
            </div>

            <span className="system-live">
              <i aria-hidden="true" />
              LIVE
            </span>
          </div>

          <div className="system-visual">
            <div className="system-ring system-ring-one" />
            <div className="system-ring system-ring-two" />
            <div className="system-ring system-ring-three" />

            <div className="system-core">
              <span>CV</span>
            </div>

            <div className="system-line system-line-one" />
            <div className="system-line system-line-two" />
            <div className="system-line system-line-three" />
          </div>

          <div className="system-stats">
            <div>
              <span>INPUT</span>
              <strong>PROTECTED</strong>
            </div>

            <div>
              <span>LOGIC</span>
              <strong>READY</strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong>100%</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="hero-bottom-item">
          <span>01</span>
          <p>Structured input</p>
        </div>

        <div className="hero-bottom-item">
          <span>02</span>
          <p>Smart validation</p>
        </div>

        <div className="hero-bottom-item">
          <span>03</span>
          <p>Secure review</p>
        </div>

        <div className="hero-scroll">
          <span>SCROLL TO VALIDATE</span>
          <span
            className="hero-scroll-line"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;