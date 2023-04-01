import classNames from "classnames";
import { ReactElement, useEffect, useState } from "react";

export type SwitcherProps = {
  childrens: ReactElement[];
  childrenClassName?: HTMLDivElement["className"];
  /** Delay before switching to the next node. */
  delay?: number;
};

export default function Switcher({
  childrens,
  childrenClassName,
  delay = 2000,
}: SwitcherProps) {
  const [displayIndex, setDisplayIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayIndex((displayIndex) => (displayIndex + 1) % childrens.length);
    }, delay);

    return () => clearInterval(interval);
  }, [childrens, delay]);

  if (childrens.length === 0) {
    return null;
  }

  return (
    <>
      {childrens.map((children, childrenIdx) => (
        <div
          key={`${childrenIdx}`}
          className={classNames(childrenClassName, {
            hidden: displayIndex !== childrenIdx,
          })}
        >
          {children}
        </div>
      ))}
    </>
  );
}
