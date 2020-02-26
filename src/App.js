// Node modules import
import React from "react";
import Router from "~/router";
import { IntlProvider } from "react-intl";

// Style imports
import GlobalStyle from "~/styles/GlobalStyle";

// Utils imports
import constants from "~/utils/constants";

// Context imports
import AppContext from "~/store/AppContext";
import store from "~/store";

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
