"use client";
import gsap from "gsap";
import { useEffect } from "react";


export default function Home() {
    useEffect(() => { gsap.from("#blue-box", {x: 250,duration:2});}, [])
  return (
    <div className="m-20">
      <div id="blue-box" className="h-20 w-20 bg-blue-500 rounded-xl"/>
    </div>
  );
}
