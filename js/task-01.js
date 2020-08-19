'use strict';

import users from './users.js';

const getUserNames = users => users.map(user => user.name);
  
  console.group('Task-01');
  console.log(getUserNames(users));
  console.groupEnd();