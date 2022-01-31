const { GraphQLServer } = require("graphql-yoga");
const resolvers = require("./resolver/resolvers");
const database = require('./db/database.js');


const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers,
  context: {
    database //le context permet de simlifier l'appel à la bdd en evité de l'import dans chaque resolvers
  }
});

server.start(() =>
  console.log(`The server is running on http://localhost:4000`)
);
