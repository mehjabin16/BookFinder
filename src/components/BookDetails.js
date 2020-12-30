import React from "react";
import {Link} from "react-router-dom";

const BookDetails = (props) => {
    return (<div>
        <div className="row">
            <div className="col s12">
                <div className="card" style={{width:"1000", height:"800"}} >
                    <img
                        src={props.location.image}
                        alt=""
                        style={{ width: "400", height: "800" }}
                    />
                    <div></div>
                    <span className="card-title" style={{ fontSize: '22px', fontWeight:"bold"}}>{props.location.title}</span>
                    <div></div>
                    <span className="card-title"style={{ fontSize: '18px'}}>Author: {props.location.author}</span>
                    <div></div>
                    <span className="card-title"style={{ fontSize: '18px', fontStyle:"italic"}}>Published: {props.location.published}</span>

                    <div className="card-content" >
                        <p>{props.location.description}</p>
                    </div>
                    <div className="card-action">
                        <Link to={{ pathname: "/", books: props.location.props }}>Go to search page!</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

};

export default BookDetails;