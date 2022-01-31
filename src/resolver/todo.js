

export const Todo = {
    user: ({userId}, args ,{data}, info) => {
      const userArray =  data.users.find((user)=> user.id === userId);
      
      return userArray;
    }
  };
  