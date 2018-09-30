const express = require("express");
const expressGraphQL = require("express-graphql");

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    schema: require("./schema/schema"),
    graphiql: true
  })
);

app.listen("4000", () => {
  console.log("Listening");
});
