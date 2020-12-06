// sometesting.js
const users = [1, 2, 100, 500];

const f = (user, _, arr) => {
  console.log(arr);
  return user > 50
};


// const allowedUsers = users.filter((user, _, arr) => f(user, _, arr));
const allowedUsers = users.filter(f);


// console.log(users);
console.log(allowedUsers);