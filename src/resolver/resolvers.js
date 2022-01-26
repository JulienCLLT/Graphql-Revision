const  database  = require('../db/database.js');

const resolversQuery = {
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

    getUserId (parent, {id}, context, info) {
      const user = database.users.find((user)=> user.id === id);
      return user;
    },
},



Todo :{
  user: ({userId}, args ,context, info) => {
    const userArray =  database.users.find((user)=> user.id === userId);
    
    return userArray;
  }
},

User: {
  todos: ({id}, args, context, info) => {
    return database.todos.filter((todo)=> todo.userId === id);
  }
},

};



module.exports =resolversQuery;
