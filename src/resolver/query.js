// const  data  = require('../db/data.js');

export const Query = {
    hello: (_, {name}) => `Hello ${name || "World"}`,

    getTodos: (parent, args ,{data}, info) => {
      // console.log(parent);
      // console.log(args);
      // console.log(context);
      // console.log(info);

      return data.todos
    },

    getTodoById (parent, {id} ,{data}, info)  {
      const todo = data.todos.find((todo)=>todo.id === id);
        if (!todo) {
          throw new Error(`la todo d'id ${id} n'éxiste pas.`);
        };
        return todo;
    },

    getUserId (parent, {id}, {data}, info) {
      const user = data.users.find((user)=> user.id === id);
      return user;
    },
};

