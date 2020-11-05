import React from "react";
import { ContactSection } from "../components/sections/ContactSection";
import { Header } from "../components/Header";
import { PageTemplate } from "./PageTemplate";
export const ContactPage = () => (
  <PageTemplate header={<Header />} content={<ContactSection />} />
);
