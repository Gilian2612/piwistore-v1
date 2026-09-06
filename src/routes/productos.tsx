import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductImageCarousel, type CarouselImage } from "@/components/product-image-carousel";
import fuenteImg1 from "@/assets/material visual/PRODUCTOS/01/fuente1.jpeg";
import fuenteImg2 from "@/assets/material visual/PRODUCTOS/01/fuente2.jpeg";
import fuenteImg3 from "@/assets/material visual/PRODUCTOS/01/fuente3.jpeg";
import fuenteImg4 from "@/assets/material visual/PRODUCTOS/01/fuente4.jpeg";
import fuenteImg5 from "@/assets/material visual/PRODUCTOS/01/bebdero_imagen.png";

const WHATSAPP = "573022409193";

type Product = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  features: string[];
  price: number;
  waLink: string;
  images?: CarouselImage[];
};

const PRODUCTS: Product[] = [
  {
    id: "fuente",
    name: "Fuente Automática de Agua para Mascotas",
    shortName: "Fuente de Agua",
    description:
      "3 modos de flujo · Sistema de circulación · Material ABS libre de BPA · Silenciosa y fácil de limpiar",
    features: [
      "3 modos de flujo ajustables",
      "Sistema de circulación de agua fresca",
      "Material ABS libre de BPA",
      "Silenciosa y fácil de limpiar",
      "Ideal para gatos y perros",
    ],
    price: 79900,
    waLink:
      "https://wa.me/573022409193?text=Hola%2C%20quiero%20pedir%20la%20Fuente%20Autom%C3%A1tica%20de%20Agua%20para%20Mascotas%20%F0%9F%90%BE%20Precio%3A%20%2479.900",
    images: [fuenteImg1, fuenteImg2, fuenteImg3, fuenteImg4, { src: fuenteImg5, position: "top" }],
  },
  {
    id: "limpiador",
    name: "Limpiador de Patas Eléctrico",
    shortName: "Limpiador de Patas",
    description:
      "2 velocidades · Cerdas de silicona suaves · Batería 2000mAh recargable · Fácil de desmontar y limpiar",
    features: [
      "2 velocidades potentes",
      "Cerdas de silicona suaves",
      "Batería 2000mAh recargable",
      "Fácil de desmontar y limpiar",
      "Perfecto para patas sucias",
    ],
    price: 79900,
    waLink:
      "https://wa.me/573022409193?text=Hola%2C%20quiero%20pedir%20el%20Limpiador%20de%20Patas%20El%C3%A9ctrico%20%F0%9F%90%BE%20Precio%3A%20%2479.900",
  },
  {
    id: "cama",
    name: "Nube de Sueños · Cama para Mascota",
    shortName: "Cama Nube de Sueños",
    description:
      "Pelo sintético ultrasuave · Borde elevado para cabeza y cuello · Base antideslizante · 50cm diámetro",
    features: [
      "Pelo sintético ultrasuave",
      "Borde elevado para cabeza y cuello",
      "Base antideslizante",
      "50cm de diámetro",
      "Descanso cómodo y seguro",
    ],
    price: 69900,
    waLink:
      "https://wa.me/573022409193?text=Hola%2C%20quiero%20pedir%20la%20Nube%20de%20Sue%C3%B1os%20Cama%20para%20Mascota%20%F0%9F%90%BE%20Precio%3A%20%2469.900",
  },
];

type CartItem = { product: Product; qty: number };

const formatCOP = (n: number) => `$${n.toLocaleString("es-CO")}`;

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos · Piwistore" },
      {
        name: "description",
        content:
          "Descubre nuestros productos para mascotas con envío a toda Colombia. Pide fácil y rápido por WhatsApp.",
      },
      { property: "og:title", content: "Productos · Piwistore" },
      {
        property: "og:description",
        content:
          "Descubre nuestros productos para mascotas con envío a toda Colombia. Pide fácil y rápido por WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Productos,
});

function Productos() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProduct]);

  const itemCount = useMemo(() => cart.reduce((s, i) => s + i.qty, 0), [cart]);
  const subtotal = useMemo(
    () => cart.reduce((s, i) => s + i.qty * i.product.price, 0),
    [cart],
  );

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i,
        );
      }
      return [...prev, { product, qty: 1 }];
    });
  };

  const removeFromCart = (id: string) =>
    setCart((prev) => prev.filter((i) => i.product.id !== id));

  const buildCartWaLink = () => {
    let text = "Hola, quiero pedir:\n";
    for (const item of cart) {
      text += `- ${item.product.name} x${item.qty} - ${formatCOP(item.product.price * item.qty)}\n`;
    }
    text += `\nTotal: ${formatCOP(subtotal)} COP`;
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteHeader />

      {/* Products */}
      <section id="productos" className="w-full bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-center font-heading text-3xl font-bold text-foreground">
            Nuestros productos
          </h1>
          <div className="mt-10 grid grid-cols-1 place-items-center gap-8 md:grid-cols-3">
            {PRODUCTS.map((p) => (
              <article key={p.id} className="product-card">
                {p.images ? (
                  <ProductImageCarousel images={p.images} alt={p.name} />
                ) : (
                  <div className="flex aspect-square items-center justify-center bg-secondary px-6 text-center">
                    <span className="text-sm font-medium text-muted-foreground">
                      {p.name}
                    </span>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {p.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.description}</p>
                  <p className="mt-3 font-heading text-[22px] font-bold text-foreground">
                    {formatCOP(p.price)} COP
                  </p>
                  <div className="mt-4 space-y-2">
                    <button
                      onClick={() => setSelectedProduct(p)}
                      className="btn-outline-blue w-full text-sm"
                    >
                      👁 Ver detalles
                    </button>
                    <div className="grid grid-cols-2 gap-2">
                      <button onClick={() => addToCart(p)} className="btn-outline-blue text-sm">
                        🛒 Agregar
                      </button>
                      <a
                        href={p.waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm"
                      >
                        💬 Pedir ya
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="w-full bg-secondary py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 text-center sm:grid-cols-3">
          {[
            ["📦", "Envío a toda Colombia"],
            ["💬", "Atención por WhatsApp"],
            ["✅", "Pago contra entrega disponible"],
          ].map(([icon, label]) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <span className="text-3xl">{icon}</span>
              <span className="font-heading text-base font-bold text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />

      {/* Floating cart button */}
      <button
        onClick={() => setDrawerOpen(true)}
        aria-label="Abrir carrito"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl text-white shadow-lg transition-transform hover:scale-105"
      >
        🛒
        {itemCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-brand-amber px-1 text-xs font-bold text-brand-navy">
            {itemCount}
          </span>
        )}
      </button>

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-brand-navy/50"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Cart drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full flex-col bg-white shadow-2xl transition-transform duration-300 sm:w-80 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between bg-brand-navy px-5 py-4 text-white">
          <h3 className="font-heading text-lg font-bold">Tu pedido 🐧</h3>
          <button onClick={() => setDrawerOpen(false)} aria-label="Cerrar carrito" className="text-xl">
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {cart.length === 0 ? (
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Tu carrito está vacío. ¡Agrega algo rico para tu mascota! 🐾
            </p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.product.id} className="flex items-start justify-between gap-3 border-b pb-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {item.product.shortName} {item.qty > 1 && `x${item.qty}`}
                    </p>
                    <p className="mt-1 font-heading text-sm font-bold text-foreground">
                      {formatCOP(item.product.price * item.qty)} COP
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    aria-label={`Quitar ${item.product.shortName}`}
                    className="text-muted-foreground hover:text-primary"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-t px-5 py-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Subtotal</span>
            <span className="font-heading text-lg font-bold text-foreground">
              {formatCOP(subtotal)} COP
            </span>
          </div>
          <div className="space-y-2">
            <button
              onClick={() => setCart([])}
              disabled={cart.length === 0}
              className="btn-outline-red w-full disabled:opacity-40"
            >
              Vaciar carrito
            </button>
            <a
              href={cart.length > 0 ? buildCartWaLink() : undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={cart.length === 0}
              className={`btn-whatsapp w-full ${cart.length === 0 ? "pointer-events-none opacity-40" : ""}`}
            >
              Pedir por WhatsApp 🐧
            </a>
          </div>
        </div>
      </aside>

      {/* Product detail modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-navy/60 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProduct(null);
          }}
        >
          <div className="product-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button
              onClick={() => setSelectedProduct(null)}
              aria-label="Cerrar detalles"
              className="absolute right-4 top-4 text-2xl text-muted-foreground transition-colors hover:text-primary"
            >
              ✕
            </button>
            {selectedProduct.images ? (
              <ProductImageCarousel
                images={selectedProduct.images}
                alt={selectedProduct.name}
                className="rounded-xl"
              />
            ) : (
              <div className="flex aspect-square items-center justify-center rounded-xl bg-secondary px-6 text-center">
                <span className="text-sm font-medium text-muted-foreground">{selectedProduct.name}</span>
              </div>
            )}
            <div className="mt-5">
              <h3 id="modal-title" className="font-heading text-2xl font-bold text-foreground">
                {selectedProduct.name}
              </h3>
              <p className="mt-3 font-heading text-3xl font-bold text-foreground">
                {formatCOP(selectedProduct.price)} COP
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {selectedProduct.features.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    addToCart(selectedProduct);
                  }}
                  className="btn-outline-blue text-sm"
                >
                  🛒 Agregar
                </button>
                <a
                  href={selectedProduct.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  💬 Pedir ya
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
