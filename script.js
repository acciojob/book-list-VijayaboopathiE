//your JS code here. If required.
const bookForm = document.getElementById("book-form");

const bookList = document.getElementById("book-list");

bookForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    if (title === "" || author === "" || isbn === "") {
        alert("Please fill in all fields");
        return;
    }

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td>
            <button class="delete">X</button>
        </td>
    `;

    bookList.appendChild(row);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
});


// Delete book
bookList.addEventListener("click", function(event) {

    if (event.target.classList.contains("delete")) {

        event.target.parentElement.parentElement.remove();

    }

});