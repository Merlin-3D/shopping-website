import { Button } from "@/components";
import { LogoIcon } from "@/icons";
import Link from "next/link";

const navigations = [
  {
    name: "CATALOGUE",
    href: "#",
  },
  {
    name: "FASHION",
    href: "#",
  },
  {
    name: "FAVOURITE",
    href: "#",
  },
  {
    name: "LIFESTYLE",
    href: "#",
  },
];

export default function Header() {
  return (
    <header className="body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <LogoIcon className="h-8 w-8" />
          <span className="ml-2 font-black text-4xl">FASHION</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {navigations.map((item, index) => {
            return (
              <Link
                href={item.href}
                key={index}
                className="mr-5 text-xl font-medium text-500"
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <Button color="dark">SIGN UP</Button>
      </div>
    </header>
  );
}
