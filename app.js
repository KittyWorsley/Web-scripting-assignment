const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Non-Fiction",
      price: 20,
    },
    {
      title: "The Laws of Human Nature",
      author: "Robert Greene",
      genre: "Non-Fiction",
      price: 17.50,
    },
    {
      title: "The Hunger Games",
      author: "Jane Austen",
      genre: "Fiction",
      price: 5,
    },
    {
      title: "The Gruffalo",
      author: "Julia Donaldson",
      genre: "Fiction",
      price: 3,
    },
    {
      title: "Find Her Alive",
      author: "Lisa Regan",
      genre: "Mystery",
      price: 45,
    },
    {
      title: "The Pyramid Murders",
      author: "Fiona Veitch Smith",
      genre: "Mystery",
      price: 24,
    }
];

document.getElementById("preferenceForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const genre = document.getElementById("genre").value;
    const maxPrice = parseFloat(document.getElementById("maxPrice").value);
    const author = document.getElementById("author").value.toLowerCase();

   
    const filteredBooks = books.filter(book => {
        const matchesGenre = genre ? book.genre.toLowerCase() === genre.toLowerCase() : true;
        const matchesPrice = !isNaN(maxPrice) ? book.price <= maxPrice : true;
        const matchesAuthor = author ? book.author.toLowerCase().includes(author) : true;
        return matchesGenre && matchesPrice && matchesAuthor;
    });

    const bookListDiv = document.getElementById("bookList");
    bookListDiv.innerHTML = ''; 

    if (filteredBooks.length > 0) {
        filteredBooks.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book');
            bookElement.innerHTML = `
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Genre:</strong> ${book.genre}</p>
                <p><strong>Price:</strong> $${book.price.toFixed(2)}</p>
                <p><strong>Description:</strong> ${book.description}</p>
            `;
            bookListDiv.appendChild(bookElement);
        });
    } else {
       
        bookListDiv.innerHTML = '<p>No books match your description.</p>';
    }
});
