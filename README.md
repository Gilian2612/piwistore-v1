# Piwistore

Tienda de mascotas colombiana. El sitio tiene dos páginas: una landing de marca (`/`) y un catálogo de productos con carrito (`/productos`). No hay checkout ni backend — todo pedido se cierra por WhatsApp.

Construido con [TanStack Start](https://tanstack.com/start) (React, file-based routing) + Tailwind CSS v4. Originado en [Lovable](https://lovable.dev).

## Marca

| Color | Hex | Uso |
| --- | --- | --- |
| Rojo primario | `#D93B30` | Botones principales (`.btn-primary`), precios, acentos |
| Navy | `#1A2035` | Footer, textos oscuros |
| Ice blue | `#F5FAFA` | Fondos secundarios (hero, features strip) |
| Amber | `#F4A636` | Badge del carrito |
| Penguin blue | `#78D2F0` | Botón "Pedir ahora" del navbar, "Ver productos" (`.btn-penguin-blue`) |
| WhatsApp green | `#25D366` | Botón "Pedir por WhatsApp" del carrito (`.btn-whatsapp`) |

Tipografías: Nunito (`--font-heading`, títulos) + Inter (`--font-sans`, cuerpo), cargadas desde Google Fonts en `__root.tsx`.

## Estructura del sitio

**`src/routes/index.tsx` — Landing (`/`)**
- Banner de anuncio + navbar (`SiteHeader`)
- Hero (`id="inicio"`): headline, CTA "Ver productos" → `/productos`, imagen de Piwi
- Sección "Nosotros" (`id="nosotros"`): historia de origen de la marca, con imagen
- Features strip (envío, WhatsApp, pago contra entrega)
- Footer (`SiteFooter`)

**`src/routes/productos.tsx` — Catálogo (`/productos`)**
- `SiteHeader` + grid de 3 productos (fuente de agua, limpiador de patas, cama)
- Modal de detalle por producto ("Ver detalles")
- Carrito flotante (botón + drawer), estado en memoria con React (`useState`, sin `localStorage`) — si agregas el mismo producto dos veces, suma cantidad en vez de duplicar la línea
- Features strip + `SiteFooter`

**Componentes compartidos (`src/components/`)**
- `site-header.tsx`: banner sticky + navbar. Logo es una imagen (`/favicon.png`) que enlaza a `/`. Nav "Inicio / Nosotros / Productos": en escritorio es una botonera horizontal (hace scroll suave si ya estás en la landing, o navega con hash si estás en otra página); en móvil colapsa a un botón hamburguesa que despliega el mismo menú.
- `site-footer.tsx`: footer navy con copyright, links a Facebook/Instagram y WhatsApp.

## Productos

Definidos en `src/routes/productos.tsx` (`PRODUCTS`): Fuente Automática de Agua ($79.900), Limpiador de Patas Eléctrico ($79.900), Nube de Sueños — Cama para Mascota ($69.900). Cada uno tiene su propio link de WhatsApp con mensaje prellenado; el botón "Pedir por WhatsApp" del carrito arma un mensaje con todos los productos y el subtotal.

## Assets

- `public/favicon.png`: logo/ícono con fondo transparente, usado como favicon y como logo del navbar.
- `src/assets/piwi-hero.png` y `src/assets/piwi-about.png`: ilustraciones de Piwi (importadas como PNG estándar de Vite, no vía URL externa, para que funcionen igual en local y en producción).
- `src/assets/material visual/piwi-poses/`: banco de poses de Piwi disponibles para futuras secciones.

## Desarrollo

Necesitas Node.js y npm — [instálalo con nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Build with Lovable

Este proyecto se puede seguir editando en el [editor de Lovable](https://lovable.dev/projects/0aae1a6b-0bca-4ff8-97fe-2fbb617c62d1) — los cambios ahí se sincronizan directo con este repositorio, y viceversa al hacer push a `main`.
