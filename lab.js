var _a;
console.clear();
/* TS Algorithms Lab */
/* --- Problem #1 - variable types --- */
// swap the values of these two variables and console.log() the result
// example outputs:
// console.log(numberString) => '7'
// console.log(realNumber) => 32
var numberString = '42';
var realNumber = 7;
_a = [String(realNumber), Number(numberString)], numberString = _a[0], realNumber = _a[1];
// console.log(numberString)
// console.log(realNumber)
// todo: swap the values in the varaibles and log the results
/* --- Problem #2 - function and mixed array type --- */
// 1. create an array type that is a mix of strings of numbers and actual numbers
// ex: [10, '34', 3, '17']
var mixedArray = [10, '34', 3, '17'];
// console.log(mixedArray)
// 2. write a function that accepts an array as a parameter, loops over it and converts all the 
// strings to numbers. the function should return a new array of only numbers
// ex: stringToNum([10, '34', 3, '17']) => [10, 34, 3, 17]
function stringToNum(arr) {
    var newArr = arr.map(function (item) { return Number(item); });
    return newArr;
}
var morphedArr = stringToNum(mixedArray);
// 2. Create some cities with lat/lon data and pass them into printCityData;
// uncomment the function to test your solution
var seattle = ['Seattle', 10, 20];
// Todo - create the type definition, and some cities
// 🚨 uncomment this function to test your solution 🚨
function printCityData(city) {
    console.log(city[0] + " is at Lat: " + city[1] + ", Long: " + city[2]);
}
// Todo - write area function here
function area(shape) {
    switch (shape.kind) {
        case 'square':
            return Math.pow(shape.width, 2);
            break;
        case 'rectangle':
            return shape.width * shape.height;
            break;
        case 'circle':
            return Math.PI * Math.pow(shape.radius, 2);
            break;
        default:
            return 0;
    }
}
var sqr = {
    kind: 'square',
    width: 10
};
var rect = {
    kind: 'rectangle',
    width: 10,
    height: 15
};
var circ = {
    kind: 'circle',
    radius: 10
};
console.log(area(sqr));
console.log(area(rect));
console.log(area(circ));
