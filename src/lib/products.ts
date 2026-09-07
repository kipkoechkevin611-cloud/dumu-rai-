export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "ppc-32.5n",
    name: "DUMU 32.5N",
    description: "Portland Pozzolana Cement ideal for general construction, plastering, and masonry work. Enhanced durability and workability.",
    price: "KES 684",
    image: "/assets/32.4N.jpeg",
    features: ["High durability", "Excellent workability", "Cost-effective", "Eco-friendly"],
  },
  {
    id: "plc-42.5n",
    name: "DUMU ULTRA 42.5",
    description: "Portland Limestone Cement for structural applications. Perfect for foundations, columns, and load-bearing structures.",
    price: "KES 788.50",
    image: "/assets/42.5N.jpeg",
    features: ["High strength", "Structural grade", "Superior bonding", "Long-lasting"],
  },
  {
    id: "opc-42.5n",
    name: "DUMU ULTRA PLUS 42.5",
    description: "Ordinary Portland Cement premium grade for high-strength applications. Ideal for bridges, dams, and heavy infrastructure.",
    price: "KES 864.50",
    image: "/assets/42.5N ULTRA PLUS.jpeg",
    features: ["Premium quality", "Maximum strength", "Fast setting", "Weather resistant"],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
