export const data = {
    todos:[
        { 
           id : 1,
           name : 'A faire au travail',
           content : "envoyer mail important",
           status : 'WAITING',
           userId: 1
        },
        { 
            id : 2,
            name : 'Week-end',
            content : "Entamer la partie de Snowrunner",
            status : 'IN_PROGRESS',
            userId: 2
         },
         { 
            id : 3,
            name : 'Course à faire',
            content : "Course pour la semaine avec un gateau",
            status : 'CANCELED',
            userId: 1
         },
         { 
            id : 4,
            name : 'Enfant',
            content : "Aller au cinéma",
            status : 'DONE',
            userId: 2
         },
    ],

    users: [
       {
          id: 1,
          name: 'Eric',
          email: 'ericmail@mail.com'
       },
       {
          id: 2,
          name: 'Sandra',
          email: "sandramail@mail.com"
       },
    ]
};