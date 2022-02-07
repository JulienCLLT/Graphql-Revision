export const Mutation = {
    addTodo: (parent, {name, content, userId} ,{data}, info) => {
        if (!data.users.some((user)=> user.id === userId)) {
            throw new Error(`l'utilisateur existe pas ${userId}`);
        } else {
           const newTodo = {
               id: data.todos[data.todos.length - 1].id + 1 ,
               name,
               content, 
               status : 'WAITING',
               userId
            }; 
            data.todos.push(newTodo);
            return newTodo ;
        }
    }
}