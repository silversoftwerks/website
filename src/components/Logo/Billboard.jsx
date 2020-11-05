import React from "react";
import { colorsAbstract } from "@SS/design-system/src/constants/color/colorStyles";
import { Box } from "@SS/design-system/src/components/layout/spacers/Box";
import { Stripes } from "./Stripes";
import { LandingLogo } from "./LandingLogo";
import { FullName } from "./FullName";

export const Billboard = () => (
  <Box>
    <Stripes />
    <Box
      backgroundColor={colorsAbstract.primary.green}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <LandingLogo padding={32} />
      <Box height="fit-contents" justifyContent="center" alignItems="flex-end">
        <FullName />
      </Box>
    </Box>
  </Box>
);
