import React, { useState } from "react";
import ReactDOM from "react-dom";
import Searchbar from "./components/Searchbar";
import Navbar from "./components/Navbar"
import { getBooksByTerm } from "./API/GoogleBooks";
import BookList from "./components/BookList";


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(searchTerm)
    await getBooksByTerm(searchTerm, setBooks);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Navbar></Navbar>
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <BookList books={books} />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));