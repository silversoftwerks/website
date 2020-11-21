import React from "react";
import { Route } from "react-router-dom";
import { routes } from "./index";
import { BusinessCardPage } from "../pages/BusinessCardPage";
export const BusinessCardRoute = () => (
  <Route exact path={routes.businessCard}>
    <BusinessCardPage />
  </Route>
);
