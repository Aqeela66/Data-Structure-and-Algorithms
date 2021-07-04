/*Take the above array of objects and add a book of your choice to it with the same properties.
let books = [
{name: ‘The Lean Startup’,
topics: [‘entrepreneurship’,’startups’],
},{
name: ‘War and Peace’,
topics: [‘peace’, ‘politics’],
}]; */

let books = [
    {
        name: "The Lean Startup",
        topics: ["entrepreneurship", "startups"],
    },
    {
        name: "War and Peace",
        topics: ["peace", "politics"],
    }];
console.log(books);

// function instead of using unshift()
function insertAtStart(name) {
    books.length = books.length + 1;

    for (let i = books.length - 1; i > 0; i--) {
        books[i] = books[i - 1];
    }
    //console.log(books[i])
    books[0] = {
        name: "maths",
        topics: ["geometry", "trigonometry"]
    };
}
insertAtStart(books);
console.log(books);

// for delete the Added arrays

console.log(books.shift());
console.log(books);



// function instead of using push()
function insertAtEnd(name) {
    books.length = books.length + 1;
    books[books.length - 1] = {
        name: "maths",
        topics: ["geometry", "trigonometry"]
    };
}
insertAtEnd(books);
console.log(books);