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
      {/* <Box transform="rotate(195deg) translate(-18px, 4px)">
        {spikeLine(270, 6)}
      </Box> */}
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
      {/* <Box transform="rotate(15deg) translate(-18px, 4px)">
        {spikeLine(270, 6)}
      </Box> */}
    </Box>
  );
};
const Front = ({}) => {
  return (
    <Box
      background={`linear-gradient(165deg, ${appColors.primary.green} 55%, ${appColors.primary.white} 55% 95%, ${appColors.primary.green} 95%)`}
      padding={16}
      width="350px"
      height="200px"
      flexDirection="column"
      justifyContent="space-between"
    >
      {/* <Box height="0px" transform="rotate(165deg) translate(250px, -140px)">
        {spikeLine(10, 1, 13)}
      </Box> */}
      <Box flexDirection="column">
        <Box justifyContent="flex-start">
          <Header
            accented={false}
            headerPadding={{
              paddingBottom: 0,
            }}
            color={appColors.primary.white}
            accentColor={appColors.primary.yellow}
            fontSize="1.5rem"
            lineHeight="1.75rem"
            width="min-content"
          >
            Bio‑degradable Sustainable Durable
          </Header>
        </Box>
        <Box
          flexDirection="column"
          alignItems="flex-end"
          transform="translate(0px, -26px)"
        >
          <Text
            lineHeight={1.5}
            fontWeight="bold"
            color={appColors.primary.green}
          >
            Sales
          </Text>
          <Box flexDirection="row" justifyContent="flex-end">
            <Text
              lineHeight={1.5}
              display="flex"
              color={appColors.primary.blue}
              whiteSpace="nowrap"
            >
              (
            </Text>
            <Text
              lineHeight={1.5}
              display="flex"
              color={appColors.primary.green}
              whiteSpace="nowrap"
            >
              410
            </Text>
            <Text
              lineHeight={1.5}
              display="flex"
              color={appColors.primary.blue}
              whiteSpace="nowrap"
              paddingRight="2px"
            >
              )
            </Text>
            <Text
              lineHeight={1.5}
              display="flex"
              color={appColors.primary.green}
              whiteSpace="nowrap"
            >
              913 7518
              <Icon
                icon="phone"
                paddingLeft="8px"
                fill={appColors.primary.green}
              />
            </Text>
          </Box>
          <Box flexDirection="row" justifyContent="flex-end">
            <Text
              lineHeight={1.5}
              display="flex"
              color={appColors.primary.green}
            >
              succulentstraws.com
              <Icon
                icon="web"
                paddingLeft="8px"
                fill={appColors.primary.green}
              />
            </Text>
          </Box>
          <Box flexDirection="row" justifyContent="flex-end">
            <Text
              lineHeight={1.5}
              display="flex"
              color={appColors.primary.green}
            >
              sales
            </Text>
            <Text
              lineHeight={1.5}
              display="flex"
              color={appColors.primary.blue}
              paddingLeft="2px"
              paddingRight="2px"
            >
              @
            </Text>
            <Text
              lineHeight={1.5}
              display="flex"
              color={appColors.primary.green}
            >
              succulentstraws.com
              <Icon
                icon="email"
                paddingLeft="8px"
                fill={appColors.primary.green}
              />
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

function spikeLine(length, count, size = 2) {
  //l=count(pr+22) => l/count = pr+22
  return new Array(count)
    .fill(0)
    .map(() => (
      <Icon
        size={size}
        fill={appColors.primary.red}
        icon="spike"
        paddingRight={Math.floor(length / count - 22)}
      ></Icon>
    ));
}

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
      <Box flexDirection="column" height={"40px"}>
        <Icon
          size={4}
          padding={4}
          fill={appColors.primary.green}
          icon="agave"
        ></Icon>
        <Icon
          boxStyle={{ transform: "translate(0, -40px)" }}
          size={4}
          padding={4}
          fill={appColors.primary.blue}
          icon="agave_tip"
        ></Icon>
      </Box>
      straws
    </Header>
  );
}
