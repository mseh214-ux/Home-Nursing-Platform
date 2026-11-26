import { services } from '../data/services'

function Services() {
  return (
    <section className="services section" id="services">

      <div className="section-title">
        <span className="services-tag">خدماتنا الطبية</span>

        <h2>رعاية تمريضية متكاملة في منزلك</h2>

        <p>
          نوفر مجموعة متنوعة من الخدمات التمريضية
          لمساعدتك أنت وأسرتك على الحصول على الرعاية
          الصحية المناسبة بكل راحة واهتمام.
        </p>
      </div>

      <div className="services-grid">

        {services.map((service, index) => (
          <article className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <span className="service-number">
              {String(index + 1).padStart(2, '0')}
            </span>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

            <a href="#booking" className="service-link">
              احجز هذه الخدمة
              <span>←</span>
            </a>

          </article>
        ))}

      </div>

      <div className="services-bottom">
        <p>
          هل تحتاج إلى خدمة تمريضية أخرى؟
        </p>

        <a href="#booking">
          تواصل معنا الآن
        </a>
      </div>

    </section>
  )
}

export default Services