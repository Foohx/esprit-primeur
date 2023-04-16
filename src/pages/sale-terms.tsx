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
      <Meta title="Conditions générales de vente" />
      <Header />
      <main>
        <section
          id="about"
          className="pt-8 pb-16 lg:pb-32 max-w-7xl mx-auto space-y-8 px-4"
        >
          <h1 className="font-medium tracking-tight text-5xl">
            Conditions générales de vente
          </h1>
          <div className="flex flex-col gap-y-4">
            <div className="space-y-4">
              <h2 className="font-medium tracking-tight text-3xl">1. Objet</h2>
              <p>
                {`Les conditions générales de vente décrites ci-après détaillent
                les droits et obligations de la société SARL ESPACE FRAICHEUR et
                de son client dans le cadres de la vente des marchandises
                suivantes : Fruits, Légumes, fruits secs, oeufs, légumineuses et
                épicerie fine, ainsi que les compositions d'Apicius Bordeaux.`}
              </p>
              <p>
                {`Toutes prestations accomplie par la société SARL ESPACE FRAICHEUR
                implique donc l'adhésion sans réserve de l'acheteur aux
                présentes conditions générales de vente.`}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-medium tracking-tight text-3xl">2. Prix</h2>
              <p>
                {`Les prix des marchandises vendues sont ceux en vigueur au jour
                de la commande. Ils sont libellés en euros et calculés TTC.`}
              </p>
              <p>
                {`Pour les livraisons, ils seront majorés dès frais de transport
                applicable au jour de la commande.`}
              </p>
              <p>
                {`La société SARL ESPACE FRAICHEUR s'accorde de droit de modifier
                ses tarifs à tout moment. Toutefois, elle s'engage à facturer
                les marchandises commandées aux prix indiqués lors de
                l'enregistrement de la commande.`}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-medium tracking-tight text-3xl">
                3. Clause de rétractation
              </h2>
              <p>
                {`Une fois la commande passée et validée par un mail de retour de
                la SARL ESPACE FRAICHEUR, le client s'engage à honorer sa
                commande et le paiement de sa marchandise. Par voie de
                conséquence, il ne dispose pas de droit de rétractation.`}
              </p>
              <p>
                {`Néanmoins, si la SARL ESPACE FRAICHEUR et le client s'entendent
                pour l'annulation de la commande et que des frais n'ont pas été
                engagés par la société, le client pourra être dégagé de toute
                obligation.`}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-medium tracking-tight text-3xl">
                4. Escompte
              </h2>
              <p>
                {`Aucun escompté ne sera consenti en cas de paiement anticipé.`}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-medium tracking-tight text-3xl">
                5. Modalité de paiement
              </h2>
              <p>
                {`Les règlement des commandes s'effectue :`}
                <ul>
                  <li>{`- par carte bancaire`}</li>
                  <li>{`- en espèce`}</li>
                </ul>
              </p>
              <p>{`Aucun autre moyen de paiement ne sera accepté.`}</p>
              <p>
                {`Aucun acompte ne sera demandé, la totalité de la commande devra
                être payée à réception ou au moment du retrait des marchandises.`}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-medium tracking-tight text-3xl">
                6. Retrait de paiement
              </h2>
              <p>
                {`En cas de défaut de paiement total ou partiel des marchandises
                livrées au jour de la réception, l'acheteur doit verser à la
                société SARL ESPACE FRAICHEUR une pénalité de retard égale à
                trois fois le taux de l'intérêt légal.cette pénalité est
                calculée sur le montant TTC de la somme restant due, et court à
                compter de la date d'échéance du prix sans qu'aucune mise en
                demeure préalable ne soit nécessaire. En sus des indemnités de
                retard, toute somme, non payée à sa date d'exigibilité produira
                de plein droit le paiement d'une indemnité forfaitaire de 40
                euros due au titre des frais de recouvrement.`}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-medium tracking-tight text-3xl">
                7. Clause résolutoire
              </h2>
              <p>
                {`Si dans les quinze jours qui suivent la mise en œuvre delà la
                clause "retard de paiement" l'acheteur ne s'est acquitté dès
                sommes restant dues, la vente sera résolue de plein droit et
                pourra ouvrir à l'allocation de dommages et intérêts au profit
                de la société SARL ESPACE FRAICHEUR.`}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-medium tracking-tight text-3xl">
                8. Clase de réserve de propriété
              </h2>
              <p>
                {`La société SARL ESPACE FRAICHEUR conserve la propriété des biens
                vendus jusqu'au paiement intégral du prix, en principal et en
                accessoires.`}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-medium tracking-tight text-3xl">
                9. Livraison
              </h2>
              <p>
                La livraison sera effectuée :
                <ul>
                  <li>
                    {`- soit par la remise direct de la marchandise à l'acquéreur`}
                  </li>
                  <li>
                    {`- soit par la mise à disposition en magasin à l'attention de
                    l'acheteur`}
                  </li>
                  <li>
                    {`- soit au lieu indiqué par l'acheteur sur le bon de commande`}
                  </li>
                </ul>
              </p>
              <p>
                {`Les commandes faites pour livraison doivent être effectuées au
                moins 24 h à l'avance. Aucune commande ne sera prise en compte
                pour une livraison le jour même. Le délai de livraison indiqué
                lors de l'enregistrement de la commande n'est donné qu'à titre
                indicatif et n'est aucunement garanti. Par voie de conséquence,
                tout retard raisonnable dans la livraison des produits ne pourra
                pas donner lieu au profit de l'acheteur à : `}
                <ul>
                  <li>{`- l'allocation des dommages et intérêts`}</li>
                  <li>{`- l'annulation de la commande`}</li>
                </ul>
              </p>
              <p>
                {`Le risque du transport est supporté en totalité par l'acheteur.`}
              </p>
              <p>
                {`La SARL ESPACE FRAICHEUR se situant sur la commune de Biscarrosse, 
                les livraisons de paniers de fruits et légumes ne seront pas majorés de
                frais de transport dans une limite raisonnable de déplacement.`}
              </p>
              <p>
                {`Les livraisons sur les communes de Biscarrosse, Parentis-en-Born et Gastes 
                seront exonérées de frais de transport. Pour toutes autres communes, les frais 
                seront calculés en fonction des kilomètres parcourus.`}
              </p>
              <p>
                {`Pour les livraisons d'Apicius Bordeaux, les frais applicables sont de 25€ pour 
                les livraisons sur Bordeaux et Bordeaux Métropole. Au-delà, ils sont calculés sur 
                la base de 0,40€ par kilomètre parcouru.`}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-medium tracking-tight text-3xl">
                10. Force majeure
              </h2>
              <p>
                {`La responsabilité de la SARL ESPACE FRAICHEUR ne pourra être
                mise en œuvre si la non exécution ou le retard dans l'exécution
                de l'une de ses obligations décrites dans les présentes
                conditions générales de vente découle d'un cas de force majeure.
                À ce titre, la force majeure s'étend de tout évènement
                extérieur, imprévisible et irrésistible au sens de l'article
                1148 du code civil, à cela s'ajoute tout accident de travail, et
                absence d'employé empêchant la mise à disposition du personnel
                nécessaire pour la réalisation des commandes. `}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-medium tracking-tight text-3xl">
                11. Tribunal compétent
              </h2>
              <p>
                {`Tout litige relatif à l'interprétation et à l'exécution des
                présentes conditions générales de vente est soumis au droit
                français. À défaut de résolution amiable, le litige sera porté
                devant le tribunal de commerce de Bordeaux.`}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="underline">{`Fait à Biscarrosse, le 17 avril 2023.`}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
