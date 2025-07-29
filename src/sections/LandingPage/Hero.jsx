const Hero = () => {
  return (
    <section className="bg-[url(/img/LandingPage/heroImg.avif)] h-[70dvh]  bg-cover bg-center flex justify-center items-center flex-col relative z-0">
      <div className="absolute inset-0 z-20 bg-black/55" />
      <h1 className="text-7xl text-center font-bold text-white z-20">
        Safe and reliable transportation <br /> for elderly adults
      </h1>
      <p className=" z-20 text-white text-3xl pt-8">
        We provide mobility with dignity, comfort and personalized attention
      </p>
    </section>
  );
};

export default Hero;
