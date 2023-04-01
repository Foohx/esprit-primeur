import Footer from "@/components/footer";
import Header from "@/components/header";
import ProductPage from "@/components/product-page";
import ProductPriceBullet from "@/components/product-price-bullet";
import { IconChevronRight } from "@tabler/icons-react";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ProductPage
        value={{
          name: "Composition de fruits",
          assets: "/images/apicius/products/fruits-composition",
        }}
        renderDetails={
          <p>
            Pour les prises de commandes, prévenir le plus tôt possible pour
            vous assurer de la faisabilité de vos pièces. Le choix des fruits
            vous est libre.
          </p>
        }
        renderPrices={
          <div className="flex flex-col gap-y-2">
            <ProductPriceBullet>
              <span className="underline font-semibold">Minimun 60€</span> pour
              une composition pour{" "}
              <span className="underline font-semibold">8 à 10 personnes</span>
            </ProductPriceBullet>
            <ProductPriceBullet>
              De <span className="underline font-semibold">60€ à 80€</span> pour
              une composition de{" "}
              <span className="underline font-semibold">10 à 15 personnes</span>
            </ProductPriceBullet>
            <ProductPriceBullet>
              De <span className="underline font-semibold">80€ à 100€</span>{" "}
              pour une composition de{" "}
              <span className="underline font-semibold">
                environ 20 personnes
              </span>
            </ProductPriceBullet>
            <ProductPriceBullet>
              Pour{" "}
              <span className="underline font-semibold">
                plus de 20 personnes
              </span>
              , demande{" "}
              <span className="underline font-semibold">sur devis</span>
            </ProductPriceBullet>
          </div>
        }
      />
      <Footer />
    </>
  );
}
