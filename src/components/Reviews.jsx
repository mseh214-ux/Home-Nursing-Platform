import { useState, useEffect } from 'react'

function Reviews() {
  const [reviews, setReviews] = useState(() => {
  const savedReviews = localStorage.getItem('homeNursingReviews')

  return savedReviews ? JSON.parse(savedReviews) : []
})
  const [name, setName] = useState('')
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')
  const averageRating = reviews.length
  ? (
      reviews.reduce((total, review) => total + Number(review.rating), 0) /
      reviews.length
    ).toFixed(1)
  : '0.0'

const totalReviews = reviews.length
  useEffect(() => {
  localStorage.setItem('homeNursingReviews', JSON.stringify(reviews))
}, [reviews])

  function handleSubmit(e) {
    e.preventDefault()

    if (!name.trim() || !comment.trim()) {
      alert('من فضلك أكمل جميع البيانات')
      return
    }

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      rating,
      comment: comment.trim(),
    }

    setReviews([newReview, ...reviews])
    setName('')
    setRating(5)
    setComment('')

    alert('شكراً لك! تم إرسال تقييمك بنجاح')
  }

  return (
    <section className="reviews" id="reviews" dir="rtl">
      <div className="reviews-container">

        <div className="reviews-heading">
          <span>آراء عملائنا</span>
          <h2>شاركنا تجربتك معنا</h2>
          <p>
            رأيك يهمنا ويساعدنا على تقديم أفضل خدمات
            الرعاية التمريضية المنزلية.
          </p>
        </div>

        <div className="reviews-content">

          <form className="review-form" onSubmit={handleSubmit}>
            <h3>⭐ قيّم الخدمة</h3>

            <label>اسم العميل</label>
            <input
              type="text"
              placeholder="اكتب اسمك"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>تقييمك للخدمة</label>
            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={star <= rating ? 'active' : ''}
                  onClick={() => setRating(star)}
                  aria-label={`تقييم ${star} نجوم`}
                >
                  ★
                </button>
              ))}
            </div>

            <label>اكتب تعليقك</label>
            <textarea
              placeholder="احكيلنا عن تجربتك..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />

            <button type="submit" className="submit-review">
              إرسال التقييم
            </button>
          </form>

          <div className="reviews-list">
            <div className="reviews-stats">
  <div className="stat-box">
    <h3>⭐ {averageRating} / 5</h3>
    <p>متوسط التقييم</p>
  </div>

  <div className="stat-box">
    <h3>{totalReviews}</h3>
    <p>إجمالي التقييمات</p>
  </div>
</div>
            <h3>تقييمات العملاء</h3>

            {reviews.length === 0 ? (
              <p className="no-reviews">
                لا توجد تقييمات حتى الآن.
                كن أول من يشارك تجربته معنا!
              </p>
            ) : (
             reviews.map((review) => (
  <div className="review-card" key={review.id}>
    <h4>{review.name}</h4>

    <div className="review-rating">
      {'★'.repeat(review.rating)}
      {'☆'.repeat(5 - review.rating)}
    </div>

    <p>{review.comment}</p>

    <button
      type="button"
      className="delete-review"
      onClick={() => {
        const confirmDelete = window.confirm(
          'هل أنت متأكد من حذف هذا التقييم؟'
        )

        if (confirmDelete) {
          setReviews(reviews.filter((item) => item.id !== review.id))
        }
      }}
    >
      حذف التقييم
    </button>
  </div>
))
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Reviews