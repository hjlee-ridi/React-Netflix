import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { API_URL, API_KEY, IMAGE_BASE_URL, DRAMA } from "../components/config";
import Movie from "../components/Movie";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Loading from "../components/Loading";



function HomeDrama() {
    const [dramas, setDrama] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };




    useEffect(() => {
        const endpoint = `${API_URL}${DRAMA}&api_key=${API_KEY}&language=en-US`;
        fetchMovies(endpoint)
    }, [])

    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then((response) => response.json())
            .then(response => {
                setDrama([...dramas, ...response.results]);
                setLoading(false);
            });
    }


    const navigateDramaMore = () => {
        navigate("/DramaMore");
    }


    return (
        <div className="Home">
            {loading ? (
                <div>
                    <Loading />
                </div>) : (
                <div className="container">
                    <div className="Header_container">
                        <h3 className="Header">Drama</h3>
                        <button className="Morebtn" onClick={navigateDramaMore}>More</button>
                    </div>
                    <div className="Movies">
                        <Slider {...settings} className="slider">
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
                        </Slider>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomeDrama;
