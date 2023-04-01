import {
  IconChevronRight,
  IconDeviceMobile,
  IconMail,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export type _Product = {
  name: string;
  assets: string;
  assetsConfig?: {
    detailsExtension?: "jpg" | "png" | "jpeg" | "gif";
  };
};

export type ProductPageProps = {
  value: _Product;
  renderDetails?: ReactNode;
  renderPrices?: ReactNode;
};

export default function ProductPage({
  value,
  renderDetails,
  renderPrices,
}: ProductPageProps) {
  return (
    <main className="space-y-8 mb-32">
      {/* Head */}
      <section className="max-w-7xl mx-auto h-[60vh] max-h-[500px] px-4">
        <div className="rounded-2xl overflow-hidden h-full w-full relative group">
          <Image
            src={`${value.assets}/details.${
              value.assetsConfig?.detailsExtension ?? "jpg"
            }`}
            alt=""
            width={800}
            height={500}
            className="object-cover w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-black/0 group-hover:opacity-0 transition-opacity duration-300 flex items-end">
            <div className="p-8">
              <h1 className="font-medium tracking-tight text-5xl text-white">
                {value.name}
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Details */}
      <section className="max-w-7xl mx-auto p-4 flex flex-col gap-y-8 lg:gap-y-0 lg:flex-row lg:gap-x-16">
        <div className="flex-1 space-y-4">
          <h2 className="font-medium tracking-tight text-3xl">Informations</h2>
          {renderDetails}
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="font-medium tracking-tight text-3xl">Tarifs</h2>
          <div className="divide-y divide-gray-200 space-y-4">
            {renderPrices}
            <div className="pt-4 flex flex-col items-start gap-y-2">
              <span>
                Faites votre commande soit par mail, soit par téléphone.
              </span>
              <Link
                className="flex gap-x-1 text-primary-600 group"
                href="mailto:benoistnatalia@gmail.com"
              >
                <IconMail />
                <span className="font-semibold group-hover:underline">
                  benoistnatalia@gmail.com
                </span>
              </Link>
              <Link
                className="flex gap-x-1 text-primary-600 group"
                href="tel:0631982631"
              >
                <IconDeviceMobile />
                <span className="font-semibold group-hover:underline">
                  06 31 98 26 31
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* <p>
        Les buffets que je propose sont élaborés en fonction de vos envies,
        de vos goûts et surtout de votre budget.
      </p>
      <p>
        Je réalise des buffets principalement "veggie", je peux vous
        proposer des verrines/mignardises comprenant un peu de fromage ou de
        charcuterie, l'utilisation d'autres produits l'été.
      </p>
      <p>
        Les tarifs sont à définir en fonction de vos envies, demande sur
        devis.
      </p>
      <p>
        Pour vos lendemains de festivités, je vous propose une formule
        brunch pour 20€ par personnes comprenant :
      </p>
      <ul>
        <li>Viennoiseries (2 mini par personnes)</li>
        <li>
          Gauffres sucrées et sélection de confitures faites maison
          (2parfums)
        </li>{" "}
        <li>
          1 jus de fruits frais (orange et/ou smoothie avec des fruits de
          saison)
        </li>
        <li>1 salade de fruits (fruits de saison)</li>
        <li>2 assortiments de crudités en libre-service</li>
        <li>
          2 sauces tartinables au choix : Houmous / Caviar d'aubergine /
          Guacamole / Tapenade verte ou noire / Tomatade (faites maison) +
          pain
        </li>
        <li>
          Gaufres salées (choix du légumes, recommandé courgette
          Assortiments de fruits frais
        </li>
      </ul>
      <p>
        Faites votre commande soit par mail, soit par téléphone.
        benoistnatalia@gmail.com 06 31 98 26 31
      </p> */}
      </section>
    </main>
  );
}
