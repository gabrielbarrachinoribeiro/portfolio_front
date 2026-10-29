import { useCallback, useEffect, useRef } from 'react'
import { useLenis } from 'lenis/react'

export default function AboutWords() {
    const containerRef = useRef(null)
    const wordsRef = useRef([])

    const update = useCallback(() => {
        const container = containerRef.current
        if (!container) return
        const { top, height } = container.getBoundingClientRect()
        const distance = height - window.innerHeight
        const progress = Math.max(0, Math.min(1, -top / Math.max(1, distance)))

        wordsRef.current.forEach((word, index) => {
            const direction = index === 1 ? -1 : 1
            if (!word) return
            const offset = (progress - 0.5) * window.innerWidth * 0.35 * direction
            word.style.transform = `translate3d(${offset}px, 0, 0)`
        })
    }, [])

    useLenis(update, [update])

    useEffect(() => {
        let frame = 0

        function scheduleUpdate() {
            if (!frame) frame = window.requestAnimationFrame(() => {
                frame = 0
                update()
            })
        }

        update()
        window.addEventListener('scroll', scheduleUpdate, { passive: true })
        window.addEventListener('resize', scheduleUpdate)

        return () => {
            window.cancelAnimationFrame(frame)
            window.removeEventListener('scroll', scheduleUpdate)
            window.removeEventListener('resize', scheduleUpdate)
        }
    }, [update])

    return (
        <div ref={containerRef} className="relative mt-16 h-[200svh] md:mt-24">
            <div className="sticky top-0 flex h-svh flex-col justify-center gap-2 overflow-hidden py-8 text-[clamp(64px,min(23vw,26svh),360px)] leading-[0.9] tracking-[-0.045em] md:gap-4 md:py-12">
                <p ref={(node) => { wordsRef.current[0] = node }} className="m-0 ml-[2vw] w-max font-[Arimo,sans-serif] font-bold text-[#F0E9FA] italic motion-safe:will-change-transform">
                    Fluidez
                </p>
                <p ref={(node) => { wordsRef.current[1] = node }} className="m-0 ml-[6vw] w-max font-[Aclonica,sans-serif] text-[0.88em] font-normal text-[#A999ED] motion-safe:will-change-transform">
                    Conexão
                </p>
                <p ref={(node) => { wordsRef.current[2] = node }} className="m-0 ml-[1vw] w-max font-[Arimo,sans-serif] font-bold text-[#F0E9FA] italic motion-safe:will-change-transform">
                    Criação
                </p>
            </div>
        </div>
    )
}
