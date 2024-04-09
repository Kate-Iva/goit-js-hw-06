'use strict';
class StringBuilder {
#value;

constructor(value) {
    this.#value = value;
  }

    getValue(){
return this.#value;
    }

    padEnd(str){
return this.#value += str;
    }

    padStart(str){
return this.#value = str + this.#value;
    }

    padBoth(str){
return this.#value = str + this.#value + str;
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

for (let i = 0; i <= 20; i += 5) {
    console.log(i);
  }
  for (let i = 20; i >= 0; i -= 5) {
    console.log(i);
  }
  
  function findNumberFromFive(max, target) {
	console.log("Log in the body of the function before the cycle");

	for (let i = 5; i <= max; i += 1) {
	    console.log("Current counter value i:", i);
	
	    if (i === target) {
	      console.log(`Found the number ${target}, we make a return, interrupting the loop and function`);
				return i;
	    }
	  }

  // Цей console.log не виконується
  console.log("Log in body function after cycle");
}

const result = findNumberFromFive(10, 6);
console.log("Log after exiting function");
console.log(`Result of function execution ${result}`);

function sum(a, b) {
    console.log(arguments);
    return a + b;
  }
  
  sum(2, 5);

  function multiply() {
    let total = 1;
  
    for (const arg of arguments) {
      total *= arg;
    }
  
    return total;
  }
  
  console.log(multiply(1, 2, 3)); //  6
  console.log(multiply(1, 2, 3, 4)); //  24
  console.log(multiply(1, 2, 3, 4, 5)); //  120
  
  const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  };
  
  const bookTitle = book.title;
  console.log(bookTitle); // "The Last Kingdom"
  
  const bookGenres = book.genres;
  console.log(bookGenres); // ["historical prose", "adventure"]
  
  const bookPrice = book.price;
  console.log(bookPrice); // undefined
  




