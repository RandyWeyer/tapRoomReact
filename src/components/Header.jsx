import React from 'react';
import ReactDOM from 'react-dom';

function Header(){


  return(
    <div className="navbar navbar-expand-lg navbar-light bg-light">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
        <a className="nav-link" href="#">Home</a>
</li>
<li className="nav-item">
        <a className="nav-link" href="#">Beers</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Messages</a>
        </li>
</ul>
<form className="form-inline my-2 my-lg-0">
<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</form>
    </div>
  )
}

export default Header;
