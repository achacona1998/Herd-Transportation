const Hero = () => {
  return (
    <section className="bg-[url(/img/LandingPage/heroImg.avif)] h-[70dvh] bg-cover bg-center flex justify-center items-center flex-col relative z-0 px-4">
      <div className="absolute inset-0 z-20 bg-black/55" />
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold text-white z-20">
        Safe and reliable transportation <br className="hidden sm:block" /> for elderly adults
      </h1>
      <p className="z-20 text-white text-xl sm:text-2xl md:text-3xl pt-4 sm:pt-8 text-center">
        We provide mobility with dignity, comfort and personalized attention
      </p>
    </section>
  );
};

export default Hero;
