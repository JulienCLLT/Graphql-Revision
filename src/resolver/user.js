export const User = {
    todos: ({id}, args, {data}, info) => {
      return data.todos.filter((todo)=> todo.userId === id);
    }
  };