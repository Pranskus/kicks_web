import React from "react";
import * as UniconsOriginal from "@iconscout/react-unicons";

// Define types for the component and props
type IconComponent = typeof UniconsOriginal.UilSearch;
type IconProps = React.ComponentProps<IconComponent>;

const withoutDefaultProps = (
  WrappedComponent: IconComponent
): React.FC<IconProps> => {
  const WrappedWithoutDefaultProps = React.forwardRef<SVGElement, IconProps>(
    (props, ref) => React.createElement(WrappedComponent, { ...props, ref })
  );
  WrappedWithoutDefaultProps.defaultProps = {};
  return WrappedWithoutDefaultProps as React.FC<IconProps>;
};

export const UilSearch = withoutDefaultProps(UniconsOriginal.UilSearch);
export const UilShoppingCart = withoutDefaultProps(
  UniconsOriginal.UilShoppingCart
);
export const UilUser = withoutDefaultProps(UniconsOriginal.UilUser);
export const UilArrowLeft = withoutDefaultProps(UniconsOriginal.UilArrowLeft);
export const UilArrowRight = withoutDefaultProps(UniconsOriginal.UilArrowRight);
export const UilArrowDown = withoutDefaultProps(UniconsOriginal.UilArrowDown);
export const UilArrowUp = withoutDefaultProps(UniconsOriginal.UilArrowUp);
export const UilArrowUpRight = withoutDefaultProps(
  UniconsOriginal.UilArrowUpRight
);
export const UilHeart = withoutDefaultProps(UniconsOriginal.UilHeart);
export const UilTrashAlt = withoutDefaultProps(UniconsOriginal.UilTrashAlt);
