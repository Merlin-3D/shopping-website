import { ProductShopp } from "@/components";
import { ArrowIcon, VectorIcon } from "@/icons";
import Image from "next/image";

export default function NewArrival() {
  return (
    <section className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <div className="flex flex-col">
        <h1 className="relative font-black text-3xl">NEW ARRIVALS</h1>

        <div className="my-16 grid grid-cols-4 gap-x-16">
          <ProductShopp
            urlImage="/assets/products/product_0.png"
            title="Hoodies & Sweetshirt"
          />
          <ProductShopp
            urlImage="/assets/products/product_1.png"
            title="Coats & Parkas"
          />
          <ProductShopp
            urlImage="/assets/products/product_2.png"
            title="Tees & T-Shirt"
          />
          <ProductShopp
            urlImage="/assets/products/product_0.png"
            title="Sweetshirt & Parkas"
          />
        </div>
      </div>
    </section>
  );
}
