const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 4999
    },
    {
        itemName: "mobile dev course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 5999
    },
]

const pricetopay = shoppingCart.reduce((acc, item) => item.price, 0)

console.log(pricetopay)