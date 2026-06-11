// 1
const character = {
  name: "Shadow Knight",
  level: 4,
  health: 100,
  weapon: "Dark Sword"
};

character.level = 5;
character.isAlive = true;
character.health = character.health - 20;

console.log(character)

// 2
const player = {
  username: "Neo",
  level: 12,
  weapon: "Plasma Gun",
  rank: "Diamond"
};

function describePlayer(user) {
  return `Player ${user.username} is level ${user.level} and uses ${user.weapon}.`
}

console.log(describePlayer(player));

// 3
const inventory = [
  { name: "Health Potion", price: 10, quantity: 5 },
  { name: "Mana Potion", price: 15, quantity: 3 },
  { name: "Iron Sword", price: 100, quantity: 1 },
  { name: "Shield", price: 80, quantity: 1 }
];

const invTotalPrice = inventory.reduce(((total, item) => total + (item.price * item.quantity)), 0);

console.log(invTotalPrice);

// 4
const items = [
  { name: "Wooden Stick", rarity: "common" },
  { name: "Dragon Blade", rarity: "legendary" },
  { name: "Silver Bow", rarity: "rare" },
  { name: "Old Boots", rarity: "common" },
  { name: "Phoenix Ring", rarity: "legendary" }
];

const bestItems = items.filter((thing) => thing.rarity === "rare" || thing.rarity === "legendary").map((thing) => thing.name)
console.log(bestItems)

// 5
const movies = [
  { title: "Inception", rating: 8.8, genres: ["Sci-Fi", "Thriller"] },
  { title: "Interstellar", rating: 8.6, genres: ["Sci-Fi", "Drama"] },
  { title: "The Room", rating: 3.7, genres: ["Drama"] },
  { title: "Blade Runner 2049", rating: 8.0, genres: ["Sci-Fi", "Mystery"] },
  { title: "Fast X", rating: 5.8, genres: ["Action"] }
];

const sortedMovies = movies.filter((movie) => movie.rating >= 8 || movie.genres == "Sci-Fi").sort((a, b) => a + b).map((movie) => movie.title)
console.log(sortedMovies)

// 6
const menu = [
  { name: "Burger", price: 20, category: "Fast Food" },
  { name: "Caesar Salad", price: 18, category: "Salad" },
  { name: "Pizza", price: 30, category: "Fast Food" },
  { name: "Soup", price: 12, category: "Starter" }
];

const menuTotalPrice = menu.map(item => ({
  ...item,
  discountedPrice: item.price - (item.price * 0.2),
}) )

console.log(menuTotalPrice)


// *****************************************

const gadgets = [
  { title: "Smartphone", price: 1500, inStock: true },
  { title: "Laptop", price: 3000, inStock: false },
  { title: "Wireless Headphones", price: 250, inStock: true },
  { title: "Smart Watch", price: 600, inStock: false }
];

const newConditions = gadgets.map(item => ({
  ...item,
  freeDelivery: item.inStock
}) )

console.log(newConditions)

// *****************************************

// 7
// const menu = [
//   { name: "Burger", price: 20, category: "Fast Food" },
//   { name: "Pizza", price: 30, category: "Fast Food" },
//   { name: "Caesar Salad", price: 18, category: "Salad" },
//   { name: "Tomato Soup", price: 12, category: "Starter" },
//   { name: "Greek Salad", price: 16, category: "Salad" }
// ];

