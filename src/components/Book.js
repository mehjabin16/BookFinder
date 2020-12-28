import react from "react";
import { Link } from "react-router-dom";

const Book = (props) => {
  const ImageURL =  props.data.volumeInfo.imageLinks.thumbnail;
  return (
    <div class="col s12 m4">
      <div class="card">
        <div class="card-image">
         
            <img
              src={ImageURL}
              alt=""
              style={{ width: "100", height: "200" }}
            />
          
        </div>
        
        <div class="card-action">
          
        </div>
      </div>
    </div>
  );
};

export default Book;