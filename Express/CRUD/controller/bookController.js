let books = [
  {
    id: 1,
    title: "sam1",
    author: "Author 1",
  },
  {
    id: 2,
    title: "sam2",
    author: "Author 2",
  },
  {
    id: 3,
    title: "sam3",
    author: "Author 3",
  },
];

// Read all books
const getBooks = (req, res) => {
  res.json(books);
};

// Create a new book
const createBooks = (req, res) => {
  const newBook = req.body;
  newBook.id = books.length + 1;
  books.push(newBook);
  res.status(201).json(newBook); // 201: Created
};

// Update a book
const updateBooks = (req, res) => {
  const id = parseInt(req.params.id);
  const updateBook = req.body;
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    books[index] = { ...books[index], ...updateBook }; // Keep the old and update with new data
    res.json(books[index]);
  } else {
    res
      .status(404)
      .json({ error: "The book with the given ID was not found." });
  }
};

const deleteBooks = (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((item) => item.id === id);

  if (index !== -1) {
    const deletedBook = books[index];
    books.slice(index, 1);
    res.json(deletedBook);
  } else {
    res.status(404).json({ error: "No Book Found" });
  }
};
// const PORT = process.env.PORT || 3000; // Use the environment port if set, otherwise use 3000
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

module.exports = {
  getBooks,
  createBooks,
  updateBooks,
  deleteBooks,
};
