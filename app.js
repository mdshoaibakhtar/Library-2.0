console.log("Welcome to the world of library");

// Let's Begin the Code
class Book 
{
    constructor(name, author, type) 
    {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display 
{
    // add method will be created from here
    add(book) 
    {
        console.log("Adding book in the UI");
        //Takign the tablebody 
        let tableBody = document.getElementById('tableBody');
        let uiString = `
                    <tr>
                       <td>${book.name}</td>
                       <td>${book.author}</td>
                       <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
    }
    clear() 
    {
        console.log("Clearing the screen");
        let form = document.getElementById('libraryForm');
        form.reset();
    }
}



let form = document.getElementById('libraryForm');
let submitBtn = document.getElementById('submit');
form.addEventListener('submit', submissionOfForm);
function submissionOfForm(e) {
    console.log("Submision successfully");
    e.preventDefault();
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('bookAuthor').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    // put the bookname, bookauthor & type in the storage through here
    let book = new Book(name, author, type);
    console.log(book);

    //its time to display 
    let display = new Display();
    display.add(book);
    console.log("Submission successfuly");
    display.clear();

}


