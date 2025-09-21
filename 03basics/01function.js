
function saymyname(){
    console.log("narendra");
    console.log("modi");
}

//saymyname()

// function addtwonumbers(num1, num2){
//     console.log(num1+num2);
// }

function addtwonumbers(num1, num2){
    //let result = num1 + num2
    //return result
    return num1 + num2
}
const result = addtwonumbers(3, 5)

//console.log("results: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username")
        return
    }
    return`${username} just logged in`
}

//console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage("hitesh"))

function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "hitesh",
    price: 294
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));