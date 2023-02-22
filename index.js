const array = [];
const btn = document.getElementById('addBtn');
const section = document.getElementById('book-list');
const close = document.getElementById('close');

const addBook = (event) => {
  event.preventDefault();
  let book = {
    Title: document.getElementById('title').value,
    Author: document.getElementById('author').value,
  };
  array.push(book);
  localStorage.setItem('Booklist', JSON.stringify(array));
  document.forms[0].reset();
  displayData();
};

btn.addEventListener('click', addBook);

function displayData() {
  let data = localStorage.getItem('Booklist');
  let books = JSON.parse(data);
  section.innerHTML = '';
  if (books) {
    books.forEach((book) => {
      bookList = document.createElement('div');
      bookList.className = 'bookList';
      bookList.innerHTML = `
        <h3>${book.Author}</h3>
        <h3>${book.Title}</h3>
        <button type="button" onclick="removeBook(${book.Title})">Remove</button>
        <hr>
        `;
      section.appendChild(bookList);
    });
  }
}

displayData();
