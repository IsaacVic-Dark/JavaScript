
// using the data structure below , print a message  my total bill for items above 450 is 1700

// const availableFoods = [
//     {id: "qwe234dfh", name: "Burger", image:"🍔🍔", price: 234},
//     {id: "qwe2356dxh", name: "pizza", image:"🍕🍕", price: 400},
//     {id: "qwe2456yh", name: "meat", image:"🍖🍖", price: 500},
//     {id: "qwe2785yh", name: "chicken", image:"🍗🍗", price: 1200},
// ]

// Am goin maps to take the price value
// Am goin to use filters to check for items above 450
// Calc total bill

const availableFoods = [
    {id: "qwe234dfh", name: "Burger", image:"🍔🍔", price: 234},
    {id: "qwe2356dxh", name: "pizza", image:"🍕🍕", price: 400},
    {id: "qwe2456yh", name: "meat", image:"🍖🍖", price: 500},
    {id: "qwe2785yh", name: "chicken", image:"🍗🍗", price: 1200},
]

let expFoods = availableFoods.filter(function(total){
    return total.price > 450
})
// console.log(expFoods);

let showExpFoods = expFoods.map(function(theirPrice){
    return theirPrice.price 
})
// console.log(showExpFoods);

let totalExpFoods = showExpFoods.reduce((prev, next) => {
    return prev + next
})

console.log(`my total bill for items above 450 is ${totalExpFoods}`);
