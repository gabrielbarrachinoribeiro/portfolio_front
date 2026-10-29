function Hero() {
    return (
        <main id="inicio" className="flex w-full min-w-0 flex-1 items-center justify-center py-10 sm:py-12" aria-labelledby="hero-title">
            <div className="container mx-auto px-6 text-center">
                <p className="mb-4 text-sm font-normal">Front-end Developer</p>
                <h1 id="hero-title" className="fontArimo m-0 text-[clamp(30px,9.5vw,170px)] leading-[1.05] tracking-[-0.04em] sm:leading-[0.95] lg:leading-[0.9]">
                    <span className="block font-bold italic">Moldando o</span>
                    <span className="fontAclonica relative top-[0.09em] block text-[0.75em] font-normal text-[#A999ED] sm:text-[0.85em] lg:text-[1em]">extraordinário</span>
                    <span className="block font-normal italic">através do digital.</span>
                </h1>
            </div>
        </main>
    )
}

export default Hero
