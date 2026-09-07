import { getProductById } from "@/lib/products";
import { notFound } from "next/navigation";
import ProductDetailContent from "./ProductDetailContent";

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  
  if (!product) {
    notFound();
  }

  return <ProductDetailContent product={product} />;
}
