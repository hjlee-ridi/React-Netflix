import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../components/config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Loading from "../components/Loading";
import Movie from "../components/Movie";


function HomeUpcomingMovies() {
    const [UpcomingMovies, setUpcoming] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };


    useEffect(() => {
        const endpoint = `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`;
        fetchMovies(endpoint)
    }, [])

    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then((response) => response.json())
            .then(response => {
                setUpcoming([...UpcomingMovies, ...response.results]);

                setLoading(false);
            });
    }



    const navigateUpcomingMore = () => {
        navigate("/UpcomingMore");
    }


    return (
        <div className="Home">
            {loading ? (
                <div>
                    <Loading />
                </div>) : (
                <div className="container">
                    <div className="Header_container">
                        <h3 className="Header">Upcoming Movies</h3>
                        <button className="Morebtn" onClick={navigateUpcomingMore}>More</button>
                    </div>
                    <div className="Movies">
                        <Slider {...settings} className="slider">
                            {UpcomingMovies && UpcomingMovies.map((upcoming, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <Movie
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
                        </Slider>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomeUpcomingMovies;
