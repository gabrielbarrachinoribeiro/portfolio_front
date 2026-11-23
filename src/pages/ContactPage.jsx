import { useEffect } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { contact } from '../data/contact'
import Header from '../components/Header/Header'

const focus = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A999ED]'

export default function ContactPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Contato | Gabriel Barrachino'
    return () => { document.title = previousTitle }
  }, [])

  const channels = [
    { name: 'E-mail', detail: contact.email || 'Endereço em breve', href: contact.email ? `mailto:${contact.email}` : '', icon: Mail },
    { name: 'WhatsApp', detail: contact.phone, href: contact.whatsapp, icon: FaWhatsapp },
    { name: 'LinkedIn', detail: contact.linkedin ? 'Vamos nos conectar' : 'Perfil em breve', href: contact.linkedin, icon: FaLinkedinIn },
    { name: 'Instagram', detail: contact.instagram ? 'Me acompanhe por lá' : 'Perfil em breve', href: contact.instagram, icon: FaInstagram },
  ]

  return (
    <main className="relative isolate flex min-h-dvh flex-col overflow-x-clip bg-[#101426] pt-[var(--header-height)] text-[#F0E9FA]">
      <Header />

      <div className="container relative mx-auto flex flex-1 flex-col justify-center px-6 py-14 sm:py-20">
        <div className="relative isolate">
        <p className="mb-6 text-xs uppercase tracking-[0.22em] text-[#A999ED]">Uma ideia já é um começo</p>
        <h1 className="max-w-4xl font-[Arimo,sans-serif] text-[clamp(3.5rem,9vw,8rem)] font-medium leading-[0.98] tracking-[-0.06em]">
          Vamos criar<br />
          <span className="text-[#A999ED]">algo juntos?</span>
        </h1>
        <p className="mt-7 max-w-lg text-pretty text-base leading-relaxed text-[#9699AD] sm:text-lg">
          Tem um projeto em mente ou quer conversar sobre uma oportunidade? Escolha um dos canais abaixo.
        </p>
        </div>

        <div className="mt-14 grid border-t border-[#A999ED]/20 md:mt-20 md:grid-cols-2 md:gap-x-12">
          {channels.map(({ name, detail, href, icon: Icon }) => {
            const classes = `group flex min-w-0 items-center gap-5 border-b border-[#A999ED]/20 py-7 transition-colors sm:py-8 ${href ? `hover:text-[#A999ED] ${focus}` : 'text-[#9699AD]'}`
            const content = <>
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[#A999ED]/25 text-[#A999ED] transition-colors group-hover:bg-[#A999ED]/10"><Icon size={21} aria-hidden="true" /></span>
              <span className="min-w-0 flex-1"><span className="block text-xl font-medium tracking-tight">{name}</span><span className="mt-1 block break-words text-sm text-[#9699AD]">{detail}</span></span>
              {href && <ArrowUpRight size={22} aria-hidden="true" className="shrink-0 transition-transform motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1" />}
            </>
            return href ? <a key={name} href={href} target={name === 'E-mail' ? undefined : '_blank'} rel={name === 'E-mail' ? undefined : 'noopener noreferrer'} className={classes}>{content}</a> : <div key={name} className={classes}>{content}</div>
          })}
        </div>
      </div>

      <footer className="container mx-auto flex flex-wrap justify-between gap-4 px-6 pb-7 text-xs text-[#9699AD]">
        <span>© Gabriel Barrachino 2026</span>
        <a href="/#projetos" className={`transition-colors hover:text-[#A999ED] ${focus}`}>Conheça meus projetos ↗</a>
      </footer>
    </main>
  )
}
