console.clear()
/* TS Algorithms Lab */

/* --- Problem #1 - variable types --- */
// swap the values of these two variables and console.log() the result
// example outputs:
// console.log(numberString) => '7'
// console.log(realNumber) => 32

let numberString: string = '42';
let realNumber: number = 7;

[numberString, realNumber] = [String(realNumber), Number(numberString)]

// console.log(numberString)
// console.log(realNumber)

// todo: swap the values in the varaibles and log the results

/* --- Problem #2 - function and mixed array type --- */
// 1. create an array type that is a mix of strings of numbers and actual numbers
// ex: [10, '34', 3, '17']

let mixedArray: Array< string | number > = [10, '34', 3, '17']
// console.log(mixedArray)

// 2. write a function that accepts an array as a parameter, loops over it and converts all the 
// strings to numbers. the function should return a new array of only numbers
// ex: stringToNum([10, '34', 3, '17']) => [10, 34, 3, 17]

function stringToNum(arr: Array< string | number >): Array<number> {
    let newArr = arr.map(item => Number(item))
    return newArr
}

let morphedArr = stringToNum(mixedArray)
// console.log(morphedArr)

// Todo write the mixed array of strings and numbers

// Todo write a function to convert the mixed array to an array of only numbers

/* --- Problem #3 - Tuple Type --- */
// 1. Create a tuple type named 'cityCoordinate' that has three elements: city name, latitute, and longitude

type cityCoordinate = [string, number, number]

// 2. Create some cities with lat/lon data and pass them into printCityData;
// uncomment the function to test your solution

let seattle: cityCoordinate = ['Seattle', 10, 20]

// Todo - create the type definition, and some cities

// 🚨 uncomment this function to test your solution 🚨
function printCityData(city: cityCoordinate): void {
    console.log(`${city[0]} is at Lat: ${city[1]}, Long: ${city[2]}`);
}

// printCityData(seattle);

/* --- Problem #4 - Interfaces and Union Types --- */
// Given the following interfaces and type declarations...
// 1. Create a union type that is the union of the Square, Rectangle, and Circle interfaces
// 2. Write the area function that: 1. Only takes in your union type as an input 2. Returns the area of the shape
// oh no! math!
// the area of a square is found by multipling the width by the width
// the area of a rectangle is found by multipling the width by the height
// the area of a circle is found by multiplying pi by the radius squared

interface Square {
    kind: 'square',
    width: number,
}
interface Rectangle {
    kind: 'rectangle',
    width: number,
    height: number,
}
interface Circle {
    kind: 'circle',
    radius: number,
}

// Todo - Create union type here
type union = (Square | Rectangle | Circle)

// Todo - write area function here
function area(shape: union): number {
    switch(shape.kind) {
        case 'square':
            return Math.pow(shape.width, 2)
            break
        case 'rectangle':
            return shape.width * shape.height
            break
        case 'circle':
            return Math.PI * Math.pow(shape.radius, 2)
            break
        default:
            return 0
    }
}

let sqr: Square = {
    kind: 'square',
    width: 10
}

let rect: Rectangle = {
    kind: 'rectangle',
    width: 10,
    height: 15
}

let circ: Circle = {
    kind: 'circle',
    radius: 10
}

console.log(area(sqr))
console.log(area(rect))
console.log(area(circ))