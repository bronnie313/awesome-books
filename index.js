class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookManager {
  constructor() {
    this.books = this.getBooksFromLocalStorage();
  }
 
  addBook(book) {
    this.books.push(book);
    this.saveBooksToLocalStorage();
  }
 
  removeBook(index) {
    this.books.splice(index, 1);
    this.saveBooksToLocalStorage();
  }
 
  getBooksFromLocalStorage() {
    const booksString = localStorage.getItem('books');
    return booksString ? JSON.parse(booksString) : [];
  }
 
  saveBooksToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }
 
  displayBooks() {
    const booksList = document.getElementById('booksList');
    booksList.innerHTML = '';
   
    this.books.forEach((book, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<div class="bookshow">${book.title} by ${book.author} <button onclick="bookManager.removeBook(${index})">Delete</button></div>`;
      booksList.appendChild(li);
    });
  }
}

const bookForm = document.getElementById('bookForm');
const bookManager = new BookManager();

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();
 
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
 
  const book = new Book(title, author);
  bookManager.addBook(book);
 
  // Clear form fields
  bookForm.reset();
});

bookManager.displayBooks();
