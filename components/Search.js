import React from 'react';
import { Link } from "react-router-dom";
import "./Search.css";

function Search(props) {
  return (
      <Link to={`/Netflix/${props.id}`} className='Search_gridcardLink'>
        <img src={props.image} alt={props.title} className='Search_gridcard' />
      </Link>

  )
}

export default Search;
