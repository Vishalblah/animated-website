import gsap from "gsap";
import {ScrollTrigger,SplitText} from "gsap/all";
import Hero from "@/components/hero";
import Navbar from "@/components/navBar";
import Cocktails from "@/components/cocktails";
import About from "@/components/about";
import Art from "@/components/art";
import Menu from "@/components/menu";
import Contact from "@/components/contact";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {

  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails/>
      <About />
      <Art />
      <Menu/>
      <Contact/>
    </main>
  );
}