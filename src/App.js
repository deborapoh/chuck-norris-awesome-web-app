// Node modules import
import React from "react";
import Router from "~/router";
import AppContext from "~/store/AppContext";
import store from "~/store";
import GlobalStyle from "~/styles/GlobalStyle";

const App = () => (
  <>
    <GlobalStyle />
    <AppContext.Provider value={store()}>
      <Router />
    </AppContext.Provider>
  </>
);

export default App;
