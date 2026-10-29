import { useLayoutEffect, useRef, useState } from 'react'
import { HiSparkles } from 'react-icons/hi2'
import './SkillsMarquee.css'

const skills = [
    'React',
    'Tailwind CSS',
    'Interfaces digitais',
    'JavaScript',
    'UI/UX Design',
    'Desenvolvimento Web',
    'Criatividade em cada detalhe',
]

function SkillsMarquee() {
    const containerRef = useRef(null)
    const sequenceRef = useRef(null)
    const [repeatCount, setRepeatCount] = useState(2)

    useLayoutEffect(() => {
        const container = containerRef.current
        const sequence = sequenceRef.current

        function updateRepeats() {
            const sequenceWidth = sequence.getBoundingClientRect().width
            if (sequenceWidth > 0) {
                setRepeatCount(Math.max(2, Math.ceil(container.clientWidth / sequenceWidth) + 1))
            }
        }

        const observer = new ResizeObserver(updateRepeats)
        observer.observe(container)
        observer.observe(sequence)
        updateRepeats()

        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={containerRef}
            aria-label="Tecnologias e especialidades"
            className="overflow-hidden border-y border-[#F0E9FA]/20 bg-[#14192C] py-4 text-[#F0E9FA]"
        >
            <div className="skills-marquee-track flex w-max" style={{ animationDuration: `${repeatCount * 20}s` }}>
                {[0, 1].map((copy) => (
                    <div key={copy} className="flex shrink-0">
                        {Array.from({ length: repeatCount }, (_, repeat) => (
                            <ul
                                key={repeat}
                                ref={copy === 0 && repeat === 0 ? sequenceRef : undefined}
                                aria-hidden={copy !== 0 || repeat !== 0 ? true : undefined}
                                className="m-0 flex shrink-0 list-none items-center gap-6 p-0 pr-6"
                            >
                                {skills.map((skill) => (
                                    <li key={skill} className="flex shrink-0 items-center gap-6 whitespace-nowrap text-lg font-bold">
                                        <span>{skill}</span>
                                        <HiSparkles aria-hidden="true" className="size-5 shrink-0 text-[#A999ED]" />
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SkillsMarquee
