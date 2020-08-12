"use strict";

import users from "./users.js";

const getSortedUniqueSkills = users => {
    let arraySkills = [];
    users.forEach((user) => {
        user.skills.forEach((item) =>{
           if(!arraySkills.includes(item)){
            arraySkills.push(item);
           }; 
        });
        
    });
    return arraySkills.sort();
  };
  
  console.group('Task-10');
  console.log(getSortedUniqueSkills(users));
  console.groupEnd();