//primtive 

//7 types : string, number, boolean, null, undefined, symbol, bigint

const score = 343
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const BigNumber = 88888888899980n


// Reference (Non primitve)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name : "hitesh ",
    age : "32"
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(myObj);

//+++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "httpschaudcsdot"
let anothername = myYoutubename
anothername = "chaiaircide"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "49394@jdk"
}

let userTwo = userOne

userTwo.email= "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);


//value stored in stack or primitve datatypes gives the copy of the data when recalled

// vale stored in non primtive datatype or heap gives reference and hence any change made in this changes the original data