'use strict';

import users from './users.js';

const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.group('Task-04');
console.log(getInactiveUsers(users)); 
console.groupEnd();