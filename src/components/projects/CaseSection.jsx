import { useEffect, useRef, useState } from 'react'

export function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const node = ref.current
    if (node.getBoundingClientRect().top < window.innerHeight) return
    setVisible(false)
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.08 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className={`motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-reduce:transform-none motion-reduce:opacity-100 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'} ${className}`}>{children}</div>
}

export function SectionHeading({ title, highlight, children }) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 md:mb-10 md:flex-row md:items-end">
      <h2 className="text-balance text-2xl font-medium tracking-tight sm:text-3xl">{title}{highlight && <>{' '}<span className="text-[var(--case-accent,#B6F568)]">{highlight}</span></>}</h2>
      {children && <p className="text-balance max-w-md text-sm leading-relaxed text-[var(--case-muted,#9FA3AA)]">{children}</p>}
    </div>
  )
}
