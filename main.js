const createRangeArray = (n) => {
  let rangeArray = [...Array(n).keys()]; 
  return rangeArray;              //WORKING FUNCTION TO CREATE A RANGE ARRAY BASED ON INPUT
};
  
const isItPrime = (num) => {
  let isPrime = true;
  if (num <= 1) {
    isPrime = false;  
    };                            //WORKING FUNCTION TO INDETIFY PRIMES
  for (let i = 2; i < num; i++) {                  
    if (num % i === 0) {
      isPrime = false;
      break;
      };
    }; return isPrime;
  };

const createPrimeArray = (n) => {
  let primeArray = [];
  for (let i = 0; i <= n; i++) {  //WORKING TO CREATE ARRAY OF PRIME NUMBERS
  if (isItPrime(i) === true) {
    primeArray.push(i);}
  } return primeArray;
};

const arrayProducts = (array) => {
  let allProducts = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {      //WORKING CORRECTLY TO GIVE
      allProducts.push(array[i] * array[j]);      //A UNIQUE ARRAY OF NUMBERS FROM
    }                                             //PRODUCTS OF THE INTERNAL ITEMS
  } allProducts = [...new Set(allProducts)];      //aka: semiprime in this context
  return allProducts;
};

const compare = (a, b) => {
  let filteredArray = a.filter(element => b.includes(element));  //COMPARING FOR RESULTS
    return filteredArray;
};
let results = '';
const semiPrimeCount = (n) => {
  let rangeArray = createRangeArray(n);             //FIRST I CREATE THE RANGE ARRAY lines: 3-6
  let primeArray = createPrimeArray(n);         //THEN CREATE A PRIME ARRAY lines: 8-19 + 21-26
  let allProducts = arrayProducts(primeArray) //THEN CREATE AN ARRAY OF SEMIPRIMES lines: 29-37
  let filteredArray = compare(rangeArray, allProducts); //THEN COMPARE THE RESULTS lines: 39-42
  let results = filteredArray.length;
  return results;
};
console.log(semiPrimeCount(10));
