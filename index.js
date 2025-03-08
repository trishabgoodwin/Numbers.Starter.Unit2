// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    this.data = data;
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }

  count(data) {
    return this.data.length;
  }

  printNumbers() {
    //print the numbers in data
    console.log(this.data);
    for(const num of this.data){
      console.log(num)
    }
  }

  odds() {
    //return the odd numbers in data
    return this.data.filter(number => number % 2 !== 0);
  }

  evens() {
    //return the even numbers in data
    return this.data.filter(number => number % 2 === 0);
  }

  sum(n1) {
    //return the sum of the numbers
    let sum = 0
    for (let i = 0; i < this.data.length; i++) {
      sum += this.data[i];
    } 
    return sum;
   }
  

  product() {
    //return the product of the numbers
    return this.data.reduce((product, number) => product * number, 1);
  }

  greaterThan(target) {
    //return the numbers greater than the target
  }

  howMany(target) {
    //return the count of a given number
  }
}

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(`Odds:`)
console.log(n1.odds()); //returns odd numbers
console.log(`Evens:`)
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
