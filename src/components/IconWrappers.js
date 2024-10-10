import React from "react";
import * as UniconsOriginal from "@iconscout/react-unicons";

const withoutDefaultProps = (WrappedComponent) => {
  const WrappedWithoutDefaultProps = (props) => <WrappedComponent {...props} />;
  WrappedWithoutDefaultProps.defaultProps = {};
  return WrappedWithoutDefaultProps;
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
