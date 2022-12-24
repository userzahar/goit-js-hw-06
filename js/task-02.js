const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngridients = document.querySelector('ul#ingredients');
const arrItems = [];
function setItemlistIngridients(ingredients) {
  for (let i = 0; i < ingredients.length; i += 1) {
  const element = document.createElement("li");
  element.textContent = ingredients[i];
  element.classList.add("item");
    arrItems.push(element);
  }
  return listIngridients.append(...arrItems);
}
setItemlistIngridients(ingredients);



