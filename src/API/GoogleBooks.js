import axios from "axios";

const apikey = "AIzaSyAgiPVsEvVEe8F-T6kYvg8zpNeXT6L9Tvg"

const GoogleBooksAPI = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
});

const getBooksByTerm = (SearchTerm, setBooks, startIndex, setTotalPages) => {

  console.log("Start Index "+ startIndex);
  GoogleBooksAPI.get('', {
      params: {
          q: SearchTerm,
          key: apikey,
          startIndex: startIndex,
      },
  }).then((response) => {
      console.log(response.data);
      setBooks(response.data.items);
      setTotalPages(Math.ceil(response.data.totalItems/20));
  })
}

const getBookDetails = (bookID, setCurrentBook) => {
  console.log("API " +bookID);
  GoogleBooksAPI.get(''+bookID)
      .then((response) => {
          console.log("book ", response.data);
          setCurrentBook(response.data);
      });
}

export { getBooksByTerm, getBookDetails };