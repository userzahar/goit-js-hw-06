const listCategories = document.querySelector('ul#categories');

const listCategoriesItem = listCategories.querySelectorAll('li.item');

const numberCategories = listCategoriesItem.length;

console.log(`Number of categories: ${numberCategories}`); 

for (let i = 0; i < listCategoriesItem.length; i += 1) {
    const categoriesName = listCategoriesItem[i].querySelector("h2").textContent;
    console.log(`Category: ${categoriesName}`);
    
    const categoryNumberEl = listCategoriesItem[i].querySelectorAll("li").length;
    console.log(`Elements: ${categoryNumberEl}`)
}





