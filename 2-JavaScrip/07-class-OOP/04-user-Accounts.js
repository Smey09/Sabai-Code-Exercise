//! 4. User Accounts:
//     * Create a User class with attributes like name and borrowed_books.
//     * Implement methods for users to:
//         - Borrow books
//         - View their borrowed books

//     * Additional Considerations:

//         - What properties in above class should be prevented access or modified?
//         - What if there are multiple types of users like Admin, Student?
//         - What if we want to limit some rules when borrowing books?
//           For example: students are able to borrow up to 5 books while admin has no limit.

class User {
  constructor(name) {
    this.name = name;
    this.borrowedBooks = new Set(); // Set to store borrowed book IDs
  }

  // Borrow a book
  borrowBook(bookId) {
    if (this.borrowedBooks.size >= 5) {
      console.log("You've reached the borrowing limit.");
      return false;
    }
    this.borrowedBooks.add(bookId);
    console.log(`Book ${bookId} borrowed successfully.`);
    return true;
  }

  // View borrowed books
  viewBorrowedBooks() {
    console.log(
      `${this.name}'s borrowed books: ${[...this.borrowedBooks].join(", ")}`
    );
  }
}

// Example usage
const user1 = new User("Alice");
user1.borrowBook(1); // Book 1 borrowed successfully
user1.borrowBook(2); // Book 2 borrowed successfully
user1.viewBorrowedBooks(); // Alice's borrowed books: 1, 2

const user2 = new User("Bob");
user2.borrowBook(3); // Book 3 borrowed successfully
user2.borrowBook(4); // Book 4 borrowed successfully
user2.borrowBook(5); // Book 5 borrowed successfully
user2.borrowBook(6); // You've reached the borrowing limit.
user2.viewBorrowedBooks(); // Bob's borrowed books: 3, 4, 5
