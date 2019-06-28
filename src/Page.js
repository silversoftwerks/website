import React from "react";
export const Page = ({ children, width = "100%", height = "100%", ...rest }) => (<section style={{ width, height, ...rest }}>{children}</section>);
