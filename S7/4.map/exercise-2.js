

const users = [{id: 1, name: 'Abel'}, 
               {id:2, name: 'Julia'},
               {id:3, name: 'Pedro'}, 
               {id:4, name: 'Amanda'}];

const userList = users.map((user) =>{

//Si el usuario empieza por A
      
    if (user.name.startsWith('A')){

        //El nombre será : Anacleto
        user.name = 'Anacleto';}
        return user.name;
    }

);

console.log(userList);