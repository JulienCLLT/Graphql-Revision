
import { GraphQLServer } from "graphql-yoga";
import { Query } from "./resolver/query.js";
import { Todo } from "./resolver/todo.js";
import { User } from "./resolver/user.js";
import { data } from "./db/database.js";
import { Mutation } from "./resolver/mutation.js"

const resolvers = { 
  Query,
  Todo,
  User,
  Mutation
};

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers,
  context: {
    data //le context permet de simplifier l'appel à la bdd en evité de l'import dans chaque resolvers
  }
});

server.start(() =>
  console.log(`The server is running on http://localhost:4000`)
);
