import Footer from "@/components/footer";
import Header from "@/components/header";
import Meta from "@/components/meta";
import Head from "next/head";

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function Page() {
  return (
    <>
      <Meta title="Mention légales" />
      <Header />
      <main>
        <section
          id="about"
          className="pt-8 pb-16 lg:pb-32 max-w-7xl mx-auto space-y-8 px-4"
        >
          <h1 className="font-medium tracking-tight text-5xl">
            Mentions légales
          </h1>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col">
              <span>
                <span className="font-semibold">{`Dénomination sociale : `}</span>
                {`SARL ESPACE FRAICHEUR`}
              </span>
              <span>
                <span className="font-semibold">{`Siège social : `}</span>
                {`91 Avenue Georges Clémenceau, 40600 Biscarrosse`}
              </span>
            </div>
            <div>
              <span>SARL au capital de 15 244 €</span>
            </div>
            <div className="flex flex-col">
              <span>
                <span className="font-semibold">{`Mail : `}</span>
                espacefraicheur33610@gmail.com
              </span>
              <span>
                <span className="font-semibold">{`Téléphone : `}</span>
                05 56 78 87 73
              </span>
              <span>
                <span className="font-semibold">{`Directeur de la publication : `}</span>
                Théophile Benoist
              </span>
            </div>
            <div className="flex flex-col">
              <span>
                <span className="font-semibold">
                  {`Numéro d'inscription au registre du commerce et des sociétés : `}
                </span>
                409029311 00035
              </span>
              <span>
                <span className="font-semibold">{`Numéro individuel d'identification fiscale : `}</span>
                FR18409029311
              </span>
            </div>
            <div>
              <span>Site hébergé par Online.net</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
