const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryTable = document.querySelector('.gallery');
const gallery = images.map(({ alt, url }) =>
  `<li><img src="${url}" alt="${alt}"></img></li>`
).join("");
galleryTable.insertAdjacentHTML("beforeend", gallery);





// const takeImageList = images.reduce((acc, option) => {
//   const galleryItem = document.createElement("li");

//   const galleryImage = document.createElement("img");     
//   galleryImage.src = option.url;                           
//   galleryImage.alt = option.alt;
//   const arrImage = [];
//   arrImage.push(galleryImage);
//   galleryItem.append(...arrImage);
//   acc.push(galleryItem)
//   return acc;
// }, []);

// galleryTable.append(...takeImageList);


  
 









