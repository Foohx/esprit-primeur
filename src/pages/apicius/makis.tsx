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
          name: "Makis de fruits et autres gourmandises",
          assets: "/images/apicius/products/makis",
          assetsConfig: {
            detailsExtension: "gif",
          },
        }}
        renderDetails={
          <>
            <p>
              {`Les makis de fruits sont principalement réalisés lors de la saison
              estivale (mai à septembre / octobre). Ils sont constitués de
              fruits frais, d'herbes aromatiques, de chocolat (blanc ou noir) et
              d'agréments gourmands comme les copeaux de noix de coco / de
              praliné ou encore speculos.`}
            </p>
            <p>
              {`Tout comme les makis les Sucette pastèque ne sont réalisées qu'en
              saison (Mai à septembre).`}
            </p>
            <p>
              {`Fraises enrobées de chocolat blanc ou noir, ainsi que quelques
              gourmandises (copeaux de noix de coco / praliné / sucre coloré..)
              quasiment disponible tout au long de l'année.`}
            </p>
          </>
        }
        renderPrices={
          <>
            <div className="flex flex-col gap-y-2">
              <span className="font-bold">{`Makis de fruits :`}</span>
              <ProductPriceBullet>
                Lot de{" "}
                <span className="underline font-semibold">10 unités</span> à{" "}
                <span className="underline font-semibold">9.95€</span> la
                barquette.
              </ProductPriceBullet>
              <ProductPriceBullet>
                Le prix est{" "}
                <span className="underline font-semibold">dégressif</span> à
                partir de{" "}
                <span className="underline font-semibold">50 unités</span>.
              </ProductPriceBullet>
            </div>
            <div className="flex flex-col gap-y-2 pt-4">
              <span className="font-bold">{`Sucettes pastèque :`}</span>
              <ProductPriceBullet>
                <span className="underline font-semibold">{`1,65€ l'unité`}</span>{" "}
                (commande minimale de 10 sucette).
              </ProductPriceBullet>
            </div>
            <div className="flex flex-col gap-y-2 pt-4">
              <span className="font-bold">{`Fraises enrobées :`}</span>
              <ProductPriceBullet>
                Lot de
                <span className="underline font-semibold">{`12 unités`}</span> à{" "}
                <span className="underline font-semibold">24,95€</span> le lot.
              </ProductPriceBullet>
            </div>
            <p className="pt-4">
              {`En cas d'allergie il faut prévenir au moment de la commande pour
              que cela soit pris en compte.`}
            </p>
          </>
        }
      />
      <Footer mode="apicius" />
    </>
  );
}
