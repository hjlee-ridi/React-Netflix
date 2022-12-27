import React from 'react'

function Search(props) {
  return (
    <div>
      <img src={props.image} alt={props.title} className='gridcard' />
    </div>
  )
}

export default Search;
