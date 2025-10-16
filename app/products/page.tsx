import { Suspense } from "react";
import { ProductsHeader } from "@/components/features/products/products-header";
import { ProductsGrid } from "@/components/features/products/products-grid";
import { ProductsFilters } from "@/components/features/products/products-filters";
import { ProductGridSkeleton } from "@/components/features/products/product-grid-skeleton";

interface SearchParams {
  category?: string;
  sort?: string;
  search?: string;
}

export default function ProductsPage({
  searchParams,
}: {
  searchParams: SearchParams | undefined;
}) {
  return (
    <div className="min-h-screen bg-soft-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <ProductsHeader />

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
          <aside className="lg:w-80 flex-shrink-0">
            <div className="sticky top-20 sm:top-24">
              <Suspense
                fallback={
                  <div className="bg-white/50 backdrop-blur-sm border border-royal-gold/20 rounded-2xl p-6 shadow-lg">
                    <div className="animate-pulse">
                      <div className="h-4 bg-royal-gold/20 rounded mb-4"></div>
                      <div className="h-4 bg-royal-gold/20 rounded mb-4"></div>
                      <div className="h-4 bg-royal-gold/20 rounded"></div>
                    </div>
                  </div>
                }
              >
                <ProductsFilters />
              </Suspense>
            </div>
          </aside>

          <main className="flex-1">
            <Suspense fallback={<ProductGridSkeleton />}>
              <ProductsGrid searchParams={searchParams} />
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
}
