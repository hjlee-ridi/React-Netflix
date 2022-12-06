import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../components/config";
import Search from "../components/Search";



function HomeSearch(props) {
    const [searchs, setSearch] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const endpoint = `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1`;
        fetchMovies(endpoint)
    }, [])

    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then((response) => response.json())
            .then(response => {
                setSearch([...searchs, ...response.results]);
            });
    }


    const navigateSearch = () => {
        navigate("/DramaMore");
    }
console.log(searchs);

    return (
        <div className="search">
            {searchs && searchs.map((search, index) => {
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

