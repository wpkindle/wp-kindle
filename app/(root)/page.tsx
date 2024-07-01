import EcommerceFeatures from "@/components/shared/product/ecommerce-features";
import ProductCarousel from "@/components/shared/product/product-carousel";
import ProductList from "@/components/shared/product/product-list";
import ProductPromotion from "@/components/shared/product/product-promotion";
import { getLatestProducts } from "@/lib/actions/product.actions";

export default async function Home() {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductCarousel />
      <main className="flex-1 wrapper space-y-8">
        <ProductList title="Newest Arrivals" data={latestProducts} />
        <ProductPromotion />
        <EcommerceFeatures />
      </main>
    </>
  );
}
