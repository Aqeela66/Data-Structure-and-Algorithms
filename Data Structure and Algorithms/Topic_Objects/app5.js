/*Again consider the above array of objects, and delete one of the objects that represent a book.
let books = [
    {
        name: "Chemistry",
        topics: ["Organic", "In_Organic"]
    }

    {
        name: "The Lean Startup",
        topics: ["entrepreneurship", "startups"],
    },
    {
        name: "War and Peace",
        topics: ["peace", "politics"],
    },
    {
        name: "maths",
        topics: ["geometry", "trigonometry"]
    }]; */

let books = [
    {
        name: "Chemistry",
        topics: ["Organic", "In_Organic"]
    },

    {
        name: "The Lean Startup",
        topics: ["entrepreneurship", "startups"],
    },
    {
        name: "War and Peace",
        topics: ["peace", "politics"],
    },
    {
        name: "maths",
        topics: ["geometry", "trigonometry"]
    }];
console.log(books);// print all books arrays

//delete from start
function deleteAtStart(name) {
    for (let i = 0; i < books.length - 1; i++) {
        books[i] = books[i + 1];
        console.log(books[i])

    }
    books.length = books.length - 1;

}
deleteAtStart(books);
console.log(books);


//delete from last/End

function deleteAtEnd(name) {
    books.length = books.length - 1;
}
deleteAtEnd(books);
console.log(books);

