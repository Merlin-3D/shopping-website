import { Button } from "@/components";
import { VectorIcon } from "@/icons";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <div className="bg-450 w-full rounded-3xl px-12 pt-12 flex flex-row justify-between">
        <div className="h-full flex flex-col justify-center items-start">
          <Image
            key={"soutien"}
            src="/assets/banner_title.png"
            alt="shopping"
            width={500}
            height={500}
          />
          <p className="font-normal text-3xl text-550 mt-6">
            Live for Influential and Innovative fashion!
          </p>
          <div className="flex justify-center items-center gap-x-8">
            <VectorIcon className="w-36 h-36 text-100" />
            <Button color="dark" size="lg">
              Shop Now
            </Button>
          </div>
        </div>
        <Image
          key={"soutien"}
          src="/assets/banner_image.png"
          alt="shopping"
          width={800}
          height={600}
        />
      </div>
    </section>
  );
}
