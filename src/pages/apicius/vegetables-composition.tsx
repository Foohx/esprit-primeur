import Footer from "@/components/footer";
import Header from "@/components/header";
import Meta from "@/components/meta";
import ProductPage from "@/components/product-page";
import ProductPriceBullet from "@/components/product-price-bullet";
import Head from "next/head";

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function Page() {
  return (
    <>
      <Meta
        title="Apicius - Composition de crudités"
        description="Apicius vous propose des compositions de crudités pour un apéritif original et savoureux."
      />
      <Header />
      <ProductPage
        value={{
          name: "Composition de crudités",
          assets: "/images/apicius/products/vegetables-composition",
          assetsConfig: {
            detailsExtension: "webp",
          },
        }}
        renderDetails={
          <p>
            Pour les prises de commandes, prévenir le plus tôt possible pour
            vous assurer de la faisabilité de vos pièces. Le choix des crudités
            vous est libre.
          </p>
        }
        renderPrices={
          <div className="flex flex-col gap-y-2">
            <ProductPriceBullet>
              <span className="underline font-semibold">Minimum 60€</span> pour
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
      <Footer mode="apicius" />
    </>
  );
}
