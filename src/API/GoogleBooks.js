import axios from "axios";

const apikey = "AIzaSyAgiPVsEvVEe8F-T6kYvg8zpNeXT6L9Tvg"


const getBooksByTerm = (SearchTerm, setBooks) => {
  axios.get("https://www.googleapis.com/books/v1/volumes?q="+SearchTerm+"&key="+apikey)
  .then((response) => {
    console.log(response.data);
    setBooks(response.data.items); 
  });
};

export { getBooksByTerm };