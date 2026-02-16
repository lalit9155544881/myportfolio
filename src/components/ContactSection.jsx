import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')
  const [isSending, setIsSending] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus(
        'EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in .env.',
      )
      return
    }

    try {
      setIsSending(true)
      await emailjs.send(serviceId, templateId, formData, { publicKey })
      setStatus('Message sent successfully.')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus('Failed to send message. Please try again.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <motion.section
      className="mt-4 rounded-xl border border-slate-600/70 bg-slate-900/55 px-5 py-5"
      id="contact"
      data-aos="fade-up"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 className="m-0 text-2xl font-semibold text-white">Contact</h2>
      <p className="mt-2 text-slate-300">
        Send me a message directly from this form.
      </p>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-semibold text-slate-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-slate-100 outline-none transition focus:border-sky-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-semibold text-slate-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-slate-100 outline-none transition focus:border-sky-300"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-semibold text-slate-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-slate-100 outline-none transition focus:border-sky-300"
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="rounded-md bg-sky-300 px-4 py-2 font-bold text-slate-900 transition hover:bg-sky-200 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>

          {status ? <p className="text-sm text-slate-300">{status}</p> : null}
        </form>

        <div className="space-y-4">
          <div className="rounded-lg border border-slate-700 bg-slate-950/45 p-4">
            <h3 className="text-lg font-semibold text-white">Social</h3>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-md border border-slate-600 p-2 text-slate-100 transition hover:bg-slate-800"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-9.53 14.5V10H7.04v7.5zm-1.2-8.53a1.26 1.26 0 1 0 0-2.52 1.26 1.26 0 0 0 0 2.52m11.23 8.53v-4.02c0-2.16-1.15-3.17-2.68-3.17a2.32 2.32 0 0 0-2.1 1.16V10h-2.42v7.5h2.42v-4.19c0-1.1.2-2.16 1.56-2.16 1.33 0 1.35 1.25 1.35 2.23v4.12z" />
                </svg>
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-md border border-slate-600 p-2 text-slate-100 transition hover:bg-slate-800"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.05-1.42-4.05-1.42a3.2 3.2 0 0 0-1.34-1.77c-1.1-.75.08-.73.08-.73a2.55 2.55 0 0 1 1.86 1.25 2.6 2.6 0 0 0 3.56 1 2.58 2.58 0 0 1 .77-1.63c-2.67-.3-5.47-1.34-5.47-5.97a4.68 4.68 0 0 1 1.24-3.24 4.36 4.36 0 0 1 .12-3.2s1.01-.32 3.3 1.24a11.43 11.43 0 0 1 6 0c2.3-1.56 3.3-1.24 3.3-1.24a4.35 4.35 0 0 1 .12 3.2 4.67 4.67 0 0 1 1.24 3.24c0 4.64-2.8 5.66-5.48 5.96a2.9 2.9 0 0 1 .82 2.25v3.33c0 .32.21.7.82.58A12 12 0 0 0 12 .5" />
                </svg>
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-slate-700">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=New%20Delhi&output=embed"
              className="h-56 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactSection
