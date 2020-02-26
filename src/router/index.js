// Node modules imports
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

// Style imports
import GlobalStyles from "~/styles/GlobalStyle";

const Router = () => {
  const [nav, setNav] = useState(null);

  useEffect(() => {
    updateNav();
  }, []);

  const updateNav = async () => {
    let routesList = null;
    routesList = require("./routes").routes;

    const NAVIGATIONS = await routesList();
    setNav(NAVIGATIONS);
  };

  return (
    <>
      <GlobalStyles />
      <Switch>
        {nav &&
          nav.map(({ name, path, loader: { default: Component } }) => (
            <Route
              key={name}
              exact
              path={path}
              render={props => <Component {...props} />}
            />
          ))}
      </Switch>
    </>
  );
};

export default Router;
