import React from "react";
import { Box } from "@SS/design-system/src/components/layout/spacers/Box";
import { Billboard } from "@SS/design-system/src/components/content/typography/Billboard";

const Logo = ({
  children,
  label,
  color,
  accentColor = color,
  times = 4,
  showText = false,
  size = 16,
  ...rest
}) => (
  <Box
    justifyContent="center"
    alignItems="center"
    border={`1px sold ${color}`}
    flexDirection="column"
    {...rest}
  >
    <svg height={`${size * 8}px`} width={`${size * 8}px`}>
      {new Array(times)
        .fill(0)
        .map((v, i) => i)
        .map((v) => (
          <polygon
            points={`0,0 ${size * 8},0 ${size * 8},${size * 8}`}
            fill="transparent"
            stroke={v == 3 ? accentColor : color}
            strokeWidth="3"
            class="triangle"
            transform={`rotate(${360 / v})`}
            style={{ transformOrigin: "center" }}
          />
        ))}
    </svg>
    {showText && (
      <Billboard fontSize="128px" color={color}>
        {label}
      </Billboard>
    )}
  </Box>
);
export default Logo;
