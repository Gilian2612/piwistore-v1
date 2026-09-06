import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import heroImage from "@/assets/piwi-hero.png";
import aboutImage from "@/assets/piwi-about.png";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Piwistore · Tienda de mascotas en Colombia" },
      {
        name: "description",
        content:
          "Productos para tu mascota con envío a toda Colombia. Atención personalizada y pedidos por WhatsApp.",
      },
      { property: "og:title", content: "Piwistore · Tienda de mascotas en Colombia" },
      {
        property: "og:description",
        content:
          "Productos para tu mascota con envío a toda Colombia. Atención personalizada y pedidos por WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteHeader />

      {/* Hero */}
      <section id="inicio" className="w-full bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
              Tu mascota merece lo mejor 🐾
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Envíos a toda Colombia · Atención personalizada por WhatsApp
            </p>
            <Link to="/productos" className="btn-penguin-blue mt-8 inline-block px-8 py-4 text-base">
              Ver productos
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src={heroImage}
              alt="Piwi, la mascota pingüino de Piwistore"
              className="w-full max-w-md rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About / Nosotros */}
      <section id="nosotros" className="w-full bg-white py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
          <div className="order-2 flex justify-center md:order-1">
            <img
              src={aboutImage}
              alt="Piwi, la mascota pingüino de Piwistore"
              className="w-full max-w-sm rounded-2xl shadow-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-heading text-3xl font-bold text-foreground">
              ¿De dónde nace Piwistore? 🐧
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Somos una familia colombiana amante de los animales. Piwistore nació de las
              ganas de combinar nuestro cariño por perros y gatos con productos prácticos y
              de calidad que de verdad marcan la diferencia en el día a día de una mascota.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Piwi, nuestro pingüino, representa lo que somos: cercanos, curiosos y siempre
              dispuestos a ayudar. Cada producto que vendemos lo probamos pensando en
              nuestras propias mascotas, porque sabemos que la tuya merece lo mismo.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Hoy seguimos creciendo gracias a la confianza de cientos de familias en toda
              Colombia, manteniendo la misma promesa desde el primer día: atención
              personalizada y productos que sí funcionan.
            </p>
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
    </div>
  );
}
