// 10.
// Write a JavaScript program to sort an array of JavaScript objects.
// Sample Object :
// var library = [ 
//     {
//         title:  'The Road Ahead',
//         author: 'Bill Gates',
//         libraryID: 1254
//     },
//     {
//         title: 'Walter Isaacson',
//         author: 'Steve Jobs',
//         libraryID: 4264
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         libraryID: 3245
//     }];
//     Expected Output:
//     [[object Object] {
//         author: "Walter Isaacson",
//         libraryID: 4264,
//         title: "Steve Jobs"
//       }, [object Object] {
//         author: "Suzanne Collins",
//         libraryID: 3245,
//         title: "Mockingjay: The Final Book of The Hunger Games"
//       }, [object Object] {
//         author: "The Road Ahead",
//         libraryID: 1254,
//         title: "Bill Gates"
//       }]

var library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];

// let sortLib = Object.keys(library).sort();

// let sortedLib = {};

// for (let key of sortLib){
//     sortedLib[key] = library[key];
// }

// console.log(sortedLib)

library.forEach(function(obj) {
    var sortedKeys = Object.keys(obj).sort();
    var sortedObj = {};
    sortedKeys.forEach(function(key) {
        sortedObj[key] = obj[key];
    });
    console.log(sortedObj);
});

