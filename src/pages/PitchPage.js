import React from "react";

import { PitchSection } from "../components/sections/PitchSection";
import { PageTemplate } from "./PageTemplate";
import { Header } from "../components/Header";

export const PitchPage = () => (
  <PageTemplate header={<Header />} content={<PitchSection />} />
);
