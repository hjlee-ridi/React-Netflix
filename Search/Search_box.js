import React, { useState } from 'react'


function Search_box() {

    const [Search, setSearch] = useState(" ");
    const onChange = (e) => {
        setSearch(e.target.value)
    };


    console.log(Search);

  return (
    <div>
      <input type="text" value={Search} onChange={onChange} minLength="1" style={{color: "white"}} />
      <input type="submit" value="확인" />
    </div>
  )
}

export default Search_box;
