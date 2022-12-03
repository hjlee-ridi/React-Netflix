import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { API_URL, API_KEY, IMAGE_BASE_URL, DRAMA } from "../components/config";
import Drama from "../components/Drama";
import "slick-carousel/slick/slick.css";
import "./Home.css";
import Loading from "../components/Loading";



function HomeDrama() {
    const [dramas, setDrama] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const cardsettings = {
        dots: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 8,
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                    infinite: true,
                    dots: false
                }
            }
        ]
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
        <div className="drama">
            {loading ? (
                <div>
                    <Loading />
                </div>) : (
                <div>
                    <div>
                        <div className="container">
                            <h3 className="Header">Drama</h3>
                            <button className="Morebtn" onClick={navigateDramaMore}>More</button>
                        </div>
                        <Slider {...cardsettings} className="slider">
                            {dramas && dramas.map((drama, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <Drama
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
