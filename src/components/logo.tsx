import classNames from "classnames";

import SvgLogo from "../../public/images/logo.svg";
import SvgLogoPear from "../../public/images/logo-pear.svg";
import SvgLogoCarrot from "../../public/images/logo-carrot.svg";
import SvgLogoStrawberry from "../../public/images/logo-strawberry.svg";

export type LogoProps = {
  /** Add an artifact to the logo. */
  artifact?: "pear" | "carrot" | "strawberry";
  /** Override className property. */
  className?: HTMLDivElement["className"];
};

export default function Logo({ artifact, className }: LogoProps = {}) {
  if (artifact === undefined) {
    return (
      <SvgLogo
        className={classNames(
          className === undefined ? "w-auto h-10" : className
        )}
      />
    );
  }

  if (artifact === "pear") {
    return <SvgLogoPear className={className} />;
  }

  if (artifact === "carrot") {
    return <SvgLogoCarrot className={className} />;
  }

  return <SvgLogoStrawberry className={className} />;
}
