import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductImageCarousel } from "@/components/product-image-carousel";
import { PRODUCTS, formatCOP } from "@/data/products";

export const Route = createFileRoute("/productos/$productId")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.id === params.productId);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} · Piwistore` },
          { name: "description", content: loaderData.description },
        ]
      : [],
  }),
  component: ProductDetail,
});

function ProductDetail() {
  const product = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteHeader />

      <section className="w-full bg-white py-10">
        <div className="mx-auto max-w-5xl px-4">
          <Link
            to="/productos"
            className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary"
          >
            ← Volver a productos
          </Link>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {product.images ? (
              <ProductImageCarousel
                images={product.images}
                alt={product.name}
                fit="contain"
                className="rounded-2xl"
              />
            ) : (
              <div className="flex aspect-square items-center justify-center rounded-2xl bg-secondary px-6 text-center">
                <span className="text-sm font-medium text-muted-foreground">{product.name}</span>
              </div>
            )}

            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground">{product.name}</h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {product.description}
              </p>
              <p className="mt-6 font-heading text-4xl font-bold text-foreground">
                {formatCOP(product.price)} COP
              </p>

              <h2 className="mt-8 font-heading text-lg font-bold text-foreground">
                Características
              </h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                {product.features.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <a
                  href={product.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  💬 Pedir por WhatsApp
                </a>
                <Link to="/productos" className="btn-outline-blue text-sm text-center">
                  🛒 Ver más productos
                </Link>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Tiempo de envío estimado: 3 a 5 días hábiles
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
