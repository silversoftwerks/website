import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import { HomeRoute } from "./routes/HomeRoute";
import { ContactRoute } from "./routes/ContactRoute";
import { PitchRoute } from "./routes/PitchRoute";
import { routes } from "./routes/index";
const App = () => (
  <BrowserRouter>
    <Redirect exact from="/" to={routes.home} />
    <HomeRoute />
    <ContactRoute />
    <PitchRoute />
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("react-root"));
