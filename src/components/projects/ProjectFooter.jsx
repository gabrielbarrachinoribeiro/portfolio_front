export default function ProjectFooter() {
  return (
    <footer className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-6 pb-7 text-xs text-white/50">
      <span>© Gabriel Barrachino 2026</span>
      <a
        href="#topo"
        onClick={(event) => {
          event.preventDefault()
          window.scrollTo({
            top: 0,
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
          })
          document.getElementById('topo')?.focus({ preventScroll: true })
        }}
        className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
      >
        Voltar ao topo ↑
      </a>
    </footer>
  )
}
