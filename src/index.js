import React from "react";
import ReactDOM from "react-dom";
import Grid from "@SS/design-system/src/components/layout/Grid.jsx";
import Column from "@SS/design-system/src/components/layout/Column.jsx";
import Box from "@SS/design-system/src/components/layout/Box";
import Text from "@SS/design-system/src/components/typography/Text.jsx";
import Page from "@SS/design-system/src/components/layout/Page";
import HomePage from './pages/HomePage';
const App = () => (
  <Page>
    <Grid columns={2}>
      <Column>
        <Box justifyContent="center" alignItems="center">
          <Text>Hello World</Text>
        </Box>
      </Column>
      <Column>
        <Box justifyContent="center" alignItems="center">
          <Text>GoodBye World</Text>
        </Box>
      </Column>
    </Grid>
  </Page>
);

ReactDOM.render(<HomePage />, document.getElementById("react-root"));
