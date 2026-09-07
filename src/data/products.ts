import type { CarouselImage } from "@/components/product-image-carousel";
import fuenteImg1 from "@/assets/material visual/PRODUCTOS/01/fuente1.jpeg";
import fuenteImg2 from "@/assets/material visual/PRODUCTOS/01/fuente2.jpeg";
import fuenteImg3 from "@/assets/material visual/PRODUCTOS/01/fuente3.jpeg";
import fuenteImg4 from "@/assets/material visual/PRODUCTOS/01/fuente4.jpeg";
import fuenteImg5 from "@/assets/material visual/PRODUCTOS/01/fuente5.png";
import fuenteVideo from "@/assets/material visual/PRODUCTOS/01/fuente_1.mp4";
import fuenteBebedero from "@/assets/material visual/PRODUCTOS/01/bebdero_imagen.png";
import lavapatasImg1 from "@/assets/material visual/PRODUCTOS/02/lavapatas1.jpg";
import lavapatasImg2 from "@/assets/material visual/PRODUCTOS/02/lavapatas2.jpg";
import lavapatasImg3 from "@/assets/material visual/PRODUCTOS/02/lavapatas3.jpg";
import camaImg1 from "@/assets/material visual/PRODUCTOS/03/cama1-1.webp";
import camaImg2 from "@/assets/material visual/PRODUCTOS/03/cama1-2.webp";
import filtrosImg1 from "@/assets/material visual/PRODUCTOS/04/filtros1.png";
import filtrosImg2 from "@/assets/material visual/PRODUCTOS/04/filtros2.png";
import filtrosImg3 from "@/assets/material visual/PRODUCTOS/04/filtros3.png";
import filtrosImg4 from "@/assets/material visual/PRODUCTOS/04/filtros4.png";

export const WHATSAPP = "573022409193";

export type Product = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  features: string[];
  price: number;
  waLink: string;
  images?: CarouselImage[];
};

export const PRODUCTS: Product[] = [
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
    price: 70900,
    waLink:
      "https://wa.me/573022409193?text=Hola%2C%20quiero%20pedir%20la%20Fuente%20Autom%C3%A1tica%20de%20Agua%20para%20Mascotas%20%F0%9F%90%BE%20Precio%3A%20%2470.900",
    images: [
      fuenteImg1,
      fuenteImg2,
      { src: fuenteVideo, type: "video" },
      fuenteImg3,
      fuenteImg4,
      fuenteImg5,
      { src: fuenteBebedero, position: "top" },
    ],
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
    price: 59900,
    waLink:
      "https://wa.me/573022409193?text=Hola%2C%20quiero%20pedir%20el%20Limpiador%20de%20Patas%20El%C3%A9ctrico%20%F0%9F%90%BE%20Precio%3A%20%2459.900",
    images: [lavapatasImg1, lavapatasImg2, lavapatasImg3],
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
    images: [camaImg1, camaImg2],
  },
  {
    id: "filtros-cuadrado",
    name: "Set X4 Filtros de Repuesto para Fuente de Agua (Cuadrado)",
    shortName: "Filtros Fuente Cuadrada",
    description:
      "Cantidad de filtros: 4 · Fabricado en carbón activado y algodón · Purifica y elimina malos olores · Compatible con fuente cuadrada",
    features: [
      "Cantidad de filtros: 4",
      "Fabricado en carbón activado, algodón",
      "Elimina olores, pelos y residuos del agua",
      "Mantiene el agua fresca y purificada",
      "Fácil instalación, compatible con fuente cuadrada",
    ],
    price: 16900,
    waLink:
      "https://wa.me/573022409193?text=Hola%2C%20quiero%20pedir%20el%20Set%20X4%20Filtros%20de%20repuesto%20para%20fuente%20de%20agua%20(Cuadrado)%20%F0%9F%90%BE%20Precio%3A%20%2416.900",
    images: [filtrosImg1, filtrosImg2, filtrosImg3, filtrosImg4],
  },
];

export const formatCOP = (n: number) => `$${n.toLocaleString("es-CO")}`;
