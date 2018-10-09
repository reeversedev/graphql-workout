import React from "react";
import ReactDOM from "react-dom";

import { HashRouter, Route, Switch } from "react-router-dom";

import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";

import App from "./Components/App";
import SongList from "./Components/SongList";

const client = new ApolloClient({});

const Root = () => {
  return (
    <HashRouter>
      <ApolloProvider client={client}>
        <Switch>
          {/* <Route path="/" component={App} /> */}
          <Route path="/" component={SongList} />
        </Switch>
      </ApolloProvider>
    </HashRouter>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
