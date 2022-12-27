import React, { useState, useEffect} from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL, DRAMA } from "../components/config";
import Movie from "../components/Movie";
import "./More.css";


function DramaMore() {

    const [dramas, setDrama] = useState([]);
    const [loadMorePage, setLoadMorePage] = useState(0);

    useEffect(() => {
        const endpoint = `${API_URL}${DRAMA}&api_key=${API_KEY}&language=en-US`;
        fetchMovies(endpoint)
    }, [])

    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then((response) => response.json())
            .then(response => {
                setDrama([...dramas, ...response.results]);
                setLoadMorePage(response.page)
            });
    }

    const loadMore = () => {

        const endpoint = `${API_URL}${DRAMA}&api_key=${API_KEY}&language=en-US&page=${loadMorePage + 1}`;
        fetchMovies(endpoint)
    }
    return(
        <div className="drama">
         <div className="containers">
            <h1>Drama</h1>
                    {dramas && dramas.map((drama, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Movie
                                    image={
                                        drama.poster_path
                                            ? `${IMAGE_BASE_URL}w500/${drama.poster_path}`
                                            : null
                                    }
                                    key={drama.id}
                                    id={drama.id}
                                />
                            </React.Fragment>
                        );
                    })}
            </div>
            <div className="btn_container">
                <button className="Morebutton" onClick={loadMore}>More</button>
            </div>
    </div>
    )
}

export default DramaMore;