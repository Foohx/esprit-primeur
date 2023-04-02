import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Mentions légales", href: "#" },
  { name: "Conditions Générales de Vente", href: "#" },
  { name: "Contactez-nous", href: "/#shop" },
];

export type FooterProps = {
  mode?: "default" | "apicius";
};

export default function Footer({ mode = "default" }: FooterProps) {
  return (
    <footer className="bg-white mb-8">
      <div className="mx-auto max-w-7xl overflow-hidden px-4">
        <nav
          className="-mb-6 flex flex-col items-center text-center sm:text-left sm:flex-row sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="leading-6 text-gray-600 hover:text-gray-900 hover:underline"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          <Link
            className="text-gray-400 hover:text-gray-500 hover:scale-110"
            href={
              mode === "default"
                ? "https://www.facebook.com/chezpopaulbisca"
                : "https://www.facebook.com/people/Apicius-bordeaux/100064790742713/"
            }
            target="_blank"
          >
            <span className="sr-only">Facebook</span>
            <IconBrandFacebook className="h-8 w-8" aria-hidden="true" />
          </Link>
          <Link
            className="text-gray-400 hover:text-gray-500 hover:scale-110"
            href={
              mode === "default"
                ? "https://www.instagram.com/espace.fraicheur/"
                : "https://www.instagram.com/apiciusbordeaux/"
            }
            target="_blank"
          >
            <span className="sr-only">Instagram</span>
            <IconBrandInstagram className="h-8 w-8" aria-hidden="true" />
          </Link>
          {mode === "apicius" && (
            <Link
              className="text-gray-400 hover:text-gray-500 hover:scale-110"
              href="https://www.mariages.net/traiteur-mariage/apicius--e261965"
              target="_blank"
            >
              <span className="sr-only">{`Mariage.net`}</span>
              <Image
                src="/images/externals/logo-mariagenet.svg"
                width={64}
                height={32}
                alt="Logo du site mariage.net"
                className="h-8 w-auto"
              />
            </Link>
          )}
        </div>
        <p className="mt-10 text-center leading-5 text-gray-500">
          &copy; 2023 Esprit Primeur. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
