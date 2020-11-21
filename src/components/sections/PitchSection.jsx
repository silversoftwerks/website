import React from "react";
import { Box } from "@SS/design-system/src/components/layout/spacers/Box";
import { Header } from "@SS/design-system/src/components/content/typography/Header";
import { Text } from "@SS/design-system/src/components/content/typography/Text";
import { Link } from "react-router-dom";
import { routes } from "../../routes/index";
import { appColors } from "../../pages/appColors";
import { Icon } from "@SS/design-system/src/components/iconography/Icon";
export function PitchSection({}) {
  return (
    <>
      <Header
        accented
        color={appColors.primary.black}
        accentColor={appColors.primary.yellow}
      >
        Poly Agave Straws
      </Header>
      <Box
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding={16}
      >
        <Box
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          paddingBottom={8}
        >
          <Icon
            size={8}
            icon="spa"
            paddingRight={8}
            fill={appColors.primary.green}
          ></Icon>
          <Text display="flex" color={appColors.primary.black}>
            More Resiliant than Paper
          </Text>
        </Box>
        <Box
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          paddingBottom={8}
        >
          <Icon
            size={8}
            icon="terrain"
            paddingRight={8}
            fill={appColors.primary.yellow}
          ></Icon>
          <Text color={appColors.primary.black}>
            More earth conscious than Plastic
          </Text>
        </Box>
        <Box
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          paddingBottom={8}
        >
          <Icon
            size={8}
            icon="sync"
            paddingRight={8}
            fill={appColors.primary.blue}
          ></Icon>
          <Text color={appColors.primary.black}>Biodegradable</Text>
        </Box>
      </Box>
    </>
  );
}
