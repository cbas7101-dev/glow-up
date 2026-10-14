import { Sparkles, Zap, Leaf, Eye, MessageCircle, MapPin, Phone, AtSign, Mail, ArrowRight, CalendarHeart, Check, Clock, Home } from 'lucide-react';

const WA_NUMBER = '593999900970';
const WA = `https://wa.me/${WA_NUMBER}`;
const waLink = (msg: string) => `${WA}?text=${encodeURIComponent(msg)}`;
const WA_GENERAL = waLink('Hola Glow Up, quiero agendar una cita');

const ADDRESS = 'Jaime Albuja y Av. Real Audiencia, Quito';
const PHONES = '099 990 0970 · 099 804 6299';
const HOURS = 'Lun–Sáb · con cita previa';
const MAPS_QUERY = encodeURIComponent('Jaime Albuja y Av. Real Audiencia, Quito, Ecuador');

/* Mapa de imágenes:
   banner.png → Hero · logo.jpg → nav/footer
   faciales / corporales / lashes → Categorías
   glass → Menú · agenda → Contacto (ya no es fondo) */

export function Navbar() {
  return (
    <div className="sticky top-0 z-30 shadow-[0_1px_0_rgba(43,10,26,0.08),0_8px_24px_-12px_rgba(43,10,26,0.25)]">
      {/* Barra superior profesional */}
      <div className="bg-[#2B0A1A] text-white/85">
        <div className="max-w-[1300px] mx-auto px-6 py-2 flex flex-wrap items-center justify-center lg:justify-between gap-x-10 gap-y-1 text-[13.5px]">
          <a href={waLink('Hola Glow Up, quiero información')} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
            <Phone size={14} className="shrink-0" /> 099 990 0970 · 099 804 6299
          </a>
          <span className="hidden md:inline-flex items-center gap-2">
            <Home size={14} className="shrink-0" /> Jaime Albuja y Av. Real Audiencia · Quito - Ecuador
          </span>
          <span className="hidden sm:inline-flex items-center gap-2">
            <Clock size={14} className="shrink-0" /> Lunes a sábado · con cita previa
          </span>
        </div>
      </div>
      {/* Barra principal */}
      <nav className="bg-white/95 backdrop-blur">
        <div className="max-w-[1300px] mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-3 min-w-0">
            <img src="/logo.jpg" alt="Glow Up SPA" className="h-12 w-12 rounded-full object-cover shrink-0" width={48} height={48} />
            <span className="leading-none">
              <span className="font-display block text-[22px] tracking-[0.18em] text-[#2B0A1A]">GLOW UP</span>
              <span className="block text-[11px] tracking-[0.32em] text-[#6B4A5A] mt-1">SPA · BOUTIQUE</span>
            </span>
          </a>
          <div className="hidden lg:flex items-center gap-8 text-[#2B0A1A] text-[16px] font-medium">
            <a className="hover:text-[#AD1457]" href="#inicio">Inicio</a>
            <a className="hover:text-[#AD1457]" href="#categorias">Categorías</a>
            <a className="hover:text-[#AD1457]" href="#servicios">Servicios</a>
            <a className="hover:text-[#AD1457]" href="#promociones">Promociones</a>
            <a className="hover:text-[#AD1457]" href="#contacto">Contacto</a>
          </div>
          <div className="flex items-center gap-2">
            <a href={WA_GENERAL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#C9A86A] hover:bg-[#B8945A] text-[#2B0A1A] px-5 py-2.5 rounded-md font-semibold text-[15px] transition-colors whitespace-nowrap">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /></svg>
              Reservar cita
            </a>
          </div>
        </div>
        {/* Links móviles con scroll horizontal */}
        <div className="lg:hidden border-t border-[#F3D9E3]">
          <div className="max-w-[1300px] mx-auto px-6 py-2.5 flex gap-6 overflow-x-auto text-[15px] font-medium text-[#2B0A1A] whitespace-nowrap">
            <a href="#inicio">Inicio</a>
            <a href="#categorias">Categorías</a>
            <a href="#servicios">Servicios</a>
            <a href="#promociones">Promociones</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </nav>
    </div>
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
    <header id="inicio" className="relative bg-[#FCE4EC] overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 py-14 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="min-w-0">
          <h1 data-reveal className="font-display text-[#2B0A1A]" style={{ fontSize: 'clamp(44px,5.2vw,76px)', lineHeight: 1.02 }}>
            Resaltamos tu belleza
          </h1>
          <p data-reveal className="mt-5 text-[19px] leading-relaxed max-w-[52ch]">
            Tu piel merece un tratamiento que vaya más allá de lo tradicional. Limpieza facial profunda, láser diodo y masajes relajantes.
          </p>
          <ul data-reveal className="mt-7 space-y-2.5 text-[17px] font-medium">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <ArrowRight size={19} className="text-[#D81B60] shrink-0 mt-0.5" /> <span>{p}</span>
              </li>
            ))}
          </ul>
          <div data-reveal className="mt-8 flex flex-wrap gap-3">
            <a href={WA_GENERAL} target="_blank" rel="noreferrer" className="bg-[#AD1457] hover:bg-[#8E0E47] text-white px-7 py-3.5 rounded-full font-semibold text-[17px] transition-colors inline-flex items-center gap-2">
              Agenda tu cita <ArrowRight size={18} />
            </a>
            <a href="#promociones" className="bg-white text-[#C2185B] px-7 py-3.5 rounded-full font-semibold text-[17px] transition-colors inline-flex items-center">
              Ver Promociones
            </a>
          </div>
        </div>
        <div data-reveal className="min-w-0">
          <img
            src="/banner.png"
            alt="Glow Up SPA Make Up Boutique — cejas y pestañas, masajes, faciales y pigmentación de labios"
            className="w-full h-auto rounded-3xl object-cover"
            fetchPriority="high"
          />
          <p className="mt-3 text-[16px] text-[#6B4A5A]">5 años contigo · Quito, Ecuador</p>
        </div>
      </div>

      <div className="bg-[#FFF0F5] px-6 pt-6 pb-10 overflow-hidden">
        <h2 data-wordmark className="font-display text-[#C2185B] text-center mx-auto mt-2 select-none max-w-full" style={{ fontSize: 'clamp(48px,10vw,168px)', lineHeight: 0.95, whiteSpace: 'normal', overflowWrap: 'break-word' }} aria-label="Glow Up">
          Glow Up
        </h2>
        <div className="max-w-[1100px] mx-auto mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 text-[15.5px] text-[#6B4A5A] text-center px-2">
          <span className="inline-flex items-center justify-center gap-2 max-w-full"><CalendarHeart size={17} className="shrink-0" /> <span>5 años contigo · Promociones del 3 al 20 de octubre</span></span>
          <span className="inline-flex items-center justify-center gap-2 max-w-full"><MapPin size={17} className="shrink-0" /> <span>Jaime Albuja y Av. Real Audiencia, Quito</span></span>
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

const MENU = [
  {
    group: 'Faciales premium',
    items: [
      { name: 'Glass Skin Repair + Exosomas', desc: 'Limpieza profunda, extracción, hidratación intensiva. Efecto piel de porcelana.', price: '$39', icon: Sparkles },
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
    <section id="servicios" className="bg-[#FFF0F5] px-6 py-14">
      <div className="max-w-[1200px] mx-auto">
        <div data-reveal className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8">
          <div className="flex-1 min-w-0">
            <h2 className="font-display" style={{ fontSize: 'clamp(28px,3vw,38px)' }}>El menú de la casa</h2>
            <p className="text-[15.5px] text-[#6B4A5A] mt-2 leading-relaxed max-w-[62ch]">Precios claros, trato especializado. Cada servicio se agenda directo por WhatsApp.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <img src="/720191674_18106049719969299_8271465705683202574_n.jpg" alt="Glass Skin Repair con exosomas" className="h-16 w-16 rounded-xl object-cover" loading="lazy" />
            <p className="text-[13px] text-[#6B4A5A] leading-tight">Facial estrella<br /><span className="font-bold text-[#2B0A1A]">Glass Skin $39</span></p>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-4 items-start">
          {MENU.map((g) => (
            <div key={g.group} data-reveal className="bg-white/60 border border-[#F3D9E3] rounded-2xl p-5 min-w-0">
              <h3 className="text-[17px] font-bold text-[#C2185B]">{g.group}</h3>
              <div className="mt-3 space-y-3">
                {g.items.map((it) => {
                  const link = waLink(`Hola Glow Up, quiero agendar ${it.name} (${it.price})`);
                  return (
                    <div key={it.name} className="bg-white border border-[#F6DDE7] rounded-xl p-3">
                      <div className="flex justify-between gap-2 items-start">
                        <p className="text-[14.5px] font-semibold flex items-start gap-1.5 leading-snug min-w-0"><it.icon size={15} className="text-[#D81B60] shrink-0 mt-0.5" /> <span>{it.name}</span></p>
                        <span className="text-[14.5px] font-bold tabular-nums whitespace-nowrap">{it.price}</span>
                      </div>
                      <p className="text-[13px] text-[#6B4A5A] mt-1 leading-snug">{it.desc}</p>
                      <a href={link} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1.5 bg-[#AD1457] hover:bg-[#8E0E47] text-white px-3.5 py-1.5 rounded-full font-bold text-[12.5px] transition-colors">
                        <MessageCircle size={13} className="text-white" /> <span className="text-white">Agendar {it.price}</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
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
      <div className="px-6 py-14 bg-[#FFF0F5]">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-3 gap-5 items-stretch">
          {PACKAGES.map((pkg) => {
            const link = waLink(`Hola Glow Up, quiero agendar ${pkg.name} (${pkg.price}) por la promo de aniversario`);
            return (
              <article key={pkg.name} data-reveal className="bg-[#2B0A1A] text-white rounded-2xl p-7 flex flex-col h-full border border-white/10 shadow-[0_20px_50px_-20px_rgba(43,10,26,0.6)]">
                <p className="font-display min-h-[40px] text-white" style={{ fontSize: '26px', lineHeight: 1.15 }}>{pkg.name}</p>
                <p className="mt-1 text-[14px] text-white/70 min-h-[42px]">{pkg.tag}</p>
                <p className="mt-3 font-bold tabular-nums text-white" style={{ fontSize: '48px', lineHeight: 1 }}><span className="align-top" style={{ fontSize: '22px' }}>$</span>{pkg.price.replace('$', '')}</p>
                <ul className="mt-5 space-y-2.5 text-[14.5px] text-white/90 flex-1 border-t border-white/10 pt-5">
                  {pkg.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5">
                      <Check size={17} className="text-[#F48FB1] shrink-0 mt-0.5" strokeWidth={3} /> <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                <a href={link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 bg-[#AD1457] hover:bg-[#C2185B] text-white px-6 py-3 rounded-full font-bold text-[15px] transition-colors w-full shadow-lg">
                  <MessageCircle size={17} className="shrink-0" strokeWidth={2.5} /> Agendar {pkg.price}
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
    <>
      <section id="contacto" className="bg-[#2B0A1A] text-white px-6 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[420px_1fr] gap-8 items-stretch">
          <div className="bg-[#FFF0F5] text-[#2B0A1A] rounded-2xl p-8">
            <h2 className="text-[28px] font-semibold">Contáctanos</h2>
            <p className="mt-1 text-[16px] text-[#6B4A5A]">Reserva con anticipación por DM o WhatsApp.</p>
            <h3 className="mt-6 text-[16px] font-bold tracking-wide flex items-center gap-2"><Clock size={16} /> Horarios de atención</h3>
            <p className="mt-1 text-[16px]">Lunes a sábado · con cita previa</p>
            <h3 className="mt-6 text-[16px] font-bold tracking-wide">Visítanos en Quito</h3>
            <address className="not-italic mt-1 text-[16px] leading-relaxed">
              Jaime Albuja y Av. Real Audiencia<br />Quito, Ecuador
            </address>
            <div className="mt-4 text-[16px] space-y-1.5 tabular-nums">
              <p className="flex items-center gap-2"><Phone size={16} /> 099 990 0970 · 099 804 6299</p>
              <p className="flex items-center gap-2"><AtSign size={16} /> @glowupspaquito</p>
              <p className="flex items-center gap-2"><Mail size={16} /> glow.up.spa1@gmail.com</p>
              <p className="flex items-center gap-2"><MapPin size={16} /> {HOURS}</p>
            </div>
            <a href={WA_GENERAL} target="_blank" rel="noreferrer" className="mt-6 flex items-center justify-center gap-2 bg-[#AD1457] hover:bg-[#8E0E47] text-white h-[52px] rounded-full font-semibold transition-colors">
              <MessageCircle size={18} /> Agenda tu cita hoy
            </a>
          </div>
          <div className="min-w-0 flex flex-col">
            <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex-1 min-h-[380px]">
              <iframe
                title={`Ubicación Glow Up SPA — ${ADDRESS}`}
                src={`https://www.google.com/maps?q=${MAPS_QUERY}&z=17&output=embed`}
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-[15px] text-white/85">
              <span className="inline-flex items-center gap-2"><MapPin size={16} /> {ADDRESS}</span>
              <a href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-white font-semibold hover:underline">
                Cómo llegar <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#1E0713] text-white px-6 pt-14 pb-8">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-display text-center leading-none" style={{ fontSize: 'clamp(56px,10vw,150px)' }}>Glow Up</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-[15px]">
            <div>
              <div className="flex items-center gap-3">
                <img src="/logo.jpg" alt="Glow Up SPA" className="h-10 w-10 rounded-full object-cover" width={40} height={40} />
                <p className="font-semibold">Glow Up SPA · Boutique</p>
              </div>
              <p className="mt-3 text-white/70 leading-relaxed">Resaltamos tu belleza. Faciales, láser diodo, corporales y mirada en Quito.</p>
              <p className="mt-3 text-white/70 inline-flex items-center gap-2"><AtSign size={15} /> @glowupspaquito</p>
            </div>
            <div>
              <p className="font-bold tracking-wide text-[14px] uppercase text-white/60">Explora</p>
              <ul className="mt-3 space-y-2">
                <li><a href="#inicio" className="hover:underline">Inicio</a></li>
                <li><a href="#categorias" className="hover:underline">Categorías</a></li>
                <li><a href="#servicios" className="hover:underline">Servicios</a></li>
                <li><a href="#promociones" className="hover:underline">Promociones</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold tracking-wide text-[14px] uppercase text-white/60">Contacto</p>
              <ul className="mt-3 space-y-2 text-white/85">
                <li className="flex items-center gap-2"><Phone size={15} /> {PHONES}</li>
                <li className="flex items-center gap-2"><Mail size={15} /> glow.up.spa1@gmail.com</li>
                <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 shrink-0" /> {ADDRESS}</li>
              </ul>
            </div>
            <div>
              <p className="font-bold tracking-wide text-[14px] uppercase text-white/60">Agenda</p>
              <p className="mt-3 text-white/70">{HOURS}. Promociones del 3 al 20 de octubre.</p>
              <a href={WA_GENERAL} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 bg-[#AD1457] hover:bg-[#8E0E47] text-white px-5 py-2.5 rounded-full font-semibold text-[14.5px]">
                <MessageCircle size={16} /> Reservar por WhatsApp
              </a>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-2 items-center justify-between text-[13.5px] text-white/60">
            <span>© 2026 Glow Up SPA · Quito, Ecuador. Todos los derechos reservados.</span>
            <span>Del 3 al 20 de octubre · con cita previa</span>
          </div>
        </div>
      </footer>
    </>
  );
}
