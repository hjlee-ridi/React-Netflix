import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../components/config";
import Search from "../components/Search";




function HomeSearch() {
    const [searchs, setSearchs] = useState([]);
    const navigate = useNavigate();
    const [movie_title, setSearch] = useState(" ");
    const onChange = (e) => {
        setSearch(e.target.value)
    };

    useEffect(() => {
        const endpoint = `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${movie_title}`;
        fetchMovies(endpoint)
        console.log(endpoint);
    }, [])

    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then((response) => response.json())
            .then(response => {
                setSearchs([...searchs, ...response.results]);
            });
    }




    console.log(movie_title);

    const navigateSearch = () => {
        navigate("/DramaMore");
    }
    // console.log(searchs);

    return (
        <div className="search">
            <div>
                <input type="text" value={movie_title} onChange={onChange} minLength="1" placeholder='Title input' style={{ color: "white" }} />
                <input type="submit" value="확인" onClick={navigateSearch}/>
            </div>
            {movie_title && searchs.map((search, index) => {
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
            })}
        </div>
    );
}

export default HomeSearch;

