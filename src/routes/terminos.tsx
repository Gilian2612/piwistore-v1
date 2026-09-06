import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: "Términos y Condiciones — Piwistore" },
      {
        name: "description",
        content: "Términos y condiciones de compra, envíos, pagos y devoluciones de Piwistore.",
      },
    ],
  }),
  component: Terminos,
});

function Terminos() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-6 py-10 leading-relaxed text-[#444]">
        <h1 className="font-heading text-[28px] font-bold text-brand-red">
          Términos y Condiciones
        </h1>
        <p className="mb-8 mt-1 text-sm text-muted-foreground">
          Última actualización: junio de 2025 — Piwistore
        </p>

        <p className="text-[15px]">
          Al realizar una compra o interactuar con Piwistore a través de nuestra landing page o
          canal de WhatsApp, usted acepta los presentes términos y condiciones. Le recomendamos
          leerlos antes de realizar cualquier pedido.
        </p>

        <h2 className="mb-2 mt-8 font-heading text-lg font-bold text-brand-navy">
          1. Información general
        </h2>
        <p className="text-[15px]">
          Piwistore es una tienda de productos para mascotas con operación en Colombia. Las
          ventas se gestionan a través de WhatsApp al número{" "}
          <strong>+57 302 240 9193</strong>. No somos una entidad jurídica constituida
          formalmente; operamos como negocio independiente bajo la responsabilidad de su
          propietario.
        </p>

        <h2 className="mb-2 mt-8 font-heading text-lg font-bold text-brand-navy">
          2. Productos y disponibilidad
        </h2>
        <ul className="list-disc space-y-1.5 pl-5 text-[15px]">
          <li>
            Los productos publicados están sujetos a disponibilidad de inventario y stock del
            proveedor.
          </li>
          <li>
            Piwistore se reserva el derecho de cancelar un pedido si el producto no está
            disponible al momento de procesarlo, notificando al cliente de inmediato.
          </li>
          <li>
            Las imágenes y descripciones son de carácter ilustrativo. Pueden existir variaciones
            menores en color o presentación respecto al producto recibido.
          </li>
        </ul>

        <h2 className="mb-2 mt-8 font-heading text-lg font-bold text-brand-navy">3. Precios</h2>
        <ul className="list-disc space-y-1.5 pl-5 text-[15px]">
          <li>
            Todos los precios están expresados en pesos colombianos (COP) e incluyen IVA cuando
            aplica.
          </li>
          <li>
            Los precios pueden cambiar sin previo aviso. El precio válido es el confirmado por
            WhatsApp al momento de realizar el pedido.
          </li>
          <li>Compras superiores a $100.000 COP tienen envío gratis a toda Colombia.</li>
        </ul>

        <h2 className="mb-2 mt-8 font-heading text-lg font-bold text-brand-navy">
          4. Métodos de pago
        </h2>
        <p className="text-[15px]">Piwistore acepta las siguientes formas de pago:</p>
        <ul className="list-disc space-y-1.5 pl-5 text-[15px]">
          <li>
            <strong>Pago anticipado:</strong> transferencia bancaria, Nequi o Daviplata al número
            o cuenta indicada por WhatsApp. El pedido se procesa una vez confirmado el pago.
          </li>
          <li>
            <strong>Contra entrega:</strong> disponible para productos seleccionados según la
            zona de despacho. El pago se realiza al momento de recibir el producto.
          </li>
        </ul>
        <div className="my-4 rounded-r-lg border-l-4 border-brand-red bg-brand-ice px-4 py-3 text-[15px]">
          El método de pago disponible para cada pedido se confirma por WhatsApp antes de
          procesar el envío.
        </div>

        <h2 className="mb-2 mt-8 font-heading text-lg font-bold text-brand-navy">
          5. Envíos y tiempos de entrega
        </h2>
        <ul className="list-disc space-y-1.5 pl-5 text-[15px]">
          <li>Los envíos se realizan a todo el territorio colombiano.</li>
          <li>
            Dependiendo del producto, el despacho puede gestionarse a través de Dropi (proveedor
            logístico) o directamente por Piwistore mediante empresas de transporte como
            Coordinadora, Interrapidísimo o Servientrega.
          </li>
          <li>
            El tiempo estimado de entrega es de <strong>3 a 8 días hábiles</strong> según la
            ciudad de destino.
          </li>
          <li>
            Los tiempos de entrega son estimados y pueden variar por causas ajenas a Piwistore
            (festivos, condiciones climáticas, demoras del transportador).
          </li>
          <li>
            Una vez despachado el pedido, se compartirá el número de guía por WhatsApp para
            seguimiento.
          </li>
        </ul>

        <h2 className="mb-2 mt-8 font-heading text-lg font-bold text-brand-navy">
          6. Devoluciones y garantías
        </h2>
        <ul className="list-disc space-y-1.5 pl-5 text-[15px]">
          <li>
            Se aceptan devoluciones dentro de los <strong>5 días calendario</strong> siguientes a
            la recepción del producto, siempre que este presente defecto de fábrica, daño en el
            transporte o sea diferente al pedido.
          </li>
          <li>
            El producto debe estar sin uso, en su empaque original y con las mismas condiciones
            en que fue recibido.
          </li>
          <li>
            Para iniciar una devolución, el cliente debe comunicarse por WhatsApp con foto o
            video del producto y descripción del problema.
          </li>
          <li>
            No se aceptan devoluciones por cambio de opinión o error en la selección del producto
            por parte del cliente.
          </li>
          <li>
            En caso de contra entrega, si el cliente no reclama el paquete, los costos de reenvío
            corren por cuenta del cliente.
          </li>
        </ul>

        <h2 className="mb-2 mt-8 font-heading text-lg font-bold text-brand-navy">
          7. Responsabilidad
        </h2>
        <ul className="list-disc space-y-1.5 pl-5 text-[15px]">
          <li>
            Piwistore no se hace responsable por demoras causadas por la empresa transportadora
            una vez despachado el pedido.
          </li>
          <li>No somos responsables por el uso inadecuado de los productos adquiridos.</li>
          <li>
            Para productos de uso en mascotas, se recomienda supervisión durante el primer uso.
          </li>
        </ul>

        <h2 className="mb-2 mt-8 font-heading text-lg font-bold text-brand-navy">
          8. Privacidad y datos personales
        </h2>
        <p className="text-[15px]">
          Los datos personales suministrados por el cliente (nombre, dirección, teléfono) se usan
          exclusivamente para procesar y entregar el pedido. No se comparten con terceros
          distintos a los operadores logísticos necesarios para el despacho. Al contactarnos por
          WhatsApp, el cliente autoriza el uso de su información para estos fines.
        </p>

        <h2 className="mb-2 mt-8 font-heading text-lg font-bold text-brand-navy">
          9. Comunicaciones
        </h2>
        <p className="text-[15px]">
          Toda comunicación oficial de Piwistore se realiza a través del WhatsApp{" "}
          <strong>+57 302 240 9193</strong>. Piwistore no se hace responsable por transacciones
          realizadas con números o cuentas distintas a las confirmadas por este canal.
        </p>

        <h2 className="mb-2 mt-8 font-heading text-lg font-bold text-brand-navy">
          10. Modificaciones
        </h2>
        <p className="text-[15px]">
          Piwistore se reserva el derecho de actualizar estos términos y condiciones en cualquier
          momento. La versión vigente siempre estará disponible en nuestra página web.
        </p>

        <h2 className="mb-2 mt-8 font-heading text-lg font-bold text-brand-navy">
          11. Legislación aplicable
        </h2>
        <p className="text-[15px]">
          Estos términos se rigen por las leyes de la República de Colombia, incluyendo la Ley
          1480 de 2011 (Estatuto del Consumidor) y la Ley 1581 de 2012 (Protección de Datos
          Personales).
        </p>

        <p className="mt-10 text-sm text-muted-foreground">
          ¿Preguntas? Escríbenos al <strong>+57 302 240 9193</strong>
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
