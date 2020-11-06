import React, { useLayoutEffect, useState, useEffect } from "react";
import { Box } from "@SS/design-system/src/components/layout/spacers/Box";
import { Billboard } from "@SS/design-system/src/components/content/typography/Billboard";
import { Icon } from "@SS/design-system/src/components/iconography/Icon";
import { appColors } from "../../pages/appColors";

const Logo = ({
  children,
  label,
  color,
  accentColor = color,
  times = 4,
  showText = false,
  size = 16,
  ...rest
}) => {
  const [{ scale, scale2, scale3, scale4, ms }, setState] = useState({
    scale: 1,
    scale2: 1,
    scale3: 1,
    scale4: 1,
    ms: performance.now(),
  });
  useLayoutEffect(() => {
    const floor = 0;
    const ceiling = 1;
    const offset = 2;
    const amplitude = 1;
    const delay = Math.PI;
    const rate = 2;
    let nextScale = Math.max(
      Math.min(
        (amplitude * Math.cos(delay + ms / (rate * 1000))) / 2 +
          amplitude * offset,
        2 * amplitude * ceiling + amplitude * offset
      ),
      amplitude * floor
    );
    let nextScale2 = Math.max(
      Math.min(
        (amplitude * Math.cos(delay + (ms - 200) / (rate * 1000))) / 2 +
          amplitude * offset,
        2 * amplitude * ceiling + amplitude * offset
      ),
      amplitude * floor
    );
    let nextScale3 = Math.max(
      Math.min(
        (amplitude * Math.cos(delay + (ms - 400) / (rate * 1000))) / 2 +
          amplitude * offset,
        2 * amplitude * ceiling + amplitude * offset
      ),
      amplitude * floor
    );
    let nextScale4 = Math.max(
      Math.min(
        (amplitude * Math.cos(delay + (ms - 600) / (rate * 1000))) / 2 +
          amplitude * offset,
        2 * amplitude * ceiling + amplitude * offset
      ),
      amplitude * floor
    );
    const handleTouch = (value) => {
      // setState((state) => ({
      //   ...state,
      //   scale: scale * 1.2,
      // }));
    };

    window.addEventListener("click", handleTouch);

    requestAnimationFrame((ms) =>
      setState((state) => ({
        ...state,
        ms,
        scale: nextScale,
        scale2: (nextScale2 * 4) / 5,
        scale3: (nextScale3 * 3) / 4,
        scale4: (nextScale4 * 2) / 3,
      }))
    );
    return () => window.removeEventListener("click", handleTouch);
  }, [scale, ms]);
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      border={`1px sold ${color}`}
      flexDirection="column"
      {...rest}
      filter="url('#goo')"
      height="300px"
    >
      <div
        style={{
          transform: `translateY(${(1.6 * 10 * 8 * -scale4) / 2}px) scaleX(${
            (scale4 * scale4) / 2
          }) scaleY(${scale4})`,
          zIndex: 93,
          height: "0px",
          transformOrigin: "center bottom",
        }}
      >
        <Icon
          filter={"drop-shadow(1px -10px 13px rgba(0,0,0,0.2))"}
          fill={appColors.primary.blue}
          size={10}
          icon="spa"
        />
      </div>
      <div
        style={{
          transform: `translateY(${(1.4 * 12 * 8 * -scale3) / 2}px) scaleX(${
            (scale3 * scale3) / 2
          }) scaleY(${scale3})`,
          zIndex: 92,
          height: "0px",
          transformOrigin: "center bottom",
        }}
      >
        <Icon
          filter={"drop-shadow(1px -10px 13px rgba(0,0,0,0.2))"}
          fill={appColors.primary.green}
          size={12}
          icon="spa"
        />
      </div>
      <div
        style={{
          transform: `translateY(${(1.2 * 14 * 8 * -scale2) / 2}px) scaleX(${
            (scale2 * scale2) / 2
          }) scaleY(${scale2})`,
          zIndex: 91,
          height: "0px",
          transformOrigin: "center bottom",
        }}
      >
        <Icon
          filter={"drop-shadow(1px -10px 13px rgba(0,0,0,0.2))"}
          fill={appColors.primary.blue}
          size={14}
          icon="spa"
        />
      </div>
      <div
        style={{
          transform: `translateY(${(16 * 8 * -scale) / 2}px) scaleX(${
            (scale * scale) / 2
          }) scaleY(${scale})`,
          zIndex: 90,
          height: "0px",
          transformOrigin: "center bottom",
        }}
      >
        <Icon
          filter={"drop-shadow(1px -10px 13px rgba(0,0,0,0.2))"}
          fill={appColors.primary.green}
          size={16}
          icon="spa"
        />
      </div>
      {showText && (
        <Billboard fontSize="128px" color={color}>
          {label}
        </Billboard>
      )}
    </Box>
  );
};
export default Logo;
