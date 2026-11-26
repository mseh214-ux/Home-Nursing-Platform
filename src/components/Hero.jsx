function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <span className="hero-tag">
          ✚ رعايتك الصحية تبدأ من منزلك
        </span>

        <h1>
          صحتك وراحة بالك
          <span> أولويتنا دائمًا</span>
        </h1>

        <p>
          نوفر لك خدمات تمريضية منزلية متكاملة
          على أيدي متخصصين، مع الاهتمام براحتك
          وسلامتك وتقديم الرعاية التي تستحقها
          أنت وأسرتك.
        </p>

        <div className="hero-buttons">

          <a href="#booking" className="main-button">
            احجز خدمتك الآن
            <span> ← </span>
          </a>

          <a href="#services" className="secondary-button">
            اكتشف خدماتنا
          </a>

        </div>

        <div className="hero-features">

          <div className="hero-feature">
            <span>✓</span>
            رعاية منزلية
          </div>

          <div className="hero-feature">
            <span>✓</span>
            اهتمام بالمريض
          </div>

          <div className="hero-feature">
            <span>✓</span>
            خدمات تمريضية
          </div>

        </div>

      </div>

      <div className="hero-visual">

        <div className="hero-card">

          <div className="medical-icon">✚</div>

          <h2>Home Healthcare</h2>

          <p>Professional Nursing Care</p>

          <div className="hero-card-divider"></div>

          <span>
            رعاية صحية متكاملة تصلك أينما كنت
          </span>

        </div>

        <div className="hero-floating-card">
          <span>♥</span>
          <div>
            <strong>رعايتك تهمنا</strong>
            <small>أنت وأسرتك في أيدٍ أمينة</small>
          </div>
        </div>

        <div className="hero-decoration"></div>

      </div>

    </section>
  )
}

export default Hero