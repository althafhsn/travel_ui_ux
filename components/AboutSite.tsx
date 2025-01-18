import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface AboutProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
} 

const AboutSite = ({ backgroundImage, title, subtitle, peopleJoined }: AboutProps) => {
  return (
    <div className={`h-full w-full min-w-[370px] md:min-w-[1000px] lg:min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat md:rounded-r-5xl lg:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image
              src="/folded-map.svg"
              alt="map"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}

const About = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <AboutSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno About"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <AboutSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View About"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-gray-100 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="About-quote"
          />
          <h1> <strong className="text-3xl lg:text-5xl capitalize text-green-50 font-serif font-bold pt-10">Marhaba!</strong></h1>
          <h2 className="text-sm lg:text-lg capitalize text-orange-600">
            <br />Greetings from Travel Synergies – Your Premier DMC Partner
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-gray-90">
            At Travel Synergies, we take pride in being recognized as a global leader in Destination Management. With an unwavering commitment to excellence, we offer unparalleled services that redefine the art of travel and event planning, creating lasting memories and experiences of a lifetime.

          </p>
          <p className="regular-14 xl:regular-16 mt-5 text-gray-90">

            Our exceptional Travel Designers are more than just experts; they are local connoisseurs with a global perspective. Trained on an international scale, they bring an unmatched level of insight, ensuring that your journey is an immersion into the heart of every destination. We take pride in serving the best holiday experiences, whether it be leisure individual travel or group tours.

          </p>
          <p className="regular-14 xl:regular-16 mt-5 text-gray-90">
            From intimate gatherings to grand-scale events, we specialize in creating experiences that resonate. Our expertise lies in swiftly connecting you with the finest hotels, event facilities, tours, and meticulously orchestrating the logistical marvels necessary to host flawless private and professional events, as well as incentive programs.

          </p>
          <p className="regular-14 xl:regular-16 mt-5 text-gray-90">
            Venture into the extraordinary with our diverse network of independent suppliers and local guides. Drawing inspiration from their creativity, we curate fresh and innovative ideas that breathe life into your travel arrangements. Join us in creating unforgettable experiences that will be cherished for a lifetime.

          </p>
        </div>
      </div>
    </section>
  )
}

export default About