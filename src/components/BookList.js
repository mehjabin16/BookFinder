import React from "react";
import Book from "./Book";

const BookList = (props) => {
  console.log(props.books);
  return (
    <div className="container">
      <div className="row">
        {props.books.map((book, i) => {
            return <Book 
            data={book} 
            key={i}
            image = {book.volumeInfo.imageLinks.thumbnail}
            title = {book.volumeInfo.title}
            author = {book.volumeInfo.authors}
            published = {book.volumeInfo.publishedDate}
            description = {book.volumeInfo.description}
            props = {props} />;
          })}
       
      </div>
    </div>
  );
};

export default BookList;