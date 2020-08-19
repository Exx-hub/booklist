import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const { dispatch } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", title, author });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Enter book title"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        value={author}
        placeholder="Enter author name"
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="add book" />
    </form>
  );
}

export default BookForm;
