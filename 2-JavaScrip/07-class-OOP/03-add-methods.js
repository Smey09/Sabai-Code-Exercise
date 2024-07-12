//! 3. Borrowing and Returning:
//     * Add methods for:
//         - Borrowing a book (check for availability, mark as unavailable)
//         - Returning a book (mark as available)

class Library {
  constructor() {
    this.books = new Map(); // Map to store book availability
  }

  // Borrow a book
  borrowBook(bookId) {
    if (this.books.has(bookId)) {
      if (this.books.get(bookId)) {
        this.books.set(bookId, false); // Mark as unavailable
        return true; // Successfully borrowed
      } else {
        return false; // Book already borrowed
      }
    } else {
      return false; // Book not found
    }
  }

  // Return a book
  returnBook(bookId) {
    if (this.books.has(bookId)) {
      this.books.set(bookId, true); // Mark as available
      return true; // Successfully returned
    } else {
      return false; // Book not found
    }
  }
}

// Example usage
const library = new Library();
library.books.set(1, true); // Book 1 is available
library.books.set(2, false); // Book 2 is borrowed

console.log(library.borrowBook(1)); // true (successfully borrowed)
console.log(library.borrowBook(2)); // false (already borrowed)
console.log(library.returnBook(2)); // true (successfully returned)
