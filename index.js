const array = [];
const btn = document.getElementById('addBtn');
const section = document.getElementById('book-list')
const close =document.getElementById('close');


const addBook = (event) =>{
    event.preventDefault();
    let book = {
        title: document.getElementById('title').value,
        Author: document.getElementById('author').value
    };
    array.push(book);
    localStorage.setItem('Booklist', JSON.stringify(array));
    document.forms[0].reset();
    section.innerHTML = '';
    for(let i=0; i<=array.length; i+=1){
        book = document.createElement('div');
        book.className = 'bookList';
        book.innerHTML = `
        <h3>${array[i].title}</h3>
        <h3>${array[i].Author}</h3>
        <button type="button" onclick="removeBook(${array[i].id})">Remove</button>
        <hr>
        `;
        section.appendChild(book);
    }
};

btn.addEventListener('click', addBook);

function displayData() {
    let data = localStorage.getItem('Booklistt');
    console.log(data);
}
