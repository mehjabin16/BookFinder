import React from 'react';

const Navbar =()=>{
    return(
      <div>
     <nav>
     <div className="nav-wrapper">
      <a href="#" className="brand-logo" style={{marginLeft:20}}
       >Books DB</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Popular Books</a></li>
        <li><a href="badges.html">Review </a></li>
        <li><a href="collapsible.html">Profile</a></li>
      </ul>
    </div>
   </nav>
    </div>

    );
}
export default Navbar;