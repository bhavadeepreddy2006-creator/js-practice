console.log("Hello")

// Funtions:It is a reusble block of code which performs some action 

// Pyhton funtions
// def function_name(paramenters):
//     statements

functnction_name(arguments)

// fucntions example in js

function greet(){
    // code to execute
    console.log("Welcome students");
}

// calling the funtion
greet();
greet();

function greeting(name){
    // console.log("Hello"+name); //outdated
    console.log(`Hello ${name}`); //templete litrals
}
greeting("sai");

function sum(a,b){
    console.log(`sum is ${a+b}`);
}
sum(10,10);

// return: send  backs the value the value to where the function is called

function sub(a,b){
    return a-b;
}
let result = sub(5,10);
console.log(result);

function squ(a){
    return a*a;
    console.log("Finished"); //exectution stops at return
}
let result = squ(5);
console.log(result);

function test(){
    return "Hello";
    console.log("This code will never be executed");
}
let test1 = test();
console.log(test1);

// variable scopes

let college = "CITY";
function showcollege(){
    console.log(college)
}
showcollege()

function showage(){
    let age =  22
    console.log(age)
}
showage()
console.log(college);
console.log(age);

// Hoistion:
// js moves declarations to the top before the execution

var name1;

console.log(name1);

name1 = "js";

//How js sees exactly
var name;
console.log(name1);
name1 = "manoj"

console.log(age1)

let age1 = 23;

//hosting with const

console.log(city)

const city="vij"

greeting1()

function greeting1(){
    console.log("Hello")
}

// Funvtions are completely hoisted

// Function experession:
// store inside a variable

let result = greeting1()

let display = function(){
    console.log("Hello students")
}
// calling the variable 
display()

//hoisting with function expression
test2()

let test2 = function(){
    console.log("Hi")
}

//example 2:

let calculate_area = function(length,width){
    return length*width;

}
console.log(calculate_area(3,5))

//create a function that returns lagest of two numbers
let task1 = function(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}

console.log(task1(10, 20)); // 20

//create a function expression to calculate area of a circle
// Function expression to calculate the area of a circle
let calculateArea = function(radius) {
    return Math.PI * radius * radius;
}

console.log(calculateArea(5));


//arrays:collection of elements 
//arry is the collection of multiple values stored in a single variable
//student = "nani"
//student1,student2,student3...n

//arr["nani",3.34,True]python

//let newArray = [value1,value2,value3]

let arr1 = ["Apple","banana","Custard"]
console.log(arr1)
console.log(arr1[0])
console.log(arr1[1])
console.log(arr1[2])

let numbers = [10,20,30,40]
console.log(numbers[numbers.length-1])

//returns length
console.log(numbers.length)

// Modifying an element
let fruit = ["Apple", "banana", "pine"];

// Modify the first element
fruit[0] = "Mango";
console.log(fruit);

// Traversal using for loop
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

// Traversal using for...of loop
for (let item of fruit) {
    // item stores the current element
    console.log(item);
}

let fruits = ["apple","banana","pine"]
for(i=0;i<fruits.length;i++){
    console.log(fruits[i])
}

for(let fruit of fruits){
    console.log(fruit)
}
let sum1=0
let arr = [10,20,30,40,50]
for (i=0;i<arr.length;i++){
    sum1 += arr[i]
}
console.log(sum1)

let largest = 0
for (i=0;i<arr.length;i++){
    if(arr[i] > largest){
        largest = arr[i]
    }
}
console.log(largest)

//push -- adding element
arr.push(5)
console.log(arr)

arr.push(19,44)
console.log(arr)

//remove the last element
arr.pop()
console.log(arr)

//restoring the removed element
let removed = arr.pop();
console.log(removed)

//remove the first element
arr.shift();
console.log(arr);

let firstremoved = arr.shift();
console.log(firstremoved);

//add element at the beginning
arr.unshift(10);
console.log(arr)

// python --slicing
// arr[start:end:step]
// splice() -- js
// used for -- 1.adding
//                2.del
//                3.replaceing element

// Syntax:
// Array.splice(starIndex,delete_index,new_value)

let veggies = ["carrot","beetrrot", "Brinjal"]
//                  0       1           2
veggies.splice(1,1)//where second (1) will delete the element form index 1 and the splice is also started from 1
console.log(veggies)

veggies.splice(1,0,"bittegaurd")
console.log(veggies)

veggies.splice(1,0,"bottelgaurd")
console.log(veggies)

// slice -->creates a copy of array
// a portion of array
// array.slice(sart,end)

let nums=[10,20,30,40,50]

let result1 = nums.slice(0,3)
console.log(result1)

// copy entire array
// let nums = [10,20,30,40,50]

// let result1 = nums.slice()
// console.log(result1)

// Task: arr=[10,20,30,40,50,60]
// create a new array containing elements
// from index 2-4

// string::sequence of characters
// closed '',"",``
// let name = "bhvadeep";
// let name1 = "bhavadeep";
// let name2 = "bhavadeep";

// Indexing in strings:
let str = "hello"
        // 01234

console.log(str[0])
console.log(str[1])
console.log(str[2])

// string length
console.log(str.length)

// Immutable 
str[1] = "k"
console.log(str)

// Traverse over the string
for (i=0;i<str.length;i++){
    console.log(str[i])
}

// using for..of
for(let ch of str){
    console.log(ch)
}
//string methods
let firstname = "raju"
console.log(firstname.toUpperCase());
console.log(firstname.toLowerCase());

//removing the extra spaces
let hello = " Bye ";
console.log(hello.trim());

//include()
let course = "JavaScript";
console.log(course.includes("Script"))

//startwith
console.log(firstname.startsWith("r"))
//ends with
console.log(firstname.endsWith("u"))

//indexof:
console.log(firstname.indexOf("r"))

//lastindexof:
console.log(firstname.lastIndexOf("a"))

//replace:
let str1 = "I Love javascript"

console.log(str1.replace("javascript","python"));
// console.log(str1)

//replaceall:
let str2 = "cat dog cat"
console.log(str2.replaceAll("cat","lion"));

//slice:
console.log(course.slice(0,3));

//substring:
let str3 = "programming"
console.log(str3.substring(3,8));

//split:
let str4 = "HTML,CSS,JS,RECACT"
console.log(str4.split(","));

//charAt:
// console.log(str4,charAt(4));
