import React, { useState, useEffect } from "react";
import { colorsAbstract } from "@SS/design-system/src/constants/color/colorStyles";
import { Box } from "@SS/design-system/src/components/layout/spacers/Box";

export const Stripes = () => {
  const [{ black, yellow, white }, setState] = useState({
    black: 8,
    yellow: 4,
    white: 8,
  });
  useEffect(() => {
    const handleTouch = ({ target: { value } }) => {
      console.log(value);

      setState((state) => ({
        ...state,
        black: black + 8 * Math.random(),
        yellow: yellow + 8 * Math.random(),
        white: white + 8 * Math.random(),
      }));
    };

    window.addEventListener("onclick", handleTouch);

    return () => window.removeEventListener("onclick", handleTouch);
  }, [black, yellow, white]);
  return (
    <React.Fragment>
      <Box
        transition="2s"
        width={`${black}px`}
        backgroundColor={colorsAbstract.primary.black}
      />
      <Box
        transition="2s"
        width={`${yellow}px`}
        backgroundColor={colorsAbstract.primary.red}
      />
      <Box
        transition="2s"
        width={`${white}px`}
        backgroundColor={colorsAbstract.primary.white}
      />
    </React.Fragment>
  );
};
