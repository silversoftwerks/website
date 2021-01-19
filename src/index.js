import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import { HomeRoute } from "./routes/HomeRoute";
import { ContactRoute } from "./routes/ContactRoute";
import { PitchRoute } from "./routes/PitchRoute";
import { routes } from "./routes/index";
import { BusinessCardRoute } from "./routes/BusinessCardRoute";
import ReactPixel from "react-facebook-pixel";

const advancedMatching = {
  em: "{user-email}", // Values will be hashed
  fn: "{user-first-name}", // automatically by the pixel
  ln: "{user-last-name}",
}; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
};
ReactPixel.init("212636653840642", advancedMatching, options);

ReactPixel.pageView(); // For tracking page view
// ReactPixel.track(event, data); // For tracking default events. More info about standard events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#standard-events
// ReactPixel.trackSingle("PixelId", event, data); // For tracking default events.
// ReactPixel.trackCustom(event, data); // For tracking custom events. More info about custom events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#custom-events
// ReactPixel.trackSingleCustom("PixelId", event, data); // F
const App = () => (
  <BrowserRouter>
    <HomeRoute />
    <ContactRoute />
    <PitchRoute />
    <BusinessCardRoute />
    <Redirect exact from="/" to={routes.home} />
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("react-root"));
