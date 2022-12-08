import React, { useState, Component } from 'react'


function Search_box() {

    const [Search, setSearch] = useState(" ");
    const onChange = (e) => {
        setSearch(e.target.value)
    };


    console.log(Search);

  return (
    <div>
      <form action="./HomeSearch" method="post"
      >
      <input type="text" value={Search} onChange={onChange} minLength="1" placeholder='Title input' style={{color: "white"}} />
      <input type="submit" value="확인" />
      </form>
    </div>
  )
}

export default Search_box;
