const ingredients = [
  'Potatoes',
  'Mus1`Q aZ|`rooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const div = document.querySelector("#ingredients")

const arr = ingredients.map(item => {
  
  const row = document.createElement("li");
  row.classList.add("item")
  row.textContent = item;

  return row
   });
  
 div.append(...arr)
 
