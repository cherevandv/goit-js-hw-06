"use strict";

import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);
};

console.group('Task-08');
console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));
console.groupEnd();