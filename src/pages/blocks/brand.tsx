import Image from "next/image";

const brandsList = [
  "/assets/brand/hm.png",
  "/assets/brand/obey.png",
  "/assets/brand/shoptify.png",
  "/assets/brand/lacoste.png",
  "/assets/brand/levis.png",
  "/assets/brand/amazon.png",
];

export default function Brand() {
  return (
    <div className="bg-100 w-full px-16 py-12 my-8 flex justify-evenly">
      {/* {brandsList.map((brand) => {
        return (
          <Image
            key={"soutien"}
            src={brand}
            alt="brand"
            width={100}
            height={100}
          />
        );
      })} */}
    </div>
  );
}
