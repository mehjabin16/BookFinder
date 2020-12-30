import react from "react";
import { Link } from "react-router-dom";

const Book = (props) => {
  const ImageURL =  props.image;
  return (
    <div class="col s10 m4 l3">
      <div class="card" style={{ width: "100", height: "200" }} >
        <div class="card-image">
        {props.image == null ? (
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{ width: "100", height: "200" }}
            />
          ) : (
            <img
              src={ImageURL}
              alt=""
              style={{ width: "100", height: "200" }}
            /> 
          )}
        </div>
        <div class="card-content" style={{ fontSize: '22px', fontWeight:"bold"}}>{props.data.volumeInfo.title}</div>
        <div class="card-content" style={{ fontSize: '18px'}}>Author: {props.data.volumeInfo.authors}</div>
        <div class="card-content" style={{ fontSize: '18px', fontStyle:"italic"}}>Published: {props.data.volumeInfo.publishedDate}</div>
        <div class="card-action">
        <Link
            to={{
              pathname: "/book/" + props.data.accessInfo.id,
              book_id: props.data.accessInfo.id,
              title: props.title,
              author: props.author,
              published: props.published,
              image: props.image,
              description: props.description,
              props: props.props
            }}
          >
            See Details
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Book;