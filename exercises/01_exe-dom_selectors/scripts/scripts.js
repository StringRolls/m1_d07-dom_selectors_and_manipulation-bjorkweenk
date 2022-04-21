// 1: Get the node with the  main title

console.log(document.querySelector("#container>h1"));
// => <h1>Fruits and veggies</h1>
// ----------------------------------------------

// 2: Get the main title text
console.log(document.querySelector("h1").innerHTML)

// => Fruits and veggies
// ----------------------------------------------

// 3: Get all the nodes with the fruit items
console.log(document.getElementsByClassName("fruit-item"));

// => HTMLCollection(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------

// 4: Get all the veggie items - the text

console.log(document.querySelectorAll(".veggie-item"));

// Broccoli Celery Potato Spinach
// ----------------------------------------------

// 5: Get the subtitle in the veggies section

console.log(document.getElementsByClassName("veggies"));

// => Veggies
// ----------------------------------------------

// 6: Add an ID 'fruit-title' to the first subtitle (in the Fruit section)



// => fruit-title
// ----------------------------------------------

// 7: Add a class 'best-fruit' to the 1st and the 3rd fruit

// ... your code here


// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// 8: Remove class 'veggies' from the unordered list of veggies

// ... your code here

// => <ul>...</ul>
// ----------------------------------------------

// 9: Add a class 'veggie-love' to all the veggies

// ... your code here

// => <li class="veggie-item veggie-love">Broccoli</li> ...
// ----------------------------------------------

// 10: Remove class 'veggie-item' from 'spinach'

// ... your code here

// => ... <li class="veggie-love">Spinach</li>