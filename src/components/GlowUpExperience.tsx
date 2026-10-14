import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar, Hero, Categories, ServicesMenu, Steps, Promos, ContactFooter } from './glow';

gsap.registerPlugin(ScrollTrigger);

export default function GlowUpExperience() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            immediateRender: false,
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          }
        );
      });

      gsap.to('[data-wordmark]', {
        scale: 0.94,
        transformOrigin: '50% 100%',
        ease: 'none',
        scrollTrigger: { trigger: '[data-wordmark]', start: 'top 80%', end: 'bottom 20%', scrub: 1 },
      });

      ScrollTrigger.batch('img', {
        onEnter: (els) => gsap.fromTo(els, { opacity: 0.4, scale: 1.02 }, { opacity: 1, scale: 1, duration: 1, ease: 'power2.out', overwrite: true }),
        once: true,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="min-h-[100svh]">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <ServicesMenu />
        <Steps />
        <Promos />
      </main>
      <ContactFooter />
      <a
        href="https://wa.me/593999900970?text=Hola%20Glow%20Up%2C%20quiero%20agendar%20una%20cita"
        target="_blank"
        rel="noreferrer"
        aria-label="Chatea por WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full font-semibold text-[16px]"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 2a8 8 0 1 1-4.1 14.9l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 0 1 12 4Zm-3.2 4.1c-.2 0-.4 0-.6.2-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.7 2.7 4.2 3.7 2.1.8 2.5.7 3 .6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.7-.3l-1.6-.8c-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1-.6-.3-1.2-.5-1.7-1-.4-.4-.8-.9-1.1-1.2-.1-.2-.1-.4 0-.6l.4-.5c.1-.2.2-.4.1-.6L9.4 8.4c-.1-.2-.3-.3-.6-.3Z" /></svg>
        Chat
      </a>
    </div>
  );
}
