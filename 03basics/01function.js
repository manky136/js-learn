
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
console.log(loginUserMessage())