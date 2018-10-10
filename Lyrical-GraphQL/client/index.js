import React from "react";
import ReactDOM from "react-dom";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";

import App from "./Components/App";
import SongList from "./Components/SongList";
import SongCreate from "./Components/SongCreate";

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Route exact path="/" component={SongList} />
          <Route path="/song/new" component={SongCreate} />
        </div>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
