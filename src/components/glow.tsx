import { Sparkles, Zap, Leaf, Eye, MessageCircle, MapPin, Phone, AtSign, Mail, ArrowRight, CalendarHeart, ChevronRight, Check, Clock } from 'lucide-react';

const WA = 'https://wa.me/593999900970';

/* Mapa de imágenes — cada pieza tiene un hogar:
   banner.png → Hero (presentación de marca) · logo.jpg → nav/footer
   faciales 831532835 / corporales 829762291 / lashes 830434342 → Categorías
   fiesta 831616093 → Fiesta 5 años (+ panel Disfruta) · glass 720191674 → Menú
   antes/después 790476413 → Resultados · agenda 830754678 → Escríbenos + Contacto
   depilación 834200252 → panel Agenda · strip Promos = resumen de categorías */

export function Navbar() {
  return (
    <nav className="relative z-30 flex items-center justify-between px-6 py-4 bg-[#2B0A1A]">
      <a href="#inicio" className="flex items-center gap-3">
        <img src="/logo.jpg" alt="Glow Up SPA" className="h-11 w-11 rounded-full object-cover" width={44} height={44} />
        <span className="text-white text-[17px] font-semibold tracking-tight">Glow Up SPA · Boutique</span>
      </a>
      <div className="hidden md:flex items-center gap-8 text-white text-[16px] font-medium">
        <a className="hover:opacity-80" href="#categorias">Categorías</a>
        <a className="hover:opacity-80" href="#servicios">Servicios</a>
        <a className="hover:opacity-80" href="#resultados">Resultados</a>
        <a className="hover:opacity-80" href="#promociones">Promociones</a>
        <a href={WA} target="_blank" rel="noreferrer" className="bg-[#AD1457] hover:bg-[#8E0E47] text-white px-5 py-2.5 rounded-full font-semibold transition-colors">Agenda tu cita</a>
      </div>
      <a href="#contacto" className="md:hidden text-white text-[16px] font-semibold bg-[#AD1457] px-4 py-2 rounded-full">Menú</a>
    </nav>
  );
}

export function Hero() {
  const points = [
    'Agenda con anticipación por mensaje directo o WhatsApp',
    'Jaime Albuja y Av. Real Audiencia, Quito',
    '099 990 0970 · 099 804 6299',
    'Promociones de aniversario del 3 al 20 de octubre',
  ];
  return (
    <header id="inicio" className="relative bg-[#FCE4EC]">
      <div className="max-w-[1300px] mx-auto px-6 py-14 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 data-reveal className="font-display text-[#2B0A1A]" style={{ fontSize: 'clamp(44px,5.2vw,76px)', lineHeight: 1.02 }}>
            Resaltamos tu belleza
          </h1>
          <p data-reveal className="mt-5 text-[19px] leading-relaxed max-w-[52ch]">
            Tu piel merece un tratamiento que vaya más allá de lo tradicional. Limpieza facial profunda, láser diodo y masajes relajantes.
          </p>
          <ul data-reveal className="mt-7 space-y-2.5 text-[17px] font-medium">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <ChevronRight size={19} className="text-[#D81B60] shrink-0 mt-0.5" /> <span>{p}</span>
              </li>
            ))}
          </ul>
          <div data-reveal className="mt-8 flex flex-wrap gap-3">
            <a href={WA} target="_blank" rel="noreferrer" className="bg-[#AD1457] hover:bg-[#8E0E47] text-white px-7 py-3.5 rounded-full font-semibold text-[17px] transition-colors inline-flex items-center gap-2">
              Agenda tu cita <ArrowRight size={18} />
            </a>
            <a href="#promociones" className="bg-white text-[#C2185B] px-7 py-3.5 rounded-full font-semibold text-[17px] transition-colors inline-flex items-center">
              Ver Promociones
            </a>
          </div>
        </div>
        <div data-reveal>
          <img
            src="/banner.png"
            alt="Glow Up SPA Make Up Boutique — cejas y pestañas, masajes, faciales y pigmentación de labios"
            className="w-full h-auto rounded-3xl object-cover"
            fetchPriority="high"
          />
          <p className="mt-3 text-[16px] text-[#6B4A5A]">5 años contigo · Quito, Ecuador</p>
        </div>
      </div>

      <div className="bg-[#FFF0F5] px-6 pt-6 pb-10">
        <h2 data-wordmark className="font-display hero-name text-[#C2185B] text-center w-full mx-auto mt-2 select-none" style={{ fontSize: 'clamp(56px,12vw,188px)' }} aria-label="Glow Up">
          Glow Up
        </h2>
        <div className="max-w-[1400px] mx-auto mt-3 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[16px] text-[#6B4A5A] text-center">
          <span className="inline-flex items-center gap-2"><CalendarHeart size={17} /> 5 años contigo · Promociones del 3 al 20 de octubre</span>
          <span className="inline-flex items-center gap-2"><MapPin size={17} /> Jaime Albuja y Av. Real Audiencia, Quito</span>
        </div>
      </div>
    </header>
  );
}

export function Categories() {
  const cats = [
    { name: 'Faciales', desc: 'Glass Skin, BB Glow, plasma y limpieza profunda.', img: '/831532835_18117378274969299_6774431948201622192_n.jpg', alt: 'Tratamientos faciales y rejuvenecimiento' },
    { name: 'Corporales', desc: 'Masajes relajantes, moldeadores y anticelulíticos.', img: '/829762291_18117378220969299_7960367815238614785_n.jpg', alt: 'Masajes corporales' },
    { name: 'Lashes y Brows', desc: 'Lifting, laminado y perfilado con hilo.', img: '/830434342_18117378202969299_4607416569557005457_n.jpg', alt: 'Lifting de pestañas y diseño de cejas' },
  ];
  return (
    <section id="categorias" className="bg-white px-6 py-20">
      <div className="max-w-[1200px] mx-auto">
        <h2 data-reveal className="font-display text-center" style={{ fontSize: 'clamp(32px,3.5vw,48px)' }}>Elige tu ritual</h2>
        <p data-reveal className="text-center text-[17px] text-[#6B4A5A] mt-3 max-w-[60ch] mx-auto">Tres mundos, un mismo trato especializado. Cada uno con sus promociones de aniversario.</p>
        <div className="mt-10 grid sm:grid-cols-3 gap-8">
          {cats.map((c) => (
            <div key={c.name} data-reveal className="text-center">
              <img src={c.img} alt={c.alt} className="w-full aspect-[4/5] object-cover rounded-3xl" loading="lazy" />
              <p className="font-display mt-5" style={{ fontSize: '30px' }}>{c.name}</p>
              <p className="text-[16px] text-[#6B4A5A] mt-1">{c.desc}</p>
              <a href="#servicios" className="mt-4 inline-block border-2 border-[#AD1457] text-[#AD1457] hover:bg-[#AD1457] hover:text-white px-7 py-2.5 rounded-full font-semibold text-[16px] transition-colors">Ver opciones</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Fiesta() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div data-reveal>
          <h2 className="font-display text-[#2B0A1A] mt-3" style={{ fontSize: 'clamp(40px,5vw,72px)' }}>5 años resaltando tu belleza</h2>
          <p className="text-[17px] text-[#C2185B] font-semibold mt-4">¡Hoy Glow Up está de fiesta! Gracias por estos 5 años contigo.</p>
          <p className="text-[19px] leading-relaxed mt-5 max-w-[52ch]">
            Resultados que hablan por sí solos: piel visiblemente más clara, suavecita y libre de vello desde las primeras sesiones.
          </p>
          <div className="mt-7 flex gap-3">
            <a href={WA} className="bg-[#AD1457] hover:bg-[#8E0E47] text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2"><MessageCircle size={18} /> Escríbenos 099 990 0970</a>
          </div>
        </div>
        <div data-reveal>
          <img src="/831616093_18117378178969299_7575594489838199786_n.jpg" alt="Fiesta de aniversario: 5 años de Glow Up contigo" className="w-full h-auto object-cover rounded-3xl" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

const MENU = [
  {
    group: 'Faciales premium',
    items: [
      { name: 'Glass Skin Repair + Exosomas', desc: 'Limpieza profunda, extracción, hidratación intensiva. Efecto piel de porcelana.', price: '$39', icon: Sparkles, photo: '/720191674_18106049719969299_8271465705683202574_n.jpg' },
      { name: 'Limpieza Facial', desc: 'Renueva, ilumina y afina poros.', price: '$14.99', icon: Sparkles },
      { name: 'Mascarilla Hidroplástica', desc: 'Hidratación choque para eventos.', price: '$14.99', icon: Sparkles },
      { name: 'BB Glow', desc: 'Tono uniforme y glow inmediato.', price: '$17.99', icon: Sparkles },
      { name: 'Plasma', desc: 'Rejuvenecimiento y firmeza.', price: '$18.99', icon: Sparkles },
      { name: 'Exosomas', desc: 'Reparación celular avanzada.', price: '$19.99', icon: Sparkles },
    ],
  },
  {
    group: 'Láser diodo e hilo',
    items: [
      { name: 'Axilas + Bikini', desc: 'Adiós irritación, foliculitis y manchas.', price: '$15', icon: Zap },
      { name: 'Media pierna + Axilas', desc: 'Piel suave todos los días.', price: '$15', icon: Zap },
      { name: 'Depilación facial con hilo', desc: 'Precisión sin irritar.', price: '$7.99', icon: Zap },
      { name: 'Cejas y bigote con hilo', desc: 'Perfilado limpio.', price: '$3.99', icon: Zap },
    ],
  },
  {
    group: 'Corporal y mirada',
    items: [
      { name: 'Masaje relajante', desc: 'Libera tensión y descansa.', price: '$17.99', icon: Leaf },
      { name: 'Masaje moldeador', desc: 'Define y drena.', price: '$15.99', icon: Leaf },
      { name: 'Masaje anticelulítico', desc: 'Piel más lisa.', price: '$14.99', icon: Leaf },
      { name: 'Lifting de pestañas', desc: 'Curvatura natural sin rímel.', price: '$9.99', icon: Eye },
      { name: 'Brow lamination', desc: 'Cejas peinadas y densas.', price: '$9.99', icon: Eye },
    ],
  },
];

export function ServicesMenu() {
  return (
    <section id="servicios" className="bg-[#FFF0F5] px-6 py-20">
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-[280px_1fr] gap-12">
        <div data-reveal>
          <h2 className="font-display" style={{ fontSize: 'clamp(32px,3.5vw,44px)' }}>El menú de la casa</h2>
          <p className="text-[17px] text-[#6B4A5A] mt-4 leading-relaxed">Precios claros, trato especializado. Elige y agenda por WhatsApp.</p>
          <img src="/720191674_18106049719969299_8271465705683202574_n.jpg" alt="Glass Skin Repair con exosomas, el facial estrella de la casa" className="mt-8 w-full aspect-[4/5] object-cover" loading="lazy" />
        </div>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {MENU.map((g) => (
            <div key={g.group} data-reveal>
              <h3 className="text-[24px] font-semibold text-[#C2185B]">{g.group}</h3>
              <div className="mt-6 space-y-[22px]">
                {g.items.map((it) => (
                  <div key={it.name} className="flex justify-between gap-6 items-baseline">
                    <div className="min-w-0">
                      <p className="text-[19px] font-medium flex items-center gap-2"><it.icon size={18} className="text-[#D81B60] shrink-0" /> {it.name}</p>
                      <p className="text-[16px] text-[#6B4A5A] mt-1 max-w-[36ch]">{it.desc}</p>
                    </div>
                    <span className="text-[19px] font-semibold tabular-nums whitespace-nowrap">{it.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Proof() {
  return (
    <section id="resultados" className="bg-[#2B0A1A] text-white px-6 py-20">
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-12 gap-8 items-start">
        <img
          data-reveal
          src="/790476413_18114186895969299_8078544786992165141_n.jpg"
          alt="Resultado láser diodo: antes y después"
          className="md:col-span-4 w-full aspect-[3/4] object-cover"
          loading="lazy"
        />
        <div className="md:col-span-8 md:pt-[120px]" data-reveal>
          <blockquote className="font-display" style={{ fontSize: 'clamp(24px,2.2vw,32px)', lineHeight: 1.25, maxWidth: '26ch' }}>
            “Piel libre de manchas, sin irritación y suavecita todos los días.”
          </blockquote>
          <p className="mt-8 text-[16px] opacity-80">Láser diodo · Primera sesión → Tercera sesión · @glowupspaquito</p>
          <img src="/834200252_18117378196969299_7524844920960682544_n.jpg" alt="Depilación con hilo y láser diodo en promo" className="mt-8 w-full max-w-[380px] aspect-[4/5] object-cover" loading="lazy" />
          <a href={WA} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 bg-[#AD1457] hover:bg-[#8E0E47] text-white px-7 py-3 rounded-full font-semibold transition-colors">Quiero este resultado <ArrowRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}

export function Steps() {
  const steps = [
    { verb: 'Escríbenos', text: 'Mensaje directo o WhatsApp al 099 990 0970. Te respondemos hoy.', bg: 'bg-[#2B0A1A]', fg: 'text-white' },
    { verb: 'Agenda', text: 'Valoración gratuita con anticipación. Sin espera, sin filas.', bg: 'bg-white', fg: 'text-[#2B0A1A]' },
    { verb: 'Disfruta', text: 'Trato especializado y olvídate del retoque diario.', bg: 'bg-[#C2185B]', fg: 'text-white' },
  ];
  return (
    <section id="proceso" aria-label="Cómo funciona">
      {steps.map((s) => (
        <div key={s.verb} className={`${s.bg} px-6 py-14 md:py-20`}>
          <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1fr_320px] gap-4 md:gap-10 items-end">
            <h2 data-reveal className={`font-display ${s.fg}`} style={{ fontSize: 'clamp(56px,9vw,132px)', lineHeight: 0.95 }}>{s.verb}</h2>
            <p data-reveal className={`${s.fg} text-[17px] leading-relaxed max-w-[40ch] opacity-90 md:pb-3`}>{s.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

const PACKAGES = [
  {
    name: 'Ritual Glass Skin',
    price: '$39',
    tag: 'Facial premium con exosomas',
    includes: ['Limpieza profunda', 'Extracción de impurezas', 'Exosomas regenerativos', 'Hidratación intensiva'],
  },
  {
    name: 'Dúo Láser Diodo',
    price: '$15',
    tag: 'Axilas + Bikini o Media pierna + Axilas',
    includes: ['Las dos zonas a elegir', 'Adiós irritación y foliculitis', 'Piel sin manchas'],
  },
  {
    name: 'Mirada Total',
    price: '$9.99',
    tag: 'Por servicio · hilo desde $3.99',
    includes: ['Lifting de pestañas', 'Brow lamination', 'Depilación con hilo'],
  },
];

export function Promos() {
  return (
    <section id="promociones" className="bg-white">
      <div className="bg-[#C2185B] text-white px-6 py-12 text-center">
        <h2 data-reveal className="font-display" style={{ fontSize: 'clamp(32px,4vw,56px)', lineHeight: 1.05 }}>Promociones de la casa</h2>
        <p data-reveal className="mt-3 text-[17px] opacity-90">De aniversario · del 3 al 20 de octubre · con previa cita</p>
      </div>
      <div className="px-6 py-16 bg-[#FFF0F5]">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => {
            const link = `${WA}?text=${encodeURIComponent(`Hola Glow Up, quiero agendar ${pkg.name} (${pkg.price}) por la promo de aniversario`)}`;
            return (
              <article key={pkg.name} data-reveal className="bg-[#2B0A1A] text-white rounded-3xl p-8 flex flex-col">
                <p className="font-display" style={{ fontSize: '32px', lineHeight: 1.1 }}>{pkg.name}</p>
                <p className="mt-1 text-[16px] opacity-80">{pkg.tag}</p>
                <p className="mt-6 font-bold" style={{ fontSize: '56px', lineHeight: 1 }}><span className="align-top" style={{ fontSize: '24px' }}>$</span>{pkg.price.replace('$', '')}</p>
                <ul className="mt-6 space-y-3 text-[16px]">
                  {pkg.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5">
                      <Check size={18} className="text-[#F48FB1] shrink-0 mt-0.5" /> <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                <a href={link} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center justify-center gap-2 bg-white text-[#C2185B] px-6 py-3 rounded-full font-semibold text-[16px] transition-colors">
                  Agendar {pkg.price} <ArrowRight size={17} />
                </a>
              </article>
            );
          })}
        </div>
        <p data-reveal className="text-center text-[16px] text-[#6B4A5A] mt-10">¿Buscas otro servicio? Mira el menú completo arriba y escríbenos por WhatsApp.</p>
      </div>
    </section>
  );
}

export function ContactFooter() {
  return (
    <footer id="contacto" className="relative">
      <img src="/830754678_18117378241969299_7991617238924122363_n.jpg" alt="La cabina de Glow Up SPA te espera en Quito" className="h-[100svh] min-h-[640px] w-full object-cover" style={{ objectPosition: '50% 75%' }} loading="lazy" />
      <div className="absolute top-[60px] right-6 md:right-[60px] w-[min(400px,calc(100%-48px))] bg-[#FFF0F5] rounded-lg p-8">
        <h2 className="text-[28px] font-semibold">Contáctanos</h2>
        <p className="mt-1 text-[16px] text-[#6B4A5A]">Reserva con anticipación por DM o WhatsApp.</p>
        <h3 className="mt-6 text-[16px] font-bold tracking-wide flex items-center gap-2"><Clock size={16} /> Horarios de atención</h3>
        <p className="mt-1 text-[16px]">Lunes a sábado · con cita previa</p>
        <h3 className="mt-6 text-[16px] font-bold tracking-wide">Visítanos en Quito</h3>
        <address className="not-italic mt-1 text-[16px] leading-relaxed">
          Jaime Albuja y Av. Real Audiencia<br />Quito, Ecuador
        </address>
        <div className="mt-4 text-[16px] space-y-1 tabular-nums">
          <p className="flex items-center gap-2"><Phone size={16} /> 099 990 0970 · 099 804 6299</p>
          <p className="flex items-center gap-2"><AtSign size={16} /> @glowupspaquito</p>
          <p className="flex items-center gap-2"><Mail size={16} /> glow.up.spa1@gmail.com</p>
          <p className="flex items-center gap-2"><MapPin size={16} /> Lun–Sáb · con cita previa</p>
        </div>
        <a href={WA} target="_blank" rel="noreferrer" className="mt-6 flex items-center justify-center bg-[#AD1457] hover:bg-[#8E0E47] text-white h-[52px] rounded-full font-semibold transition-colors">
          Agenda tu cita hoy
        </a>
      </div>
      <div className="bg-[#2B0A1A] text-white px-6 pt-14 pb-8">
        <p className="font-display text-center leading-none" style={{ fontSize: 'clamp(60px,12vw,180px)' }}>Glow Up</p>
        <div className="max-w-[1200px] mx-auto mt-8 flex flex-col md:flex-row gap-3 items-center justify-between text-[16px] opacity-80">
          <span>SPA · Make Up · Boutique — Resaltamos tu belleza</span>
          <span>Regálale a tu piel la tranquilidad que se merece.</span>
        </div>
      </div>
    </footer>
  );
}
