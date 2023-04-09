import Head from "next/head";
import { useRouter } from "next/router";

export type MetaProps = {
  title?: string;
  description?: string;
};

export default function Meta({ title, description }: MetaProps) {
  const router = useRouter();

  const fullTitle =
    title && title.trim().length > 0
      ? `${title} | Esprit Primeur`
      : "Esprit Primeur : Chez Nat et Théo";

  const fullUrl = `https://esprit-primeur.fr${router.asPath}`;
  console.log(fullUrl);

  return (
    <Head>
      {/* Icons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/icons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/icons/safari-pinned-tab.svg"
        color="#53ae32"
      />
      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <meta name="apple-mobile-web-app-title" content="Esprit Primeur" />
      <meta name="application-name" content="Esprit Primeur" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content="/images/apicius/hero.jpg" />
      <meta property="og:url" content={fullUrl} />
      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {description && <meta name="description" content={description} />}
      <title>{fullTitle}</title>
    </Head>
  );
}
