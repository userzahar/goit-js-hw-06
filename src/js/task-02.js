const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngridients = document.querySelector('ul#ingredients');

for (let i = 0; i < ingredients.length; i += 1) {
  const element = document.createElement("li");
  element.textContent = ingredients[i];
  console.log("🚀 js:17 ", element)
  listIngridients.append(element)
}

