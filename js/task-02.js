'use strict';

import users from './users.js';

const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color);
  };
  
  console.group('Task-02');
  console.log(getUsersWithEyeColor(users, 'blue'));
  console.groupEnd();