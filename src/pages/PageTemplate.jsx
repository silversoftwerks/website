import React from "react";
import { Page } from "@SS/design-system/src/components/layout/views/Page";
import { Box } from "@SS/design-system/src/components/layout/spacers/Box";

export const PageTemplate = ({ header, content }) => (
  <Page>
    {header}
    <Box padding={8}>{content}</Box>
  </Page>
);
