function Hero() {
    return (
        <main id="inicio" className="section-spacing flex w-full min-w-0 flex-1 items-center justify-center" aria-labelledby="hero-title">
            <div className="container mx-auto px-6 text-center max-[600px]:px-4">
                <p data-aos="fade-right" data-aos-offset="0" className="mb-4 text-sm font-normal">Front-end Developer</p>
                <h1 id="hero-title" className="fontArimo m-0 text-[clamp(30px,9.5vw,170px)] max-[600px]:text-[clamp(36px,12.4vw,74px)] leading-[1.05] tracking-[-0.04em] sm:leading-[0.95] lg:leading-[0.9]">
                    <span data-aos="fade-up" data-aos-delay="150" data-aos-offset="0" className="block font-bold italic">Moldando o</span>
                    <span data-aos="fade-up" data-aos-delay="300" data-aos-offset="0" className="fontAclonica relative top-[0.09em] block text-[0.75em] font-normal text-[#A999ED] sm:text-[0.85em] lg:text-[1em]">extraordinário</span>
                    <span data-aos="fade-up" data-aos-delay="450" data-aos-offset="0" className="block font-normal italic">através do digital.</span>
                </h1>
            </div>
        </main>
    )
}

export default Hero
