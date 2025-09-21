// const user = {
//     username: "hitesh",
//     price: 99,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this)
//     }
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "htesh" 
//     console.log(this.username);
// }

// chai()

// const chai = function (){
//     let username = "hiietsh"
//     console.log(this.username);
// }
// chai()
// const chai = () => {
//     let username = "hitesh"
//     console.log(this);
// }

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(4, 5))

//const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(8, 9))

//const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()