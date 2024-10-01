const user = { id: 1, name: "Siam Hawlader", job: "Student" };
// console.log(user);

/**
 * Way to send/get data
 * 1. Plain Text
 * 2. XLM
 * 3. Javascript Object Notation     (JSON)
 */

// const stringify = JSON.stringify(user);
// console.log(stringify);

const shop = {
  owner: "Alia",
  address: {
    street: "Kochukhet voot er goli",
    city: "ranbir",
    country: "BD",
  },

  products: ["laptop", "mic", "monitor", "keyboard"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};

console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
