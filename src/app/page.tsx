import Link from "next/link";
import SliderCarusel from "@/components/slider";
import Counter2 from "./components/counter";
import Search from "@/components/search";

export default function Home() {
  return (
   <>
   <h1>Мій Next.js</h1>
   <Counter2 />
   <ul>
    <li><Link href="/about">На сторінку про нас</Link></li>
    <li><Link href="/dashboard">На сторінку dashboard</Link></li>
   </ul>
   <Search />
   <SliderCarusel />
   </>
  );
}
