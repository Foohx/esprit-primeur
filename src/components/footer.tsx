import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
import Link from "next/link";

const navigation = {
  main: [
    { name: "Mentions légales", href: "#" },
    { name: "Conditions Générales de Vente", href: "#" },
    { name: "Contactez-nous", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white mb-8">
      <div className="mx-auto max-w-7xl overflow-hidden">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="tleading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          <Link
            className="text-gray-400 hover:text-gray-500"
            href="https://www.facebook.com/chezpopaulbisca"
            target="_blank"
          >
            <span className="sr-only">Facebook</span>
            <IconBrandFacebook className="h-8 w-8" aria-hidden="true" />
          </Link>
          <Link
            className="text-gray-400 hover:text-gray-500"
            href="https://www.instagram.com/espace.fraicheur/"
            target="_blank"
          >
            <span className="sr-only">Instagram</span>
            <IconBrandInstagram className="h-8 w-8" aria-hidden="true" />
          </Link>
        </div>
        <p className="mt-10 text-center leading-5 text-gray-500">
          &copy; 2023 Esprit Primeur. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
