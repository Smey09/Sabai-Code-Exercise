// !1. Class Design:
//     - Define the Library class with attributes like name and books.
//     - Create a separate Book class with attributes like title, author, genre,
//     and available (to track borrowing).

class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.available = true; // Initially, all books are available
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = []; // Initialize an empty array to store books
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBookByTitle(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }

  searchByTitle(title) {
    return this.books.filter((book) => book.title.includes(title));
  }

  displayAvailableBooks() {
    const availableBooks = this.books.filter((book) => book.available);
    availableBooks.forEach((book) => {
      console.log(`Title: ${book.title}, Author: ${book.author}`);
    });
  }
}

// Example usage:
const myLibrary = new Library("My Awesome Library");

const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", "Fiction");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Classic");

myLibrary.addBook(book1);
myLibrary.addBook(book2);

myLibrary.displayAvailableBooks();
