declare module "react-scroll" {
  import { ReactNode } from "react";

  export interface LinkProps {
    to: string;
    smooth?: boolean;
    duration?: number;
    className?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    children?: ReactNode;
  }

  export const Link: React.FC<LinkProps>;
}
