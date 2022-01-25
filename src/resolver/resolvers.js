const  database  = require('../db/database.js');

const resolvers = {
  Query: {
    hello: (_, {name}) => `Hello ${name || "World"}`,

    getTodos: (parent, args ,context, info) => {
      // console.log(parent);
      // console.log(args);
      // console.log(context);
      // console.log(info);

      return database.todos
    },

    getTodoById (parent, {id} ,context, info)  {
    const todo = database.todos.find((todo)=>todo.id === id);
      if (!todo) {
        throw new Error(`la todo d'id ${id} n'éxiste pas.`);
      };
      return todo;
    },



  
  },

};



module.exports = resolvers;
