import React from "react";
import { Route } from "react-router-dom";
import { routes } from "./index";
import { PitchPage } from "../pages/PitchPage";
export const PitchRoute = () => (
  <Route exact path={routes.pitch}>
    <PitchPage />
  </Route>
);
