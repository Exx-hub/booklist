import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

function Navbar() {
  const bookContext = useContext(BookContext);
  const { books } = bookContext;
  return (
    <div className="navbar">
      <h1>Ninja Reading List</h1>
      <p>Currently you have {books.length} on your list...</p>
    </div>
  );
}

export default Navbar;
