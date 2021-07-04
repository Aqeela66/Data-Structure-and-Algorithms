/*Suppose you have an array of objects:
let books = [
{name: ‘The Lean Startup’,
topics: [‘entrepreneurship’,’startups’],
},{
name: ‘War and Peace’,
topics: [‘peace’, ‘politics’],
}];
Now you need to print the name and topics separately, how would you do that? */

let books = [
    {
        name: "The Lean Startup",
        topics: ["entrepreneurship", "startups"],
    }, {
        name: "War and Peace",
        topics: ["peace", "politics"],
    }];
console.log(books);
console.log(books[0]);
console.log(books[1]);

//print seperately
for (let i = 0; i < books.length; i++) {
    console.log(books[i].name);
    for (j = 0; j < books.length; j++) {
        console.log((books[i].topics)[j]);
    }
}