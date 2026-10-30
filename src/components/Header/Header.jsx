import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
    ['Início', '#inicio'],
    ['Sobre mim', '#sobre-mim'],
    ['Projetos', '#projetos'],
    ['Experiências', '#experiencias'],
    ['Entrar em contato', '#contato'],
]

function Header(){
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)
    const buttonRef = useRef(null)

    useEffect(() => {
        if (!isOpen) return

        const mobile = window.matchMedia('(max-width: 600px)')
        const previousOverflow = document.body.style.overflow
        function updateScrollLock() {
            document.body.style.overflow = mobile.matches ? 'hidden' : previousOverflow
        }
        updateScrollLock()
        mobile.addEventListener('change', updateScrollLock)

        function handlePointerDown(event) {
            if (!menuRef.current?.contains(event.target)) setIsOpen(false)
        }

        function handleKeyDown(event) {
            if (event.key === 'Escape') {
                setIsOpen(false)
                buttonRef.current?.focus()
            }
            if (event.key === 'Tab' && mobile.matches) {
                const first = buttonRef.current
                const last = menuRef.current?.querySelector('li:last-child a')
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault()
                    last?.focus()
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault()
                    first?.focus()
                }
            }
        }

        document.addEventListener('pointerdown', handlePointerDown)
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.body.style.overflow = previousOverflow
            mobile.removeEventListener('change', updateScrollLock)
            document.removeEventListener('pointerdown', handlePointerDown)
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen])

    return(
        <header className="container mx-auto px-6 flex items-center justify-between py-6">
            <a href="/" className="min-w-0 text-[clamp(14px,4vw,20px)] font-bold">gabrielbarrachino<span className="text-[#A999ED]">{'/>'}</span></a>
            <div ref={menuRef} className="relative" onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false)
            }}>
                <button
                    ref={buttonRef}
                    type="button"
                    aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={isOpen}
                    aria-controls="header-navigation"
                    onClick={() => setIsOpen((open) => !open)}
                    className={`flex cursor-pointer items-center justify-center rounded-lg p-2 transition-colors hover:bg-[#A999ED]/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A999ED] ${isOpen ? 'max-[600px]:fixed max-[600px]:right-6 max-[600px]:top-6 max-[600px]:z-[101] max-[600px]:text-[#101426] max-[600px]:focus-visible:outline-[#101426]' : ''}`}
                >
                    {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                </button>
                <nav
                    id="header-navigation"
                    aria-label="Navegação principal"
                    hidden={!isOpen}
                    data-lenis-prevent=""
                    className="absolute right-0 top-full z-50 mt-3 w-60 max-w-[calc(100vw-3rem)] rounded-xl border border-[#A999ED]/25 bg-zinc-950 p-2 text-white shadow-xl max-[600px]:fixed max-[600px]:inset-0 max-[600px]:z-100 max-[600px]:m-0 max-[600px]:h-dvh max-[600px]:w-full max-[600px]:max-w-none max-[600px]:overflow-y-auto max-[600px]:rounded-none max-[600px]:border-0 max-[600px]:bg-[#F0E9FA] max-[600px]:px-6 max-[600px]:py-24 max-[600px]:text-[#101426] max-[600px]:shadow-none"
                >
                    <ul className="flex flex-col gap-1 max-[600px]:min-h-full max-[600px]:justify-center max-[600px]:gap-2">
                        {links.map(([label, href]) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    onClick={() => setIsOpen(false)}
                                    className="block rounded-lg px-4 py-3 text-sm transition-colors hover:bg-[#A999ED]/15 hover:text-[#A999ED] focus-visible:outline-2 focus-visible:outline-[#A999ED] max-[600px]:rounded-none max-[600px]:border-b max-[600px]:border-[#101426]/15 max-[600px]:px-0 max-[600px]:py-5 max-[600px]:text-[clamp(24px,7vw,42px)] max-[600px]:leading-tight max-[600px]:font-semibold max-[600px]:tracking-tight max-[600px]:hover:text-[#51427E] max-[600px]:focus-visible:outline-[#101426]"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
