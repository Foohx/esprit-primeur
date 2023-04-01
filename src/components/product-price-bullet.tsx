import { IconChevronRight } from "@tabler/icons-react";
import { ReactNode } from "react";

export type ProductPriceBulletProps = {
  children: ReactNode;
};

export default function ProductPriceBullet({
  children,
}: ProductPriceBulletProps) {
  return (
    <div className="flex gap-x-1">
      <div>
        <IconChevronRight />
      </div>
      <div>{children}</div>
    </div>
  );
}
