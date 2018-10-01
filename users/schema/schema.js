const graphQL = require("graphql");
const _ = require("lodash");

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphQL;

const users = [
  { id: "1", firstName: "Bill", age: 20 },
  { id: "2", firstName: "Clinton", age: 24 },
  { id: "3", firstName: "Stanley", age: 28 }
];

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return _.find(users, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
