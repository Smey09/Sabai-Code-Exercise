//! 3. Borrowing and Returning:
//     * Add methods for:
//         - Borrowing a book (check for availability, mark as unavailable)
//         - Returning a book (mark as available)
class Book {
  constructor(title, author, genre, isbn, available = true) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.isbn = isbn;
    this.available = available;
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  // add book
  addBook(book) {
    const exitingBook = this.books.find((b) => b.isbn === book.isbn);
    if (exitingBook) {
      console.log(`Book with ISBN ${book.isbn} already exist in the library.`);
    } else {
      this.books.push(book);
      console.log(`Book "${book.title}" add to library.`);
    }
  }

  borrowBook(title) {
    const bookIndex = this.books.findIndex((book) => book.title === title);
    if (bookIndex !== -1) {
      if (this.books[bookIndex].available) {
        this.books[bookIndex].available = false;
        console.log(`Book : ${this.books[bookIndex].title} has been borrowed`);
      } else {
        console.log(`Book "${this.books[bookIndex].title}" is not available.`);
      }
    } else {
      console.log("not found in the library");
    }
    return bookIndex;
  }

  returnBook(title) {
    const bookIndex = this.books.findIndex((book) => book.title === title);
    if (bookIndex !== -1) {
      if (!this.books[bookIndex].available) {
        this.books[bookIndex].available = true;
        console.log(
          `Book "${this.books[bookIndex].title}" with ${title} has been returned.`
        );
      } else {
        console.log(
          `Book "${this.books[bookIndex].title}" with ${title} is already available.`
        );
      }
    } else {
      console.log(`Book with ${title} not found in the library.`);
    }
  }
}

// create new library
let myLIB = new Library("NU-LIB");
// create book
let book1 = new Book("Title01", "Author01", "Genre", "1234");
let book2 = new Book("Title02", "Author02", "Genre", "1235");
let book3 = new Book("Title03", "Author03", "Genre", "1236");
let book4 = new Book();
myLIB.addBook(book1);
myLIB.addBook(book2);
myLIB.addBook(book3);
// console.table(myLIB.books);

// ================================== ex3 ==================================
console.table(myLIB.books);
myLIB.borrowBook("Title03");
console.table(myLIB.books);

myLIB.returnBook("Title03");
console.table(myLIB.books);
