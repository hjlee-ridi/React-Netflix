import React, { useState, useEffect } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../components/config";
import Movie from "../components/Movie";




function HomeSearch() {
    const [searchs, setSearchs] = useState([]);
    const [movie_title, setMovie_title] = useState(" ");


    const onChange = (e) => {
        setMovie_title(e.target.value)
    }



    useEffect(() => {
        const endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&&query=${movie_title}`;
        fetchMovies(endpoint)
        console.log(endpoint);
        return () => console.log("bye");
    }, [movie_title])



    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then((response) => response.json())
            .then(response => {
                setSearchs([...searchs, ...response.results]);
            });
    }

    console.log(searchs);

    return (
        <div className="containers">
            <div>
                <input type="text" value={movie_title} onChange={onChange} minLength="1" placeholder='Title input' style={{ color: "white" }} />
                <input type="submit" value="확인"/>
            </div>
            {searchs && searchs.map((search, index) => {
                return (
                    <React.Fragment key={index}>        
                    {search.poster_path && (
                          <Movie
                             image={
                                 search.poster_path
                                     ? `${IMAGE_BASE_URL}w500/${search.poster_path}`
                                     : null
                             }
                             key={search.id}
                             id={search.id}
                         />
                    )
                           
                }
                   
            </React.Fragment>
                );
            })}
        </div>
    );
}

export default HomeSearch;

