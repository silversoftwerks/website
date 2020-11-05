import { Billboard } from "@SS/design-system/src/components/content/typography/Billboard";
import React from "react";
import { LandingLogo } from "./Logo/LandingLogo";
import { FullName } from "./Logo/FullName";
import { Stripes } from "./Logo/Stripes";
import { Box } from "@SS/design-system/src/components/layout/spacers/Box";
import { appColors } from "../pages/appColors";
import { Link } from "react-router-dom";
import { routes } from "../routes/index";
export const Header = () => (
  <Link to={routes.home} style={{ textDecoration: "none" }}>
    <Box>
      <Stripes />
      <Box
        backgroundColor={appColors.primary.green}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box width="unset">
          <LandingLogo padding={8} size={4} />
        </Box>
        <Box
          height="fit-contents"
          justifyContent="center"
          alignItems="flex-end"
        >
          <FullName />
        </Box>
      </Box>
    </Box>
  </Link>
);
