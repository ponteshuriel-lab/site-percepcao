import { useState } from 'react'

const eventTypes = [
  'Casamento',
  'Aniversário',
  'Retrato',
  'Ensaio',
  'Evento',
  'Outro',
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = encodeURIComponent(
      `Olá! Gostaria de agendar uma sessão.\n\n` +
        `Nome: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Tipo de evento: ${formData.eventType}\n` +
        `Mensagem: ${formData.message}`
    )

    // TODO: Substituir pelo número real do WhatsApp
    window.open(`https://wa.me/5500000000000?text=${whatsappMessage}`, '_blank')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <p className="text-xl font-serif text-brand-light mb-4">Obrigado!</p>
        <p className="text-sm text-brand-light/60 font-light">
          Em breve entraremos em contato.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <div>
        <label
          htmlFor="name"
          className="block text-[10px] tracking-[0.2em] font-mono text-brand-light/50 mb-2 uppercase"
        >
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-transparent border border-brand-mid/50 px-4 py-3 text-sm text-brand-light font-light focus:outline-none focus:border-brand-light transition-colors"
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-[10px] tracking-[0.2em] font-mono text-brand-light/50 mb-2 uppercase"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-transparent border border-brand-mid/50 px-4 py-3 text-sm text-brand-light font-light focus:outline-none focus:border-brand-light transition-colors"
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="eventType"
          className="block text-[10px] tracking-[0.2em] font-mono text-brand-light/50 mb-2 uppercase"
        >
          Tipo de Evento
        </label>
        <select
          id="eventType"
          name="eventType"
          required
          value={formData.eventType}
          onChange={handleChange}
          className="w-full bg-transparent border border-brand-mid/50 px-4 py-3 text-sm text-brand-light font-light focus:outline-none focus:border-brand-light transition-colors appearance-none"
        >
          <option value="" className="bg-brand-black">
            Selecione...
          </option>
          {eventTypes.map((type) => (
            <option key={type} value={type} className="bg-brand-black">
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[10px] tracking-[0.2em] font-mono text-brand-light/50 mb-2 uppercase"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-transparent border border-brand-mid/50 px-4 py-3 text-sm text-brand-light font-light focus:outline-none focus:border-brand-light transition-colors resize-none"
          placeholder="Conte-nos sobre seu evento..."
        />
      </div>

      <button
        type="submit"
        className="w-full px-8 py-4 bg-brand-light text-brand-black text-xs tracking-[0.25em] font-mono hover:bg-brand-cream transition-all duration-300 min-h-[48px]"
      >
        ENVIAR MENSAGEM
      </button>
    </form>
  )
}
