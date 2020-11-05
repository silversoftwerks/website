import React from "react";
import { colorsAbstract } from "@SS/design-system/src/constants/color/colorStyles";
import { Box } from "@SS/design-system/src/components/layout/spacers/Box";

export const Stripes = () => (
  <React.Fragment>
    <Box width="8px" backgroundColor={colorsAbstract.primary.black} />
    <Box width="4px" backgroundColor={colorsAbstract.primary.yellow} />
    <Box width="8px" backgroundColor={colorsAbstract.primary.white} />
  </React.Fragment>
);
