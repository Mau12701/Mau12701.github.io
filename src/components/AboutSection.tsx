import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'
import ContactButton from './ContactButton'

const techBadges = [
  { text: '192.168.1.0/24', style: { top: '18%', left: '6%' } },
  { text: 'HTTP 200 OK',    style: { top: '22%', right: '7%' } },
  { text: 'def main():',    style: { bottom: '22%', left: '8%' } },
  { text: 'git push origin',style: { bottom: '18%', right: '6%' } },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 5rem)',
      }}
    >
      {techBadges.map((b, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            fontFamily: 'monospace',
            fontSize: 11,
            letterSpacing: '0.1em',
            color: 'rgba(215,226,234,0.4)',
            border: '1px solid rgba(215,226,234,0.1)',
            background: 'rgba(215,226,234,0.04)',
            borderRadius: 8,
            padding: '6px 14px',
            animation: `floatAnim ${5 + i}s ease-in-out infinite`,
            ...b.style,
          }}
        >
          {b.text}
        </div>
      ))}

      <FadeIn y={0} delay={0.1}>
        <p style={{ fontFamily: 'monospace', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#63b3ff', marginBottom: 8 }}>
          // sobre mí
        </p>
      </FadeIn>

      <FadeIn y={40} delay={0}>
        <h2
          className="hero-heading"
          style={{ fontSize: 'clamp(3rem, 12vw, 10rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: 0.9, marginBottom: '2.5rem' }}
        >
          About me
        </h2>
      </FadeIn>

      <AnimatedText text="Estudiante apasionado por el desarrollo de software y las redes de computadoras. Me muevo entre una API REST y un switch de 48 puertos con la misma facilidad. Busco construir soluciones reales que conecten el mundo digital con la infraestructura que lo sostiene." />

      <div style={{ marginTop: '4rem' }}>
        <FadeIn delay={0.4}>
          <ContactButton label="Trabajemos juntos" />
        </FadeIn>
      </div>
    </section>
  )
}