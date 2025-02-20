declare module "@iconscout/react-unicons" {
  import { FC, SVGProps } from "react";

  interface IconProps extends SVGProps<SVGElement> {
    size?: string | number;
    color?: string;
  }

  export const UilSearch: FC<IconProps>;
  export const UilShoppingCart: FC<IconProps>;
  export const UilUser: FC<IconProps>;
  export const UilArrowLeft: FC<IconProps>;
  export const UilArrowRight: FC<IconProps>;
  export const UilArrowDown: FC<IconProps>;
  export const UilArrowUp: FC<IconProps>;
  export const UilArrowUpRight: FC<IconProps>;
  export const UilHeart: FC<IconProps>;
  export const UilTrashAlt: FC<IconProps>;
}
