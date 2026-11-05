import { FaWhatsapp } from 'react-icons/fa'

const message = 'Olá, Gabriel! Vi seu portfólio e gostaria de conversar sobre um projeto.'
const whatsappUrl = `https://wa.me/5511951393362?text=${encodeURIComponent(message)}`

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com Gabriel pelo WhatsApp"
      title="Vamos conversar pelo WhatsApp"
      className="group fixed right-6 bottom-[max(1.5rem,env(safe-area-inset-bottom))] z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:right-8 sm:bottom-8"
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-[#25D366]/35 [animation-duration:2s] group-hover:[animation-play-state:paused]" />
      <FaWhatsapp aria-hidden="true" className="relative size-8" />
    </a>
  )
}
