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
      li.innerHTML = `<div class="bookshow">${book.title} by ${book.author} <button class="btn btn-outline-dark" onclick="bookManager.removeBook(${index})">Delete</button></div>`;
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

const linkNav = document.getElementById('list-nav');
const addBookListNav = document.getElementById('add-book-list-nav');
const contactNav = document.getElementById('contact-nav');

linkNav.addEventListener('click', (e) => {
  e.preventDefault();
  hideSection();
  link.style.display = 'flex';
});

addBookListNav.addEventListener('click', (e) => {
  e.preventDefault();
  hideSection();
  addBookList.style.display = 'flex';
});

contactNav.addEventListener('click', (e) => {
  e.preventDefault();
  hideSection();
  contact.style.display = 'flex';
  contact.style.display = 'flex-direction = column';
});

const link = document.getElementById('list');
const addBookList = document.getElementById('add-book-list');
const contact = document.getElementById('contact');

const hideSection = () => {
  link.style.display = 'none';
  addBookList.style.display = 'none';
  contact.style.display = 'none';
}


