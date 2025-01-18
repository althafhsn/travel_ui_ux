
import Link from "next/link";
interface ServicesCardProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  href?: any;
}

const ServicesCard = ({
  backgroundImage,
  title,
  subtitle,
  href,
}: ServicesCardProps) => {
  return (
    <Link
      href={href}
      className="relative bg-cover p-6 shadow-lg rounded-3xl text-center cursor-pointer lg:w-[250px] xl:w-[350px] mx-auto lg:h-[250px] w-[250px] h-[150px] flex flex-col items-center justify-center overflow-hidden  transform transition-transform duration-300 ease-in-out hover:scale-110 hover:blur-0"
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10 w-full object-cover object-center rounded-3xl hover:bg-opacity-0"></div>
      {/* Background Image and Blur */}
      <div
        className={`absolute inset-0 bg-cover transition-all duration-300 ease-in-out z-0 hover:blur-0 hover:scale-110 ${backgroundImage}`}
      ></div>

      {/* Text content */}
      <h3 className="text-xl lg:text-2xl font-extrabold text-white z-20 relative">{title}</h3>
      <p className="text-sm lg:text-lg mt-4 text-blue-100 z-20 relative">{subtitle}</p>
    </Link>
  );
};

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Our Services.</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">We orchestrate the complexities of travel and event logistics with precision. From transportation to scheduling, our expertise ensures every detail is accounted for, allowing you to relax and enjoy your journey or event.</p>
        </div>
      </div>

      <div className="bg-bg-services flexCenter max-container max-w-6xl relative w-[90%] xl:w-full object-cover object-center rounded-5xl min-h-[70vh] flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 bg-cover">
        <div className="absolute inset-0 bg-white bg-opacity-20 z-10 w-full object-cover object-center rounded-5xl"></div>
        <div className="container mx-auto p-4 z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
            <ServicesCard
              backgroundImage="bg-bg-inbound"
              title="Inbound"
              subtitle="Discover local wonders with our expertly curated experiences."
              href="#"
            />
            <ServicesCard
              backgroundImage="bg-bg-outbound"
              title="Outbound"
              subtitle="Explore global destinations with personalized itineraries."
              href="#"
            />
            <ServicesCard
              backgroundImage="bg-bg-ts-connect"
              title="Ts Connect"
              subtitle="Seamless travel solutions powered by innovation."
              href="#"
            />
          </div>
        </div>
      </div>
    </section >
  )
}

export default Guide