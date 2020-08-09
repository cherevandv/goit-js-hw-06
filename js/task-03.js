'use strict';

import users from './users.js';

const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender===gender).map(user => user.name);

//Вариант 2:
//  let result = [];
//   users.forEach(user => {
//     if(user.gender===gender){
//       result.push(user.name);
//     }
//   });
//   return result;  
};
    
  
  console.log(getUsersWithGender(users, 'male')); 