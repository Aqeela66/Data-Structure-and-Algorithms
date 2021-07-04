let books = [

    {
        name: "The lean Startup",
        topics: ["entrepreneurship", "startups"],
    },
    {
        name: "war and peace",
        topics: ["peace", "startup"],
    },
    {
        name: "war and peace2",
        topics: ["peace", "politics"],
    }];

console.log(books);

// function unshift 
function insertAtStart(name) {
    books.length = books.length + 1;

    for (let i = books.length - 1; i > 0; i--) {
        books[i] = books[i - 1];
    }
    //console.log(books[i])
    books[0] = {
        name: "maths",
        topics: ["geometery", "trigonometery"]
    };
}
insertAtStart(books);
console.log(books);

// function for push
function insertAtEnd(name) {
    books.length = books.length + 1;
    books[books.length - 1] = {
        name: "maths",
        topics: ["geometery", "trigonometery"]
    };
}
insertAtEnd(books);
console.log(books);

//delete

function deleteAtEnd(name) {
    books.length = books.length - 1;
}
deleteAtEnd(books);
console.log(books);

//delete at start
function deleteAtStart(name) {
    for (let i = 0; i < books.length - 1; i++) {
        books[i] = books[i + 1];
        console.log(books[i])

    }
    books.length = books.length - 1;

}
deleteAtStart(books);
console.log(books);

//consider the same array of objects and find out the book(s)that is/are on the topic of entrepreneurship


for(let i=0; i<books.length;i++){
    console.log(books[i].name);
    for(j=0;j<books.length;j++){
        console.log((books[i].topics)[j]);
    }
}



let found = books.find(function(books) {
	if(books.topics == 'entrepreneurship')
		return true;
});

console.log(found);



