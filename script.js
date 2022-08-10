const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('Author');
const bookPages = document.getElementById('pages');
const readBook = document.getElementById('read');
const addBook = document.getElementById('submit'); 

let deleteCards = document.querySelectorAll(".Delete");
let toggle = document.querySelectorAll(".toggleRead");

const myLibrary = []

function Book(title,author,pages,read=false) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBook.addEventListener('click' , function () {
  if (readBook.checked === true) {
    const book = new Book(bookTitle.value,bookAuthor.value,bookPages.value,"Read");
    addBookToLibrary(book);
  }
  else
  {
    const book = new Book(bookTitle.value,bookAuthor.value,bookPages.value,"Un-Read");
    addBookToLibrary(book);
  }
  
  printBooks();

  deleteCards = document.querySelectorAll(".Delete");

  deleteCards.forEach(element => {
    element.addEventListener('click', function (e) {
      element.parentElement.remove();
    });

 });

  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = null;
  readBook.checked = false;
});

// const putBookTitle = document.querySelector(".bookTitle");
// const putBookAuthor = document.querySelector(".bookAuthor");
// const putBookPages = document.querySelector(".bookPages");
// const putBookRead = document.querySelector(".readBook");
const bookCards = document.querySelector(".bookCards");

let index = 0;
function printBooks() {
    const box = document.createElement('div');
    box.classList.add(`card${index}`);
  
    box.innerHTML = `<h3>${myLibrary[index].title}</h3>
                    <h3>${myLibrary[index].author}</h3>
                    <h3>${myLibrary[index].pages}</h3>
                    <div class="check">
                    <input type="checkbox" name="read" id="read">
                    <span><label for="read" class="rightRead"><h3>Read</h3></label></span>
                    </div>
                    <button class=Delete value=card${index} >Delete</button>`;
    
    bookCards.appendChild(box);

    index = index + 1;
}



