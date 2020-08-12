"use strict";

import users from "./users.js";

const getNamesSortedByFriendsCount = (users) => {
  return [...users]
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .map((user) => user.name);
};

console.group('Task-09');
console.log(getNamesSortedByFriendsCount(users));
console.groupEnd();