import { useState } from 'react'

const expandedTracks = [
  'grid-rows-[2fr_1fr_1fr_1fr] sm:grid-cols-[2fr_1fr_1fr_1fr]',
  'grid-rows-[1fr_2fr_1fr_1fr] sm:grid-cols-[1fr_2fr_1fr_1fr]',
  'grid-rows-[1fr_1fr_2fr_1fr] sm:grid-cols-[1fr_1fr_2fr_1fr]',
  'grid-rows-[1fr_1fr_1fr_2fr] sm:grid-cols-[1fr_1fr_1fr_2fr]',
]

export default function ColorPalette({ colors }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div
      className={`grid h-120 grid-cols-1 gap-0 transition-[grid-template-columns,grid-template-rows] duration-700 ease-in-out sm:h-44 sm:grid-rows-1 ${expandedTracks[activeIndex]}`}
      onMouseLeave={() => setActiveIndex(0)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setActiveIndex(0)
      }}
      role="group"
      aria-label="Paleta de cores do projeto"
    >
      {colors.map((color, index) => (
        <button
          key={color.hex}
          type="button"
          onMouseEnter={() => setActiveIndex(index)}
          onFocus={() => setActiveIndex(index)}
          onClick={() => setActiveIndex(index)}
          className={`relative flex min-h-0 min-w-0 cursor-pointer flex-col items-start justify-between overflow-hidden p-5 text-left focus-visible:z-10 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-current ${color.className} ${color.dark ? 'text-[#090B0F]' : 'text-[#F5F7FA]'}`}
        >
          <span className="text-xs font-medium">{color.name}</span>
          <span className="font-mono text-xs">{color.hex}</span>
        </button>
      ))}
    </div>
  )
}
