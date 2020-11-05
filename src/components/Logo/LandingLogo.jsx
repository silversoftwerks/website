import React from "react";
import { colorsAbstract } from "@SS/design-system/src/constants/color/colorStyles";
import Logo from ".";

export const LandingLogo = ({ ...rest }) => (
  <Logo
    label="SS"
    color={colorsAbstract.primary.white}
    accentColor={colorsAbstract.primary.yellow}
    {...rest}
  />
);
