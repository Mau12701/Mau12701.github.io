import FadeIn from './FadeIn'
import LiveProjectButton from './LiveProjectButton'

import redTopologia from '../assets/projects/Topologia.png'
import redOspf from '../assets/projects/osfp.png'
import redDhcp from '../assets/projects/dhcp.png'

import dashboardRed from '../assets/projects/dashboard.png'
import historialRed from  '../assets/projects/historial.png' 

import detallesCatag  from  '../assets/projects/detalle.png'
import detalleCatag2  from  '../assets/projects/detalle 2.png'
import homeCat from  '../assets/projects/home.png'

import historialweb from '../assets/projects/historialsitiosweb.png'
import dashboardWeb from '../assets/projects/dashboardsitiosweb.png'

const projects = [
  {
    num: '01',
    cat: 'Redes · Cisco · OSPF · DHCP · ACL',
    name: 'Red Empresarial Multisucursal',
    href: 'https://github.com/Mau12701/Red-Empresarial-Multisucursal-Cisco-Packet-Tracer',
    imgs: [redOspf, redDhcp, redTopologia],
    contain: true,
  },
  {
    num: '02',
    cat: 'Backend · Python · FastAPI · SQLite',
    name: 'Monitor de Red Local',
    href: 'https://github.com/Mau12701/monitor-red-local',
    imgs: [null, historialRed, dashboardRed],
    contain: true,
  },
  {
    num: '03',
    cat: 'Backend · Python · FastAPI · HTTPx',
    name: 'Monitor de Sitios Web',
    href: 'https://github.com/Mau12701/monitor-sitios-web',
    imgs: [null, historialweb, dashboardWeb],
    contain: true,
  },
  {
    num: '04',
    cat: 'React · TypeScript · Tailwind · API REST',
    name: 'Catálogo de Videojuegos',
    href: 'https://github.com/Mau12701/catalogo-videojuegos',
    imgs: [detalleCatag2, detallesCatag, homeCat],
    contain: true,
  },
  {
    num: '05',
    cat: 'Backend · Python · FastAPI',
    name: 'Simulador de Planificadores de SO',
    href: 'https://github.com/Mau12701/Planificadores_SistemasOperativos',
    imgs: [null, null, null],
    contain: true,
  },
  {
    num: '06',
    cat: 'UX · Mockup · Diseño Móvil',
    name: 'Mockup Hospital IMSS',
    href: 'https://github.com/Mau12701/Trabajo_de_ihc_hospital_imss_mockup',
    imgs: [null, null, null],
    contain: true,
  },
]

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        background: '#0C0C0C',
        borderRadius: '50px 50px 0 0',
        marginTop: -20,
        position: 'relative',
        zIndex: 3,
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem)',
      }}
    >
      <FadeIn>
        <p style={{ fontFamily: 'monospace', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(215,226,234,0.4)', marginBottom: 8 }}>
          // proyectos
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2
          className="hero-heading"
          style={{
            fontSize: 'clamp(3rem, 12vw, 10rem)',
            fontWeight: 900, textTransform: 'uppercase',
            letterSpacing: '-0.03em', lineHeight: 0.9,
            marginBottom: '3rem',
          }}
        >
          Project
        </h2>
      </FadeIn>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {projects.map((p, i) => (
          <FadeIn key={p.num} delay={i * 0.1}>
            <div style={{
              position: 'sticky', top: `${96 + i * 24}px`,
              border: '2px solid rgba(215,226,234,0.15)',
              borderRadius: 40, padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              background: '#0C0C0C',
            }}>
              {/* header */}
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'flex-start', flexWrap: 'wrap',
                gap: '1rem', marginBottom: '1.5rem',
              }}>
                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(215,226,234,0.5)', marginBottom: 4 }}>
                    {p.cat}
                  </div>
                  <div style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(1.2rem, 3vw, 2.2rem)', color: '#D7E2EA' }}>
                    {p.name}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                  <div style={{ fontWeight: 900, color: 'rgba(215,226,234,0.15)', fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 1 }}>
                    {p.num}
                  </div>
                  <LiveProjectButton label="Ver en GitHub" href={p.href} />
                </div>
              </div>

 {/* imágenes */}
<div
  style={{
    display: 'grid',
    gridTemplateColumns: '40% 60%',
    gap: '1rem',
    alignItems: 'stretch',
  }}
>
  {/* Columna izquierda */}
  <div
    style={{
      display: 'grid',
      gridTemplateRows: '1fr 1fr',
      gap: '1rem',
    }}
  >
    {[p.imgs[0], p.imgs[1]].map((img, j) => (
      <div
        key={j}
        style={{
          aspectRatio: '16 / 9',
          borderRadius: 20,
          overflow: 'hidden',
          background: 'rgba(215,226,234,0.04)',
          border: '1px solid rgba(215,226,234,0.08)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {img ? (
          <img
            src={img}
            alt={p.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: p.contain ? 'contain' : 'cover',
              padding: p.contain ? '0.5rem' : 0,
              display: 'block',
            }}
          />
        ) : (
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: 11,
              color: 'rgba(215,226,234,0.2)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            imagen pendiente
          </span>
        )}
      </div>
    ))}
  </div>

  {/* Imagen grande */}
  <div
     style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 20,
    overflow: 'hidden',

    background: 'rgba(215,226,234,0.04)',
    border: '1px solid rgba(215,226,234,0.08)',

    minHeight: '100%',
  }}
  >
    {p.imgs[2] ? (
      <img
        src={p.imgs[2]}
        alt={p.name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: p.contain ? 'contain' : 'cover',
          padding: p.contain ? '0.5rem' : 0,
          display: 'block',
        }}
      />
    ) : (
      <span
        style={{
          fontFamily: 'monospace',
          fontSize: 11,
          color: 'rgba(215,226,234,0.2)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        imagen pendiente
      </span>
    )}
  </div>
</div>

            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}