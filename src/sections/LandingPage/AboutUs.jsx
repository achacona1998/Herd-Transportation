import { AboutCard } from "../../components/LandingPage/AboutCard";
import Header from "../../components/UI/Header";
import { PAGE_HEADERS } from "../../constants/headers";

const AboutUs = () => {
  return (
    <section className="pt-10 text-white px-4 sm:px-6">
      <div className="container mx-auto">
        <Header title={PAGE_HEADERS.ABOUT_US.title} />

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start justify-between">
          <div className="w-full md:w-1/2">
            <img
              src="/img/LandingPage/aboutUs.avif"
              alt="About Herd Transportation"
              loading="lazy"
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <p className="text-base sm:text-lg mb-6 text-justify">
              At Herd Transportation, we're dedicated to revolutionizing the way
              people move. With years of experience in the transportation
              industry, we provide reliable, efficient, and comfortable
              transportation solutions for both individuals and businesses. Our
              commitment to excellence and customer satisfaction sets us apart
              from the competition. We leverage cutting-edge technology and a
              highly trained team to ensure every journey is seamless and
              stress-free. For Medical to Personal Travel, our diverse
              fleet and personalized service approach guarantee that we can meet
              any transportation need while maintaining the highest standards of
              safety and professionalism. What truly distinguishes us is our
              unwavering focus on creating positive experiences, building
              lasting relationships with our clients, and continuously adapting
              to meet the evolving demands of modern transportation.
            </p>

            <AboutCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
