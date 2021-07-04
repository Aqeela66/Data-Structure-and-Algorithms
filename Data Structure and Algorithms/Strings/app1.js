// delete 

function deleteAtStart(name) {
    books.length = books.length + 1;

    for (let i = books.length - 1; i > 0; i--) {
        books[i] = books[i-1];
    }
    //console.log(books[i])
    books[0] = {
        name: "maths",
        topics: ["geometery", "trigonometery"]
    };
}
insertAtStart(books);
console.log(books);

function deleteAtEnd(name) {
    books.length = books.length - 1;
    books[books.length + 1]= {
        name: "maths",
        topics: ["geometery", "trigonometery"]
    };
}
insertAtEnd(books);
console.log(books);
