import React from "react";
import { Box } from "@SS/design-system/src/components/layout/spacers/Box";
import { PitchSection } from "./PitchSection";
import { ContactSection } from "./ContactSection";
import { Link } from "react-router-dom";
import { routes } from "../../routes/index";

export function HomeSection({}) {
  return (
    <Box flexWrap="wrap">
      <Box flexDirection="column" padding="16px">
        <PitchSection />
      </Box>
      <Box flexDirection="column" padding="16px">
        <ContactSection />
      </Box>
    </Box>
  );
}
