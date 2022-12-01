import React, { useState, useEffect} from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL, FANTASY } from "../components/config";
import Fantasy from "../components/Fantasy";
import "./More.css";


function FantasyMore() {

    const [Fantasys, setFantasy] = useState([]);
    const [loadMorePage, setLoadMorePage] = useState(0);

    useEffect(() => {
        const endpoint = `${API_URL}${FANTASY}&api_key=${API_KEY}&language=en-US`;
        fetchMovies(endpoint)
    }, [])

    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then((response) => response.json())
            .then(response => {
                setFantasy([...Fantasys, ...response.results]);
                setLoadMorePage(response.page)
            });
    }

    const loadMore = () => {

        const endpoint = `${API_URL}${FANTASY}&api_key=${API_KEY}&language=en-US&page=${loadMorePage + 1}`;
        fetchMovies(endpoint)
    }
    return(
        <div className="fantasy">
           <div className="containers">
            <h1>Fantasy</h1>
                    {Fantasys && Fantasys.map((fantasy, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Fantasy
                                    image={
                                        fantasy.poster_path
                                            ? `${IMAGE_BASE_URL}w500/${fantasy.poster_path}`
                                            : null
                                    }
                                    key={fantasy.id}
                                    id={fantasy.id}
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

export default FantasyMore;