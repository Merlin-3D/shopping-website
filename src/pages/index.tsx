import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Banner,
  Brand,
  Favorite,
  Footer,
  Header,
  NewArrival,
  PayDay,
} from "./blocks";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`min-h-screen flex-col`}>
      <Header />
      <Banner />
      <Brand />
      <NewArrival />
      <PayDay />
      <Favorite />
      <Footer />
    </main>
  );
}
