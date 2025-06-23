// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <>
   <h1>Мій Next.js</h1>
   <ul>
    <li><Link href="/about">На сторінку про нас</Link></li>
    <li><Link href="/dashboard">На сторінку dashboard</Link></li>
   </ul>
   </>
  );
}
