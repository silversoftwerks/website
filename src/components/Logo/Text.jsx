import React from "react";
import Box from "@SS/design-system/src/components/layout/Box";
import Billboard from "@SS/design-system/src/components/typography/Billboard";

const Text = ({ children, label, color, accentColor = color, ...rest }) => (
  <Box>
    <Billboard {...rest} color={color}>
      {label}
    </Billboard>
  </Box>
);
export default Logo;
