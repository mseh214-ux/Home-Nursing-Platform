import { useState } from 'react'
import { supabase } from '../lib/supabase.js'

function Admin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  async function handleLogin(e) {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setMessage('البريد الإلكتروني أو كلمة المرور غير صحيحة')
    } else {
      setMessage('تم تسجيل الدخول بنجاح')
    }

    setLoading(false)
  }

  return (
    <section className="admin-login" dir="rtl">
      <div className="admin-login-box">
        <h2>لوحة الإدارة</h2>
        <p>تسجيل دخول المسؤول</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
          </button>
        </form>

        {message && <p>{message}</p>}
      </div>
    </section>
  )
}

export default Admin