"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Page() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("h1", {
      y: 100,
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-3xl">Hello, GSAP!</h1>
    </div>
  );
}