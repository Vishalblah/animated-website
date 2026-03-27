"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const isMobile = useMediaQuery({maxWidth:767})
    useGSAP(()=>{
        const heroSplit = new SplitText(".title",{type:"chars,words"});
        const paragraphSplit = new SplitText(".subtitles",{type:"lines"});

        heroSplit.chars.forEach((char)=>char.classList.add('text-gradient'));
        gsap.from(heroSplit.chars,{
            yPercent:100,
            duration:1.8,
            ease:'expo.out',
            stagger:0.05
        })
        gsap.from(paragraphSplit.lines,{
           opacity:0, 
           yPercent:100,
           duration:1.8,
           ease:'expo.out',
           stagger:0.006,
           delay:1 
        })

        gsap.timeline({
      scrollTrigger:{
        trigger:'#hero',
        start:'top top',
        end:'bottom top',
        scrub:true,
      }
    })
    .to('.right-leaf',{y:200},0)
    .to('.left-leaf',{y:-200},0)
    
    const startValue = isMobile ? 'top 50%' : 'center 60%'
    const endValue = isMobile ? '120% top' : 'bottom top'

    

    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:'video',
            start: startValue,
            end: endValue,
            scrub:true,
            pin:true
        }
    })

    if (videoRef.current) {
  videoRef.current.onloadeddata = () => {
    tl.to(videoRef.current, {
      currentTime: videoRef.current?.duration
    });
  };
}
    },[]);
    return (
        <>
        <section id="hero" className="noisy">
           <h1 className="title">MOJITO</h1>
           <img src="/images/hero-left-leaf.png" alt="hero-left-leaf" className="left-leaf"/>
           <img src="/images/hero-right-leaf.png" alt="hero-right-leaf" className="right-leaf"/>
           <div className="body">
            <div className="content">
                <div className="space-y-5 hidden md:block"> 
                    <p>Cool. Crisp. Classic</p>
                    <p className="subtitles">
                        break the spirit<br />of summer
                    </p>
                </div>
                <div>
                    <div className="view-cocktails">
                        <p className="subtitles">
                            Every cocktail on our menu is a blend of premium ingredients,
				            creative flair, and timeless recipes — designed to delight your
				            senses.
                        </p>
                        <a href="#cocktails">View cocktails</a>
                    </div>
                </div>
            </div>
           </div>
        </section>
        <div className="video absolute inset-0">
            <video ref={videoRef}
                   src="/videos/output.mp4"
                   muted
                   playsInline
                   preload="auto"/>
        </div>
        </>
    );
}