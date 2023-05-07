import { Button } from "@/components";
import Image from "next/image";

export default function PayDay() {
  return (
    <section>
      <div className="bg-100 w-full  flex flex-row items-center justify-between">
        <Image
          key={"soutien"}
          src="/assets/brand/payday_group.png"
          alt="shopping"
          width={800}
          height={600}
        />
        <div className="h-full pr-28 pt-12 flex flex-col justify-center items-start">
          <Image
            key={"soutien"}
            src="/assets/brand/payday_title.png"
            alt="shopping"
            width={500}
            height={500}
          />
          <p className="font-normal text-3xl text-550 mt-6">
            Spend minimal $100 get 30% off <br /> voucher code for your next
            purchase
          </p>
          <h1 className="text-4xl font-bold  mt-6">1 June - 10 June 2021</h1>
          <h3 className="font-normal text-3xl text-55">
            *Terms & Conditions apply
          </h3>
          <div className="flex justify-center items-center gap-x-8  mt-6">
            <Button color="dark" size="lg" className="uppercase">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
