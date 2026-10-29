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

        function handlePointerDown(event) {
            if (!menuRef.current?.contains(event.target)) setIsOpen(false)
        }

        function handleKeyDown(event) {
            if (event.key === 'Escape') {
                setIsOpen(false)
                buttonRef.current?.focus()
            }
        }

        document.addEventListener('pointerdown', handlePointerDown)
        document.addEventListener('keydown', handleKeyDown)
        return () => {
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
                    className="flex cursor-pointer items-center justify-center rounded-lg p-2 transition-colors hover:bg-[#A999ED]/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A999ED]"
                >
                    {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                </button>
                <nav
                    id="header-navigation"
                    aria-label="Navegação principal"
                    hidden={!isOpen}
                    className="absolute right-0 top-full z-50 mt-3 w-60 max-w-[calc(100vw-3rem)] rounded-xl border border-[#A999ED]/25 bg-zinc-950 p-2 text-white shadow-xl"
                >
                    <ul className="flex flex-col gap-1">
                        {links.map(([label, href]) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    onClick={() => setIsOpen(false)}
                                    className="block rounded-lg px-4 py-3 text-sm transition-colors hover:bg-[#A999ED]/15 hover:text-[#A999ED] focus-visible:outline-2 focus-visible:outline-[#A999ED]"
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
