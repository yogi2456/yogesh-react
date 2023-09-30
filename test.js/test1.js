// //push
// const Animals = ['cat', 'dog', 'cow'];

// const count = Animals.push('rat');
// console.log(count)
// console.log(Animals)

// Animals.push('donkey', 'elephant', 'lion', 'tiger')
// console.log(Animals)

// //pop
// const plants = ['cauliflower', 'cabbage', 'tomato', 'kale', 'onion'];

// console.log(plants.pop())
// console.log(plants)

// plants.pop();
// console.log(plants)

// //shift
// const array = ['1', '2', '3', '4'];
// const firstElement = array.shift();
// console.log(array)

// console.log(firstElement)

// const firstElement1 = array.shift();
// console.log(array)

// console.log(firstElement1)

// //unshift
// const array1 = ['1', '2', '3', '4', '5', '6','7'];
// console.log(array1.unshift())

// console.log(array1)

// //reduce
// const array2 = [1, 2, 3, 4, 5, 6,];

// const initialvalue =0;
// const sumwithinitial = array2.reduce((accumulator, currentvalue) => accumulator + currentvalue, initialvalue);

// console.log(sumwithinitial)

// //map
// const array3 = [1, 2, 3, 4, 5,];

// const map1 = array3.map((x) => x * 2);

// console.log(map1)

// //foreach
// const array4 = ['a', 'b', 'c', 'd'];

//array4.forEach((element) => console.log(element)); 

// function Person (name, age, number) {
//     console.log(name, age, number)
// }

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and my age is ${this.age} years old.`)
    }
    myAge() {
        console.log(`my age is ${this.age} years old.`)
    }
}

const yogesh = new Person('yogesh', 30)
yogesh.sayHello();
yogesh.myAge();