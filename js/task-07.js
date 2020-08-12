"use strict";

import users from "./users.js";

const calculateTotalBalance = (users) => {
  return users.reduce((total, number) => total + number.balance, 0);
};

console.group('Task-07');
console.log(calculateTotalBalance(users));
console.groupEnd();