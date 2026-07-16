import { motion } from 'framer-motion'
import ContactButton from './ContactButton'


export default function HeroSection() {
  return (
    <section style={{
      height: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'space-between', overflow: 'hidden',
      position: 'relative', padding: '0 clamp(1.5rem, 5vw, 4rem)'
    }}>

      {/* grid bg */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `linear-gradient(rgba(99,179,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99,179,255,0.04) 1px, transparent 1px)`,
        backgroundSize: '50px 50px', zIndex: 0
      }} />

      {/* FOTO DE FONDO centrada */}
      <motion.img
       
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(260px, 32vw, 480px)',
          objectFit: 'contain',
          zIndex: 1,
          pointerEvents: 'none',
          maskImage: 'linear-gradient(to top, transparent 0%, black 18%)',
          WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 18%)',
        }}
      />

      {/* overlay oscuro sobre la foto para que el nombre se lea bien */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, rgba(12,12,12,0.25) 0%, rgba(12,12,12,0.55) 100%)'
      }} />

      {/* spacer nav */}
      <div style={{ paddingTop: 56, zIndex: 3 }} />

      {/* NOMBRE encima de la foto */}
      <motion.div
        style={{ position: 'relative', zIndex: 3, textAlign: 'center' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1
          className="hero-heading"
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 6.5rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            lineHeight: 1,
          }}
        >
        Mauricio Escobar Sánchez
        </h1>
        <p style={{
          fontSize: 'clamp(0.75rem, 1.2vw, 1rem)',
          color: 'rgba(215,226,234,0.5)',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          fontWeight: 300,
          marginTop: '0.75rem',
        }}>
          Desarrollador de Software & Redes
        </p>
      </motion.div>

      {/* bottom bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        paddingBottom: '2.5rem', gap: '1rem', flexWrap: 'wrap',
        position: 'relative', zIndex: 3,
      }}>
        <motion.p
          style={{
            fontSize: 'clamp(0.7rem, 1.2vw, 1rem)',
            fontWeight: 300, textTransform: 'uppercase',
            letterSpacing: '0.08em', lineHeight: 1.6,
            maxWidth: 220, color: 'rgba(215,226,234,0.6)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          Construyo cosas<br />por que me apasiona.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ zIndex: 3 }}
        >
          <ContactButton />
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, zIndex: 3,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span style={{ fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.1em', color: 'rgba(215,226,234,0.3)' }}>
          scroll
        </span>
        <div style={{
          width: 1, height: 40,
          background: 'linear-gradient(to bottom, rgba(215,226,234,0.4), transparent)',
          animation: 'scrollLine 1.5s ease-in-out infinite'
        }} />
      </motion.div>

    </section>
  )
}