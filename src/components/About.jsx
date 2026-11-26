function About() {
  return (
    <section className="about section" id="about">

      <div className="about-content">

        <span className="about-tag">من نحن</span>

        <h2>
          رعاية صحية أقرب إليك،
          <span> واهتمام يبدأ من منزلك</span>
        </h2>

        <p>
          Home Nursing منصة متخصصة في توفير خدمات
          التمريض المنزلي، نسعى من خلالها إلى تسهيل
          حصول المرضى على الرعاية التمريضية المناسبة
          داخل منازلهم، وتوفير تجربة أكثر راحة واهتمامًا
          لهم ولأسرهم.
        </p>

        <div className="about-points">

          <div className="about-point">
            <span>✓</span>
            <div>
              <h3>راحة المريض</h3>
              <p>الحصول على الرعاية داخل المنزل.</p>
            </div>
          </div>

          <div className="about-point">
            <span>✓</span>
            <div>
              <h3>اهتمام شخصي</h3>
              <p>الاهتمام باحتياجات كل مريض.</p>
            </div>
          </div>

          <div className="about-point">
            <span>✓</span>
            <div>
              <h3>سهولة التواصل</h3>
              <p>إمكانية طلب الخدمات والاستفسار عنها.</p>
            </div>
          </div>

        </div>

        <a href="#booking" className="main-button about-button">
          اطلب خدمتك الآن ←
        </a>

      </div>

      <div className="about-visual">

        <div className="about-box">

          <div className="about-medical-icon">✚</div>

          <h3>Home Nursing</h3>

          <p>Professional Nursing Care</p>

          <div className="about-divider"></div>

          <span className="about-message">
            لأن راحتك وصحتك تستحقان الاهتمام
          </span>

        </div>

        <div className="about-small-card">
          <span>♥</span>
          <strong>رعايتك تبدأ من المنزل</strong>
        </div>

        <div className="about-circle"></div>

      </div>

    </section>
  )
}

export default About