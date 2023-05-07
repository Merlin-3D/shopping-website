import { ProductShopp } from "@/components";

export default function Favorite() {
  return (
    <section className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center my-8">
      <div className="flex flex-col">
        <h1 className="relative font-black text-3xl">Young’s Favourite</h1>

        <div className="my-8 grid grid-cols-4 gap-x-16">
          <ProductShopp
            urlImage="/assets/products/favorite_1.png"
            title="Trending "
          />
          <ProductShopp
            urlImage="/assets/products/favorite_2.png"
            title="All Under $40"
          />
          <ProductShopp
            urlImage="/assets/products/favorite_1.png"
            title="Instagram"
          />
          <ProductShopp
            urlImage="/assets/products/favorite_2.png"
            title="All Under $40"
          />
        </div>
      </div>
    </section>
  );
}
