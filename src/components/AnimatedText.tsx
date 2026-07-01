import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

interface Props { text: string }

export default function AnimatedText({ text }: Props) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = text.split('')

  return (
    <p
      ref={ref}
      style={{
        fontSize: 'clamp(0.95rem, 1.6vw, 1.5rem)',
        color: '#D7E2EA',
        fontWeight: 520,
        textAlign: 'center',
        lineHeight: 1.7,
        maxWidth: 620,
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {chars.map((char, i) => {
        const start = i / chars.length
        const end = start + 1 / chars.length
        return <Char key={i} char={char} progress={scrollYProgress} start={start} end={end} />
      })}
    </p>
  )
}

interface CharProps {
  char: string
  progress: MotionValue<number>
  start: number
  end: number
}

function Char({ char, progress, start, end }: CharProps) {
  const opacity = useTransform(progress, [start, end], [0.15, 1])
  return (
    <motion.span style={{ opacity, display: 'inline-block', whiteSpace: 'pre' }}>
      {char}
    </motion.span>
  )
}