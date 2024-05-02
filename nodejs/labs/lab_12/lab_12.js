class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isCheckOut = false;
    };

    borrowBook() {
        if (this.isCheckOut) {
            console.log("Book is already borrowed");
        } else {
            this.isCheckOut = true;
            console.log("Book is borrowed");
        }
    };

    returnBook() {
        if (this.isCheckOut) {
            this.isCheckOut = false;
            console.log("Book is returned");
        } else {
            console.log("Book is not borrowed");
        }
    };
};

class Library {
    constructor() {
        this.books = [];
    };

    addBook(book) {
        this.books.push(book);
        console.log(`${book.title} is added to the library`);
    };

    removeBook(book) {
        this.books = this.books.filter(b => b.title !== book.title);
        console.log(`${book.title} is removed from the library`);
    };

    searchByTitle(title) {
        return this.books.filter(book => book.title.includes(title));
    };

    searchByAuthor(author) {
        return this.books.filter(book => book.author.includes(author));
    };
};

const books = [
    new Book("Harry Potter", "J.K. Rowling"),
    new Book("The Hobbit", "J.R.R. Tolkien"),
    new Book("The Catcher in the Rye", "J.D. Salinger"),
    new Book("To Kill a Mockingbird", "Harper Lee"),
    new Book("1984", "George Orwell")
];



const library = new Library();

books.forEach(book => library.addBook(book));
console.log(JSON.stringify(library.books, null, 2));
console.log(library.searchByTitle("Harry"));
console.log(library.searchByAuthor("J.R.R."));

library.removeBook(books[0]);
console.log(JSON.stringify(library.books, null, 2));


module.exports = {
    Book,
    Library
};