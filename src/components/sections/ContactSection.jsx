import React from "react";
import { Box } from "@SS/design-system/src/components/layout/spacers/Box";
import { Header } from "@SS/design-system/src/components/content/typography/Header";
import { Text } from "@SS/design-system/src/components/content/typography/Text";
import { Link } from "react-router-dom";
import { routes } from "../../routes/index";
import { appColors } from "../../pages/appColors";
export function ContactSection({}) {
  return (
    <>
      <Header
        accented
        color={appColors.primary.yellow}
        accentColor={appColors.primary.green}
      >
        Contact Us
      </Header>
      <Box flexDirection="column" padding="16px">
        <Box flexDirection="column" paddingBottom="16px" alignItems="flex-end">
          <Text fontWeight="bold" color={appColors.primary.yellow}>
            Sales
          </Text>
          <Link
            to="https://github.com/silversoftwerks"
            style={{ textDecoration: "none" }}
          >
            <Text color={appColors.primary.black}>Tyler Silverstein</Text>
          </Link>
        </Box>
        <Box flexDirection="column" paddingBottom="16px" alignItems="flex-end">
          <Text fontWeight="bold" color={appColors.primary.yellow}>
            Product
          </Text>
          <Link
            to="https://github.com/silversoftwerks"
            style={{ textDecoration: "none" }}
          >
            <Text color={appColors.primary.black}>Scott Silverstein</Text>
          </Link>
        </Box>
      </Box>
    </>
  );
}
