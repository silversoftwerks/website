import HomePage from "../pages/HomePage";
import React from "react";
import { Route } from "react-router-dom";
import { routes } from "./index";

export function HomeRoute({}) {
  return (
    <Route exact path={routes.home}>
      <HomePage />
    </Route>
  );
}
