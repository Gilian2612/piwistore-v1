import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const WHATSAPP = "573022409193";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinkClass =
    "block py-2 text-left text-base font-medium text-foreground transition-colors hover:text-primary md:inline md:py-0";

  const navLinks = (onNavigate?: () => void) => (
    <>
      {isHome ? (
        <button
          onClick={() => {
            scrollToId("inicio");
            onNavigate?.();
          }}
          className={navLinkClass}
        >
          Inicio
        </button>
      ) : (
        <Link to="/" className={navLinkClass} onClick={onNavigate}>
          Inicio
        </Link>
      )}
      {isHome ? (
        <button
          onClick={() => {
            scrollToId("nosotros");
            onNavigate?.();
          }}
          className={navLinkClass}
        >
          Nosotros
        </button>
      ) : (
        <Link to="/" hash="nosotros" className={navLinkClass} onClick={onNavigate}>
          Nosotros
        </Link>
      )}
      <Link to="/productos" className={navLinkClass} onClick={onNavigate}>
        Productos
      </Link>
    </>
  );

  return (
    <>
      {/* Announcement banner — sticky, top */}
      <div className="sticky top-0 z-50 w-full bg-primary px-4 py-2.5 text-center text-sm font-medium text-white">
        🎉 Compras superiores a $100.000 COP tienen envío gratis a toda Colombia 🚚
      </div>

      {/* Navbar — sticky below banner */}
      <header
        className={`sticky top-[42px] z-40 w-full transition-shadow ${scrolled ? "navbar-scrolled" : "bg-transparent"}`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" aria-label="Piwistore">
            <img src="/favicon.png" alt="Piwistore" className="h-[70px] w-[70px]" />
          </Link>
          <nav className="hidden items-center gap-[44px] md:flex">{navLinks()}</nav>
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hola%2C%20quiero%20hacer%20un%20pedido%20%F0%9F%90%A7`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-penguin-blue text-sm"
            >
              🐧 Pedir ahora
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hola%2C%20tengo%20una%20pregunta`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-red text-sm"
            >
              Contacto
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center text-2xl text-foreground md:hidden"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {menuOpen && (
          <nav className="flex flex-col gap-1 border-t bg-white px-4 py-3 md:hidden">
            {navLinks(() => setMenuOpen(false))}
          </nav>
        )}
      </header>
    </>
  );
}
