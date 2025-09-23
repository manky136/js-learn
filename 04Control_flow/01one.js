//if

const isUserLoggedIn = true
const temp = 49

if (temp < 50){
    // console.log("executed");

}

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard){
    // console.log("allow purchase");
}

const loggedInEmail = true
const loggedIngoogle = true
if (loggedInEmail || loggedIngoogle){
    // console.log("allow login");
}

const month = 2

switch (month){
    case 1:
        console.log("january");
        break;
    
    case 2:
        console.log("february");
    
    default:
            break
}