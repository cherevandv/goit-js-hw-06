"use strict";

import users from "./users.js";

const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => (user.age > min) & (user.age < max));
};


console.group('Task-06');
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));
console.groupEnd();