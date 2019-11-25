//  5. Maximum of Three Numbers

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

// console.log(maxOfThree(6, 9, 1));
// => 9

const maxOfThree = (num1, num2, num3) =>{
let x = ""
if(num1 >= num2 && num1 >= num3) {
x = num1;
} else if(num2 >= num1 && num2 >= num3) {
x = num2;
} else if(num3 >= num1 && num3 >= num2) {
x = num3;
}
return x;
}
{
console.log(maxOfThree(6, 9, 1));

}

// ============================================================

//  6. Print Longest Word

// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
// => "Peanutbutter"

const printLongestWord = (word) =>{
let x = word[0]
word.forEach(value  => {
if(value.length > x.length){
x = value;
};
});	
return x;
}
{
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
}

// ============================================================

//  7. Transmogrify the Numbers

// Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

// console.log(transmogrify(5, 3, 2));
// => 225

const transmogrify = (num1, num2, num3) =>{
return ((num1*num2)**num3);
}

console.log(transmogrify(5, 3, 2));