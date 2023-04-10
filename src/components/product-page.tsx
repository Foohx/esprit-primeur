import {
  IconBrandInstagram,
  IconChevronRight,
  IconDeviceMobile,
  IconMail,
} from "@tabler/icons-react";
import classNames from "classnames";
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
    <main className="space-y-8 mb-16 lg:mb-32">
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
          <div className="rounded-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-black/0 lg:group-hover:opacity-0 transition-opacity duration-300 flex items-end">
            <div className="p-8">
              <h1 className="font-medium tracking-tight text-5xl text-white">
                {value.name}
              </h1>
            </div>
          </div>
          <div className="absolute top-0 left-0 p-8 w-full flex justify-end">
            <Link
              className={classNames(
                "rounded-full",
                "py-2 px-4",
                "bg-gradient-to-br from-yellow-500 via-red-500 to-purple-500",
                "text-white",
                "opacity-80 hover:opacity-100 transition-opacity duration-300",
                "flex gap-x-2"
              )}
              href="https://www.instagram.com/apiciusbordeaux/"
              target="_blank"
            >
              <IconBrandInstagram />
              <span>Plus de photos</span>
            </Link>
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
      </section>
    </main>
  );
}
