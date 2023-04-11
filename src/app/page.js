import Banner from "@/Components/Sections/Banner";
import Feed from "@/Components/Sections/Feed";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="container mx-auto">
      <Banner />
      <Feed />
    </main>
  );
}
