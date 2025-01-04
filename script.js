console.log('Hello!');
// 1. Given an array of strings, use .map() to extract the first three characters of each string.

const words = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const extract = words.map((word) => word.slice(0, 3));
console.log(extract);

// Output: ['app', 'ban', 'kiw', 'ora', 'gra']

// 2. Given an array of numbers, use `.map()` to calculate the cube of each number.

const nums = [1, 2, 3, 4, 5];
const cubeArr = nums.map((num) => num * num * num);
console.log(cubeArr);
// Output: [1, 8, 27, 64, 125]

// 3. Given an array of strings, use .map() to extract the characters of each string removing the first two characters.

const fruitsArray = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const newArr = fruitsArray.map((fruit) => fruit.slice(2));
console.log(newArr);
// Output: [ 'ple', 'nana', 'wi', 'ange', 'ape' ]

// 4. Given an array of salaries, use .map() and return salaries with 10% bonus added.

const salaries = [5000, 7500, 12000, 3000, 9000];
const tenPercent = salaries.map((sal) => (sal * 10) / 100 + sal);
console.log(tenPercent);
// Output: [ 5500, 8250, 13200, 3300, 9900 ]

// 5. Given an array of names, use .map() to create an array of greetings by adding "Hello, " before each name.

const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];
const greetNames = names.map((name) => 'Hello, ' + name);
console.log(greetNames);
// Output: [ 'Hello, Alice', 'Hello, Bob', 'Hello, Charlie', 'Hello, David', 'Hello, Eva' ]

// 6. Given an array of sentences, use .map() to find the length of each sentence.

const sentences = [
  'Hello, how are you?',
  'JavaScript is fun!',
  'Arrays are versatile.',
];
const findLength = sentences.map((sentence) => sentence.length);
console.log(findLength);
// Output: [ 19, 18, 21 ]

// 7. Given an array of temperatures in Celsius, use map() to convert each temperature to Fahrenheit.

const temperaturesCelsius = [0, 20, 37, -5, 10];
const celTemp = temperaturesCelsius.map((temp) =>
  (temp * (9 / 5) + 32).toFixed(2)
);
console.log(celTemp);
// Output: [ 32, 68, 98.6, 23, 50 ]

// 8. Given an array of prices, use .map() to apply and return 10% discounted price.

const prices = [50, 75, 120, 30, 90];
const discount10 = prices.map((price) => price - (price * 10) / 100);
console.log(discount10);
// Output: [ 45, 67.5, 108, 27, 81 ]

// 9. Given an array of decimal numbers, use `.map()` to fix each number to two decimal points.

const decimalNumbers = [50.2456, 750.5677, 12.56705, 300.5065, 9.23406789];
const fixDecimal = decimalNumbers.map((dno) => dno.toFixed(2));
console.log(fixDecimal);
// Output: [ '50.25', '750.57', '12.57', '300.51', '9.23' ]

// 10. Given an array of names, use .map() to create an array with length of each name added to the name.

const namesArray = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];
const addLength = namesArray.map((name) => name + name.length);
console.log(addLength);
// Output:[ 'Alice5', 'Bob3', 'Charlie7', 'David5', 'Eva3' ]
