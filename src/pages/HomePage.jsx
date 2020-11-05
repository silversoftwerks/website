import React, { useState } from "react";
import { Billboard } from "../components/Logo/Billboard";
import { PageTemplate } from "./PageTemplate";
import { HomeSection } from "../components/sections/HomeSection";
const HomePage = ({ children, ...rest }) => {
  return <PageTemplate header={<Billboard />} content={<HomeSection />} />;
};

export default HomePage;
