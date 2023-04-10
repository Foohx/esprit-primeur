import Footer from "@/components/footer";
import Header from "@/components/header";
import Meta from "@/components/meta";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Composition de fruits",
    assets: "/images/apicius/products/fruits-composition",
    url: "/apicius/fruits-composition",
  },
  {
    name: "Composition de crudités",
    assets: "/images/apicius/products/vegetables-composition",
    url: "/apicius/vegetables-composition",
  },
  {
    name: "Les buffets",
    assets: "/images/apicius/products/buffets",
    url: "/apicius/buffets",
  },
  {
    name: "Petits plus",
    assets: "/images/apicius/products/extras",
    url: "/apicius/extras",
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
        title="Apicius"
        description="Découvrez l'univers créatif d'Apicius à Biscarosse : Des compositions uniques de fruits et légumes pour surprendre vos invités."
      />
      <Header />
      <main className="space-y-16 mb-16 lg:space-y-32 lg:mb-32">
        {/* Hero */}
        <section className="bg-[url('/images/apicius/hero.jpg')] bg-cover bg-no-repeat bg-center h-[85vh]">
          <div
            className={classNames(
              "bg-black/70",
              "backdrop-blur-sm",
              "h-full w-full",
              "flex items-center justify-center"
            )}
          >
            <div className="w-full h-full max-w-7xl px-8 py-4 flex items-center justify-center">
              <h1 className="sr-only">Apicius</h1>
              <Image
                src="/images/apicius/logo.svg"
                className="h-[80%] w-auto max-w-full"
                height={500}
                width={500}
                alt=""
              />
            </div>
          </div>
        </section>
        {/* About */}
        <section className="max-w-7xl mx-auto px-4 space-y-8 md:space-y-2">
          <h2 className="font-medium tracking-tight text-3xl">
            {`Apicius c'est quoi ?`}
          </h2>
          <div className="flex flex-col-reverse gap-y-8 md:flex-row lg:gap-y-0 md:gap-x-8">
            <div className="flex-1 space-y-4 md:py-4">
              <p>
                {`Natalia BENOIST a développé en parallèle de son métier de
                primeur une activité de sculpture sur fruits et légumes.`}
              </p>
              <p>
                {`Elle a d'abord commencé par s'amuser en sculptant des fraises en
                forme de rose, la réaction des clients surpris et curieux lui a
                donné envie de recommencer ! Aujourd'hui elle commercialise ses
                créations sur commande, fruits ou légumes et pour tout événement
                : anniversaire, mariage, baptême, réunion de famille, ou pour un
                simple apéritif. Tout événement est l'occasion de créer la
                surprise et l'étonnement de vos invités !`}
              </p>
              <p>
                {`De la simple composition à la réalisation d'un buffet
                entièrement "veggie", elle saura répondre à vos attentes et en
                n'utilisant que ce qu'elle vend en boutique. Chaque commande est
                personnalisée pour qu'elle soit unique et vous soit totalement
                dédiée.`}
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl w-full h-[500px] md:w-[45%] md:h-auto">
              <Image
                src="/images/apicius/about.png"
                width={400}
                height={700}
                alt="Photo de Natalia BENOIST"
                className="absolute object-cover w-full h-full object-[center_20%]"
              />
            </div>
          </div>
        </section>
        {/* Products */}
        <section className="max-w-7xl mx-auto px-4 space-y-4">
          <h2 className="font-medium tracking-tight text-3xl text-center">
            Les prestations proposées
          </h2>
          <div className="grid grid-cols-1 gap-8 py-4 lg:grid-cols-2">
            {products.map((product, productIdx) => (
              <Link
                href={product.url}
                key={`${productIdx}`}
                className="rounded-2xl overflow-hidden relative h-64 group"
              >
                <Image
                  src={`${product.assets}/overview.jpg`}
                  alt=""
                  height={500}
                  width={800}
                  className="object-cover object-center w-full h-full"
                />
                <div
                  className={classNames(
                    "rounded-2xl",
                    "absolute left-0 top-0",
                    "w-full h-full",
                    "flex flex-col justify-end items-center",
                    "p-4",
                    "bg-gradient-to-t from-black/70 to-black/0",
                    "group-hover:opacity-0 transition-opacity duration-300"
                  )}
                >
                  <h3 className="text-lg font-medium text-center text-white">
                    {product.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-row gap-x-8">
            {/* <div className="w-[40%] relative overflow-hidden rounded-2xl">
              <Image
                src="/images/apicius/about.jpg"
                width={400}
                height={400}
                alt="Test"
                className="absolute object-cover w-full h-full object-top"
              />
            </div> */}
          </div>
        </section>
      </main>
      <Footer mode="apicius" />
    </>
  );
}
