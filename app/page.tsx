import Link from "next/link";
import { Hero } from "@/devlink"

export default function Home() {
  return (
    <main>
      <Hero/>
   <a href="https://www.google.com" target="_blank">Link to google</a>
<ul>

<li>

   <Link href="/buttons">Buttons</Link>
</li>
<li>

   <Link href="/hero">Hero</Link>
</li>

<li>

   <Link href="/widgets">Widgts</Link>
</li>

</ul>
    </main>
  )
}
