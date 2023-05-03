import Image from "next/image";
import { Inter } from "next/font/google";
import { Banner, Header } from "./blocks";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`min-h-screen flex-col`}>
      <Header />
      <Banner />
    </main>
  );
}
