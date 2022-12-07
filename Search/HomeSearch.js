import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../components/config";
import Search from "../components/Search";
import Search_box from "./Search_box";



function HomeSearch(props) {
    // const [searchs, setSearch] = useState(props.age);
    // const navigate = useNavigate();


    // const add = (e) => {
    //     console.log(searchs);
    // }
        


    // const navigateSearch = () => {
    //     navigate("/DramaMore");
    // }

console.log(props.age);
    return (
        <div className="search">
           
            <h3 style={{color: "white"}}>{props.age}</h3>
            {/* {searchs && searchs.map((search, index) => {
                return (
                    <React.Fragment key={index}>
                        <Search
                            image={
                                search.poster_path
                                    ? `${IMAGE_BASE_URL}w500/${search.poster_path}`
                                    : null
                            }
                            key={search.id}
                            id={search.id}
                        />
                    </React.Fragment>
                );
            })} */}
        </div>
    );
}

export default HomeSearch;

