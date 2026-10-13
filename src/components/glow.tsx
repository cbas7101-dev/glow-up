import { useState } from 'react';
import { Sparkles, Zap, Leaf, Eye, MessageCircle, MapPin, Phone, AtSign, Mail, ArrowRight, CalendarHeart, ChevronRight } from 'lucide-react';

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
        <h2 data-wordmark className="font-display hero-name text-[#C2185B] max-w-[1400px] mx-auto mt-2 select-none" aria-label="Glow Up">
          Glow Up
        </h2>
        <div className="max-w-[1400px] mx-auto mt-3 flex flex-wrap gap-x-8 gap-y-2 text-[16px] text-[#6B4A5A]">
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
              <a href="#servicios" className="mt-4 inline-block bg-[#AD1457] hover:bg-[#8E0E47] text-white px-7 py-2.5 rounded-full font-semibold text-[16px] transition-colors">Ver opciones</a>
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
          <a href={WA} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 bg-[#AD1457] hover:bg-[#8E0E47] text-white px-7 py-3 rounded-full font-semibold transition-colors">Quiero este resultado <ArrowRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}

export function Steps() {
  const steps = [
    { verb: 'Escríbenos', text: 'Mensaje directo o WhatsApp al 099 990 0970. Te respondemos hoy.', img: '/830754678_18117378241969299_7991617238924122363_n.jpg', pos: '50% 30%' },
    { verb: 'Agenda', text: 'Valoración gratuita con anticipación. Sin espera, sin filas.', img: '/834200252_18117378196969299_7524844920960682544_n.jpg', pos: '50% 35%' },
    { verb: 'Disfruta', text: 'Trato especializado y olvídate del retoque diario.', img: '/831616093_18117378178969299_7575594489838199786_n.jpg', pos: '50% 30%' },
  ];
  return (
    <section id="proceso" className="bg-[#FFF0F5]">
      {steps.map((s) => (
        <div key={s.verb} className="relative h-[100svh] overflow-hidden flex items-center justify-center">
          <img src={s.img} alt={s.verb} className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: s.pos }} loading="lazy" />
          <div className="absolute inset-0 bg-black/60" aria-hidden />
          <h2 data-reveal className="relative font-display text-white text-center" style={{ fontSize: 'clamp(72px,15vw,240px)' }}>{s.verb}</h2>
          <p className="absolute bottom-8 left-6 right-6 md:left-10 text-white text-[17px] max-w-[52ch]">{s.text}</p>
        </div>
      ))}
    </section>
  );
}

const PICKER = [
  { id: 'glass', name: 'Glass Skin Repair', price: '$39' },
  { id: 'laser', name: 'Láser Axilas + Bikini', price: '$15' },
  { id: 'masaje', name: 'Masaje relajante', price: '$17.99' },
  { id: 'lashes', name: 'Lifting + Laminado', price: '$9.99' },
  { id: 'bbglow', name: 'BB Glow', price: '$17.99' },
];

export function Promos() {
  const [sel, setSel] = useState(PICKER[0]);
  const link = `${WA}?text=${encodeURIComponent(`Hola Glow Up, quiero agendar ${sel.name} (${sel.price}) por la promo de aniversario`)}`;
  return (
    <section id="promociones" className="bg-white">
      <div className="grid grid-cols-3 h-[40svh] min-h-[280px]">
        <img src="/831532835_18117378274969299_6774431948201622192_n.jpg" alt="Promo faciales y rejuvenecimiento" className="h-full w-full object-cover" style={{ objectPosition: '50% 30%' }} loading="lazy" />
        <img src="/829762291_18117378220969299_7960367815238614785_n.jpg" alt="Promo corporales y masajes" className="h-full w-full object-cover" style={{ objectPosition: '50% 38%' }} loading="lazy" />
        <img src="/830434342_18117378202969299_4607416569557005457_n.jpg" alt="Promo lashes y brows" className="h-full w-full object-cover" style={{ objectPosition: '50% 30%' }} loading="lazy" />
      </div>
      <div className="bg-[#C2185B] text-white px-6 py-16">
        <div className="max-w-[900px] mx-auto">
          <div data-reveal>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px,3vw,40px)', lineHeight: 1.15 }}>
              Promociones de Locura del <span className="underline decoration-[4px] underline-offset-[6px]"><a href={link} target="_blank" rel="noreferrer">3 al 20 de octubre</a></span>
            </h2>
            <p className="mt-4 text-[17px] opacity-90">Faciales, BB Glow $17.99, Plasma $18.99, hilo y láser. Elige tu tratamiento:</p>
            <div className="mt-6 flex flex-wrap gap-3" role="group" aria-label="Elige tratamiento">
              {PICKER.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSel(p)}
                  aria-pressed={sel.id === p.id}
                  className={`px-5 py-2.5 rounded-full text-[16px] font-semibold transition-colors ${sel.id === p.id ? 'bg-white text-[#C2185B]' : 'bg-white/15 text-white hover:bg-white/25'}`}
                >
                  {p.name} · {p.price}
                </button>
              ))}
            </div>
            <a href={link} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 bg-white text-[#C2185B] px-7 py-3.5 rounded-full font-semibold text-[17px]">
              Agendar {sel.name} {sel.price} <ArrowRight size={18} />
            </a>
            <p className="mt-4 text-[16px] opacity-75">Sin backend: el botón abre WhatsApp con tu elección escrita.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactFooter() {
  return (
    <footer id="contacto" className="relative">
      <img src="/830754678_18117378241969299_7991617238924122363_n.jpg" alt="La cabina de Glow Up SPA te espera en Quito" className="h-[100svh] min-h-[640px] w-full object-cover" style={{ objectPosition: '50% 75%' }} loading="lazy" />
      <div className="absolute top-[60px] right-6 md:right-[60px] w-[min(380px,calc(100%-48px))] bg-[#FFF0F5] rounded-lg p-8">
        <h2 className="text-[28px] font-semibold">Visítanos en Quito</h2>
        <address className="not-italic mt-4 text-[16px] leading-relaxed">
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
