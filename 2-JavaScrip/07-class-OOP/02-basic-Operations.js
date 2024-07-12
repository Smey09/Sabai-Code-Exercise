//! 2. Basic Operations:
//     * Implement methods for:
//         - Adding a book to the library
//         - Removing a book (by title or ISBN)
//         - Searching for books by title, author, or genre
//         - Displaying a list of all available books

class Library {
  constructor() {
    this.books = [];
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

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.available = true;
  }
}

// Example usage:
const myLibrary = new Library();

const book1 = new Book(
  "The Catcher in the Rye",
  "J.D. Salinger",
  "9780316769488"
);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "9780061120084");

myLibrary.addBook(book1);
myLibrary.addBook(book2);

myLibrary.displayAvailableBooks();
