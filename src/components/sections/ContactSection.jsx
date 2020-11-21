import React from "react";
import { Box } from "@SS/design-system/src/components/layout/spacers/Box";
import { Header } from "@SS/design-system/src/components/content/typography/Header";
import { Text } from "@SS/design-system/src/components/content/typography/Text";
import { Link } from "react-router-dom";
import { routes } from "../../routes/index";
import { appColors } from "../../pages/appColors";
import { Icon } from "@SS/design-system/src/components/iconography/Icon";

export function ContactSection({}) {
  return (
    <>
      <Header
        accented
        color={appColors.primary.black}
        accentColor={appColors.primary.yellow}
      >
        Contact Us
      </Header>
      <ContactList />
    </>
  );
}

const Contact = ({ title, name, email, color }) => {
  return (
    <>
      <Text fontWeight="bold" color={appColors.primary.black}>
        {title}
      </Text>
      <Box flexDirection="column" padding={8} alignItems="flex-end">
        <a
          href={`mailto:${email}`}
          style={{
            textDecoration: "none",
          }}
        >
          <Text display="flex" color={appColors.primary.black}>
            {name}
            <Icon icon="email" paddingLeft="8px" fill={color}></Icon>
          </Text>
        </a>
      </Box>
    </>
  );
};

const contacts = [
  {
    title: "Customer Relations",
    email: "tyler@succulentstraws.com",
    name: "Tyler Silverstein",
  },
  {
    title: "Sales",
    email: "salse@succulentstraws.com",
    name: "Sales at Succulent Straws",
  },
  {
    title: "Product",
    email: "scott@succulentstraws.com",
    name: "Scott Silverstein",
  },
];
const colors = [
  appColors.primary.green,
  appColors.primary.yellow,
  appColors.primary.blue,
];
function ContactList() {
  return (
    <Box flexDirection="column" padding={8} alignItems="flex-end">
      {contacts.map(({ name, email, title }, i, array, color = colors[i]) => (
        <Contact name={name} email={email} title={title} color={color} />
      ))}
    </Box>
  );
}
