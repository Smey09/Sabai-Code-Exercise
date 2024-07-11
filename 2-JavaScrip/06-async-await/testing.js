// Create a mock database:
// [{id: 1, name: “sok”}, {id: 2, name; “sao”}, {id: 3, name: “pisey”}]

// 1
const mockDatabase = [
  { id: 1, name: "Sok" },
  { id: 2, name: "Sao" },
  { id: 3, name: "Pisey" },
];

// 2
function getUserInfoById(id, callback) {
  setTimeout(() => {
    const findUsers = mockDatabase.find((user) => user.id === id);
    if (findUsers) {
      callback(null, findUsers);
    } else {
      callback(new Error("User Not Found"));
    }
    return findUsers;
  }, 2000);
}


// // 3
// function getUserName(user, callback) {
//   setTimeout(() => {
//     const convertName = { ...user, name: user.name.toUpperCase() };
//     callback(null, convertName);
//   }, 1500);
// }

// function consoler(userId) {
//   getUserInfoById(userId, (err, user) => {
//     if (err) {
//       console.error("Error : ", err.message);
//     } else {
//       console.log(user);
//       getUserName(user, (err, newName) => {
//         if (err) {
//           console.error("Error : ", err.message);
//         } else {
//           console.log(newName);
//         }
//       });
//     }
//   });
// }

// consoler(2);
