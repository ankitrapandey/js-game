// const student={
//     name:"ankit",
//     age:20,
//     cgpa:9.5,
//     ispass:true,
// }
// student.age=student.age+1;
// student.name="pandey"
// console.log(student);
// console.log(student.age);
// console.log(student["age"]);
// console.log(student["name"]);
// console.log(student.name);
// document.write(student.age)

// comparision operator 

// let a=5;
// let b="5";
// console.log("5==5",a==b);
// console.log("5===5",a===b);
// console.log("5!===5",a!=b);


// conditional operator

// let mode ='dark';
// let color;
// if(mode==="blue"){
//     color='black'
// }
// else{
//     color='light'
// }
// console.log(color);

// ternary operator 

// let age=16;
// let b=age>=18?"adult":"not adult";
// console.log(b)

// loops :- loops are used to execute a piece of code again and again

// for(let count=1;count<=5;count++){
//     console.log('ankit');
// }
// console.log('loop has ended');
// for of loop basically use for string and array..
// let str='ankit';
// let size=0;
// for(let i of str){// iterator character
//     console.log(i);
//     size++;
//     // console.log(str.length);
// }console.log("size",size);


// for in loop use for object and return keys and values ...

// let student={
//     name:'ankit',
//     age:20,
//     place:'rewa',
//     cgpa:9.5,
//     ispass:true
// };
// for(let key in student){
//     console.log(key,"==",student[key]);
// }


// practice question 

// let gmame=25;
// let userName=prompt("guess the number");
// while(userName!=gmame){
//    userName=prompt("plese enter the right number : fill again");
// }
// console.log('you enterd the right number');

// /n given string neext line  here example :---
// console.log('ankit\tpandey'); // \t given tab space
// console.log('ankit\npandey'); // \n jump to the next line
// let str='ankit\npandey'
// console.log(str.length); // escape charecter length count only one \n( 1 count lenght)

// string method 
// let ankit='ankit pandey'
// ankit.toUpperCase();
// let newValue=ankit.toUpperCase();
// console.log(ankit);
// // console.log(ankit.toUpperCase());
// console.log(newValue);


// let ankit='ankit';
// console.log(ankit.slice(0,4));

// let a=prompt("enter the fullName");
// if(a=="@ankitpandey"){
//     console.log('congracts user')
// 
// else{
//     console.log('use the right instruction');
// }


// let fullName=prompt("enter the fullName without space");
// let userName='@'+fullName+fullName.length;
// console.log(userName);
// console.log('hello i am ankit pandey');

// array 
// let array=[1,2,3,4,6];
// for(let i=0;i<array.length;i++){

//     console.log(array[i]+2)
// }

// function 

// const ankit=(x,y)=>{
//     s=x+y
// return s;
// }
// let result=ankit(3,5);
// console.log(result);

// splice(startindex,delete element,new element); 


// let arr=[1,2,3,4,5,6]
// console.log(arr);
// arr.splice(2,2,10,12);
// console.log(arr);
// add Element
// arr.splice(2,0,104)
// console.log(arr);

// delete Element 

// arr.splice(3,1);
// console.log(arr);

// replace element 

// arr.splice(2,1,20);
// console.log(arr);

// question 
// create an array to store companies-> bloomberg ,microsoft, google,Ibm ,uber
// 1. Remove the first company from the array.
// 2. Remove uber & add ola in its in place .
// 3. Add Amazon at the end .

// let companies=["Bloomberg","Microsoft","Google","uber","Ibm"];
// console.log(companies);
// 1 

// companies.shift();
// console.log(companies);

// 2 
// companies.splice(3,1,"ola")
// console.log(companies);

// 3
// companies.push("Amazone");
// console.log(companies);

// const multiply=(a,b)=>{
// return a*b
// }
// let result=multiply(3,5);
// console.log(result);

// question 

// function ankit(str){
//     let a=0
//    for(let char of str){
//     if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//         a++;
//     }
//    }
//    console.log(a)
// }

// ankit("ankit")


// function ankit() {
//     let name = "ankit";
//     for (let i = 0; i < name.length; i++) {
//         let char = name[i].toLowerCase(); // Convert character to lowercase for case insensitivity

//         // Check if the character is a vowel
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             console.log(char);
//         }
//     }
// }

// ankit(); // Call the function to execute

// callback function :- ** A callback function is a function passed as argument to  another function

// forEach method in function  forEach(print each value,index,array);

// passed three parameter (val,index,array);

// basically use for array we can't use srting 

// synatax for each **

// array.forEach((val)=>{
//     console.log(val)
// })

// let array=[1,2,3,4,5,6];

// array.forEach(function valur(val){ // value add each index

// console.log(val);
// })

// array.forEach((val,index,arr)=>{
//     console.log(val,index,arr);
// })
// array.forEach((val)=>{
// //   console.log(val**2);
// console.log(val*val);

// })

// let array=[1,2,3,4,5,6];
// const square=(val)=>{
//     console.log(val*val);
// }
// array.forEach(square);

// map array method

// difinition of Map

// **create a new array with the result of some operation .
//  The value its callback return are used to from new array **

// syntax :- 

// Array.map(callbackFun(value,index,array))

// let newArr=arr.map((val)=>{
//     return val*2
// })

// let arr=[1,2,3,4,5]
// let newArr=arr.map((val)=>{
//     console.log(val);
//     return val*val
// });
// console.log(newArr);

// filter method in Array
// difintion of filter

// creates a new array of elements that give true for a condition /filter 
// eg:even number

// let number=[1,23,7,4,5,9,16,1,8,17,18];
// let evenNum=number.filter((num)=>{
//     // return num%2==0
//     return num>3;

// });
// console.log(evenNum);


//** */ Reduce Method **
// **perform some operation & reduce the array to a single ValidityState.it returns a that single value.
// basically reduce method used for single value like sum, average,smallest value, largest value..*
// syntax ;- 

// const newEle=Array.reduce((result,currentval)=>{
//     return result+currentval
// })
// console.log(newEle);

// let arr=[1,4,2,6];
// const newVal=arr.reduce((result,currval)=>{
//     return result*currval
//     // return result*currval

// });

// console.log(newVal);

// let arr=[1,4,2,6];

// const newVal=arr.reduce((previousVal,currVal)=>{
//     return previousVal*currVal
//     // return previousVal*currVal

// });
// console.log(newVal);

// find largest number 

// let arr = [2,4,8,9,18,20,1,6,];
// const largeNum = arr.reduce((pre, curr) => {
//     // return pre > curr ? pre : curr;
//     return pre < curr ? pre : curr;

// });
// console.log(largeNum);

// let studentMark=[50,38,40,90,91,92,95,80];
// const newMark=studentMark.filter((num)=>{
//     return num>90;
// });
// console.log(newMark);


// practice Question 

// Take a number n as input  from user. Create an array of number from 1 to n .
// use the reduce method to calculate sum of all numbers in the array .
// use the reduce method to calculate product product of all numbers in the array.

// let num=prompt("enter a number");
// let arr=[];
// for(let i=1;i<=num;i++){
// arr[i-1]=i  //1(0),1 me 0 index 2(1),3(2) aaega ek kam chalega
// }
// console.log(arr);

// const sum=arr.reduce((pre,curr)=>{
// return pre+curr
// });
// console.log(sum);

// // factorial 

// const factorial = arr.reduce((pre, curr) => {
//     return pre * curr;
// });
// console.log(factorial);


