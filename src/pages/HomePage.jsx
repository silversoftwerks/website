import React, { useState } from "react";
import { Page } from "@SS/design-system/src/components/layout/views/Page";
import { colorsAbstract } from "@SS/design-system/src/constants/color/colorStyles";
import { Box } from "@SS/design-system/src/components/layout/spacers/Box";
import { Header } from "../../../design-system/src/components/content/typography/Header";
import Link from "../../../design-system/src/components/interactives/Link";
import { Text } from "../../../design-system/src/components/content/typography/Text";
import Logo from "../components/Logo";

const Stripes = () => (
  <React.Fragment>
    <Box width="8px" backgroundColor={colorsAbstract.primary.black} />
    <Box width="4px" backgroundColor={colorsAbstract.primary.yellow} />
    <Box width="8px" backgroundColor={colorsAbstract.primary.white} />
  </React.Fragment>
);

const LandingLogo = () => (
  <Logo
    label="SS"
    color={colorsAbstract.primary.white}
    accentColor={colorsAbstract.primary.yellow}
  />
);

const FullName = () => (
  <div>
    <Header paddingRight="16px" color={colorsAbstract.primary.white}>
      Silver Softwerks
    </Header>
    <Box width="8px" backgroundColor={colorsAbstract.primary.white} />
    <Box width="4px" backgroundColor={colorsAbstract.primary.yellow} />
    <Box width="8px" backgroundColor={colorsAbstract.primary.black} />
  </div>
);

const Billboard = () => (
  <Box>
    <Stripes />
    <Box
      backgroundColor={colorsAbstract.primary.black}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <LandingLogo />
      <Box
        height="fit-contents"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <FullName />
      </Box>
    </Box>
  </Box>
);
const HomePage = ({ children, ...rest }) => {
  const [selectedPics, setSelectedPics] = useState([]);
  return (
    <Page backgroundColor={colorsAbstract.primary.white}>
      <Billboard />
      <Box>
        <Box flexDirection="column" padding="16px">
          <Header accented accentColor={colorsAbstract.primary.yellow}>
            Case Studies
          </Header>
          <Header accented accentColor={colorsAbstract.primary.yellow}>
            A vehicle for perfecting process product and people
          </Header>
          <Box flexDirection="column" padding="16px">
            <Box>
              <Text>Products Include</Text>
              <Box
                flexDirection="column"
                paddingLeft="16px"
                paddingTop="16px"
                paddingBottom="16px"
              >
                <Text>Design Systems</Text>
                <Text>Worldclass Web Apps</Text>
                <Text>Innovative Technical Solutions</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          flexDirection="column"
          alignItems="flex-end"
          flexShrink="2"
          padding="16px"
        >
          <Header accented accentColor={colorsAbstract.primary.yellow}>
            Contact Us
          </Header>
          <Box flexDirection="column" padding="16px">
            <Box
              flexDirection="column"
              paddingBottom="16px"
              alignItems="flex-end"
            >
              <Text fontWeight="bold">Github</Text>
              <Link src="https://github.com/silversoftwerks">
                Silver Softwerks Repositories
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Page>
  );
};

export default HomePage;
