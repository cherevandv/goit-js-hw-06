"use strict";

import users from "./users.js";

const calculateTotalBalance = (users) => {
  return users.reduce((total, number) => total + number.balance, 0);
};

console.log(calculateTotalBalance(users));
