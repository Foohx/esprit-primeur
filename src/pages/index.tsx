import Footer from "@/components/footer";
import Header from "@/components/header";
import Logo from "@/components/logo";
import { IconDeviceMobile, IconMail, IconMapPin } from "@tabler/icons-react";
import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import { Autoplay, EffectFlip } from "swiper";
import Meta from "@/components/meta";

const hours = [
  { day: "", hours: [["Haute saison"], ["Basse saison"]] },
  { day: "Lundi", hours: [["Fermé"], ["Fermé"]] },
  {
    day: "Mardi",
    hours: [["08:30 - 19:30"], ["08:30 - 13:00", "15:00 - 19:30"]],
  },
  {
    day: "Mercredi",
    hours: [["08:30 - 19:30"], ["08:30 - 13:00", "15:00 - 19:30"]],
  },
  {
    day: "Jeudi",
    hours: [["08:30 - 19:30"], ["08:30 - 13:00", "15:00 - 19:30"]],
  },
  {
    day: "Vendredi",
    hours: [["08:30 - 19:30"], ["08:30 - 13:00", "15:00 - 19:30"]],
  },
  {
    day: "Samedi",
    hours: [["08:30 - 19:30"], ["08:30 - 13:00", "15:00 - 19:30"]],
  },
  {
    day: "Dimanche",
    hours: [["08:30 - 13:30"], ["08:30 - 13:00"]],
  },
];

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function Page() {
  return (
    <>
      <Meta
        description={`Esprit Primeur à Biscarrosse : vos fruits, légumes et bien plus encore ! Titulaires du titre "Talent fruits et légumes", nous transformons nos produits pour réduire le gaspillage alimentaire. Découvrez notre engagement avec une équipe experte et souriante.`}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[url('/images/hero.webp')] bg-cover bg-no-repeat bg-center h-[85vh] overflow-hidden">
          <div
            className={classNames(
              "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/40 to-black/80",
              "backdrop-blur-sm",
              "h-full w-full",
              "flex items-center justify-center"
            )}
          >
            <div className="w-full h-full max-w-7xl px-8 py-4">
              <h1 className="sr-only">Esprit Primeur</h1>
              <Swiper
                modules={[Autoplay, EffectFlip]}
                effect="flip"
                flipEffect={{
                  slideShadows: false,
                }}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                className="w-full h-full"
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide>
                  <Logo
                    artifact="pear"
                    className="h-full w-auto max-w-full text-white mx-auto"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Logo
                    artifact="carrot"
                    className="h-full w-auto max-w-full text-white mx-auto"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Logo
                    artifact="strawberry"
                    className="h-full w-auto max-w-full text-white mx-auto"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        {/* About */}
        <section
          id="about"
          className="py-16 lg:py-32 max-w-7xl mx-auto flex flex-col gap-y-8 px-4"
        >
          <h2 className="font-medium tracking-tight text-3xl">
            Qui sommes-nous ?
          </h2>
          <div className="flex flex-col gap-y-8 lg:block lg:flex-none lg:gap-y-0">
            <div className="w-full h-[500px] lg:float-left lg:mr-8 lg:mb-4 lg:w-[40%]">
              <Image
                src="/images/about.webp"
                width={700}
                height={700}
                alt="Natalia et Théophile tiennent respectivement le trophée et le titre de Talent Fruits et Légumes 2022."
                className="object-cover h-full w-full object-top lg:object-center rounded-2xl"
              />
            </div>
            <div className="space-y-4">
              <p>
                {`Théophile et Natalia BENOIST gèrent ensemble et depuis
                maintenant plus de 3 ans le commerce fruits et légumes du centre
                bourg de Biscarrosse anciennement nommé "Chez Popaul"
                aujourd'hui appelé "ESPRIT PRIMEUR".`}
              </p>
              <p>
                {`C'est leur 3ème magasin, après avoir passé plusieurs années en
                tant que primeur sur la commune de Cestas et Pessac, ils
                décident de se concentrer sur ce magasin et d'y développer leur
                savoir-faire, leurs connaissances ainsi que tous les projets
                qu'ils ont en tête.`}
              </p>
              <p>
                {`Amoureux de leur métier, ils ont décroché en février 2023 le
                titre de "Talent fruits et légumes" d'abord sur la région grand
                Sud-Ouest puis au niveau national.`}
              </p>
              <div className="flex">
                <blockquote className="border-l-4 border-gray-300 px-4 text-gray-700">
                  <span className="font-semibold">{`Théophile : `}</span>
                  {`La plus belle des récompenses et la reconnaissance de notre travail par
                  nos pairs, une grande fierté pour nous, notre équipe et nos clients.`}
                </blockquote>
              </div>
              <p>
                {`Commerçants avant tout, ils sont dans la démarche active d'être
                aussi reconnus comme artisans. En effet, ils ne se contentent
                pas seulement de revendre des fruits et légumes, ils essaient
                aussi dans une démarche anti-gaspillage de valoriser les
                produits destinés à être jetés par la transformation de certains
                produits en confiture artisanales, en confiseries, en jus de
                fruits, en conserves.`}
              </p>
              <div className="flex">
                <blockquote className="border-l-4 border-gray-300 px-4 text-gray-700">
                  <span className="font-semibold">{`Natalia : `}</span>
                  {`Dans notre domaine d'activité il y a énormément de gaspillage
                  alimentaire, Il fallait trouver une solution pour y remédier,
                  c'est pour cela que la transformation de certains produits est
                  une idée qui s'est naturellement mise en place.`}
                </blockquote>
              </div>
              <p>
                {`Théophile et Natalia ont encore une multitude d'idées à mettre
                en place, afin de développer les prestations proposées à leurs
                clients mais toujours autour du fruit et du légumes, et toujours
                dans le but de les satisfaire !`}
              </p>
              <div className="flex">
                <blockquote className="border-l-4 border-gray-300 px-4 text-gray-700">
                  <span className="font-semibold">{`Théophile : `}</span>
                  {`Ces projets ne seraient pas envisageables si nous n'avions pas 
                  cette équipe !`}
                </blockquote>
              </div>
              <p>
                {`L'équipe ESPRIT PRIMEUR se compose de Josiane, Alexandre et
                Alexia. Équipe compétente et soudée elle saura vous accueillir
                tout au long de la journée avec le sourire et pour vous
                conseiller lors de vos achats.`}
              </p>
              <p>{`L'équipe vous attend nombreux !`}</p>
            </div>
          </div>
        </section>
        {/* Promotion */}
        <section className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-300 via-primary-500 to-primary-700">
          <div className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center py-16 lg:py-32 gap-y-8">
            <h2 className="font-medium tracking-tight text-3xl text-white">
              Faites un tour du magasin
            </h2>
            <iframe
              loading="lazy"
              className="overflow-hidden rounded-2xl"
              width="343"
              height="610"
              src="https://www.youtube.com/embed/mcF12tmkEmE"
              title="Découverte du magasin Esprit Primeur"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </section>
        {/* Shop */}
        <section id="shop" className="py-16 lg:py-32 space-y-8">
          <div className="max-w-7xl mx-auto h-[40vh] max-h-[300px] px-4">
            <div className="rounded-2xl overflow-hidden h-full w-full relative group">
              <Image
                src="/images/shop.webp"
                alt="Entrée du magasin"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
              <div className="rounded-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-black/0 group-hover:opacity-0 transition-opacity duration-300 flex items-end">
                <div className="p-8">
                  <h2 className="font-medium tracking-tight text-3xl text-white">
                    Notre magasin
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full max-w-7xl mx-auto px-4 flex flex-col gap-y-8 lg:px-12 lg:flex-row lg:gap-y-0 lg:gap-x-8">
            <div className="flex-1 space-y-4">
              <h3 className="font-medium tracking-tight text-3xl">
                Esprit Primeur Biscarosse
              </h3>
              <div className="space-y-4 divide-y">
                <div className="space-y-2 py-4 text-gray-700">
                  <div className="flex gap-x-1">
                    <div>
                      <IconMapPin />
                    </div>
                    <span>
                      91 Avenue Georges Clemenceau
                      <br />
                      40600 Biscarrosse
                    </span>
                  </div>
                  <Link
                    className="flex gap-x-1 text-primary-600 group"
                    href="tel:0558820979"
                  >
                    <div>
                      <IconDeviceMobile />
                    </div>
                    <span className="font-semibold group-hover:underline">
                      05 58 82 09 79
                    </span>
                  </Link>
                  <Link
                    className="flex gap-x-1 text-primary-600 group"
                    href="mailto:popaulbisca@gmail.com"
                  >
                    <div>
                      <IconMail />
                    </div>
                    <span className="font-semibold group-hover:underline">
                      popaulbisca@gmail.com
                    </span>
                  </Link>
                </div>
                <div className="py-4 space-y-4">
                  {/* Hours */}
                  <div>
                    {hours.map((day, dayIdx) => (
                      <div
                        key={`${dayIdx}`}
                        className={classNames("px-2 py-1 flex gap-x-1", {
                          "bg-gray-50": dayIdx > 0 && dayIdx % 2 === 1,
                        })}
                      >
                        <div className="flex-1">
                          <span>{day.day}</span>
                        </div>
                        <div className="flex-1 flex gap-x-4">
                          {day.hours.map((hour, hourIdx) => (
                            <div
                              key={`${dayIdx}-${hourIdx}`}
                              className="flex-1 text-center flex flex-col"
                            >
                              {hour.map((time, timeIdx) => (
                                <span
                                  key={`${dayIdx}-${hourIdx}-${timeIdx}`}
                                  className={classNames(
                                    "whitespace-nowrap",
                                    dayIdx === 0 ? "font-semibold" : undefined
                                  )}
                                >
                                  {time}
                                </span>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Hours Informations */}
                  <div className="flex flex-col gap-y-1 italic text-gray-700">
                    <span>
                      <span className="font-medium">{`* Haute saison :`}</span>
                      {` Juin, juillet et août`}
                    </span>
                    <span>
                      <span className="font-medium">{`* Basse saison :`}</span>
                      {` Reste de l'année`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[400px] lg:h-auto lg:flex-1">
              <iframe
                title="Localisation du magasin sur Google Maps"
                className="w-full h-full overflow-hidden rounded-2xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425.409654113128!2d-1.166560641278076!3d44.39583079999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5480831e4e94e1%3A0x389b8b0ca2031dfb!2s91%20Av.%20Georges%20Clemenceau%2C%2040600%20Biscarrosse!5e0!3m2!1sfr!2sfr!4v1680431157838!5m2!1sfr!2sfr"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
