import React, { Fragment } from "react";
import { Box } from "@SS/design-system/src/components/layout/spacers/Box";
import { Header } from "@SS/design-system/src/components/content/typography/Header";
import { appColors } from "../../pages/appColors";
import { Text } from "@SS/design-system/src/components/content/typography/Text";
import { Icon } from "@SS/design-system/src/components/iconography/Icon";
export const BusinessCard = () => (
  <Box height="450px" flexDirection="column" justifyContent="space-between">
    <Front />
    <Back />
  </Box>
);
const Back = () => {
  return (
    <Box
      background={`linear-gradient(15deg, ${appColors.primary.green} 20%, ${appColors.primary.white} 15% 80%, ${appColors.primary.green} 80%)`}
      width="350px"
      height="200px"
      flexDirection="column"
      justifyContent="space-between"
      padding={16}
    >
      <Box
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <CompanyName
          accented={false}
          fontColor={appColors.primary.green}
          accent={appColors.primary.black}
        />
      </Box>
    </Box>
  );
};
const Front = ({}) => {
  return (
    <Box
      background={`linear-gradient(165deg, ${appColors.primary.black} 55%, ${appColors.primary.white} 55% 95%, ${appColors.primary.red} 95%)`}
      padding={16}
      width="350px"
      height="200px"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box flexDirection="column">
        <Text fontWeight="bold" color={appColors.primary.white}>
          Sales
        </Text>
        <Box flexDirection="column" alignItems="flex-start">
          <Text display="flex" color={appColors.primary.yellow}>
            <Icon
              icon="web"
              paddingRight="8px"
              fill={appColors.primary.yellow}
            />
            succulentstraws.com
          </Text>
        </Box>
        <Box flexDirection="column" alignItems="flex-start">
          <Text display="flex" color={appColors.primary.green}>
            <Icon
              icon="email"
              paddingRight="8px"
              fill={appColors.primary.green}
            />
            sales@succulentstraws.com
          </Text>
        </Box>
        <Box flexDirection="column" alignItems="flex-start">
          <Text display="flex" color={appColors.primary.blue}>
            <Icon
              icon="phone"
              paddingRight="4px"
              fill={appColors.primary.blue}
            />
            &
            <Icon
              icon="message"
              paddingLeft="4px"
              paddingRight="8px"
              fill={appColors.primary.blue}
            />
            410-913-7518
          </Text>
        </Box>
      </Box>
      <Box justifyContent="flex-end">
        <Header
          accented={false}
          headerPadding={{
            paddingBottom: 0,
          }}
          color={appColors.primary.yellow}
          accentColor={appColors.primary.yellow}
          textAlign="right"
          fontSize="1.5rem"
          lineHeight="1.75rem"
          width="min-content"
        >
          Durable Sustainable Bio‑degradable
        </Header>
      </Box>
    </Box>
  );
};

function CompanyName({
  accented = true,
  fontColor = appColors.primary.black,
  accent = appColors.primary.red,
}) {
  return (
    <Header
      accented={accented}
      headerPadding={{
        paddingBottom: 0,
      }}
      color={fontColor}
      accentColor={accent}
      textAlign="center"
      flexDirection="row"
      display="flex"
      // filter="drop-shadow(0px 1px 0px rgba(0,0,0,0.23)"
    >
      succulent
      <Icon
        size={3}
        fill={appColors.primary.green}
        padding={4}
        icon="spa"
      ></Icon>
      straws
    </Header>
  );
}
