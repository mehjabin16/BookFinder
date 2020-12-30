import React, { useState } from "react";
import ReactDOM from "react-dom";
import Searchbar from "./components/Searchbar";
import Navbar from "./components/Navbar"
import Pagination from './components/Pagination'
import { getBooksByTerm } from "./API/GoogleBooks";
import BookList from "./components/BookList";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sort, setSort] = useState('');
  let sortedBooks = [];

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(searchTerm)
    await getBooksByTerm(searchTerm, setBooks, 0, setTotalPages);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSort = (event) => {
    setSort(event.target.value);
    if(event.target.value === "Newest")
    {
       sortedBooks = books.sort((a,b)=>{
        return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
        
        })
    }
    else if(event.target.value === "Oldest")
    {
        sortedBooks = books.sort((a,b)=>{
        return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))

        })

    }
    else if(event.target.value === "Ascending")
    {
      sortedBooks = books.sort((a,b) =>{
        return  a.volumeInfo.title.localeCompare(b.volumeInfo.title);
      })

    }
    else if(event.target.value === "Descending")
    {
      sortedBooks = books.sort((a,b) =>{
        return  a.volumeInfo.title.localeCompare(b.volumeInfo.title);
      })
      sortedBooks = sortedBooks.reverse();
    }
    setBooks(sortedBooks);
  };
  
  const nextPage = async (page_number) => {
    setCurrentPage(page_number);
    await getBooksByTerm(searchTerm, setBooks, ((page_number - 1) * 10), setTotalPages);
  };


  return (
    <div>
      
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} handleSort={handleSort} />
      <BookList books={books} />
      {totalPages > 1 ? (
        <Pagination
          nextPage={nextPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;