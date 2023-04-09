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
        title="Apicius - Les buffets"
        description="Apicius vous propose des buffets créatifs et veggie, parfaits pour impressionner vos convives."
      />
      <Header />
      <ProductPage
        value={{
          name: "Les buffets",
          assets: "/images/apicius/products/buffets",
          assetsConfig: {
            detailsExtension: "jpg",
          },
        }}
        renderDetails={
          <>
            <p>
              {`Les buffets que je propose sont élaborés en fonction de vos
              envies, de vos goûts et surtout de votre budget.`}
            </p>
            <p>
              {`Je réalise des buffets principalement "veggie", mais je peux vous
              proposer des verrines/mignardises comprenant un peu de fromage, 
              de charcuterie ou encore d'autres produits durant l'été.`}
            </p>
          </>
        }
        renderPrices={
          <>
            <div className="flex flex-col gap-y-2 pt-4">
              <span className="font-bold">{`Buffets :`}</span>
              <ProductPriceBullet>{`Jus d'orange`}</ProductPriceBullet>
              <ProductPriceBullet>
                {`Jus de pomme ou thé glacé`}
              </ProductPriceBullet>
              <ProductPriceBullet>{`Lait`}</ProductPriceBullet>
              <ProductPriceBullet>{`Café`}</ProductPriceBullet>
              <ProductPriceBullet>{`Viennoiseries`}</ProductPriceBullet>
              <ProductPriceBullet>{`Cake à la banane `}</ProductPriceBullet>
              <ProductPriceBullet>
                {`Clafoutis aux fruits de saison`}
              </ProductPriceBullet>
              <ProductPriceBullet>{`Salade de fruits`}</ProductPriceBullet>
              <ProductPriceBullet>{`Plateaux de fruits`}</ProductPriceBullet>
              <ProductPriceBullet>
                {`Confiture maison aux fruits de saison`}
              </ProductPriceBullet>
              <ProductPriceBullet>
                {`Caramel beurre salé ou praliné maison`}
              </ProductPriceBullet>
              <ProductPriceBullet>
                {`Fraises en forme de rose`}
              </ProductPriceBullet>
              <ProductPriceBullet>
                {`Plateau de charcuterie et de fromage`}
              </ProductPriceBullet>
              <ProductPriceBullet>
                {`Sauces tartinables : Guacamole / Caviar d'aubergine / Tapenade`}
              </ProductPriceBullet>
              <ProductPriceBullet>{`Pintxos`}</ProductPriceBullet>
              <ProductPriceBullet>
                {`Cakes aux olives / Tomates et poivrons `}
              </ProductPriceBullet>
              <ProductPriceBullet>
                {`Brochettes de crudités`}
              </ProductPriceBullet>
            </div>
            <p className="pt-4">
              Les tarifs sont définis{" "}
              <span className="underline font-semibold">
                en fonction de vos envies
              </span>
              , demande{" "}
              <span className="underline font-semibold">sur devis</span>.
            </p>
            <div className="flex flex-col gap-y-2 pt-4">
              <span className="font-bold">
                {`Pour vos lendemains de festivités, je vous propose une formule
                brunch pour 24€ par personnes comprenant :`}
              </span>
              <ProductPriceBullet>
                Viennoiseries (
                <span className="underline font-semibold">minimum 2</span> par
                personne)
              </ProductPriceBullet>
              <ProductPriceBullet>
                {`Gauffres sucrées et sélection de confitures faites maison (2
                parfums)`}
              </ProductPriceBullet>
              <ProductPriceBullet>
                {`1 jus de fruits frais (orange et/ou smoothie avec des fruits de
                saison)`}
              </ProductPriceBullet>
              <ProductPriceBullet>
                {`1 salade de fruits (fruits de saison)`}
              </ProductPriceBullet>
              <ProductPriceBullet>
                {`2 assortiments de crudités en libre-service`}
              </ProductPriceBullet>
              <ProductPriceBullet>
                {`2 sauces tartinables au choix : Houmous, caviar d'aubergine,
                guacamole, tapenade verte ou noire ou Tomatade (faites maison) +
                pain`}
              </ProductPriceBullet>
              <ProductPriceBullet>
                {`Gaufres salées (choix du légumes, recommandé courgette)`}
              </ProductPriceBullet>
              <ProductPriceBullet>
                {`Assortiments de fruits frais`}
              </ProductPriceBullet>
            </div>
          </>
        }
      />
      <Footer mode="apicius" />
    </>
  );
}
