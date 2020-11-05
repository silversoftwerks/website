import HomePage from "../pages/HomePage";
import React from "react";
import { Route } from "react-router-dom";
import { ContactPage } from "../pages/ContactPage";
import { routes } from "./index";

export function ContactRoute({}) {
  return (
    <Route exact path={routes.contact}>
      <ContactPage />
    </Route>
  );
}
