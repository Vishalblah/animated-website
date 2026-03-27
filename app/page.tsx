import gsap from "gsap";
import {ScrollTrigger,SplitText} from "gsap/all";
import Hero from "@/components/hero";
import Navbar from "@/components/navBar";
import Cocktails from "@/components/cocktails";
gsap.registerPlugin(ScrollTrigger);

export default function Page() {

  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails/>
    </main>
  );
}