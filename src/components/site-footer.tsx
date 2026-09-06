import { Link } from "@tanstack/react-router";

const WHATSAPP = "573022409193";

export function SiteFooter() {
  return (
    <footer className="w-full bg-brand-navy py-10 text-center text-white">
      <p className="font-heading text-lg font-bold">Piwistore © 2025 · Hecho con amor 🇨🇴</p>
      <Link
        to="/terminos"
        className="mt-2 inline-block text-sm text-white/80 underline-offset-2 hover:underline"
      >
        Términos y Condiciones
      </Link>
      <div className="mt-4 flex items-center justify-center gap-4">
        <a
          href="https://www.facebook.com/profile.php?id=61579222033810"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
          aria-label="Facebook de Piwistore"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.098 4.388 23.03 10.125 23.927v-6.93H7.078v-2.924h3.047V9.41c0-3.017 1.792-4.68 4.533-4.68 1.312 0 2.686.235 2.686.235v2.953h-1.512c-1.49 0-1.953.93-1.953 1.883v2.26h3.328l-.532 2.924h-2.796v6.93C19.612 23.03 24 18.098 24 12.073z" />
          </svg>
          Facebook
        </a>
        <a
          href="https://www.instagram.com/piwistore__/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
          aria-label="Instagram de Piwistore"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
          </svg>
          Instagram
        </a>
      </div>
      <a
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm text-white/80 underline-offset-2 hover:underline"
      >
        WhatsApp: +57 302 240 9193
      </a>
    </footer>
  );
}
