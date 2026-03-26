"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navLinks } from "@/constants";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  useGSAP(()=>{
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top"
      }
    })
    navTween.fromTo("nav",{backgroundColor:"transparent"},{
      backgroundColor:"#00000050",
      backgroundfilter:"blur(10px)",
      duration:1,
      ease:"power1.inOut"
    })
  },[])
  return (
   <nav>
    <div>
    <a href="#home" className="flex items-center gap-2">
      <img src="/images/logo.png" alt="Logo" />
      <p>velvet Pour</p>
    </a>
    <ul>
      {navLinks.map((link) => (
        <li key={link.id}>
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
    </div>
   </nav>
  );
};
