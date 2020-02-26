// Node modules import
import React from "react";
import Router from "~/router";
import { IntlProvider } from "react-intl";
import AppContext from "~/store/AppContext";
import store from "~/store";
import GlobalStyle from "~/styles/GlobalStyle";
import constants from "~/utils/constants";

const App = () => (
  <IntlProvider
    // locale={constants.LANGUAGE}
    // messages={constants.MESSAGES_LANGUAGES[constants.LANGUAGE]}
    locale="en"
    messages={constants.MESSAGES_LANGUAGES["en"]}
  >
    <GlobalStyle />
    <AppContext.Provider value={store()}>
      <Router />
    </AppContext.Provider>
  </IntlProvider>
);

export default App;
