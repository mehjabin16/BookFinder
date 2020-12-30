import React from "react";

const Searchbar = (props) => {
  return (
    <div className="row">
       <div className="container" >
          <form action="" onSubmit={props.handleSubmit}>
          <section className="col s4 push-s3" style={{ paddingTop: '20px'}}>
              <input
                placeholder="Search for books"
                type="text"
                onChange={props.handleChange}
              />
             </section> 
              <div className="col s4 push-s2" style={{ paddingTop: '20px'}}>
              <button type='submit' className="btn btn-danger blue-grey">Search</button>
              </div>
              <div className="col s3" style={{ paddingTop: '20px'}}>
                <select color="black" className="browser-default dropdown select-css" defaultValue="Sort" onChange={props.handleSort}>
                                <option disabled value="Sort">Sort</option>
                                <option value="Newest">Newest</option>
                                <option value="Oldest">Oldest</option>
                                <option value="Ascending">A-Z</option>
                                <option value="Descending">Z-A</option>
                 </select>
             </div>
            </form> 
      </div>
   </div>
  );
};

export default Searchbar;