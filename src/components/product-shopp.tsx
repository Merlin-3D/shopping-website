import { ArrowIcon } from "@/icons";
import Image from "next/image";

interface ProductProps {
  title: string;
  urlImage: string;
}

export function ProductShopp({ title, urlImage }: ProductProps) {
  return (
    <div className="flex flex-col">
      <Image
        key={"product"}
        src={urlImage}
        alt="product"
        width={400}
        height={400}
      />
      <div className="w-full flex flex-row justify-between items-center mt-6">
        <div className="flex flex-col">
          <h4 className="font-medium text-3xl text-550">{title}</h4>
          <h4 className="font-normal text-2xl text-350">Explore Now!</h4>
        </div>
        <ArrowIcon className="text-600 w-6 h-6" />
      </div>
    </div>
  );
}
