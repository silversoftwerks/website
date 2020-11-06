import React from "react";
import { colorsAbstract } from "@SS/design-system/src/constants/color/colorStyles";
import { Box } from "@SS/design-system/src/components/layout/spacers/Box";
import { Header } from "@SS/design-system/src/components/content/typography/Header";

export const FullName = () => (
  <div>
    <Header
      zIndex={99}
      filter={"drop-shadow(1px -10px 13px rgba(0,0,0,0.2))"}
      headerPadding={{ paddingBottom: "0" }}
      color={colorsAbstract.primary.white}
    >
      Succulent Straws
    </Header>
    <Box width="8px" backgroundColor={colorsAbstract.primary.white} />
    <Box width="4px" backgroundColor={colorsAbstract.primary.yellow} />
    <Box width="8px" backgroundColor={colorsAbstract.primary.black} />
  </div>
);
