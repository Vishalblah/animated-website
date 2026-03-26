import gsap from "gsap";
import {ScrollTrigger,SplitText} from "gsap/all";
import Hero from "@/components/hero";
import Navbar from "@/components/navBar";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {

  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black"></div>
    </main>
  );
}