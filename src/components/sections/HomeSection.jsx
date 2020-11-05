import React from "react";
import { Box } from "@SS/design-system/src/components/layout/spacers/Box";
import { PitchSection } from "./PitchSection";
import { ContactSection } from "./ContactSection";
import { Link } from "react-router-dom";
import { routes } from "../../routes/index";

export function HomeSection({}) {
  return (
    <Box>
      <Box flexDirection="column" padding="16px">
        <Link to={routes.pitch} style={{ textDecoration: "none" }}>
          <PitchSection />
        </Link>
      </Box>
      <Box
        flexDirection="column"
        alignItems="flex-end"
        flexShrink="2"
        padding="16px"
      >
        <Link to={routes.contact} style={{ textDecoration: "none" }}>
          <ContactSection />
        </Link>
      </Box>
    </Box>
  );
}
