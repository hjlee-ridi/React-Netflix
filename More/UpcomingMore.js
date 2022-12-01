import React, { useState, useEffect} from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL} from "../components/config";
import Upcoming from "../components/Upcoming";
import "./More.css";


function UpcomingMore() {

    const [UpcomingMovies, setUpcoming] = useState([]);
    const [loadMorePage, setLoadMorePage] = useState(0);

    useEffect(() => {
        const endpoint = `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`;
        fetchMovies(endpoint)
    }, [])

    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then((response) => response.json())
            .then(response => {
                setUpcoming([...UpcomingMovies, ...response.results]);
                setLoadMorePage(response.page)
            });
    }

    const loadMore = () => {

        const endpoint = `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${loadMorePage + 1}`;
        fetchMovies(endpoint)
    }
    return(
        <div className="action">
            <div className="containers">
            <h1>Upcoming Movies</h1>
                    {UpcomingMovies && UpcomingMovies.map((upcoming, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Upcoming
                                    image={
                                        upcoming.poster_path
                                            ? `${IMAGE_BASE_URL}w500/${upcoming.poster_path}`
                                            : null
                                    }
                                    key={upcoming.id}
                                    id={upcoming.id}
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

export default UpcomingMore;