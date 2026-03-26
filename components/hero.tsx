export default function Hero() {
    return (
        <section id="hero" className="noisy">
           <h1 className="title">MOJITO</h1>
           <img src="/images/hero-left-leaf.png" alt="hero-left-leaf" className="left-leaf"/>
           <img src="/images/hero-right-leaf.png" alt="hero-right-leaf" className="right-leaf"/>
           <div className="body">
            <div className="content">
                <div className="space-y-5 hidden md:block"> 
                    <p className="mt-9">Cool. Crisp. Classic</p>
                    <p className="subtitles">
                        break the spirit<br />of summer
                    </p>
                </div>
            </div>
           </div>
        </section>
    );
}