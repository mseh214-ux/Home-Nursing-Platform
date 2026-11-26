import { useState } from 'react'
import { services } from '../data/services'

function Booking() {

  const WHATSAPP_NUMBER = '201021323348'

  const [loading, setLoading] = useState(false)

  function handleBooking(e) {
    e.preventDefault()

    if (loading) return

    const form = e.currentTarget
    const data = new FormData(form)

    const name = data.get('name')
    const phone = data.get('phone')
    const service = data.get('service')
    const address = data.get('address')
    const date = data.get('date')
    const time = data.get('time')
    const notes = data.get('notes')

    setLoading(true)

    const message = `طلب حجز خدمة تمريض منزلي
------------------------

الاسم: ${name}
رقم الهاتف: ${phone}
الخدمة المطلوبة: ${service}
العنوان: ${address}
التاريخ: ${date}
الوقت: ${time}

تفاصيل إضافية:
${notes || 'لا توجد تفاصيل إضافية'}
`

    const whatsappURL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

    window.location.href = whatsappURL
  }

  return (
    <section className="booking section" id="booking">

      <div className="section-title">
        <span>احجز الآن</span>

        <h2>اطلب خدمتك التمريضية</h2>

        <p>
          املأ بياناتك وسنتواصل معك لتأكيد تفاصيل الخدمة
        </p>
      </div>

      <div className="booking-container">

        <div className="booking-info">

          <div className="booking-info-icon">✚</div>

          <h3>نحن هنا لمساعدتك</h3>

          <p>
            احصل على الرعاية التمريضية التي تحتاجها
            داخل منزلك. أرسل طلبك وسنتواصل معك
            لمناقشة التفاصيل وتأكيد الموعد.
          </p>

          <div className="booking-info-item">
            <span>✓</span>
            سهولة طلب الخدمة
          </div>

          <div className="booking-info-item">
            <span>✓</span>
            تحديد الموعد المناسب
          </div>

          <div className="booking-info-item">
            <span>✓</span>
            تأكيد تفاصيل الطلب
          </div>

        </div>

        <form
          className="booking-form"
          onSubmit={handleBooking}
        >

          <h3>بيانات طلب الحجز</h3>

          <div className="booking-field">
            <label htmlFor="booking-name">
              الاسم بالكامل
            </label>

            <input
              id="booking-name"
              type="text"
              name="name"
              placeholder="اكتب اسمك بالكامل"
              required
            />
          </div>

          <div className="booking-field">
            <label htmlFor="booking-phone">
              رقم الهاتف
            </label>

            <input
              id="booking-phone"
              type="tel"
              name="phone"
              placeholder="01xxxxxxxxx"
              pattern="01[0125][0-9]{8}"
              title="اكتب رقم هاتف مصري صحيح مكون من 11 رقمًا"
              required
            />
          </div>

          <div className="booking-field">
            <label htmlFor="booking-service">
              الخدمة المطلوبة
            </label>

            <select
              id="booking-service"
              name="service"
              required
              defaultValue=""
            >
              <option value="" disabled>
                اختر الخدمة المطلوبة
              </option>

              {services.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title}
                </option>
              ))}

            </select>
          </div>

          <div className="booking-field">
            <label htmlFor="booking-address">
              عنوان المريض
            </label>

            <input
              id="booking-address"
              type="text"
              name="address"
              placeholder="المحافظة - المنطقة - العنوان بالتفصيل"
              required
            />
          </div>

          <div className="booking-row">

            <div className="booking-field">
              <label htmlFor="booking-date">
                تاريخ الخدمة
              </label><input
                id="booking-date"
                type="date"
                name="date"
                min={new Date().toLocaleDateString('en-CA')}
                required
              />
            </div>

            <div className="booking-field">
              <label htmlFor="booking-time">
                الوقت المناسب
              </label>

              <input
                id="booking-time"
                type="time"
                name="time"
                required
              />
            </div>

          </div>

          <div className="booking-field">
            <label htmlFor="booking-notes">
              تفاصيل إضافية (اختياري)
            </label>

            <textarea
              id="booking-notes"
              name="notes"
              rows="4"
              placeholder="اكتب أي تفاصيل إضافية عن الخدمة المطلوبة..."
            />
          </div>

          <button
            type="submit"
            className="main-button booking-submit"
            disabled={loading}
          >
            {loading
              ? 'جاري فتح واتساب...'
              : 'إرسال طلب الحجز عبر واتساب'}

            <span> ← </span>
          </button>

          <p className="booking-note">
            سيتم فتح واتساب لإرسال تفاصيل طلبك.
          </p>

        </form>

      </div>

    </section>
  )
}

export default Booking