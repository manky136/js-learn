 let a = 10
 const b = 20
 var c = 30

 if (true) {
    let a = 20
    const b = 30
    console.log("INNER: ", a);
 }

 for(let i= 0; i< Array.length; i++){
   const element = Array[1];
 }

 console.log(a);
//  console.log(b);
//  console.log(c);

function one(){
   const username = "hitesh"
   
   function two(){
      const website = "youtube"
      console.log(username);
   }
   //console.log(website);
   two()

}

one()

if (true) {
   const username = "hitesh"
   if (username === "hitesh"){
      const website = " youtube"
      console.log(username + website);
   }
   //console.log(website);
}

//console.log(username);

// *******************interesting****************

console.log(addone(5))
function addone(num){
   return num + 1
}


console.log(addTwo(5))
const addTwo = function(num){
   return num + 2
}

