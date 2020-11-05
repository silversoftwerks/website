import React from "react";
import { Box } from "@SS/design-system/src/components/layout/spacers/Box";
import { Header } from "@SS/design-system/src/components/content/typography/Header";
import { Text } from "@SS/design-system/src/components/content/typography/Text";
import { Link } from "react-router-dom";
import { routes } from "../../routes/index";
import { appColors } from "../../pages/appColors";
export function PitchSection({}) {
  return (
    <Link to={routes.pitch} style={{ textDecoration: "none" }}>
      <Header
        accented
        color={appColors.primary.yellow}
        accentColor={appColors.primary.green}
      >
        Agave
      </Header>

      <Box flexDirection="column" padding={16}>
        <Text color={appColors.primary.black}>More Resiliant than Paper</Text>
        <Text color={appColors.primary.black}>More concious than Plastic</Text>
        <Text color={appColors.primary.black}>Biodegradable</Text>
      </Box>
    </Link>
  );
}
