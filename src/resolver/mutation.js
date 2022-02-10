export const Mutation = {

    addTodo: (parent, {TodoAddInput} ,{data}, info) => {
        console.log(TodoAddInput);
        if (!existInArray(data.users, 'id', TodoAddInput.userId )) {
            throw new Error(`l'utilisateur existe pas ${TodoAddInput.userId}`);
        } else {
           const newTodo = {
               id: data.todos[data.todos.length - 1].id + 1 ,
               status : 'WAITING',
               name: TodoAddInput.name,
               content: TodoAddInput.content ,
               userId : TodoAddInput.userId
               //possibilité de Spread pour une un code plus court mais peu etre moins comprehensible
               // ...TodoAddInput
            }; 
            data.todos.push(newTodo);
            return newTodo ;
        }
    },

    updateTodo : (parent, {id, updateTodoInput} ,{data}, info) => {
        if (updateTodoInput.userId && !existInArray(data.users, 'id', updateTodoInput.userId )) {
            throw new Error(`la user ${updateTodoInput.userId} n'existe pas`)
        } else {
            const todo = data.todos.find((todoitem) => todoitem.id == id);
            console.log(todo);
                if (!todo) {
                    throw new Error(`la todo ${id} n'existe pas`)
                } else {
                    for (const key in updateTodoInput) {
                        todo[key] =updateTodoInput[key];
                    }
                }
                return todo;
        }

    },

    deleteTodo : (parent, { id } ,{data}, info) => {
        const todoIndex = data.todos.findIndex((todo)=> todo.id === id );
        if (todoIndex === -1) {
            throw new Error(`la todo n'esxiste pas`);
        } else {
                const [todo] = data.todos.splice(todoIndex, 1);
                return todo
        }
    },

    
};

function existInArray(array, attribut, value){
        return array.some((element)=> element[attribut] == value)
    }