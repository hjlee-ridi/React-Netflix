import React from 'react'

function Search(props) {
  return (
    <div>
    <div className='components_movieImg'>
            <img src={props.image} alt={props.title} className='gridcard' />
    </div>
</div>
  )
}

export default Search;
