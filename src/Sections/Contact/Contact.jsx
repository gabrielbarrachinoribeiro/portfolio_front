import { ArrowUpRight } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
import contactImage from '../../assets/contato.png'

// Preencha com o link de contato e o perfil do Instagram.
const contactLinks = { contact: '/', instagram: '/' }

export default function Contact() {
    const buttonClasses = 'inline-flex items-center justify-center gap-2 rounded-md bg-[#A999ED] px-4 py-3 text-sm font-bold text-[#101426] transition-colors hover:bg-[#BBAEF3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A999ED] disabled:cursor-default'
    const instagramClasses = 'inline-flex size-10 items-center justify-center rounded-full border border-[#A999ED] text-[#A999ED] transition-colors hover:bg-[#A999ED]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A999ED] disabled:cursor-default'

    return (
        <>
            <section id="contato" aria-labelledby="contact-title" className="section-spacing overflow-hidden bg-[#101426]">
                <div className="container relative isolate mx-auto px-6">
                    <img
                        src={contactImage}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="pointer-events-none absolute top-4 right-[-28%] -z-10 h-95 w-full object-contain opacity-60 sm:opacity-100 sm:right-[-3%] sm:h-130 sm:w-[78%] lg:-top-6 lg:h-175"
                    />

                    <h2 id="contact-title" className="m-0 w-fit font-[Arimo,sans-serif] text-[clamp(32px,8.5vw,120px)] leading-[1.03] tracking-tight text-[#F0E9FA]">
                        <span className="block font-bold italic">Entre em</span>
                        <span className="ml-[2vw] block font-[Aclonica,sans-serif] text-[0.93em] leading-[1.15] font-normal text-[#A999ED]">Contato</span>
                        <span className="block font-normal italic">e vamos criar</span>
                        <span className="ml-[5vw] block font-bold italic">algo incrível.</span>
                    </h2>

                    <div className="mt-10 max-w-110 md:mt-14">
                        <p className="m-0 font-[Montserrat,sans-serif] text-base leading-tight text-[#9699AD]">
                            Seja um projeto, uma ideia ou apenas uma conversa sobre possibilidades, estou sempre aberto a novas oportunidades e colaborações.
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-4 sm:gap-6">
                            {contactLinks.contact ? (
                                <a href={contactLinks.contact} className={buttonClasses}>Entrar em contato <ArrowUpRight size={18} aria-hidden="true" /></a>
                            ) : (
                                <button type="button" disabled title="Link de contato em breve" className={buttonClasses}>Entrar em contato <ArrowUpRight size={18} aria-hidden="true" /></button>
                            )}
                            {contactLinks.instagram ? (
                                <a href={contactLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram de Gabriel Barrachino" className={instagramClasses}><FaInstagram size={20} aria-hidden="true" /></a>
                            ) : (
                                <button type="button" disabled aria-label="Instagram de Gabriel Barrachino — em breve" className={instagramClasses}><FaInstagram size={20} aria-hidden="true" /></button>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-[#101426] px-6 pt-10 pb-9 text-center font-[Montserrat,sans-serif] text-xs text-[#F0E9FA]">
                © Gabriel Barrachino 2026
            </footer>
        </>
    )
}
