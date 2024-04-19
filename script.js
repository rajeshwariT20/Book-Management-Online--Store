//Book Inventory Script
document.addEventListener('DOMContentLoaded', function () {

    const bookArray=[];
    function addBook(title, author, price, quantity) {
        const book = {
            title: title,
            author: author,
            price: price,
            quantity: quantity
        };
        bookArray.push(book);
        displayBooks();
        updateTitleOptions();
    }

    const addBooks = document.getElementById('addBooks');
    const updateNewBooks = document.getElementById('updateBooks');


    addBooks.addEventListener('submit', function (event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const price = parseFloat(document.getElementById("price").value);
        const quantity = parseInt(document.getElementById("quantity").value);

        addBook(title, author, price, quantity);
        addBooks.reset();
    });

    updateNewBooks.addEventListener("submit", function(event) {
        event.preventDefault();
        const newtitle = document.getElementById("updateTitle").value;
        const newPrices = parseFloat(document.getElementById("newPrice").value);
        const newQuanties = parseInt(document.getElementById("newQuantity").value);

        updateBooks(newtitle, newPrices, newQuanties);
        updateNewBooks.reset()

    });

    function updateBooks(title, newPrices, newQuanties) {
        const bookIndex = bookArray.find(book => book.title === title);
        if (bookIndex) {
            bookIndex.price = newPrices;
            bookIndex.quantity = newQuanties;
        } 
        displayBooks();
    }

    function displayBooks() {
        const booksEntrytable = document.getElementById('booksEntrytable');
        booksEntrytable.innerHTML = "";
        bookArray.forEach(book => {
            const row = booksEntrytable.insertRow();
            row.innerHTML =`
                            <tr>
                                <td>${book.title}</td>
                                <td>${book.author}</td>
                                <td>$${book.price}</td>
                                <td>${book.quantity}</td>
                            </tr>
                         `;

        });
    }

    const updateNewTitle = document.getElementById('updateTitle')
    function updateTitleOptions() {
        updateNewTitle.innerHTML = '<option value="" disabled selected>Select Title</option>';
        bookArray.forEach(function (book) {
            const option = `<option value="${book.title}">${book.title}</option>`;
            updateNewTitle.innerHTML += option;
        });
    }

    displayBooks();
    updateTitleOptions();

});